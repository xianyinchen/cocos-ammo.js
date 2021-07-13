
#ifndef CC_RAY_RESULT_CALLBACK_H
#define CC_RAY_RESULT_CALLBACK_H

#include "BulletCollision/CollisionDispatch/btCollisionWorld.h"

typedef btCollisionWorld::ClosestRayResultCallback ClosestRayResultCallback;
typedef btCollisionWorld::AllHitsRayResultCallback AllHitsRayResultCallback;
typedef btCollisionWorld::LocalRayResult LocalRayResult;

struct ccClosestRayResultCallback : public ClosestRayResultCallback
{
	int m_shapePart;
	bool m_queryTrigger;

	ccClosestRayResultCallback(const btVector3&	rayFromWorld,const btVector3&	rayToWorld)
	:ClosestRayResultCallback(rayFromWorld, rayToWorld), m_shapePart(0), m_queryTrigger(true)
	{
	}

	// return true when pairs need collision
	virtual bool needsCollision(btBroadphaseProxy* proxy0) const
	{
		if ((proxy0->m_collisionFilterGroup & m_collisionFilterMask) != 0) {			
			if (!m_queryTrigger && proxy0->m_clientObject) {
				auto co = static_cast<btCollisionObject*>(proxy0->m_clientObject);
				return co->hasContactResponse();
			}
			return true;
		} else {
			return false;
		}
	}
	
	virtual	btScalar	addSingleResult(LocalRayResult& rayResult,bool normalInWorldSpace)
	{
		m_shapePart = rayResult.m_localShapeInfo?rayResult.m_localShapeInfo->m_shapePart:0;
		return ClosestRayResultCallback::addSingleResult(rayResult, normalInWorldSpace);
	}

	void setQueryTrigger(bool v) {
		m_queryTrigger = v;
	}
};

struct ccAllHitsRayResultCallback : public AllHitsRayResultCallback
{
	btAlignedObjectArray<int> m_shapeParts;
	bool m_queryTrigger;

	ccAllHitsRayResultCallback(const btVector3&	rayFromWorld,const btVector3&	rayToWorld)
	:AllHitsRayResultCallback(rayFromWorld, rayToWorld), m_queryTrigger(true)
	{
	}

	// return true when pairs need collision
	virtual bool needsCollision(btBroadphaseProxy* proxy0) const
	{
		if ((proxy0->m_collisionFilterGroup & m_collisionFilterMask) != 0) {			
			if (!m_queryTrigger && proxy0->m_clientObject) {
				auto co = static_cast<btCollisionObject*>(proxy0->m_clientObject);
				return co->hasContactResponse();
			}
			return true;
		} else {
			return false;
		}
	}
	
	virtual	btScalar	addSingleResult(LocalRayResult& rayResult,bool normalInWorldSpace)
	{
		m_shapeParts.push_back(rayResult.m_localShapeInfo?rayResult.m_localShapeInfo->m_shapePart:0);
		return AllHitsRayResultCallback::addSingleResult(rayResult, normalInWorldSpace);
	}
	
	void setQueryTrigger(bool v) {
		m_queryTrigger = v;
	}
};

#endif //CC_RAY_RESULT_CALLBACK_H