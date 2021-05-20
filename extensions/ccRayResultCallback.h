
#ifndef CC_RAY_RESULT_CALLBACK_H
#define CC_RAY_RESULT_CALLBACK_H

#include "BulletCollision/CollisionDispatch/btCollisionWorld.h"

typedef btCollisionWorld::ClosestRayResultCallback ClosestRayResultCallback;
typedef btCollisionWorld::AllHitsRayResultCallback AllHitsRayResultCallback;
typedef btCollisionWorld::LocalRayResult LocalRayResult;

struct ccClosestRayResultCallback : public ClosestRayResultCallback
{
	int m_shapePart;
	
	ccClosestRayResultCallback(const btVector3&	rayFromWorld,const btVector3&	rayToWorld)
	:ClosestRayResultCallback(rayFromWorld, rayToWorld), m_shapePart(0)
	{
	}

	// return true when pairs need collision
	virtual bool needsCollision(btBroadphaseProxy* proxy0) const
	{
		return (proxy0->m_collisionFilterGroup & m_collisionFilterMask) != 0;
	}
	
	virtual	btScalar	addSingleResult(LocalRayResult& rayResult,bool normalInWorldSpace)
	{
		m_shapePart = rayResult.m_localShapeInfo?rayResult.m_localShapeInfo->m_shapePart:0;
		return ClosestRayResultCallback::addSingleResult(rayResult, normalInWorldSpace);
	}
};

struct ccAllHitsRayResultCallback : public AllHitsRayResultCallback
{
	btAlignedObjectArray<int> m_shapeParts;

	ccAllHitsRayResultCallback(const btVector3&	rayFromWorld,const btVector3&	rayToWorld)
	:AllHitsRayResultCallback(rayFromWorld, rayToWorld)
	{
	}

	// return true when pairs need collision
	virtual bool needsCollision(btBroadphaseProxy* proxy0) const
	{
		return (proxy0->m_collisionFilterGroup & m_collisionFilterMask) != 0;
	}
	
	virtual	btScalar	addSingleResult(LocalRayResult& rayResult,bool normalInWorldSpace)
	{
		m_shapeParts.push_back(rayResult.m_localShapeInfo?rayResult.m_localShapeInfo->m_shapePart:0);
		return AllHitsRayResultCallback::addSingleResult(rayResult, normalInWorldSpace);
	}
};

#endif //CC_RAY_RESULT_CALLBACK_H