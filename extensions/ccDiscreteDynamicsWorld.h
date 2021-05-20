
#ifndef CC_DISCRETE_DYNAMICS_WORLD_H
#define CC_DISCRETE_DYNAMICS_WORLD_H

#include "BulletDynamics/Dynamics/btDiscreteDynamicsWorld.h"
#include "LinearMath/btScalar.h"

ATTRIBUTE_ALIGNED16(class) ccDiscreteDynamicsWorld : public btDiscreteDynamicsWorld {
public:
	BT_DECLARE_ALIGNED_ALLOCATOR();

	ccDiscreteDynamicsWorld(btDispatcher* dispatcher,btBroadphaseInterface* pairCache,btConstraintSolver* constraintSolver,btCollisionConfiguration* collisionConfiguration);

	///apply gravity, call this once per timestep
	virtual void	applyGravity();
};

#endif // CC_DISCRETE_DYNAMICS_WORLD_H