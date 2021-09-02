// tslint:disable
declare function instantiate(env: any, buffer: ArrayBuffer): Bullet.instance;

declare namespace Bullet {
    type ptr = number;
    interface instance {
        Vec3_new(x: number, y: number, z: number): ptr;
        Vec3_x(p: ptr): number;
        Vec3_y(p: ptr): number;
        Vec3_z(p: ptr): number;
        Vec3_set(p: ptr, x: number, y: number, z: number): void;

        Quat_new(x: number, y: number, z: number, w: number): ptr;
        Quat_x(p: ptr): number;
        Quat_y(p: ptr): number;
        Quat_z(p: ptr): number;
        Quat_w(p: ptr): number;
        Quat_set(p: ptr, x: number, y: number, z: number, w: number): void;

        Transform_new(): ptr;
        Transform_setIdentity(p: ptr): void;
        Transform_getOrigin(p: ptr): ptr;
        Transform_setRotation(p: ptr, quate: ptr): void;
        Transform_getRotationRef(p: ptr, quat: ptr): void;

        // shapes

        CollisionShape_isCompound(p: ptr): boolean;
        CollisionShape_setLocalScaling(p: ptr, scale: ptr): void;
        CollisionShape_calculateLocalInertia(p: ptr, mass: number, localInertia: ptr): void;

        EmptyShape_static(): ptr;

        BoxShape_new(p: ptr): ptr;
        BoxShape_setUnscaledHalfExtents(p: ptr, halfExtents: ptr): void;

        SphereShape_new(radius: number): ptr;
        SphereShape_setUnscaledRadius(p: ptr, radius: number): void;

        StaticPlaneShape_new(normal: ptr, constant: number): ptr;
        StaticPlaneShape_getPlaneNormal(p: ptr): ptr;
        StaticPlaneShape_setPlaneConstant(p: ptr, constant: number): void;

        CompoundShape_new(enableDynamicAabbTree: boolean): ptr;
        CompoundShape_getNumChildShapes(p: ptr): number;
        CompoundShape_getChildShape(p: ptr, i: number): ptr;
        CompoundShape_addChildShape(p: ptr, local: ptr, shape: ptr): void;
        CompoundShape_removeChildShape(p: ptr, shape: ptr): void;
        CompoundShape_updateChildTransform(p: ptr, i: number, trans: ptr, shouldRecalculateLocalAabb: boolean): void;

        // collision

        CollisionObject_new(): number;
        CollisionObject_getCollisionShape(p: ptr): ptr;
        CollisionObject_setContactProcessingThreshold(p: ptr, contactProcessingThreshold: number): void;
        CollisionObject_getActivationState(p: ptr): number;
        CollisionObject_setActivationState(p: ptr, newState: number): void;
        CollisionObject_forceActivationState(p: ptr, newState: number): void;
        CollisionObject_activate(p: ptr, forceActivation?: boolean): void;
        CollisionObject_isActive(p: ptr): boolean;
        CollisionObject_isKinematicObject(p: ptr): boolean;
        CollisionObject_isStaticObject(p: ptr): boolean;
        CollisionObject_isStaticOrKinematicObject(p: ptr): boolean;
        CollisionObject_setRestitution(p: ptr, rest: number): void;
        CollisionObject_setFriction(p: ptr, frict: number): void;
        CollisionObject_setRollingFriction(p: ptr, frict: number): void;
        CollisionObject_getWorldTransform(p: ptr): ptr;
        CollisionObject_getCollisionFlags(p: ptr): number;
        CollisionObject_setCollisionFlags(p: ptr, flags: number): void;
        CollisionObject_setWorldTransform(p: ptr, transform: ptr): void;
        CollisionObject_setCollisionShape(p: ptr, shape: ptr): void;
        CollisionObject_setCcdMotionThreshold(p: ptr, ccdMotionThreshold: number): void;
        CollisionObject_setCcdSweptSphereRadius(p: ptr, radius: number): void;
        CollisionObject_getUserIndex(p: ptr): number;
        CollisionObject_setUserIndex(p: ptr, index: number): void;
        CollisionObject_getUserPointer(p: ptr): number;
        CollisionObject_setUserPointer(p: ptr, userPointer: number): void;

        RigidBody_new(m: number, ms:number): ptr;
        RigidBody_getFlags(p: ptr): number;
        RigidBody_setFlags(p: ptr, flags: number): void;
        RigidBody_setGravity(p: ptr, g: ptr): number;
        RigidBody_setDamping(p: ptr, lin: number, ang: number): void;
        RigidBody_setMassProps(p: ptr, m: number, localInertia: ptr): void;
        RigidBody_setLinearFactor(p: ptr, f: ptr): number;
        RigidBody_setAngularFactor(p: ptr, f: ptr): number;
        RigidBody_getLinearVelocity(p: ptr): ptr;
        RigidBody_getAngularVelocity(p: ptr): ptr;
        RigidBody_setLinearVelocity(p: ptr, v: ptr): void;
        RigidBody_setAngularVelocity(p: ptr, v: ptr): void;
        RigidBody_clearState(p: ptr): void;
        RigidBody_clearForces(p: ptr): void;
        RigidBody_wantsSleeping(p: ptr): boolean;
        RigidBody_setSleepingThresholds(p: ptr, linear: number, angular: number): void;
        RigidBody_getLinearSleepingThreshold(p: ptr): number;
        RigidBody_getMotionState(p: ptr): ptr;
        RigidBody_applyTorque(p: ptr, f: ptr): void;
        RigidBody_applyForce(p: ptr, f: ptr, rp: ptr): void;
        RigidBody_applyImpulse(p: ptr, f: ptr, rp: ptr): void;

        // dynamic

        ccMotionState_new(transform: ptr): ptr;
        ccMotionState_getWorldTransform(p: ptr, transform: ptr): void;
        ccMotionState_setWorldTransform(p: ptr, transform: ptr): void;

        DefaultCollisionConfiguration_static(): ptr;
        CollisionDispatcher_new(p: ptr): ptr;
        Dispatcher_getNumManifolds(p: ptr): number;
        Dispatcher_getManifoldByIndexInternal(p: ptr, i: number): ptr;

        ManifoldPoint_getShape0(p: ptr): ptr;
        ManifoldPoint_getShape1(p: ptr): ptr;
        ManifoldPoint_get_m_index0(p: ptr): number;
        ManifoldPoint_get_m_index1(p: ptr): number;
        PersistentManifold_getBody0(p: ptr): ptr;
        PersistentManifold_getBody1(p: ptr): ptr;
        PersistentManifold_getNumContacts(p: ptr): number;
        PersistentManifold_getContactPoint(p: ptr, i: number): ptr;

        DbvtBroadphase_new(): ptr;
        SequentialImpulseConstraintSolver_new(): ptr;

        CollisionWorld_addCollisionObject(p: ptr, body: ptr, g: number, m: number): void;
        CollisionWorld_removeCollisionObject(p: ptr, body: ptr): void;

        ccDiscreteDynamicsWorld_new(dispatcher: ptr, pairCache: ptr, solver: ptr, config: ptr): ptr;
        DynamicsWorld_setGravity(p: ptr, g: ptr): void;
        DynamicsWorld_stepSimulation(p: ptr, timeStep: number, maxSubSteps: number, fixedTimeStep: number): ptr;
        DynamicsWorld_addRigidBody(p: ptr, body: ptr, g: number, m: number): void;
        DynamicsWorld_removeRigidBody(p: ptr, body: ptr): void;
    }
}

declare module '@cocos/bullet' {
    export = instantiate;
}
