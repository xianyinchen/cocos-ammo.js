
#ifndef CC_RAY_RESULT_CALLBACK_H
#define CC_RAY_RESULT_CALLBACK_H

#include "BulletCollision/CollisionDispatch/btCollisionWorld.h"

ATTRIBUTE_ALIGNED16(class) ccOverlapFilterCallback : public btCollisionWorld::RaycastReslute{
	
}

	// class cc 	RayResultCallback
	// {
	// 	btScalar	m_closestHitFraction;
	// 	const btCollisionObject*		m_collisionObject;
	// 	short int	m_collisionFilterGroup;
	// 	short int	m_collisionFilterMask;		
	// 	int	m_shapePart;
	// 	//@BP Mod - Custom flags, currently used to enable backface culling on tri-meshes, see btRaycastCallback.h. Apply any of the EFlags defined there on m_flags here to invoke.
	// 	unsigned int m_flags;

	// 	virtual ~RayResultCallback()
	// 	{
	// 	}
	// 	bool	hasHit() const
	// 	{
	// 		return (m_collisionObject != 0);
	// 	}

	// 	RayResultCallback()
	// 		:m_closestHitFraction(btScalar(1.)),
	// 		m_collisionObject(0),
	// 		m_collisionFilterGroup(btBroadphaseProxy::DefaultFilter),
	// 		m_collisionFilterMask(btBroadphaseProxy::AllFilter),
	// 		//@BP Mod
	// 		m_flags(0),
	// 		m_shapePart(-1)
	// 	{
	// 	}

	// 	virtual bool needsCollision(btBroadphaseProxy* proxy0) const
	// 	{
	// 		bool collides = (proxy0->m_collisionFilterGroup & m_collisionFilterMask) != 0;
	// 		collides = collides && (m_collisionFilterGroup & proxy0->m_collisionFilterMask);
	// 		return collides;
	// 	}


	// 	virtual	btScalar	addSingleResult(LocalRayResult& rayResult,bool normalInWorldSpace) = 0;
	// };


#endif //CC_RAY_RESULT_CALLBACK_H