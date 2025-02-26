#include <stddef.h>
#include <emscripten.h>
#include <btBulletDynamicsCommon.h>
#include <BulletSoftBody/btSoftBody.h>
#include <extensions/ccDiscreteDynamicsWorld.h>
#include <extensions/ccCompoundShape.h>
#include <extensions/ccMaterial.h>
#include <extensions/ccKinematicCharacterController.h>
#include <extensions/ccOverlapFilterCallback.h>
#include <extensions/ccRayResultCallback.h>
#include <extensions/ccConvexCastCallBack.h>
#include <BulletCollision/CollisionShapes/btConvexPolyhedron.h>
#include <BulletCollision/CollisionShapes/btHeightfieldTerrainShape.h>
#include <idl_templates.h>

using namespace cc;

#include <ammo_glue.cpp>