
#include <emscripten.h>

extern "C" {

// Not using size_t for array indices as the values used by the javascript code are signed.

EM_JS(void, array_bounds_check_error, (size_t idx, size_t size), {
  throw 'Array index ' + idx + ' out of bounds: [0,' + size + ')';
});

void array_bounds_check(const int array_size, const int array_idx) {
  if (array_idx < 0 || array_idx >= array_size) {
    array_bounds_check_error(array_idx, array_size);
  }
}

// btCollisionShape

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_setLocalScaling_1(btCollisionShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_getLocalScaling_0(btCollisionShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_calculateLocalInertia_2(btCollisionShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_setMargin_1(btCollisionShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_getMargin_0(btCollisionShape* self) {
  return self->getMargin();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_isCompound_0(btCollisionShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_getUserIndex_0(btCollisionShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_setUserIndex_1(btCollisionShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_getUserPointerAsInt_0(btCollisionShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_setUserPointerAsInt_1(btCollisionShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_getAabb_3(btCollisionShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape_getLocalBoundingSphere_0(btCollisionShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionShape___destroy___0(btCollisionShape* self) {
  delete self;
}

// btCollisionWorld

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionWorld_rayTest_3(btCollisionWorld* self, const btVector3* rayFromWorld, const btVector3* rayToWorld, btCollisionWorld::RayResultCallback* resultCallback) {
  self->rayTest(*rayFromWorld, *rayToWorld, *resultCallback);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionWorld_rayTestSingle_6(btCollisionWorld* self, const btTransform* rayFromTrans, const btTransform* rayToTrans, btCollisionObject* collisionObject, const btCollisionShape* collisionShape, const btTransform* colObjWorldTransform, btCollisionWorld::RayResultCallback* resultCallback) {
  self->rayTestSingle(*rayFromTrans, *rayToTrans, collisionObject, collisionShape, *colObjWorldTransform, *resultCallback);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionWorld_addCollisionObject_1(btCollisionWorld* self, btCollisionObject* collisionObject) {
  self->addCollisionObject(collisionObject);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionWorld_addCollisionObject_2(btCollisionWorld* self, btCollisionObject* collisionObject, int collisionFilterGroup) {
  self->addCollisionObject(collisionObject, collisionFilterGroup);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionWorld_addCollisionObject_3(btCollisionWorld* self, btCollisionObject* collisionObject, int collisionFilterGroup, int collisionFilterMask) {
  self->addCollisionObject(collisionObject, collisionFilterGroup, collisionFilterMask);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionWorld_removeCollisionObject_1(btCollisionWorld* self, btCollisionObject* collisionObject) {
  self->removeCollisionObject(collisionObject);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionWorld_setContactBreakingThreshold_1(btCollisionWorld* self, float b) {
  self->setContactBreakingThreshold(b);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionWorld___destroy___0(btCollisionWorld* self) {
  delete self;
}

// RayResultCallback

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_RayResultCallback_hasHit_0(btCollisionWorld::RayResultCallback* self) {
  return self->hasHit();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_RayResultCallback___destroy___0(btCollisionWorld::RayResultCallback* self) {
  delete self;
}

// btConvexShape

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_setLocalScaling_1(btConvexShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_getLocalScaling_0(btConvexShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_calculateLocalInertia_2(btConvexShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_setMargin_1(btConvexShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_getMargin_0(btConvexShape* self) {
  return self->getMargin();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_isCompound_0(btConvexShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_getUserIndex_0(btConvexShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_setUserIndex_1(btConvexShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_getUserPointerAsInt_0(btConvexShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_setUserPointerAsInt_1(btConvexShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_getAabb_3(btConvexShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape_getLocalBoundingSphere_0(btConvexShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexShape___destroy___0(btConvexShape* self) {
  delete self;
}

// btConcaveShape

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_setLocalScaling_1(btConcaveShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_getLocalScaling_0(btConcaveShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_calculateLocalInertia_2(btConcaveShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_isCompound_0(btConcaveShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_getUserIndex_0(btConcaveShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_setUserIndex_1(btConcaveShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_getUserPointerAsInt_0(btConcaveShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_setUserPointerAsInt_1(btConcaveShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_getAabb_3(btConcaveShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape_getLocalBoundingSphere_0(btConcaveShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConcaveShape___destroy___0(btConcaveShape* self) {
  delete self;
}

// btDynamicsWorld

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_addAction_1(btDynamicsWorld* self, btActionInterface* action) {
  self->addAction(action);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_removeAction_1(btDynamicsWorld* self, btActionInterface* action) {
  self->removeAction(action);
}

btRigidBody* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_getFixedBody_0(btDynamicsWorld* self) {
  return &self->getFixedBody();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_rayTest_3(btDynamicsWorld* self, const btVector3* rayFromWorld, const btVector3* rayToWorld, btCollisionWorld::RayResultCallback* resultCallback) {
  self->rayTest(*rayFromWorld, *rayToWorld, *resultCallback);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_rayTestSingle_6(btDynamicsWorld* self, const btTransform* rayFromTrans, const btTransform* rayToTrans, btCollisionObject* collisionObject, const btCollisionShape* collisionShape, const btTransform* colObjWorldTransform, btCollisionWorld::RayResultCallback* resultCallback) {
  self->rayTestSingle(*rayFromTrans, *rayToTrans, collisionObject, collisionShape, *colObjWorldTransform, *resultCallback);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_addCollisionObject_1(btDynamicsWorld* self, btCollisionObject* collisionObject) {
  self->addCollisionObject(collisionObject);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_addCollisionObject_2(btDynamicsWorld* self, btCollisionObject* collisionObject, int collisionFilterGroup) {
  self->addCollisionObject(collisionObject, collisionFilterGroup);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_addCollisionObject_3(btDynamicsWorld* self, btCollisionObject* collisionObject, int collisionFilterGroup, int collisionFilterMask) {
  self->addCollisionObject(collisionObject, collisionFilterGroup, collisionFilterMask);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_removeCollisionObject_1(btDynamicsWorld* self, btCollisionObject* collisionObject) {
  self->removeCollisionObject(collisionObject);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld_setContactBreakingThreshold_1(btDynamicsWorld* self, float b) {
  self->setContactBreakingThreshold(b);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDynamicsWorld___destroy___0(btDynamicsWorld* self) {
  delete self;
}

// btQuadWord

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord_x_0(btQuadWord* self) {
  return self->x();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord_y_0(btQuadWord* self) {
  return self->y();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord_z_0(btQuadWord* self) {
  return self->z();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord_w_0(btQuadWord* self) {
  return self->w();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord_setX_1(btQuadWord* self, float x) {
  self->setX(x);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord_setY_1(btQuadWord* self, float y) {
  self->setY(y);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord_setZ_1(btQuadWord* self, float z) {
  self->setZ(z);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord_setW_1(btQuadWord* self, float w) {
  self->setW(w);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuadWord___destroy___0(btQuadWord* self) {
  delete self;
}

// btMotionState

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btMotionState_getWorldTransform_1(btMotionState* self, btTransform* worldTrans) {
  self->getWorldTransform(*worldTrans);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btMotionState_setWorldTransform_1(btMotionState* self, btTransform* worldTrans) {
  self->setWorldTransform(*worldTrans);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btMotionState___destroy___0(btMotionState* self) {
  delete self;
}

// btCollisionObject

btCollisionObject* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_btCollisionObject_0() {
  return new btCollisionObject();
}

btCollisionShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_getCollisionShape_0(btCollisionObject* self) {
  return self->getCollisionShape();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_getActivationState_0(btCollisionObject* self) {
  return self->getActivationState();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setActivationState_1(btCollisionObject* self, int newState) {
  self->setActivationState(newState);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_forceActivationState_1(btCollisionObject* self, int newState) {
  self->forceActivationState(newState);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_activate_0(btCollisionObject* self) {
  self->activate();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_activate_1(btCollisionObject* self, bool forceActivation) {
  self->activate(forceActivation);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_isActive_0(btCollisionObject* self) {
  return self->isActive();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_isKinematicObject_0(btCollisionObject* self) {
  return self->isKinematicObject();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_isStaticObject_0(btCollisionObject* self) {
  return self->isStaticObject();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0(btCollisionObject* self) {
  return self->isStaticOrKinematicObject();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setRestitution_1(btCollisionObject* self, float r) {
  self->setRestitution(r);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setFriction_1(btCollisionObject* self, float f) {
  self->setFriction(f);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setRollingFriction_1(btCollisionObject* self, float rf) {
  self->setRollingFriction(rf);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setSpinningFriction_1(btCollisionObject* self, float sf) {
  self->setSpinningFriction(sf);
}

btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_getWorldTransform_0(btCollisionObject* self) {
  return &self->getWorldTransform();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_getCollisionFlags_0(btCollisionObject* self) {
  return self->getCollisionFlags();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setCollisionFlags_1(btCollisionObject* self, int flags) {
  self->setCollisionFlags(flags);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setWorldTransform_1(btCollisionObject* self, const btTransform* worldTrans) {
  self->setWorldTransform(*worldTrans);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setCollisionShape_1(btCollisionObject* self, btCollisionShape* collisionShape) {
  self->setCollisionShape(collisionShape);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setCcdMotionThreshold_1(btCollisionObject* self, float ccdMotionThreshold) {
  self->setCcdMotionThreshold(ccdMotionThreshold);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1(btCollisionObject* self, float radius) {
  self->setCcdSweptSphereRadius(radius);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_getUserIndex_0(btCollisionObject* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setUserIndex_1(btCollisionObject* self, int index) {
  self->setUserIndex(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setUserIndex2_1(btCollisionObject* self, int index) {
  self->setUserIndex2(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setIgnoreCollisionCheck_2(btCollisionObject* self, const btCollisionObject* co, bool ig) {
  self->setIgnoreCollisionCheck(co, ig);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_setInterpolationWorldTransform_1(btCollisionObject* self, const btTransform* trans) {
  self->setInterpolationWorldTransform(*trans);
}

btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject_getInterpolationWorldTransform_0(btCollisionObject* self) {
  return &self->getInterpolationWorldTransform();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionObject___destroy___0(btCollisionObject* self) {
  delete self;
}

// ClosestRayResultCallback

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_ClosestRayResultCallback_hasHit_0(btCollisionWorld::ClosestRayResultCallback* self) {
  return self->hasHit();
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0(btCollisionWorld::ClosestRayResultCallback* self) {
  return &self->m_rayFromWorld;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1(btCollisionWorld::ClosestRayResultCallback* self, btVector3* arg0) {
  self->m_rayFromWorld = *arg0;
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0(btCollisionWorld::ClosestRayResultCallback* self) {
  return &self->m_rayToWorld;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1(btCollisionWorld::ClosestRayResultCallback* self, btVector3* arg0) {
  self->m_rayToWorld = *arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ClosestRayResultCallback___destroy___0(btCollisionWorld::ClosestRayResultCallback* self) {
  delete self;
}

// AllHitsRayResultCallback

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_AllHitsRayResultCallback_hasHit_0(btCollisionWorld::AllHitsRayResultCallback* self) {
  return self->hasHit();
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0(btCollisionWorld::AllHitsRayResultCallback* self) {
  return &self->m_rayFromWorld;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1(btCollisionWorld::AllHitsRayResultCallback* self, btVector3* arg0) {
  self->m_rayFromWorld = *arg0;
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0(btCollisionWorld::AllHitsRayResultCallback* self) {
  return &self->m_rayToWorld;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1(btCollisionWorld::AllHitsRayResultCallback* self, btVector3* arg0) {
  self->m_rayToWorld = *arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_AllHitsRayResultCallback___destroy___0(btCollisionWorld::AllHitsRayResultCallback* self) {
  delete self;
}

// btConvexInternalShape

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_getImplicitShapeDimensions_0(btConvexInternalShape* self) {
  return &self->getImplicitShapeDimensions();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_setLocalScaling_1(btConvexInternalShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_getLocalScaling_0(btConvexInternalShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_calculateLocalInertia_2(btConvexInternalShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_setMargin_1(btConvexInternalShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_getMargin_0(btConvexInternalShape* self) {
  return self->getMargin();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_isCompound_0(btConvexInternalShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_getUserIndex_0(btConvexInternalShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_setUserIndex_1(btConvexInternalShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_getUserPointerAsInt_0(btConvexInternalShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_setUserPointerAsInt_1(btConvexInternalShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_getAabb_3(btConvexInternalShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape_getLocalBoundingSphere_0(btConvexInternalShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexInternalShape___destroy___0(btConvexInternalShape* self) {
  delete self;
}

// btStridingMeshInterface

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStridingMeshInterface_setScaling_1(btStridingMeshInterface* self, const btVector3* scaling) {
  self->setScaling(*scaling);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStridingMeshInterface___destroy___0(btStridingMeshInterface* self) {
  delete self;
}

// btTriangleMeshShape

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_setLocalScaling_1(btTriangleMeshShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_getLocalScaling_0(btTriangleMeshShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_calculateLocalInertia_2(btTriangleMeshShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_isCompound_0(btTriangleMeshShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_getUserIndex_0(btTriangleMeshShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_setUserIndex_1(btTriangleMeshShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_getUserPointerAsInt_0(btTriangleMeshShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_setUserPointerAsInt_1(btTriangleMeshShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_getAabb_3(btTriangleMeshShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape_getLocalBoundingSphere_0(btTriangleMeshShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMeshShape___destroy___0(btTriangleMeshShape* self) {
  delete self;
}

// btDispatcher

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btDispatcher_getNumManifolds_0(btDispatcher* self) {
  return self->getNumManifolds();
}

btPersistentManifold* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDispatcher_getManifoldByIndexInternal_1(btDispatcher* self, int index) {
  return self->getManifoldByIndexInternal(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDispatcher___destroy___0(btDispatcher* self) {
  delete self;
}

// btBroadphaseInterface

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBroadphaseInterface___destroy___0(btBroadphaseInterface* self) {
  delete self;
}

// btTypedConstraint

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTypedConstraint_enableFeedback_1(btTypedConstraint* self, bool needsFeedback) {
  self->enableFeedback(needsFeedback);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0(btTypedConstraint* self) {
  return self->getBreakingImpulseThreshold();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1(btTypedConstraint* self, const float threshold) {
  self->setBreakingImpulseThreshold(threshold);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btTypedConstraint_getParam_2(btTypedConstraint* self, int num, int axis) {
  return self->getParam(num, axis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTypedConstraint_setParam_3(btTypedConstraint* self, int num, float value, int axis) {
  self->setParam(num, value, axis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTypedConstraint___destroy___0(btTypedConstraint* self) {
  delete self;
}

// btDiscreteDynamicsWorld

btDiscreteDynamicsWorld* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4(btDispatcher* dispatcher, btBroadphaseInterface* pairCache, btConstraintSolver* constraintSolver, btCollisionConfiguration* collisionConfiguration) {
  return new btDiscreteDynamicsWorld(dispatcher, pairCache, constraintSolver, collisionConfiguration);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_setGravity_1(btDiscreteDynamicsWorld* self, btVector3* gravity) {
  self->setGravity(*gravity);
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_getGravity_0(btDiscreteDynamicsWorld* self) {
  static btVector3 temp;
  return (temp = self->getGravity(), &temp);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1(btDiscreteDynamicsWorld* self, btRigidBody* body) {
  self->addRigidBody(body);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3(btDiscreteDynamicsWorld* self, btRigidBody* body, int group, int mask) {
  self->addRigidBody(body, group, mask);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1(btDiscreteDynamicsWorld* self, btRigidBody* body) {
  self->removeRigidBody(body);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1(btDiscreteDynamicsWorld* self, btTypedConstraint* constraint) {
  self->addConstraint(constraint);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2(btDiscreteDynamicsWorld* self, btTypedConstraint* constraint, bool disableCollisionsBetweenLinkedBodies) {
  self->addConstraint(constraint, disableCollisionsBetweenLinkedBodies);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1(btDiscreteDynamicsWorld* self, btTypedConstraint* constraint) {
  self->removeConstraint(constraint);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1(btDiscreteDynamicsWorld* self, float timeStep) {
  return self->stepSimulation(timeStep);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2(btDiscreteDynamicsWorld* self, float timeStep, int maxSubSteps) {
  return self->stepSimulation(timeStep, maxSubSteps);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3(btDiscreteDynamicsWorld* self, float timeStep, int maxSubSteps, float fixedTimeStep) {
  return self->stepSimulation(timeStep, maxSubSteps, fixedTimeStep);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_rayTest_3(btDiscreteDynamicsWorld* self, const btVector3* rayFromWorld, const btVector3* rayToWorld, btCollisionWorld::RayResultCallback* resultCallback) {
  self->rayTest(*rayFromWorld, *rayToWorld, *resultCallback);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_rayTestSingle_6(btDiscreteDynamicsWorld* self, const btTransform* rayFromTrans, const btTransform* rayToTrans, btCollisionObject* collisionObject, const btCollisionShape* collisionShape, const btTransform* colObjWorldTransform, btCollisionWorld::RayResultCallback* resultCallback) {
  self->rayTestSingle(*rayFromTrans, *rayToTrans, collisionObject, collisionShape, *colObjWorldTransform, *resultCallback);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1(btDiscreteDynamicsWorld* self, btCollisionObject* collisionObject) {
  self->addCollisionObject(collisionObject);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2(btDiscreteDynamicsWorld* self, btCollisionObject* collisionObject, int collisionFilterGroup) {
  self->addCollisionObject(collisionObject, collisionFilterGroup);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3(btDiscreteDynamicsWorld* self, btCollisionObject* collisionObject, int collisionFilterGroup, int collisionFilterMask) {
  self->addCollisionObject(collisionObject, collisionFilterGroup, collisionFilterMask);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1(btDiscreteDynamicsWorld* self, btCollisionObject* collisionObject) {
  self->removeCollisionObject(collisionObject);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_setContactBreakingThreshold_1(btDiscreteDynamicsWorld* self, float b) {
  self->setContactBreakingThreshold(b);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_addAction_1(btDiscreteDynamicsWorld* self, btActionInterface* action) {
  self->addAction(action);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_removeAction_1(btDiscreteDynamicsWorld* self, btActionInterface* action) {
  self->removeAction(action);
}

btRigidBody* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld_getFixedBody_0(btDiscreteDynamicsWorld* self) {
  return &self->getFixedBody();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDiscreteDynamicsWorld___destroy___0(btDiscreteDynamicsWorld* self) {
  delete self;
}

// VoidPtr

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VoidPtr___destroy___0(void** self) {
  delete self;
}

// btVector3

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_btVector3_0() {
  return new btVector3();
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_btVector3_3(float x, float y, float z) {
  return new btVector3(x, y, z);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_x_0(btVector3* self) {
  return self->x();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_y_0(btVector3* self) {
  return self->y();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_z_0(btVector3* self) {
  return self->z();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_setX_1(btVector3* self, float x) {
  self->setX(x);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_setY_1(btVector3* self, float y) {
  self->setY(y);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_setZ_1(btVector3* self, float z) {
  self->setZ(z);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3_setValue_3(btVector3* self, float x, float y, float z) {
  self->setValue(x, y, z);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3___destroy___0(btVector3* self) {
  delete self;
}

// btQuaternion

btQuaternion* EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_btQuaternion_4(float x, float y, float z, float w) {
  return new btQuaternion(x, y, z, w);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_setValue_4(btQuaternion* self, float x, float y, float z, float w) {
  self->setValue(x, y, z, w);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_x_0(btQuaternion* self) {
  return self->x();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_y_0(btQuaternion* self) {
  return self->y();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_z_0(btQuaternion* self) {
  return self->z();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_w_0(btQuaternion* self) {
  return self->w();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_setX_1(btQuaternion* self, float x) {
  self->setX(x);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_setY_1(btQuaternion* self, float y) {
  self->setY(y);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_setZ_1(btQuaternion* self, float z) {
  self->setZ(z);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion_setW_1(btQuaternion* self, float w) {
  self->setW(w);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btQuaternion___destroy___0(btQuaternion* self) {
  delete self;
}

// btMatrix3x3

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btMatrix3x3_getRotation_1(btMatrix3x3* self, btQuaternion* q) {
  self->getRotation(*q);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btMatrix3x3___destroy___0(btMatrix3x3* self) {
  delete self;
}

// btTransform

btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_btTransform_0() {
  return new btTransform();
}

btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_btTransform_2(btQuaternion* q, btVector3* v) {
  return new btTransform(*q, *v);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_setIdentity_0(btTransform* self) {
  self->setIdentity();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_setOrigin_1(btTransform* self, btVector3* origin) {
  self->setOrigin(*origin);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_setRotation_1(btTransform* self, btQuaternion* rotation) {
  self->setRotation(*rotation);
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_getOrigin_0(btTransform* self) {
  return &self->getOrigin();
}

btQuaternion* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_getRotation_0(btTransform* self) {
  static btQuaternion temp;
  return (temp = self->getRotation(), &temp);
}

btMatrix3x3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_getBasis_0(btTransform* self) {
  return &self->getBasis();
}

btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_inverse_0(btTransform* self) {
  static btTransform temp;
  return (temp = self->inverse(), &temp);
}

btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform_op_mul_1(btTransform* self, btTransform* t) {
  return &(*self *= *t);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTransform___destroy___0(btTransform* self) {
  delete self;
}

// btDefaultMotionState

btDefaultMotionState* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultMotionState_btDefaultMotionState_0() {
  return new btDefaultMotionState();
}

btDefaultMotionState* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultMotionState_btDefaultMotionState_1(btTransform* startTrans) {
  return new btDefaultMotionState(*startTrans);
}

btDefaultMotionState* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultMotionState_btDefaultMotionState_2(btTransform* startTrans, btTransform* centerOfMassOffset) {
  return new btDefaultMotionState(*startTrans, *centerOfMassOffset);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultMotionState_getWorldTransform_1(btDefaultMotionState* self, btTransform* worldTrans) {
  self->getWorldTransform(*worldTrans);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultMotionState_setWorldTransform_1(btDefaultMotionState* self, btTransform* worldTrans) {
  self->setWorldTransform(*worldTrans);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultMotionState___destroy___0(btDefaultMotionState* self) {
  delete self;
}

// ccClosestRayResultCallback

ccClosestRayResultCallback* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_ccClosestRayResultCallback_2(const btVector3* from, const btVector3* to) {
  return new ccClosestRayResultCallback(*from, *to);
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_getHitNormalWorld_0(ccClosestRayResultCallback* self) {
  return &self->getHitNormalWorld();
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_getHitPointWorld_0(ccClosestRayResultCallback* self) {
  return &self->getHitPointWorld();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_getCollisionShapePtr_0(ccClosestRayResultCallback* self) {
  return self->getCollisionShapePtr();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_getClosestHitFraction_0(ccClosestRayResultCallback* self) {
  return self->getClosestHitFraction();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_reset_2(ccClosestRayResultCallback* self, int mask, bool queryTrigger) {
  self->reset(mask, queryTrigger);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_hasHit_0(ccClosestRayResultCallback* self) {
  return self->hasHit();
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_get_m_rayFromWorld_0(ccClosestRayResultCallback* self) {
  return &self->m_rayFromWorld;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_set_m_rayFromWorld_1(ccClosestRayResultCallback* self, btVector3* arg0) {
  self->m_rayFromWorld = *arg0;
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_get_m_rayToWorld_0(ccClosestRayResultCallback* self) {
  return &self->m_rayToWorld;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback_set_m_rayToWorld_1(ccClosestRayResultCallback* self, btVector3* arg0) {
  self->m_rayToWorld = *arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccClosestRayResultCallback___destroy___0(ccClosestRayResultCallback* self) {
  delete self;
}

// btScalarArray

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btScalarArray_size_0(btScalarArray* self) {
  return self->size();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btScalarArray_at_1(btScalarArray* self, int n) {
  return self->at(n);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btScalarArray_clear_0(btScalarArray* self) {
  self->clear();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btScalarArray___destroy___0(btScalarArray* self) {
  delete self;
}

// ccAllHitsRayResultCallback

ccAllHitsRayResultCallback* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_ccAllHitsRayResultCallback_2(const btVector3* from, const btVector3* to) {
  return new ccAllHitsRayResultCallback(*from, *to);
}

btScalarArray* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_getHitFractions_0(ccAllHitsRayResultCallback* self) {
  return &self->getHitFractions();
}

btVector3Array* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_getHitNormalWorld_0(ccAllHitsRayResultCallback* self) {
  return &self->getHitNormalWorld();
}

btVector3Array* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_getHitPointWorld_0(ccAllHitsRayResultCallback* self) {
  return &self->getHitPointWorld();
}

btIntArray* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_getCollisionShapePtrs_0(ccAllHitsRayResultCallback* self) {
  return &self->getCollisionShapePtrs();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_reset_2(ccAllHitsRayResultCallback* self, int mask, bool queryTrigger) {
  self->reset(mask, queryTrigger);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_hasHit_0(ccAllHitsRayResultCallback* self) {
  return self->hasHit();
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_get_m_rayFromWorld_0(ccAllHitsRayResultCallback* self) {
  return &self->m_rayFromWorld;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_set_m_rayFromWorld_1(ccAllHitsRayResultCallback* self, btVector3* arg0) {
  self->m_rayFromWorld = *arg0;
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_get_m_rayToWorld_0(ccAllHitsRayResultCallback* self) {
  return &self->m_rayToWorld;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback_set_m_rayToWorld_1(ccAllHitsRayResultCallback* self, btVector3* arg0) {
  self->m_rayToWorld = *arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccAllHitsRayResultCallback___destroy___0(ccAllHitsRayResultCallback* self) {
  delete self;
}

// btManifoldPoint

const double EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_getAppliedImpulse_0(btManifoldPoint* self) {
  return self->getAppliedImpulse();
}

const double EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_getDistance_0(btManifoldPoint* self) {
  return self->getDistance();
}

const btCollisionShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_getShape0_0(btManifoldPoint* self) {
  return self->getShape0();
}

const btCollisionShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_getShape1_0(btManifoldPoint* self) {
  return self->getShape1();
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_get_m_localPointA_0(btManifoldPoint* self) {
  return &self->m_localPointA;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_set_m_localPointA_1(btManifoldPoint* self, btVector3* arg0) {
  self->m_localPointA = *arg0;
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_get_m_localPointB_0(btManifoldPoint* self) {
  return &self->m_localPointB;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_set_m_localPointB_1(btManifoldPoint* self, btVector3* arg0) {
  self->m_localPointB = *arg0;
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0(btManifoldPoint* self) {
  return &self->m_positionWorldOnA;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1(btManifoldPoint* self, btVector3* arg0) {
  self->m_positionWorldOnA = *arg0;
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0(btManifoldPoint* self) {
  return &self->m_positionWorldOnB;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1(btManifoldPoint* self, btVector3* arg0) {
  self->m_positionWorldOnB = *arg0;
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0(btManifoldPoint* self) {
  return &self->m_normalWorldOnB;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1(btManifoldPoint* self, btVector3* arg0) {
  self->m_normalWorldOnB = *arg0;
}

double EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_get_m_distance1_0(btManifoldPoint* self) {
  return self->m_distance1;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_set_m_distance1_1(btManifoldPoint* self, double arg0) {
  self->m_distance1 = arg0;
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_get_m_index0_0(btManifoldPoint* self) {
  return self->m_index0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_set_m_index0_1(btManifoldPoint* self, int arg0) {
  self->m_index0 = arg0;
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_get_m_index1_0(btManifoldPoint* self) {
  return self->m_index1;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint_set_m_index1_1(btManifoldPoint* self, int arg0) {
  self->m_index1 = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btManifoldPoint___destroy___0(btManifoldPoint* self) {
  delete self;
}

// LocalShapeInfo

int EMSCRIPTEN_KEEPALIVE emscripten_bind_LocalShapeInfo_get_m_shapePart_0(btCollisionWorld::LocalShapeInfo* self) {
  return self->m_shapePart;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_LocalShapeInfo_set_m_shapePart_1(btCollisionWorld::LocalShapeInfo* self, int arg0) {
  self->m_shapePart = arg0;
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0(btCollisionWorld::LocalShapeInfo* self) {
  return self->m_triangleIndex;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1(btCollisionWorld::LocalShapeInfo* self, int arg0) {
  self->m_triangleIndex = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_LocalShapeInfo___destroy___0(btCollisionWorld::LocalShapeInfo* self) {
  delete self;
}

// btConvexTriangleMeshShape

btConvexTriangleMeshShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1(btStridingMeshInterface* meshInterface) {
  return new btConvexTriangleMeshShape(meshInterface);
}

btConvexTriangleMeshShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2(btStridingMeshInterface* meshInterface, bool calcAabb) {
  return new btConvexTriangleMeshShape(meshInterface, calcAabb);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1(btConvexTriangleMeshShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0(btConvexTriangleMeshShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2(btConvexTriangleMeshShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_setMargin_1(btConvexTriangleMeshShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_getMargin_0(btConvexTriangleMeshShape* self) {
  return self->getMargin();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_isCompound_0(btConvexTriangleMeshShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_getUserIndex_0(btConvexTriangleMeshShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_setUserIndex_1(btConvexTriangleMeshShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_getUserPointerAsInt_0(btConvexTriangleMeshShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_setUserPointerAsInt_1(btConvexTriangleMeshShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_getAabb_3(btConvexTriangleMeshShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape_getLocalBoundingSphere_0(btConvexTriangleMeshShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConvexTriangleMeshShape___destroy___0(btConvexTriangleMeshShape* self) {
  delete self;
}

// btBoxShape

btBoxShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_btBoxShape_1(btVector3* boxHalfExtents) {
  return new btBoxShape(*boxHalfExtents);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_setMargin_1(btBoxShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_getMargin_0(btBoxShape* self) {
  return self->getMargin();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_setUnscaledHalfExtents_1(btBoxShape* self, btVector3* boxHalfExtents) {
  self->setUnscaledHalfExtents(*boxHalfExtents);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_setLocalScaling_1(btBoxShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_getLocalScaling_0(btBoxShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_calculateLocalInertia_2(btBoxShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_isCompound_0(btBoxShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_getUserIndex_0(btBoxShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_setUserIndex_1(btBoxShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_getUserPointerAsInt_0(btBoxShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_setUserPointerAsInt_1(btBoxShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_getAabb_3(btBoxShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_getLocalBoundingSphere_0(btBoxShape* self) {
  return self->getLocalBoundingSphere();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape_getImplicitShapeDimensions_0(btBoxShape* self) {
  return &self->getImplicitShapeDimensions();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBoxShape___destroy___0(btBoxShape* self) {
  delete self;
}

// btCapsuleShape

btCapsuleShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_btCapsuleShape_2(float radius, float height) {
  return new btCapsuleShape(radius, height);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_setMargin_1(btCapsuleShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_getMargin_0(btCapsuleShape* self) {
  return self->getMargin();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_updateProp_3(btCapsuleShape* self, float r, float h, int upAxis) {
  self->updateProp(r, h, upAxis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_setLocalScaling_1(btCapsuleShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_getLocalScaling_0(btCapsuleShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_calculateLocalInertia_2(btCapsuleShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_isCompound_0(btCapsuleShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_getUserIndex_0(btCapsuleShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_setUserIndex_1(btCapsuleShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_getUserPointerAsInt_0(btCapsuleShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_setUserPointerAsInt_1(btCapsuleShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_getAabb_3(btCapsuleShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_getLocalBoundingSphere_0(btCapsuleShape* self) {
  return self->getLocalBoundingSphere();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape_getImplicitShapeDimensions_0(btCapsuleShape* self) {
  return &self->getImplicitShapeDimensions();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCapsuleShape___destroy___0(btCapsuleShape* self) {
  delete self;
}

// btCylinderShape

btCylinderShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_btCylinderShape_1(btVector3* halfExtents) {
  return new btCylinderShape(*halfExtents);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_setMargin_1(btCylinderShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_getMargin_0(btCylinderShape* self) {
  return self->getMargin();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_updateProp_3(btCylinderShape* self, float r, float h, int upAxis) {
  self->updateProp(r, h, upAxis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_setLocalScaling_1(btCylinderShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_getLocalScaling_0(btCylinderShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_calculateLocalInertia_2(btCylinderShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_isCompound_0(btCylinderShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_getUserIndex_0(btCylinderShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_setUserIndex_1(btCylinderShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_getUserPointerAsInt_0(btCylinderShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_setUserPointerAsInt_1(btCylinderShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_getAabb_3(btCylinderShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_getLocalBoundingSphere_0(btCylinderShape* self) {
  return self->getLocalBoundingSphere();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape_getImplicitShapeDimensions_0(btCylinderShape* self) {
  return &self->getImplicitShapeDimensions();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCylinderShape___destroy___0(btCylinderShape* self) {
  delete self;
}

// btSphereShape

btSphereShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_btSphereShape_1(float radius) {
  return new btSphereShape(radius);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_setMargin_1(btSphereShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_getMargin_0(btSphereShape* self) {
  return self->getMargin();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_setUnscaledRadius_1(btSphereShape* self, float radius) {
  self->setUnscaledRadius(radius);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_setLocalScaling_1(btSphereShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_getLocalScaling_0(btSphereShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_calculateLocalInertia_2(btSphereShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_isCompound_0(btSphereShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_getUserIndex_0(btSphereShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_setUserIndex_1(btSphereShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_getUserPointerAsInt_0(btSphereShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_setUserPointerAsInt_1(btSphereShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_getAabb_3(btSphereShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_getLocalBoundingSphere_0(btSphereShape* self) {
  return self->getLocalBoundingSphere();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape_getImplicitShapeDimensions_0(btSphereShape* self) {
  return &self->getImplicitShapeDimensions();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSphereShape___destroy___0(btSphereShape* self) {
  delete self;
}

// btConeShape

btConeShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_btConeShape_2(float radius, float height) {
  return new btConeShape(radius, height);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_setRadius_1(btConeShape* self, float radius) {
  self->setRadius(radius);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_setHeight_1(btConeShape* self, float height) {
  self->setHeight(height);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_setConeUpIndex_1(btConeShape* self, int upIndex) {
  self->setConeUpIndex(upIndex);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_setLocalScaling_1(btConeShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_getLocalScaling_0(btConeShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_calculateLocalInertia_2(btConeShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_isCompound_0(btConeShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_getUserIndex_0(btConeShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_setUserIndex_1(btConeShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_getUserPointerAsInt_0(btConeShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_setUserPointerAsInt_1(btConeShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_getAabb_3(btConeShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_getLocalBoundingSphere_0(btConeShape* self) {
  return self->getLocalBoundingSphere();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape_getImplicitShapeDimensions_0(btConeShape* self) {
  return &self->getImplicitShapeDimensions();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConeShape___destroy___0(btConeShape* self) {
  delete self;
}

// btBU_Simplex1to4

btBU_Simplex1to4* EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_btBU_Simplex1to4_0() {
  return new btBU_Simplex1to4();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_addVertex_1(btBU_Simplex1to4* self, btVector3* pt) {
  self->addVertex(*pt);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_setLocalScaling_1(btBU_Simplex1to4* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_getLocalScaling_0(btBU_Simplex1to4* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_calculateLocalInertia_2(btBU_Simplex1to4* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_isCompound_0(btBU_Simplex1to4* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_getUserIndex_0(btBU_Simplex1to4* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_setUserIndex_1(btBU_Simplex1to4* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_getUserPointerAsInt_0(btBU_Simplex1to4* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_setUserPointerAsInt_1(btBU_Simplex1to4* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_getAabb_3(btBU_Simplex1to4* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4_getLocalBoundingSphere_0(btBU_Simplex1to4* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBU_Simplex1to4___destroy___0(btBU_Simplex1to4* self) {
  delete self;
}

// btIntArray

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btIntArray_size_0(btIntArray* self) {
  return self->size();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btIntArray_at_1(btIntArray* self, int n) {
  return self->at(n);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btIntArray_clear_0(btIntArray* self) {
  self->clear();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btIntArray___destroy___0(btIntArray* self) {
  delete self;
}

// btVector3Array

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3Array_size_0(btVector3Array* self) {
  return self->size();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3Array_at_1(btVector3Array* self, int n) {
  return &self->at(n);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3Array_clear_0(btVector3Array* self) {
  self->clear();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btVector3Array___destroy___0(btVector3Array* self) {
  delete self;
}

// btCompoundShape

btCompoundShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_btCompoundShape_0() {
  return new btCompoundShape();
}

btCompoundShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_btCompoundShape_1(bool enableDynamicAabbTree) {
  return new btCompoundShape(enableDynamicAabbTree);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_addChildShape_2(btCompoundShape* self, const btTransform* localTransform, btCollisionShape* shape) {
  self->addChildShape(*localTransform, shape);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_removeChildShape_1(btCompoundShape* self, btCollisionShape* shape) {
  self->removeChildShape(shape);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_removeChildShapeByIndex_1(btCompoundShape* self, int childShapeindex) {
  self->removeChildShapeByIndex(childShapeindex);
}

const int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_getNumChildShapes_0(btCompoundShape* self) {
  return self->getNumChildShapes();
}

btCollisionShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_getChildShape_1(btCompoundShape* self, int index) {
  return self->getChildShape(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_updateChildTransform_2(btCompoundShape* self, int childIndex, const btTransform* newChildTransform) {
  self->updateChildTransform(childIndex, *newChildTransform);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_updateChildTransform_3(btCompoundShape* self, int childIndex, const btTransform* newChildTransform, bool shouldRecalculateLocalAabb) {
  self->updateChildTransform(childIndex, *newChildTransform, shouldRecalculateLocalAabb);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_setMargin_1(btCompoundShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_getMargin_0(btCompoundShape* self) {
  return self->getMargin();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_setLocalScaling_1(btCompoundShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_getLocalScaling_0(btCompoundShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_calculateLocalInertia_2(btCompoundShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_isCompound_0(btCompoundShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_getUserIndex_0(btCompoundShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_setUserIndex_1(btCompoundShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_getUserPointerAsInt_0(btCompoundShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_setUserPointerAsInt_1(btCompoundShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_getAabb_3(btCompoundShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape_getLocalBoundingSphere_0(btCompoundShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCompoundShape___destroy___0(btCompoundShape* self) {
  delete self;
}

// btIndexedMesh

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btIndexedMesh_get_m_numTriangles_0(btIndexedMesh* self) {
  return self->m_numTriangles;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btIndexedMesh_set_m_numTriangles_1(btIndexedMesh* self, int arg0) {
  self->m_numTriangles = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btIndexedMesh___destroy___0(btIndexedMesh* self) {
  delete self;
}

// btIndexedMeshArray

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btIndexedMeshArray_size_0(btIndexedMeshArray* self) {
  return self->size();
}

const btIndexedMesh* EMSCRIPTEN_KEEPALIVE emscripten_bind_btIndexedMeshArray_at_1(btIndexedMeshArray* self, int n) {
  return &self->at(n);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btIndexedMeshArray___destroy___0(btIndexedMeshArray* self) {
  delete self;
}

// btTriangleMesh

btTriangleMesh* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh_btTriangleMesh_0() {
  return new btTriangleMesh();
}

btTriangleMesh* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh_btTriangleMesh_1(bool use32bitIndices) {
  return new btTriangleMesh(use32bitIndices);
}

btTriangleMesh* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh_btTriangleMesh_2(bool use32bitIndices, bool use4componentVertices) {
  return new btTriangleMesh(use32bitIndices, use4componentVertices);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh_addTriangle_3(btTriangleMesh* self, const btVector3* vertex0, const btVector3* vertex1, const btVector3* vertex2) {
  self->addTriangle(*vertex0, *vertex1, *vertex2);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh_addTriangle_4(btTriangleMesh* self, const btVector3* vertex0, const btVector3* vertex1, const btVector3* vertex2, bool removeDuplicateVertices) {
  self->addTriangle(*vertex0, *vertex1, *vertex2, removeDuplicateVertices);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh_addTriangleIndices_3(btTriangleMesh* self, int index1, int index2, int index3) {
  self->addTriangleIndices(index1, index2, index3);
}

btIndexedMeshArray* EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh_getIndexedMeshArray_0(btTriangleMesh* self) {
  return &self->getIndexedMeshArray();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh_setScaling_1(btTriangleMesh* self, const btVector3* scaling) {
  self->setScaling(*scaling);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btTriangleMesh___destroy___0(btTriangleMesh* self) {
  delete self;
}

// btEmptyShape

btEmptyShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_btEmptyShape_0() {
  return new btEmptyShape();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_setLocalScaling_1(btEmptyShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_getLocalScaling_0(btEmptyShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_calculateLocalInertia_2(btEmptyShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_isCompound_0(btEmptyShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_getUserIndex_0(btEmptyShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_setUserIndex_1(btEmptyShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_getUserPointerAsInt_0(btEmptyShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_setUserPointerAsInt_1(btEmptyShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_getAabb_3(btEmptyShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape_getLocalBoundingSphere_0(btEmptyShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btEmptyShape___destroy___0(btEmptyShape* self) {
  delete self;
}

// btStaticPlaneShape

btStaticPlaneShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2(const btVector3* planeNormal, float planeConstant) {
  return new btStaticPlaneShape(*planeNormal, planeConstant);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_getPlaneNormal_0(btStaticPlaneShape* self) {
  return &self->getPlaneNormal();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_setPlaneConstant_1(btStaticPlaneShape* self, float v) {
  self->setPlaneConstant(v);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_setLocalScaling_1(btStaticPlaneShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_getLocalScaling_0(btStaticPlaneShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_calculateLocalInertia_2(btStaticPlaneShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_isCompound_0(btStaticPlaneShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_getUserIndex_0(btStaticPlaneShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_setUserIndex_1(btStaticPlaneShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_getUserPointerAsInt_0(btStaticPlaneShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_setUserPointerAsInt_1(btStaticPlaneShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_getAabb_3(btStaticPlaneShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape_getLocalBoundingSphere_0(btStaticPlaneShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btStaticPlaneShape___destroy___0(btStaticPlaneShape* self) {
  delete self;
}

// btBvhTriangleMeshShape

btBvhTriangleMeshShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2(btStridingMeshInterface* meshInterface, bool useQuantizedAabbCompression) {
  return new btBvhTriangleMeshShape(meshInterface, useQuantizedAabbCompression);
}

btBvhTriangleMeshShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3(btStridingMeshInterface* meshInterface, bool useQuantizedAabbCompression, bool buildBvh) {
  return new btBvhTriangleMeshShape(meshInterface, useQuantizedAabbCompression, buildBvh);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_setLocalScaling_1(btBvhTriangleMeshShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_getLocalScaling_0(btBvhTriangleMeshShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_calculateLocalInertia_2(btBvhTriangleMeshShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_isCompound_0(btBvhTriangleMeshShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_getUserIndex_0(btBvhTriangleMeshShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_setUserIndex_1(btBvhTriangleMeshShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_getUserPointerAsInt_0(btBvhTriangleMeshShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_setUserPointerAsInt_1(btBvhTriangleMeshShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_getAabb_3(btBvhTriangleMeshShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape_getLocalBoundingSphere_0(btBvhTriangleMeshShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBvhTriangleMeshShape___destroy___0(btBvhTriangleMeshShape* self) {
  delete self;
}

// btHeightfieldTerrainShape

btHeightfieldTerrainShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9(int heightStickWidth, int heightStickLength, void* heightfieldData, float heightScale, float minHeight, float maxHeight, int upAxis, PHY_ScalarType hdt, bool flipQuadEdges) {
  return new btHeightfieldTerrainShape(heightStickWidth, heightStickLength, heightfieldData, heightScale, minHeight, maxHeight, upAxis, hdt, flipQuadEdges);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_setMargin_1(btHeightfieldTerrainShape* self, float margin) {
  self->setMargin(margin);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_getMargin_0(btHeightfieldTerrainShape* self) {
  return self->getMargin();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_setLocalScaling_1(btHeightfieldTerrainShape* self, const btVector3* scaling) {
  self->setLocalScaling(*scaling);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_getLocalScaling_0(btHeightfieldTerrainShape* self) {
  return &self->getLocalScaling();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_calculateLocalInertia_2(btHeightfieldTerrainShape* self, float mass, btVector3* inertia) {
  self->calculateLocalInertia(mass, *inertia);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_isCompound_0(btHeightfieldTerrainShape* self) {
  return self->isCompound();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_getUserIndex_0(btHeightfieldTerrainShape* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_setUserIndex_1(btHeightfieldTerrainShape* self, int index) {
  self->setUserIndex(index);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_getUserPointerAsInt_0(btHeightfieldTerrainShape* self) {
  return self->getUserPointerAsInt();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_setUserPointerAsInt_1(btHeightfieldTerrainShape* self, int index) {
  self->setUserPointerAsInt(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_getAabb_3(btHeightfieldTerrainShape* self, const btTransform* t, btVector3* min, btVector3* max) {
  self->getAabb(*t, *min, *max);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape_getLocalBoundingSphere_0(btHeightfieldTerrainShape* self) {
  return self->getLocalBoundingSphere();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHeightfieldTerrainShape___destroy___0(btHeightfieldTerrainShape* self) {
  delete self;
}

// btDefaultCollisionConstructionInfo

btDefaultCollisionConstructionInfo* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0() {
  return new btDefaultCollisionConstructionInfo();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0(btDefaultCollisionConstructionInfo* self) {
  delete self;
}

// btDefaultCollisionConfiguration

btDefaultCollisionConfiguration* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0() {
  return new btDefaultCollisionConfiguration();
}

btDefaultCollisionConfiguration* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1(btDefaultCollisionConstructionInfo* info) {
  return new btDefaultCollisionConfiguration(*info);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDefaultCollisionConfiguration___destroy___0(btDefaultCollisionConfiguration* self) {
  delete self;
}

// btPersistentManifold

btPersistentManifold* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPersistentManifold_btPersistentManifold_0() {
  return new btPersistentManifold();
}

const btCollisionObject* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPersistentManifold_getBody0_0(btPersistentManifold* self) {
  return self->getBody0();
}

const btCollisionObject* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPersistentManifold_getBody1_0(btPersistentManifold* self) {
  return self->getBody1();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btPersistentManifold_getNumContacts_0(btPersistentManifold* self) {
  return self->getNumContacts();
}

btManifoldPoint* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPersistentManifold_getContactPoint_1(btPersistentManifold* self, int index) {
  return &self->getContactPoint(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btPersistentManifold___destroy___0(btPersistentManifold* self) {
  delete self;
}

// btCollisionDispatcher

btCollisionDispatcher* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1(btDefaultCollisionConfiguration* conf) {
  return new btCollisionDispatcher(conf);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionDispatcher_setDispatcherFlags_1(btCollisionDispatcher* self, int flags) {
  self->setDispatcherFlags(flags);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionDispatcher_getNumManifolds_0(btCollisionDispatcher* self) {
  return self->getNumManifolds();
}

btPersistentManifold* EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1(btCollisionDispatcher* self, int index) {
  return self->getManifoldByIndexInternal(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionDispatcher___destroy___0(btCollisionDispatcher* self) {
  delete self;
}

// btOverlappingPairCache

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btOverlappingPairCache___destroy___0(btOverlappingPairCache* self) {
  delete self;
}

// btCollisionConfiguration

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btCollisionConfiguration___destroy___0(btCollisionConfiguration* self) {
  delete self;
}

// btDbvtBroadphase

btDbvtBroadphase* EMSCRIPTEN_KEEPALIVE emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0() {
  return new btDbvtBroadphase();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btDbvtBroadphase___destroy___0(btDbvtBroadphase* self) {
  delete self;
}

// btBroadphaseProxy

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0(btBroadphaseProxy* self) {
  return self->m_collisionFilterGroup;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1(btBroadphaseProxy* self, int arg0) {
  self->m_collisionFilterGroup = arg0;
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0(btBroadphaseProxy* self) {
  return self->m_collisionFilterMask;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1(btBroadphaseProxy* self, int arg0) {
  self->m_collisionFilterMask = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btBroadphaseProxy___destroy___0(btBroadphaseProxy* self) {
  delete self;
}

// btRigidBodyConstructionInfo

btRigidBody::btRigidBodyConstructionInfo* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3(float mass, btMotionState* motionState, btCollisionShape* collisionShape) {
  return new btRigidBody::btRigidBodyConstructionInfo(mass, motionState, collisionShape);
}

btRigidBody::btRigidBodyConstructionInfo* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4(float mass, btMotionState* motionState, btCollisionShape* collisionShape, btVector3* localInertia) {
  return new btRigidBody::btRigidBodyConstructionInfo(mass, motionState, collisionShape, *localInertia);
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0(btRigidBody::btRigidBodyConstructionInfo* self) {
  return self->m_linearDamping;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1(btRigidBody::btRigidBodyConstructionInfo* self, float arg0) {
  self->m_linearDamping = arg0;
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0(btRigidBody::btRigidBodyConstructionInfo* self) {
  return self->m_angularDamping;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1(btRigidBody::btRigidBodyConstructionInfo* self, float arg0) {
  self->m_angularDamping = arg0;
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0(btRigidBody::btRigidBodyConstructionInfo* self) {
  return self->m_friction;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1(btRigidBody::btRigidBodyConstructionInfo* self, float arg0) {
  self->m_friction = arg0;
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0(btRigidBody::btRigidBodyConstructionInfo* self) {
  return self->m_rollingFriction;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1(btRigidBody::btRigidBodyConstructionInfo* self, float arg0) {
  self->m_rollingFriction = arg0;
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0(btRigidBody::btRigidBodyConstructionInfo* self) {
  return self->m_restitution;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1(btRigidBody::btRigidBodyConstructionInfo* self, float arg0) {
  self->m_restitution = arg0;
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0(btRigidBody::btRigidBodyConstructionInfo* self) {
  return self->m_linearSleepingThreshold;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1(btRigidBody::btRigidBodyConstructionInfo* self, float arg0) {
  self->m_linearSleepingThreshold = arg0;
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0(btRigidBody::btRigidBodyConstructionInfo* self) {
  return self->m_angularSleepingThreshold;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1(btRigidBody::btRigidBodyConstructionInfo* self, float arg0) {
  self->m_angularSleepingThreshold = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBodyConstructionInfo___destroy___0(btRigidBody::btRigidBodyConstructionInfo* self) {
  delete self;
}

// btRigidBody

btRigidBody* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_btRigidBody_1(const btRigidBody::btRigidBodyConstructionInfo* constructionInfo) {
  return new btRigidBody(*constructionInfo);
}

const btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getCenterOfMassTransform_0(btRigidBody* self) {
  return &self->getCenterOfMassTransform();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setCenterOfMassTransform_1(btRigidBody* self, const btTransform* xform) {
  self->setCenterOfMassTransform(*xform);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setSleepingThresholds_2(btRigidBody* self, float linear, float angular) {
  self->setSleepingThresholds(linear, angular);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getLinearSleepingThreshold_0(btRigidBody* self) {
  return self->getLinearSleepingThreshold();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setDamping_2(btRigidBody* self, float lin_damping, float ang_damping) {
  self->setDamping(lin_damping, ang_damping);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setMassProps_2(btRigidBody* self, float mass, const btVector3* inertia) {
  self->setMassProps(mass, *inertia);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getLinearFactor_0(btRigidBody* self) {
  return &self->getLinearFactor();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setLinearFactor_1(btRigidBody* self, const btVector3* linearFactor) {
  self->setLinearFactor(*linearFactor);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_applyTorque_1(btRigidBody* self, const btVector3* torque) {
  self->applyTorque(*torque);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_applyForce_2(btRigidBody* self, const btVector3* force, const btVector3* rel_pos) {
  self->applyForce(*force, *rel_pos);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_applyCentralForce_1(btRigidBody* self, const btVector3* force) {
  self->applyCentralForce(*force);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_applyTorqueImpulse_1(btRigidBody* self, const btVector3* torque) {
  self->applyTorqueImpulse(*torque);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_applyImpulse_2(btRigidBody* self, const btVector3* impulse, const btVector3* rel_pos) {
  self->applyImpulse(*impulse, *rel_pos);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_updateInertiaTensor_0(btRigidBody* self) {
  self->updateInertiaTensor();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getLinearVelocity_0(btRigidBody* self) {
  return &self->getLinearVelocity();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getAngularVelocity_0(btRigidBody* self) {
  return &self->getAngularVelocity();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setLinearVelocity_1(btRigidBody* self, const btVector3* lin_vel) {
  self->setLinearVelocity(*lin_vel);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setAngularVelocity_1(btRigidBody* self, const btVector3* ang_vel) {
  self->setAngularVelocity(*ang_vel);
}

btMotionState* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getMotionState_0(btRigidBody* self) {
  return self->getMotionState();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getAngularFactor_0(btRigidBody* self) {
  return &self->getAngularFactor();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setAngularFactor_1(btRigidBody* self, const btVector3* angularFactor) {
  self->setAngularFactor(*angularFactor);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getAabb_2(btRigidBody* self, btVector3* aabbMin, btVector3* aabbMax) {
  self->getAabb(*aabbMin, *aabbMax);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setGravity_1(btRigidBody* self, const btVector3* acceleration) {
  self->setGravity(*acceleration);
}

const int EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getFlags_0(btRigidBody* self) {
  return self->getFlags();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setFlags_1(btRigidBody* self, int flags) {
  self->setFlags(flags);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_wantsSleeping_0(btRigidBody* self) {
  return self->wantsSleeping();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_clearForces_0(btRigidBody* self) {
  self->clearForces();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getTotalForce_0(btRigidBody* self) {
  return &self->getTotalForce();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getTotalTorque_0(btRigidBody* self) {
  return &self->getTotalTorque();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_clearState_0(btRigidBody* self) {
  self->clearState();
}

btCollisionShape* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getCollisionShape_0(btRigidBody* self) {
  return self->getCollisionShape();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getActivationState_0(btRigidBody* self) {
  return self->getActivationState();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setActivationState_1(btRigidBody* self, int newState) {
  self->setActivationState(newState);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_forceActivationState_1(btRigidBody* self, int newState) {
  self->forceActivationState(newState);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_activate_0(btRigidBody* self) {
  self->activate();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_activate_1(btRigidBody* self, bool forceActivation) {
  self->activate(forceActivation);
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_isActive_0(btRigidBody* self) {
  return self->isActive();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_isKinematicObject_0(btRigidBody* self) {
  return self->isKinematicObject();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_isStaticObject_0(btRigidBody* self) {
  return self->isStaticObject();
}

bool EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_isStaticOrKinematicObject_0(btRigidBody* self) {
  return self->isStaticOrKinematicObject();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setRestitution_1(btRigidBody* self, float r) {
  self->setRestitution(r);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setFriction_1(btRigidBody* self, float f) {
  self->setFriction(f);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setRollingFriction_1(btRigidBody* self, float rf) {
  self->setRollingFriction(rf);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setSpinningFriction_1(btRigidBody* self, float sf) {
  self->setSpinningFriction(sf);
}

btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getWorldTransform_0(btRigidBody* self) {
  return &self->getWorldTransform();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getCollisionFlags_0(btRigidBody* self) {
  return self->getCollisionFlags();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setCollisionFlags_1(btRigidBody* self, int flags) {
  self->setCollisionFlags(flags);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setWorldTransform_1(btRigidBody* self, const btTransform* worldTrans) {
  self->setWorldTransform(*worldTrans);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setCollisionShape_1(btRigidBody* self, btCollisionShape* collisionShape) {
  self->setCollisionShape(collisionShape);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setCcdMotionThreshold_1(btRigidBody* self, float ccdMotionThreshold) {
  self->setCcdMotionThreshold(ccdMotionThreshold);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1(btRigidBody* self, float radius) {
  self->setCcdSweptSphereRadius(radius);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getUserIndex_0(btRigidBody* self) {
  return self->getUserIndex();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setUserIndex_1(btRigidBody* self, int index) {
  self->setUserIndex(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setUserIndex2_1(btRigidBody* self, int index) {
  self->setUserIndex2(index);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setIgnoreCollisionCheck_2(btRigidBody* self, const btCollisionObject* co, bool ig) {
  self->setIgnoreCollisionCheck(co, ig);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_setInterpolationWorldTransform_1(btRigidBody* self, const btTransform* trans) {
  self->setInterpolationWorldTransform(*trans);
}

btTransform* EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody_getInterpolationWorldTransform_0(btRigidBody* self) {
  return &self->getInterpolationWorldTransform();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btRigidBody___destroy___0(btRigidBody* self) {
  delete self;
}

// btConstraintSetting

btConstraintSetting* EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSetting_btConstraintSetting_0() {
  return new btConstraintSetting();
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSetting_get_m_tau_0(btConstraintSetting* self) {
  return self->m_tau;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSetting_set_m_tau_1(btConstraintSetting* self, float arg0) {
  self->m_tau = arg0;
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSetting_get_m_damping_0(btConstraintSetting* self) {
  return self->m_damping;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSetting_set_m_damping_1(btConstraintSetting* self, float arg0) {
  self->m_damping = arg0;
}

float EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSetting_get_m_impulseClamp_0(btConstraintSetting* self) {
  return self->m_impulseClamp;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSetting_set_m_impulseClamp_1(btConstraintSetting* self, float arg0) {
  self->m_impulseClamp = arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSetting___destroy___0(btConstraintSetting* self) {
  delete self;
}

// btPoint2PointConstraint

btPoint2PointConstraint* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2(btRigidBody* rbA, btVector3* rbB) {
  return new btPoint2PointConstraint(*rbA, *rbB);
}

btPoint2PointConstraint* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4(btRigidBody* rbA, btRigidBody* rbB, btVector3* pivotInA, btVector3* pivotInB) {
  return new btPoint2PointConstraint(*rbA, *rbB, *pivotInA, *pivotInB);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_setPivotA_1(btPoint2PointConstraint* self, const btVector3* pivotA) {
  self->setPivotA(*pivotA);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_setPivotB_1(btPoint2PointConstraint* self, const btVector3* pivotB) {
  self->setPivotB(*pivotB);
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_getPivotInA_0(btPoint2PointConstraint* self) {
  return &self->getPivotInA();
}

const btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_getPivotInB_0(btPoint2PointConstraint* self) {
  return &self->getPivotInB();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_enableFeedback_1(btPoint2PointConstraint* self, bool needsFeedback) {
  self->enableFeedback(needsFeedback);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0(btPoint2PointConstraint* self) {
  return self->getBreakingImpulseThreshold();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1(btPoint2PointConstraint* self, const float threshold) {
  self->setBreakingImpulseThreshold(threshold);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_getParam_2(btPoint2PointConstraint* self, int num, int axis) {
  return self->getParam(num, axis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_setParam_3(btPoint2PointConstraint* self, int num, float value, int axis) {
  self->setParam(num, value, axis);
}

btConstraintSetting* EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_get_m_setting_0(btPoint2PointConstraint* self) {
  return &self->m_setting;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint_set_m_setting_1(btPoint2PointConstraint* self, btConstraintSetting* arg0) {
  self->m_setting = *arg0;
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btPoint2PointConstraint___destroy___0(btPoint2PointConstraint* self) {
  delete self;
}

// btHingeConstraint

btHingeConstraint* EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_btHingeConstraint_4(btRigidBody* rbA, btRigidBody* rbB, btTransform* rbAFrame, btTransform* rbBFrame) {
  return new btHingeConstraint(*rbA, *rbB, *rbAFrame, *rbBFrame);
}

btHingeConstraint* EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_btHingeConstraint_5(btRigidBody* rbA, btRigidBody* rbB, btTransform* rbAFrame, btTransform* rbBFrame, bool useReferenceFrameA) {
  return new btHingeConstraint(*rbA, *rbB, *rbAFrame, *rbBFrame, useReferenceFrameA);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setLimit_4(btHingeConstraint* self, float low, float high, float softness, float biasFactor) {
  self->setLimit(low, high, softness, biasFactor);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setLimit_5(btHingeConstraint* self, float low, float high, float softness, float biasFactor, float relaxationFactor) {
  self->setLimit(low, high, softness, biasFactor, relaxationFactor);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_enableAngularMotor_3(btHingeConstraint* self, bool enableMotor, float targetVelocity, float maxMotorImpulse) {
  self->enableAngularMotor(enableMotor, targetVelocity, maxMotorImpulse);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setAngularOnly_1(btHingeConstraint* self, bool angularOnly) {
  self->setAngularOnly(angularOnly);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_enableMotor_1(btHingeConstraint* self, bool enableMotor) {
  self->enableMotor(enableMotor);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1(btHingeConstraint* self, float maxMotorImpulse) {
  self->setMaxMotorImpulse(maxMotorImpulse);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setMotorTarget_2(btHingeConstraint* self, float targetAngle, float dt) {
  self->setMotorTarget(targetAngle, dt);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setFrames_2(btHingeConstraint* self, const btTransform* frameA, const btTransform* frameB) {
  self->setFrames(*frameA, *frameB);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setAxis_1(btHingeConstraint* self, btVector3* axisInA) {
  self->setAxis(*axisInA);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setUseReferenceFrameA_1(btHingeConstraint* self, bool urfa) {
  self->setUseReferenceFrameA(urfa);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_enableFeedback_1(btHingeConstraint* self, bool needsFeedback) {
  self->enableFeedback(needsFeedback);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0(btHingeConstraint* self) {
  return self->getBreakingImpulseThreshold();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1(btHingeConstraint* self, const float threshold) {
  self->setBreakingImpulseThreshold(threshold);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_getParam_2(btHingeConstraint* self, int num, int axis) {
  return self->getParam(num, axis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint_setParam_3(btHingeConstraint* self, int num, float value, int axis) {
  self->setParam(num, value, axis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btHingeConstraint___destroy___0(btHingeConstraint* self) {
  delete self;
}

// btFixedConstraint

btFixedConstraint* EMSCRIPTEN_KEEPALIVE emscripten_bind_btFixedConstraint_btFixedConstraint_4(btRigidBody* rbA, btRigidBody* rbB, const btTransform* frameInA, const btTransform* frameInB) {
  return new btFixedConstraint(*rbA, *rbB, *frameInA, *frameInB);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btFixedConstraint_enableFeedback_1(btFixedConstraint* self, bool needsFeedback) {
  self->enableFeedback(needsFeedback);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0(btFixedConstraint* self) {
  return self->getBreakingImpulseThreshold();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1(btFixedConstraint* self, const float threshold) {
  self->setBreakingImpulseThreshold(threshold);
}

const float EMSCRIPTEN_KEEPALIVE emscripten_bind_btFixedConstraint_getParam_2(btFixedConstraint* self, int num, int axis) {
  return self->getParam(num, axis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btFixedConstraint_setParam_3(btFixedConstraint* self, int num, float value, int axis) {
  self->setParam(num, value, axis);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btFixedConstraint___destroy___0(btFixedConstraint* self) {
  delete self;
}

// btSequentialImpulseConstraintSolver

btSequentialImpulseConstraintSolver* EMSCRIPTEN_KEEPALIVE emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0() {
  return new btSequentialImpulseConstraintSolver();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0(btSequentialImpulseConstraintSolver* self) {
  delete self;
}

// btConstraintSolver

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btConstraintSolver___destroy___0(btConstraintSolver* self) {
  delete self;
}

// ccDiscreteDynamicsWorld

ccDiscreteDynamicsWorld* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_ccDiscreteDynamicsWorld_4(btDispatcher* dispatcher, btBroadphaseInterface* pairCache, btConstraintSolver* constraintSolver, btCollisionConfiguration* collisionConfiguration) {
  return new ccDiscreteDynamicsWorld(dispatcher, pairCache, constraintSolver, collisionConfiguration);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_setAllowSleep_1(ccDiscreteDynamicsWorld* self, bool v) {
  self->setAllowSleep(v);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_setDeactivationTime_1(ccDiscreteDynamicsWorld* self, float v) {
  self->setDeactivationTime(v);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_setNarrowPhaseMethod_1(ccDiscreteDynamicsWorld* self, int v) {
  self->setNarrowPhaseMethod(v);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_setAllowCcdPenetration_1(ccDiscreteDynamicsWorld* self, float v) {
  self->setAllowCcdPenetration(v);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_rayTest_3(ccDiscreteDynamicsWorld* self, const btVector3* rayFromWorld, const btVector3* rayToWorld, btCollisionWorld::RayResultCallback* resultCallback) {
  self->rayTest(*rayFromWorld, *rayToWorld, *resultCallback);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_rayTestSingle_6(ccDiscreteDynamicsWorld* self, const btTransform* rayFromTrans, const btTransform* rayToTrans, btCollisionObject* collisionObject, const btCollisionShape* collisionShape, const btTransform* colObjWorldTransform, btCollisionWorld::RayResultCallback* resultCallback) {
  self->rayTestSingle(*rayFromTrans, *rayToTrans, collisionObject, collisionShape, *colObjWorldTransform, *resultCallback);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_addCollisionObject_1(ccDiscreteDynamicsWorld* self, btCollisionObject* collisionObject) {
  self->addCollisionObject(collisionObject);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_addCollisionObject_2(ccDiscreteDynamicsWorld* self, btCollisionObject* collisionObject, int collisionFilterGroup) {
  self->addCollisionObject(collisionObject, collisionFilterGroup);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_addCollisionObject_3(ccDiscreteDynamicsWorld* self, btCollisionObject* collisionObject, int collisionFilterGroup, int collisionFilterMask) {
  self->addCollisionObject(collisionObject, collisionFilterGroup, collisionFilterMask);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_removeCollisionObject_1(ccDiscreteDynamicsWorld* self, btCollisionObject* collisionObject) {
  self->removeCollisionObject(collisionObject);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_setContactBreakingThreshold_1(ccDiscreteDynamicsWorld* self, float b) {
  self->setContactBreakingThreshold(b);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_setGravity_1(ccDiscreteDynamicsWorld* self, btVector3* gravity) {
  self->setGravity(*gravity);
}

btVector3* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_getGravity_0(ccDiscreteDynamicsWorld* self) {
  static btVector3 temp;
  return (temp = self->getGravity(), &temp);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_addRigidBody_1(ccDiscreteDynamicsWorld* self, btRigidBody* body) {
  self->addRigidBody(body);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_addRigidBody_3(ccDiscreteDynamicsWorld* self, btRigidBody* body, int group, int mask) {
  self->addRigidBody(body, group, mask);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_removeRigidBody_1(ccDiscreteDynamicsWorld* self, btRigidBody* body) {
  self->removeRigidBody(body);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_addConstraint_1(ccDiscreteDynamicsWorld* self, btTypedConstraint* constraint) {
  self->addConstraint(constraint);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_addConstraint_2(ccDiscreteDynamicsWorld* self, btTypedConstraint* constraint, bool disableCollisionsBetweenLinkedBodies) {
  self->addConstraint(constraint, disableCollisionsBetweenLinkedBodies);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_removeConstraint_1(ccDiscreteDynamicsWorld* self, btTypedConstraint* constraint) {
  self->removeConstraint(constraint);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_stepSimulation_1(ccDiscreteDynamicsWorld* self, float timeStep) {
  return self->stepSimulation(timeStep);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_stepSimulation_2(ccDiscreteDynamicsWorld* self, float timeStep, int maxSubSteps) {
  return self->stepSimulation(timeStep, maxSubSteps);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_stepSimulation_3(ccDiscreteDynamicsWorld* self, float timeStep, int maxSubSteps, float fixedTimeStep) {
  return self->stepSimulation(timeStep, maxSubSteps, fixedTimeStep);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_addAction_1(ccDiscreteDynamicsWorld* self, btActionInterface* action) {
  self->addAction(action);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_removeAction_1(ccDiscreteDynamicsWorld* self, btActionInterface* action) {
  self->removeAction(action);
}

btRigidBody* EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld_getFixedBody_0(ccDiscreteDynamicsWorld* self) {
  return &self->getFixedBody();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_ccDiscreteDynamicsWorld___destroy___0(ccDiscreteDynamicsWorld* self) {
  delete self;
}

// btActionInterface

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btActionInterface_updateAction_2(btActionInterface* self, btCollisionWorld* collisionWorld, float deltaTimeStep) {
  self->updateAction(collisionWorld, deltaTimeStep);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_btActionInterface___destroy___0(btActionInterface* self) {
  delete self;
}

// PHY_ScalarType
PHY_ScalarType EMSCRIPTEN_KEEPALIVE emscripten_enum_PHY_ScalarType_PHY_FLOAT() {
  return PHY_FLOAT;
}
PHY_ScalarType EMSCRIPTEN_KEEPALIVE emscripten_enum_PHY_ScalarType_PHY_DOUBLE() {
  return PHY_DOUBLE;
}
PHY_ScalarType EMSCRIPTEN_KEEPALIVE emscripten_enum_PHY_ScalarType_PHY_INTEGER() {
  return PHY_INTEGER;
}
PHY_ScalarType EMSCRIPTEN_KEEPALIVE emscripten_enum_PHY_ScalarType_PHY_SHORT() {
  return PHY_SHORT;
}
PHY_ScalarType EMSCRIPTEN_KEEPALIVE emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88() {
  return PHY_FIXEDPOINT88;
}
PHY_ScalarType EMSCRIPTEN_KEEPALIVE emscripten_enum_PHY_ScalarType_PHY_UCHAR() {
  return PHY_UCHAR;
}

// btConstraintParams
btConstraintParams EMSCRIPTEN_KEEPALIVE emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP() {
  return BT_CONSTRAINT_ERP;
}
btConstraintParams EMSCRIPTEN_KEEPALIVE emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP() {
  return BT_CONSTRAINT_STOP_ERP;
}
btConstraintParams EMSCRIPTEN_KEEPALIVE emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM() {
  return BT_CONSTRAINT_CFM;
}
btConstraintParams EMSCRIPTEN_KEEPALIVE emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM() {
  return BT_CONSTRAINT_STOP_CFM;
}

}

