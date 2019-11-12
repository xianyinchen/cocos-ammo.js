/*
Bullet Continuous Collision Detection and Physics Library
Copyright (c) 2003-2006 Erwin Coumans  http://continuousphysics.com/Bullet/

This software is provided 'as-is', without any express or implied warranty.
In no event will the authors be held liable for any damages arising from the use of this software.
Permission is granted to anyone to use this software for any purpose, 
including commercial applications, and to alter it and redistribute it freely, 
subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.
*/


#include "btManifoldResult.h"
#include "BulletCollision/NarrowPhaseCollision/btPersistentManifold.h"
#include "BulletCollision/CollisionDispatch/btCollisionObject.h"
#include "BulletCollision/CollisionDispatch/btCollisionObjectWrapper.h"
#include "BulletCollision/CollisionShapes/btCollisionShape.h"
#include "BulletCollision/CollisionShapes/btCompoundShape.h"

///This is to allow MaterialCombiner/Custom Friction/Restitution values
ContactAddedCallback		gContactAddedCallback=0;



///User can override this material combiner by implementing gContactAddedCallback and setting body0->m_collisionFlags |= btCollisionObject::customMaterialCallback;
inline btScalar	calculateCombinedRollingFriction(const btCollisionObject* body0,const btCollisionObject* body1)
{
	btScalar friction = body0->getRollingFriction() * body1->getRollingFriction();

	const btScalar MAX_FRICTION  = btScalar(10.);
	if (friction < -MAX_FRICTION)
		friction = -MAX_FRICTION;
	if (friction > MAX_FRICTION)
		friction = MAX_FRICTION;
	return friction;

}


///User can override this material combiner by implementing gContactAddedCallback and setting body0->m_collisionFlags |= btCollisionObject::customMaterialCallback;
btScalar	btManifoldResult::calculateCombinedFriction(const btCollisionObject* body0,const btCollisionObject* body1)
{
	btScalar friction = body0->getFriction() * body1->getFriction();

	const btScalar MAX_FRICTION  = btScalar(10.);
	if (friction < -MAX_FRICTION)
		friction = -MAX_FRICTION;
	if (friction > MAX_FRICTION)
		friction = MAX_FRICTION;
	return friction;

}

btScalar	btManifoldResult::calculateCombinedRestitution(const btCollisionObject* body0,const btCollisionObject* body1)
{
	return body0->getRestitution() * body1->getRestitution();
}



btManifoldResult::btManifoldResult(const btCollisionObjectWrapper* body0Wrap,const btCollisionObjectWrapper* body1Wrap)
		:m_manifoldPtr(0),
		m_body0Wrap(body0Wrap),
		m_body1Wrap(body1Wrap)
#ifdef DEBUG_PART_INDEX
		,m_partId0(-1),
	m_partId1(-1),
	m_index0(-1),
	m_index1(-1)
#endif //DEBUG_PART_INDEX
{
}


void btManifoldResult::addContactPoint(const btVector3& normalOnBInWorld,const btVector3& pointInWorld,btScalar depth)
{
	btAssert(m_manifoldPtr);
	//order in manifold needs to match

	if (depth > m_manifoldPtr->getContactBreakingThreshold())
//	if (depth > m_manifoldPtr->getContactProcessingThreshold())
		return;

	bool isSwapped = m_manifoldPtr->getBody0() != m_body0Wrap->getCollisionObject();

	btVector3 pointA = pointInWorld + normalOnBInWorld * depth;

	btVector3 localA;
	btVector3 localB;
	
	if (isSwapped)
	{
		localA = m_body1Wrap->getCollisionObject()->getWorldTransform().invXform(pointA );
		localB = m_body0Wrap->getCollisionObject()->getWorldTransform().invXform(pointInWorld);
	} else
	{
		localA = m_body0Wrap->getCollisionObject()->getWorldTransform().invXform(pointA );
		localB = m_body1Wrap->getCollisionObject()->getWorldTransform().invXform(pointInWorld);
	}

	btManifoldPoint newPt(localA,localB,normalOnBInWorld,depth);
	newPt.m_positionWorldOnA = pointA;
	newPt.m_positionWorldOnB = pointInWorld;
	
	int insertIndex = m_manifoldPtr->getCacheEntry(newPt);

	// newPt.m_combinedFriction = calculateCombinedFriction(m_body0Wrap->getCollisionObject(),m_body1Wrap->getCollisionObject());
	// newPt.m_combinedRestitution = calculateCombinedRestitution(m_body0Wrap->getCollisionObject(),m_body1Wrap->getCollisionObject());
	// newPt.m_combinedRollingFriction = calculateCombinedRollingFriction(m_body0Wrap->getCollisionObject(),m_body1Wrap->getCollisionObject());
	// btPlaneSpace1(newPt.m_normalWorldOnB,newPt.m_lateralFrictionDir1,newPt.m_lateralFrictionDir2);

   //BP mod, store contact triangles.
	if (isSwapped)
	{
		newPt.m_partId0 = m_partId1;
		newPt.m_partId1 = m_partId0;
		newPt.m_index0  = m_index1;
		newPt.m_index1  = m_index0;
	} else
	{
		newPt.m_partId0 = m_partId0;
		newPt.m_partId1 = m_partId1;
		newPt.m_index0  = m_index0;
		newPt.m_index1  = m_index1;
	}

	const btCollisionObject* collisionObject0 = m_body0Wrap->getCollisionObject();
	const btCollisionShape* collisionShape0 = collisionObject0->getCollisionShape();
	btScalar friction0 = collisionObject0->getFriction();
	btScalar restitution0 = collisionObject0->getRestitution();
	btScalar rollingFriction0 = collisionObject0->getRollingFriction();
	if (collisionShape0->isCompound()){
		const btCompoundShape* compoundShape0 = static_cast<const btCompoundShape*>(collisionShape0);
		if (compoundShape0->isMutiMaterial()) {
			friction0 = compoundShape0->getFriction(newPt.m_index0);
			restitution0 = compoundShape0->getRestitution(newPt.m_index0);
			rollingFriction0 = compoundShape0->getRollingFriction(newPt.m_index0);
		}
	}
	
	const btCollisionObject* collisionObject1 = m_body1Wrap->getCollisionObject();
	const btCollisionShape* collisionShape1 = collisionObject1->getCollisionShape();
	btScalar friction1 = collisionObject1->getFriction();
	btScalar restitution1 = collisionObject1->getRestitution();
	btScalar rollingFriction1 = collisionObject1->getRollingFriction();
	if (collisionShape1->isCompound()){
		const btCompoundShape* compoundShape1 = static_cast<const btCompoundShape*>(collisionShape1);
		if (compoundShape1->isMutiMaterial()) {
			friction1 = compoundShape1->getFriction(newPt.m_index1);
			restitution1 = compoundShape1->getRestitution(newPt.m_index1);
			rollingFriction1 = compoundShape1->getRollingFriction(newPt.m_index1);
		}
	}

	newPt.m_combinedFriction = friction0 * friction1;
	newPt.m_combinedRestitution = restitution0 * restitution1;
	newPt.m_combinedRollingFriction = rollingFriction0 * rollingFriction1;
	btPlaneSpace1(newPt.m_normalWorldOnB,newPt.m_lateralFrictionDir1,newPt.m_lateralFrictionDir2);
	
	//printf("depth=%f\n",depth);
	///@todo, check this for any side effects
	if (insertIndex >= 0)
	{
		//const btManifoldPoint& oldPoint = m_manifoldPtr->getContactPoint(insertIndex);
		m_manifoldPtr->replaceContactPoint(newPt,insertIndex);
	} else
	{
		insertIndex = m_manifoldPtr->addManifoldPoint(newPt);
	}
	
	//User can override friction and/or restitution
	if (gContactAddedCallback &&
		//and if either of the two bodies requires custom material
		 ((m_body0Wrap->getCollisionObject()->getCollisionFlags() & btCollisionObject::CF_CUSTOM_MATERIAL_CALLBACK) ||
		   (m_body1Wrap->getCollisionObject()->getCollisionFlags() & btCollisionObject::CF_CUSTOM_MATERIAL_CALLBACK)))
	{
		//experimental feature info, for per-triangle material etc.
		const btCollisionObjectWrapper* obj0Wrap = isSwapped? m_body1Wrap : m_body0Wrap;
		const btCollisionObjectWrapper* obj1Wrap = isSwapped? m_body0Wrap : m_body1Wrap;
		(*gContactAddedCallback)(m_manifoldPtr->getContactPoint(insertIndex),obj0Wrap,newPt.m_partId0,newPt.m_index0,obj1Wrap,newPt.m_partId1,newPt.m_index1);
	}

}

