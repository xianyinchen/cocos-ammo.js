
#include "ccDiscreteDynamicsWorld.h"
#include "LinearMath/btScalar.h"
#include "LinearMath/btQuickprof.h"
#include "LinearMath/btIDebugDraw.h"
#include "LinearMath/btVector3.h"

ccDiscreteDynamicsWorld::ccDiscreteDynamicsWorld(btDispatcher *dispatcher,
                        btBroadphaseInterface *pairCache,
                        btConstraintSolver *constraintSolver,
                        btCollisionConfiguration *collisionConfiguration)
    : btDiscreteDynamicsWorld(dispatcher, pairCache, constraintSolver,collisionConfiguration) {}

void  ccDiscreteDynamicsWorld::applyGravity()
{
	///@todo: iterate over awake simulation islands!
	for (int i = 0; i < m_nonStaticRigidBodies.size(); i++)
	{
		btRigidBody* body = m_nonStaticRigidBodies[i];
		// compute unconstraint velocity for dynamics
		if (body->isActive() && !body->isKinematicObject()) {
			btVector3 linVel = body->getLinearVelocity();
			const btVector3& gravityAcce = body->getGravity();
			linVel += btPow(btScalar(1)-body->getLinearDamping(), m_fixedTimeStep) * m_fixedTimeStep * gravityAcce;
			body->setLinearVelocity(linVel);
		}
	}
}
