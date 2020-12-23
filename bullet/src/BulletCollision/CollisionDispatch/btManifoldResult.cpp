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


btScalar btManifoldResult::calculateCF_R(btScalar a, btScalar b, int mode){
	if (mode == 0)
		return (a + b) / 2;
	else if (mode == 1)
		return btMin(a, b);	
	else if (mode == 2)
		return a * b;
	else
		return btMax(a, b);
}
btScalar btManifoldResult::calculateCRF_SF(btScalar a, btScalar b, int mode){	
	btScalar friction = calculateCF_R(a, b, mode);

	const btScalar MAX_FRICTION  = btScalar(10.);
	if (friction < -MAX_FRICTION)
		friction = -MAX_FRICTION;
	if (friction > MAX_FRICTION)
		friction = MAX_FRICTION;
	return friction;
}

btScalar	btManifoldResult::calculateCombinedRollingFriction(const btCollisionObject* body0,const btCollisionObject* body1)
{
	btScalar friction = body0->getRollingFriction() * body1->getFriction() + body1->getRollingFriction() * body0->getFriction();

	const btScalar MAX_FRICTION  = btScalar(10.);
	if (friction < -MAX_FRICTION)
		friction = -MAX_FRICTION;
	if (friction > MAX_FRICTION)
		friction = MAX_FRICTION;
	return friction;

}

btScalar	btManifoldResult::calculateCombinedSpinningFriction(const btCollisionObject* body0,const btCollisionObject* body1)
{
    btScalar friction = body0->getSpinningFriction() * body1->getFriction() + body1->getSpinningFriction() * body0->getFriction();
    
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

btScalar	btManifoldResult::calculateCombinedContactDamping(const btCollisionObject* body0,const btCollisionObject* body1)
{
    return body0->getContactDamping() + body1->getContactDamping();
}

btScalar	btManifoldResult::calculateCombinedContactStiffness(const btCollisionObject* body0,const btCollisionObject* body1)
{
    
    btScalar s0 = body0->getContactStiffness();
    btScalar s1 = body1->getContactStiffness();
    
    btScalar tmp0 = btScalar(1)/s0;
    btScalar tmp1 = btScalar(1)/s1;
    btScalar combinedStiffness = btScalar(1) / (tmp0+tmp1);
    return combinedStiffness;
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
	, m_closestPointDistanceThreshold(0)
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
	bool isNewCollision = m_manifoldPtr->getNumContacts() == 0;

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
	// newPt.m_combinedSpinningFriction = calculateCombinedSpinningFriction(m_body0Wrap->getCollisionObject(), m_body1Wrap->getCollisionObject());
	// btPlaneSpace1(newPt.m_normalWorldOnB,newPt.m_lateralFrictionDir1,newPt.m_lateralFrictionDir2);

    const btCollisionObject* collisionObject0 = m_body0Wrap->getCollisionObject();
	const btCollisionObject* collisionObject1 = m_body1Wrap->getCollisionObject();
   //BP mod, store contact triangles.
	if (isSwapped)
	{
		newPt.m_partId0 = m_partId1;
		newPt.m_partId1 = m_partId0;
		newPt.m_index0  = m_index1;
		newPt.m_index1  = m_index0;
		newPt.m_shape0 = m_body1Wrap->m_parent?m_body1Wrap->m_parent->m_shape:m_body1Wrap->m_shape;
		newPt.m_shape1 = m_body0Wrap->m_parent?m_body0Wrap->m_parent->m_shape:m_body0Wrap->m_shape;
		collisionObject0 = m_body1Wrap->getCollisionObject();
		collisionObject1 = m_body0Wrap->getCollisionObject();
	} else
	{
		newPt.m_partId0 = m_partId0;
		newPt.m_partId1 = m_partId1;
		newPt.m_index0  = m_index0;
		newPt.m_index1  = m_index1;
		newPt.m_shape1 = m_body1Wrap->m_parent?m_body1Wrap->m_parent->m_shape:m_body1Wrap->m_shape;
		newPt.m_shape0 = m_body0Wrap->m_parent?m_body0Wrap->m_parent->m_shape:m_body0Wrap->m_shape;
	}

	const btCollisionShape* collisionShape0 = newPt.m_shape0;
	btScalar friction0 = collisionObject0->getFriction();
	btScalar restitution0 = collisionObject0->getRestitution();
	btScalar rollingFriction0 = collisionObject0->getRollingFriction();
	btScalar spinningFriction0 = collisionObject0->getSpinningFriction();
	int combineMode0 = collisionObject0->getUserIndex2();
	if (collisionShape0->isCompound())
	{
		const btCompoundShape* compoundShape0 = static_cast<const btCompoundShape*>(collisionShape0);
		if (compoundShape0->isMutiMaterial())
		{
			friction0 = compoundShape0->getFriction(newPt.m_index0);
			restitution0 = compoundShape0->getRestitution(newPt.m_index0);
			rollingFriction0 = compoundShape0->getRollingFriction(newPt.m_index0);
			spinningFriction0 = compoundShape0->getSpinningFriction(newPt.m_index0);
			combineMode0 = compoundShape0->getCombinedMode(newPt.m_index0);
		}
	}
	else if (collisionShape0->getShapeType() == TRIANGLE_MESH_SHAPE_PROXYTYPE || collisionShape0->getShapeType() == TERRAIN_SHAPE_PROXYTYPE || collisionShape0->getShapeType() == MULTIMATERIAL_TRIANGLE_MESH_PROXYTYPE)
	{
		const btCollisionShape* tmp_shape = collisionObject0->getCollisionShape();
		if (tmp_shape->isCompound())
		{
			const btCompoundShape* comShapeForTrimesh = static_cast<const btCompoundShape*>(tmp_shape);
			if (comShapeForTrimesh->isMutiMaterial())
			{
				friction0 = comShapeForTrimesh->getFriction(collisionShape0->getUserIndex());
				restitution0 = comShapeForTrimesh->getRestitution(collisionShape0->getUserIndex());
				rollingFriction0 = comShapeForTrimesh->getRollingFriction(collisionShape0->getUserIndex());
				spinningFriction0 = comShapeForTrimesh->getSpinningFriction(collisionShape0->getUserIndex());
				combineMode0 = comShapeForTrimesh->getCombinedMode(collisionShape0->getUserIndex());
			}
		}
	}

	const btCollisionShape* collisionShape1 = newPt.m_shape1;
	btScalar friction1 = collisionObject1->getFriction();
	btScalar restitution1 = collisionObject1->getRestitution();
	btScalar rollingFriction1 = collisionObject1->getRollingFriction();
	btScalar spinningFriction1 = collisionObject1->getSpinningFriction();
	int combineMode1 = collisionObject1->getUserIndex2();
	if (collisionShape1->isCompound())
	{
		const btCompoundShape* compoundShape1 = static_cast<const btCompoundShape*>(collisionShape1);
		if (compoundShape1->isMutiMaterial())
		{
			friction1 = compoundShape1->getFriction(newPt.m_index1);
			restitution1 = compoundShape1->getRestitution(newPt.m_index1);
			rollingFriction1 = compoundShape1->getRollingFriction(newPt.m_index1);
			spinningFriction1 = compoundShape1->getSpinningFriction(newPt.m_index1);
			combineMode1 = compoundShape1->getCombinedMode(newPt.m_index1);
		}
	}
	else if (collisionShape1->getShapeType() == TRIANGLE_MESH_SHAPE_PROXYTYPE || collisionShape1->getShapeType() == TERRAIN_SHAPE_PROXYTYPE || collisionShape1->getShapeType() == MULTIMATERIAL_TRIANGLE_MESH_PROXYTYPE)
	{
		const btCollisionShape* tmp_shape = collisionObject1->getCollisionShape();
		if (tmp_shape->isCompound())
		{
			const btCompoundShape* comShapeForTrimesh = static_cast<const btCompoundShape*>(tmp_shape);
			if (comShapeForTrimesh->isMutiMaterial())
			{
				friction1 = comShapeForTrimesh->getFriction(collisionShape1->getUserIndex());
				restitution1 = comShapeForTrimesh->getRestitution(collisionShape1->getUserIndex());
				rollingFriction1 = comShapeForTrimesh->getRollingFriction(collisionShape1->getUserIndex());
				spinningFriction1 = comShapeForTrimesh->getSpinningFriction(collisionShape1->getUserIndex());
				combineMode1 = comShapeForTrimesh->getCombinedMode(collisionShape1->getUserIndex());
			}
		}
	}

	const int cm = btMax(combineMode0, combineMode1);
	newPt.m_combinedFriction = calculateCF_R(friction0, friction1, cm);
	newPt.m_combinedRestitution = calculateCF_R(restitution0, restitution1, cm);
	newPt.m_combinedRollingFriction = calculateCRF_SF(rollingFriction0, rollingFriction1, cm);
	newPt.m_combinedSpinningFriction = calculateCRF_SF(spinningFriction0, spinningFriction1, cm);
	btPlaneSpace1(newPt.m_normalWorldOnB, newPt.m_lateralFrictionDir1, newPt.m_lateralFrictionDir2);

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

	if (gContactStartedCallback && isNewCollision)
	{
		gContactStartedCallback(m_manifoldPtr);
	}
}

