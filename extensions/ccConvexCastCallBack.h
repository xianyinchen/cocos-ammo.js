
#ifndef CC_CONVEX_CAST_CALLBACK_H
#define CC_CONVEX_CAST_CALLBACK_H

#include "BulletCollision/CollisionDispatch/btCollisionWorld.h"
#include "BulletCollision/CollisionShapes/btCollisionShape.h"
#include "BulletCollision/CollisionShapes/btCompoundShape.h"
#include "BulletDynamics/Dynamics/btDiscreteDynamicsWorld.h"
#include "ccDiscreteDynamicsWorld.h"

namespace cc 
{
typedef btCollisionWorld::ClosestConvexResultCallback ClosestConvexResultCallback;

struct ccNotMeClosestConvexResultCallback : public ClosestConvexResultCallback {

public:
  const btCollisionShape *m_hit;
  btCollisionObject *m_me;
  ccDiscreteDynamicsWorld *m_world;

  ccNotMeClosestConvexResultCallback(btCollisionObject *me,
                                     ccDiscreteDynamicsWorld *world,
                                     const btVector3 &fromA,
                                     const btVector3 &toA)
      : btCollisionWorld::ClosestConvexResultCallback(fromA, toA), m_hit(0),
      m_me(me), m_world(world) {}

  virtual btScalar
  addSingleResult(btCollisionWorld::LocalConvexResult &convexResult,
                  bool normalInWorldSpace) {
    m_hit = convexResult.m_localShapeInfo->m_shapeTemp;
    return ClosestConvexResultCallback::addSingleResult(convexResult,
                                                        normalInWorldSpace);
  }

  virtual bool needsCollision(btBroadphaseProxy *proxy0) const {
    // don't collide with itself
    if (proxy0->m_clientObject == m_me)
      return false;

    /// don't do CCD when the collision filters are not matching
    if (!ClosestConvexResultCallback::needsCollision(proxy0))
      return false;

    /// check response
    btCollisionObject* otherObj = (btCollisionObject*) proxy0->m_clientObject;
    if (!m_world->getDispatcher()->needsResponse(m_me,otherObj)){        
      return false;
    }

    return true;
  }
};
}
#endif // CC_CONVEX_CAST_CALLBACK_H
