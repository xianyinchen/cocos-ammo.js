
#ifndef CC_CONVEX_CAST_CALLBACK_H
#define CC_CONVEX_CAST_CALLBACK_H

#include "BulletCollision/CollisionDispatch/btCollisionWorld.h"
#include "BulletCollision/CollisionShapes/btCompoundShape.h"
#include "BulletDynamics/Dynamics/btDiscreteDynamicsWorld.h"
#include "ccDiscreteDynamicsWorld.h"

typedef btCollisionWorld::ClosestConvexResultCallback
    ClosestConvexResultCallback;

struct ccNotMeClosestConvexResultCallback : public ClosestConvexResultCallback {

public:
  btCollisionObject *m_me;
  ccDiscreteDynamicsWorld *m_world;
  int m_hitTriggerTimes;
  int m_hitTriggerStart;

  ccNotMeClosestConvexResultCallback(btCollisionObject *me,
                                     ccDiscreteDynamicsWorld *world,
                                     const btVector3 &fromA,
                                     const btVector3 &toA)
      : btCollisionWorld::ClosestConvexResultCallback(fromA, toA), m_me(me),
        m_world(world), m_hitTriggerTimes(0), m_hitTriggerStart(0) {}

  virtual btScalar
  addSingleResult(btCollisionWorld::LocalConvexResult &convexResult,
                  bool normalInWorldSpace) {

    if (!convexResult.m_hitCollisionObject->hasContactResponse()) {

      /*
       * 0   : hit trigger count
       * 1   : self collsion shaper prt
       * []  : a array that stores the ptr of hited trigger
       */
      btAlignedObjectArray<int> &record = m_world->getCcdTriggerRecorder();
      if (m_hitTriggerTimes == 0) {
        m_hitTriggerStart = record.size();
        record.push_back(1);
        record.push_back(m_me->getCollisionShape()->getUserPointerAsInt());
      } else {
        record[m_hitTriggerStart] = m_hitTriggerTimes + 1;
      }

      const btCollisionShape *shape =
          convexResult.m_hitCollisionObject->getCollisionShape();
      if (shape->isCompound()) {
        const btCompoundShape *compound = static_cast<const btCompoundShape *>(shape);
        const int index = convexResult.m_localShapeInfo->m_triangleIndex;
        record.push_back(compound->getChildShape(index)->getUserPointerAsInt());
      } else {
        record.push_back(shape->getUserPointerAsInt());
      }

      m_hitTriggerTimes++;
      return 1.0f;
    }

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

    return true;
  }
};

#endif // CC_CONVEX_CAST_CALLBACK_H
