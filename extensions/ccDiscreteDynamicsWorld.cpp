
#include "ccDiscreteDynamicsWorld.h"
#include "BulletDynamics/Dynamics/btRigidBody.h"
#include "LinearMath/btScalar.h"
#include "LinearMath/btVector3.h"

ccDiscreteDynamicsWorld::ccDiscreteDynamicsWorld(
	btDispatcher *dispatcher, btBroadphaseInterface *pairCache,
	btConstraintSolver *constraintSolver,
	btCollisionConfiguration *collisionConfiguration)
	: btDiscreteDynamicsWorld(dispatcher, pairCache, constraintSolver,
		collisionConfiguration) {
			// reset default to 0.1
			gDeactivationTime = btScalar(0.1);
		}

void ccDiscreteDynamicsWorld::applyGravity() {
	///@todo: iterate over awake simulation islands!
	for (int i = 0; i < m_nonStaticRigidBodies.size(); i++) {
		btRigidBody *body = m_nonStaticRigidBodies[i];
		// compute unconstraint velocity for dynamics
		if (body->isActive() && !body->isKinematicObject()) {
			if (body->getLinearDamping() == 1.) {
				(const_cast<btVector3 &>(body->getTotalForce())).setZero();
			}
			else {
				body->applyGravity();
			}
			if (body->getAngularDamping() == 1.) {
				(const_cast<btVector3 &>(body->getTotalTorque())).setZero();
			}
		}
	}
}
