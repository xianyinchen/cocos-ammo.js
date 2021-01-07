/*
Bullet Continuous Collision Detection and Physics Library
Copyright (c) 2003-2006 Erwin Coumans  http://continuousphysics.com/Bullet/

This software is provided 'as-is', without any express or implied warranty.
In no event will the authors be held liable for any damages arising from the use of this software.
Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it freely,
subject to the following restrictions:

1. The origin of this software must not be misrepresented; you must not claim that you wrote the original software. If you use this software in a product, an acknowledgment in the product documentation would be appreciated but is not required.
2. Altered source versions must be plainly marked as such, and must not be misrepresented as being the original software.
3. This notice may not be removed or altered from any source distribution.
*/


///create 125 (5x5x5) dynamic object
#define ARRAY_SIZE_X 1
#define ARRAY_SIZE_Y 1
#define ARRAY_SIZE_Z 1

//maximum number of objects (and allow user to shoot additional boxes)
#define MAX_PROXIES (ARRAY_SIZE_X*ARRAY_SIZE_Y*ARRAY_SIZE_Z + 1024)

///scaling of the objects (0.1 = 20 centimeter boxes )
#define SCALING 1.
#define START_POS_X -5
#define START_POS_Y -5
#define START_POS_Z -3

#include "BasicDemo.h"
#include "GlutStuff.h"
///btBulletDynamicsCommon.h is the main Bullet include file, contains most common include files.
#include "btBulletDynamicsCommon.h"

#include <stdio.h> //printf debugging
#include "GLDebugDrawer.h"
#include "LinearMath/btAabbUtil2.h"
#include "../Extras/ConvexDecomposition/cd_wavefront.cpp"
#include "../../extensions/ccOverlapFilterCallback.h"

static GLDebugDrawer gDebugDraw;

///The MyOverlapCallback is used to show how to collect object that overlap with a given bounding box defined by aabbMin and aabbMax. 
///See m_dynamicsWorld->getBroadphase()->aabbTest.
struct	MyOverlapCallback : public btBroadphaseAabbCallback
{
	btVector3 m_queryAabbMin;
	btVector3 m_queryAabbMax;

	int m_numOverlap;
	MyOverlapCallback(const btVector3& aabbMin, const btVector3& aabbMax) : m_queryAabbMin(aabbMin), m_queryAabbMax(aabbMax), m_numOverlap(0) {}
	virtual bool	process(const btBroadphaseProxy* proxy)
	{
		btVector3 proxyAabbMin, proxyAabbMax;
		btCollisionObject* colObj0 = (btCollisionObject*)proxy->m_clientObject;
		colObj0->getCollisionShape()->getAabb(colObj0->getWorldTransform(), proxyAabbMin, proxyAabbMax);
		if (TestAabbAgainstAabb2(proxyAabbMin, proxyAabbMax, m_queryAabbMin, m_queryAabbMax))
		{
			m_numOverlap++;
		}
		return true;
	}
};

void BasicDemo::clientMoveAndDisplay()
{
	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	//simple dynamics world doesn't handle fixed-time-stepping
	float ms = getDeltaTimeMicroseconds();

	///step the simulation
	if (m_dynamicsWorld)
	{
		m_dynamicsWorld->stepSimulation(ms / 1000000.f);
		//optional but useful: debug drawing
		m_dynamicsWorld->debugDrawWorld();

		btVector3 aabbMin(1, 1, 1);
		btVector3 aabbMax(2, 2, 2);

		MyOverlapCallback aabbOverlap(aabbMin, aabbMax);
		m_dynamicsWorld->getBroadphase()->aabbTest(aabbMin, aabbMax, aabbOverlap);

		if (aabbOverlap.m_numOverlap)
			printf("#aabb overlap = %d\n", aabbOverlap.m_numOverlap);

		auto num = m_dynamicsWorld->getDispatcher()->getNumManifolds();
		if (num > 0) {
			auto mmm = m_dynamicsWorld->getDispatcher()->getManifoldByIndexInternal(0);
			auto mm2 = mmm->getNumContacts();
			printf("#num manifolds = %d , num contacts = %d\n", num, mm2);
		}
	}

	renderme();

	glFlush();

	swapBuffers();

}



void BasicDemo::displayCallback(void) {

	glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	renderme();

	//optional but useful: debug drawing to detect problems
	if (m_dynamicsWorld)
		m_dynamicsWorld->debugDrawWorld();

	glFlush();
	swapBuffers();
}





void	BasicDemo::initPhysics()
{
	setTexturing(true);
	setShadows(true);

	setCameraDistance(btScalar(SCALING*50.));

	///collision configuration contains default setup for memory, collision setup
	m_collisionConfiguration = new btDefaultCollisionConfiguration();
	//m_collisionConfiguration->setConvexConvexMultipointIterations();

	///use the default collision dispatcher. For parallel processing you can use a diffent dispatcher (see Extras/BulletMultiThreaded)
	m_dispatcher = new	btCollisionDispatcher(m_collisionConfiguration);
	//m_dispatcher->setDispatcherFlags(btCollisionDispatcher::CD_STATIC_STATIC_REPORTED | m_dispatcher->getDispatcherFlags());
	m_broadphase = new btDbvtBroadphase();

	///the default constraint solver. For parallel processing you can use a different solver (see Extras/BulletMultiThreaded)
	btSequentialImpulseConstraintSolver* sol = new btSequentialImpulseConstraintSolver;
	m_solver = sol;

	m_dynamicsWorld = new btDiscreteDynamicsWorld(m_dispatcher, m_broadphase, m_solver, m_collisionConfiguration);
	m_dynamicsWorld->setDebugDrawer(&gDebugDraw);

	m_dynamicsWorld->setGravity(btVector3(0, -10, 0));

	btOverlapFilterCallback * filterCallback = new ccOverlapFilterCallback();
	m_dynamicsWorld->getPairCache()->setOverlapFilterCallback(filterCallback);

	///create a few basic rigid bodies
	btBoxShape* groundShape = new btBoxShape(btVector3(btScalar(50.), btScalar(50.), btScalar(50.)));
	//groundShape->initializePolyhedralFeatures();
//	btCollisionShape* groundShape = new btStaticPlaneShape(btVector3(0,1,0),50);

	m_collisionShapes.push_back(groundShape);

	btTransform groundTransform;
	groundTransform.setIdentity();
	groundTransform.setOrigin(btVector3(0, -50, 0));

	// if (false)
	{
		btBoxShape* s0 = new btBoxShape(btVector3(5, 5, 5));
		m_collisionShapes.push_back(s0);
		//btCollisionObject* co = new btCollisionObject();

		btScalar mass(0.);
		btVector3 localInertia(0, 0, 0);
		btDefaultMotionState* myMotionState = new btDefaultMotionState(btTransform(btQuaternion(0, 0, 0, 1), btVector3(0, 2, 0)));
		btRigidBody::btRigidBodyConstructionInfo rbInfo(mass, myMotionState, s0, localInertia);
		btRigidBody* co = new btRigidBody(rbInfo);
		co->setWorldTransform(btTransform(btQuaternion(0,0,0,1), btVector3(0, 2, 0)));
		co->setCollisionShape(s0);
		co->setCollisionFlags(btCollisionObject::CF_STATIC_OBJECT);
		co->setActivationState(DISABLE_DEACTIVATION);
		m_dynamicsWorld->addCollisionObject(co);

		//btCapsuleShape* s1 = new btCapsuleShape(5, 10);
		btBoxShape* s1 = new btBoxShape(btVector3(5, 5, 5));
		m_collisionShapes.push_back(s1);
		//btCollisionObject* co2 = new btCollisionObject();
		btDefaultMotionState* myMotionState2 = new btDefaultMotionState(btTransform(btQuaternion(0, 0, 0, 1), btVector3(2.5, 4.5, 2.5)));
		btRigidBody::btRigidBodyConstructionInfo rbInfo2(mass, myMotionState2, s1, localInertia);
		btRigidBody* co2 = new btRigidBody(rbInfo2);
		co2->setWorldTransform(btTransform(btQuaternion(0,0,0,1), btVector3(2.5, 4.5, 2.5)));
		co2->setCollisionShape(s1);
		//co2->setCollisionFlags(btCollisionObject::CF_NO_CONTACT_RESPONSE);
		co2->setCollisionFlags(btCollisionObject::CF_KINEMATIC_OBJECT);
		co2->setActivationState(DISABLE_DEACTIVATION);
		m_dynamicsWorld->addCollisionObject(co2);
	}

	if (false)
	{
		btBoxShape* s0 = new btBoxShape(btVector3(5, 5, 5));
		m_collisionShapes.push_back(s0);
		btCollisionObject* co = new btCollisionObject();
		co->setWorldTransform(btTransform(btQuaternion(0,0,0,1), btVector3(0, 2, 0)));
		co->setCollisionShape(s0);
		m_dynamicsWorld->addCollisionObject(co);

		btCapsuleShape* s1 = new btCapsuleShape(5, 10);
		m_collisionShapes.push_back(s1);
		btCollisionObject* co2 = new btCollisionObject();
		co2->setWorldTransform(btTransform(btQuaternion(0,0,0,1), btVector3(0, 3, 0)));
		co2->setCollisionShape(s1);
		co2->setCollisionFlags(btCollisionObject::CF_NO_CONTACT_RESPONSE);
		m_dynamicsWorld->addCollisionObject(co2);
	}

	//We can also use DemoApplication::localCreateRigidBody, but for clarity it is provided here:
	if (false)
	{
		btScalar mass(0.);

		//rigidbody is dynamic if and only if mass is non zero, otherwise static
		bool isDynamic = (mass != 0.f);

		btVector3 localInertia(0, 0, 0);
		if (isDynamic)
			groundShape->calculateLocalInertia(mass, localInertia);

		//using motionstate is recommended, it provides interpolation capabilities, and only synchronizes 'active' objects
		btDefaultMotionState* myMotionState = new btDefaultMotionState(groundTransform);
		btRigidBody::btRigidBodyConstructionInfo rbInfo(mass, myMotionState, groundShape, localInertia);
		btRigidBody* body = new btRigidBody(rbInfo);

		//add the body to the dynamics world
		m_dynamicsWorld->addRigidBody(body);
	}

	if (false)
	{
		//create a few dynamic rigidbodies
		// Re-using the same collision is better for memory usage and performance

		btBoxShape* colShape = new btBoxShape(btVector3(SCALING * 1, SCALING * 1, SCALING * 1));
		//btCollisionShape* colShape = new btSphereShape(btScalar(1.));
		m_collisionShapes.push_back(colShape);

		/// Create Dynamic Objects
		btTransform startTransform;
		startTransform.setIdentity();

		btScalar	mass(1.f);

		//rigidbody is dynamic if and only if mass is non zero, otherwise static
		bool isDynamic = (mass != 0.f);

		btVector3 localInertia(0, 0, 0);
		if (isDynamic)
			colShape->calculateLocalInertia(mass, localInertia);

		float start_x = START_POS_X - ARRAY_SIZE_X / 2;
		float start_y = START_POS_Y;
		float start_z = START_POS_Z - ARRAY_SIZE_Z / 2;

		for (int k = 0; k < ARRAY_SIZE_Y; k++)
		{
			for (int i = 0; i < ARRAY_SIZE_X; i++)
			{
				for (int j = 0; j < ARRAY_SIZE_Z; j++)
				{
					startTransform.setOrigin(SCALING*btVector3(
						btScalar(2.0*i + start_x),
						btScalar(20 + 2.0*k + start_y),
						btScalar(2.0*j + start_z)));


					//using motionstate is recommended, it provides interpolation capabilities, and only synchronizes 'active' objects
					btDefaultMotionState* myMotionState = new btDefaultMotionState(startTransform);
					btRigidBody::btRigidBodyConstructionInfo rbInfo(mass, myMotionState, colShape, localInertia);
					btRigidBody* body = new btRigidBody(rbInfo);


					m_dynamicsWorld->addRigidBody(body);
				}
			}
		}

		btBoxShape* colShape2 = new btBoxShape(btVector3(SCALING * 10, SCALING * 10, SCALING * 10));
		m_collisionShapes.push_back(colShape2);
		for (int k = 0; k < ARRAY_SIZE_Y; k++)
		{
			for (int i = 0; i < ARRAY_SIZE_X; i++)
			{
				for (int j = 0; j < 5; j++)
				{
					startTransform.setOrigin(SCALING*btVector3(
						btScalar(2.0*i + start_x),
						btScalar(20 + 2.0*k + start_y),
						btScalar(20.0*j + start_z + 5)));

					auto rb = localCreateRigidBody(0.f, startTransform, colShape2);
					if (j == 1) rb->setCollisionFlags(rb->getCollisionFlags() | btCollisionObject::CollisionFlags::CF_KINEMATIC_OBJECT);
					if (j == 2) rb->setCollisionFlags(rb->getCollisionFlags() | btCollisionObject::CollisionFlags::CF_NO_CONTACT_RESPONSE);
					if (j == 3) rb->setCollisionFlags(rb->getCollisionFlags() | btCollisionObject::CollisionFlags::CF_KINEMATIC_OBJECT | btCollisionObject::CollisionFlags::CF_NO_CONTACT_RESPONSE);
				}
			}
		}

	}

	if (false)
	{
		ConvexDecomposition::WavefrontObj wo;

		unsigned int tcount = wo.loadObj("D:/Github/Cocos/ammo.js/bullet/file.obj");
		if (!tcount)
		{
			//when running this app from visual studio, the default starting folder is different, so make a second attempt...
			tcount = wo.loadObj("../../file.obj");
		}
		if (!tcount)
		{
			//cmake generated msvc files need 4 levels deep back... so make a 3rd attempt...
			tcount = wo.loadObj("../../../../file.obj");
		}

		btTriangleMesh* trimesh = new btTriangleMesh();
		//m_trimeshes.push_back(trimesh);


		btVector3 localScaling(6.f, 6.f, 6.f);
		int i;
		for (i = 0; i < wo.mTriCount; i++)
		{
			int index0 = wo.mIndices[i * 3];
			int index1 = wo.mIndices[i * 3 + 1];
			int index2 = wo.mIndices[i * 3 + 2];

			btVector3 vertex0(wo.mVertices[index0 * 3], wo.mVertices[index0 * 3 + 1], wo.mVertices[index0 * 3 + 2]);
			btVector3 vertex1(wo.mVertices[index1 * 3], wo.mVertices[index1 * 3 + 1], wo.mVertices[index1 * 3 + 2]);
			btVector3 vertex2(wo.mVertices[index2 * 3], wo.mVertices[index2 * 3 + 1], wo.mVertices[index2 * 3 + 2]);

			vertex0 *= localScaling;
			vertex1 *= localScaling;
			vertex2 *= localScaling;

			trimesh->addTriangle(vertex0, vertex1, vertex2);
		}

		bool useQuantization = true;
		btCollisionShape* concaveShape = new btBvhTriangleMeshShape(trimesh, useQuantization);
		concaveShape->setLocalScaling(localScaling);
		for (int i = 0; i < 10; i++) {
			btTransform startTransform;
			startTransform.setIdentity();
			startTransform.setOrigin(btVector3(0, 0, 5 + i * 5));
			localCreateRigidBody(0.f, startTransform, concaveShape);
		}

		m_collisionShapes.push_back(concaveShape);
	}

}
void	BasicDemo::clientResetScene()
{
	exitPhysics();
	initPhysics();
}


void	BasicDemo::exitPhysics()
{

	//cleanup in the reverse order of creation/initialization

	//remove the rigidbodies from the dynamics world and delete them
	int i;
	for (i = m_dynamicsWorld->getNumCollisionObjects() - 1; i >= 0; i--)
	{
		btCollisionObject* obj = m_dynamicsWorld->getCollisionObjectArray()[i];
		btRigidBody* body = btRigidBody::upcast(obj);
		if (body && body->getMotionState())
		{
			delete body->getMotionState();
		}
		m_dynamicsWorld->removeCollisionObject(obj);
		delete obj;
	}

	//delete collision shapes
	for (int j = 0; j < m_collisionShapes.size(); j++)
	{
		btCollisionShape* shape = m_collisionShapes[j];
		delete shape;
	}
	m_collisionShapes.clear();

	delete m_dynamicsWorld;

	delete m_solver;

	delete m_broadphase;

	delete m_dispatcher;

	delete m_collisionConfiguration;


}




