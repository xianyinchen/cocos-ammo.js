
var Module = { TOTAL_MEMORY: 256 * 1024 * 1024 };

importScripts('../../builds/ammo.js');

Ammo().then(function (Ammo) {
  var NUM = 0, NUMRANGE = [];
  var frameCount = 0;
  // Bullet-interfacing code

  var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
  var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
  var overlappingPairCache = new Ammo.btDbvtBroadphase();
  var solver = new Ammo.btSequentialImpulseConstraintSolver();
  var dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
  dynamicsWorld.setGravity(new Ammo.btVector3(0, -10, 0));

  var groundShape = new Ammo.btBoxShape(new Ammo.btVector3(50, 50, 50));
  var gsTransform = new Ammo.btTransform();
  gsTransform.setIdentity();

  var bodies = [];

  var groundTransform = new Ammo.btTransform();
  groundTransform.setIdentity();
  groundTransform.setOrigin(new Ammo.btVector3(0, -56, 0));

  (function () {
    var mass = 0;
    var localInertia = new Ammo.btVector3(0, 0, 0);
    var myMotionState = new Ammo.btDefaultMotionState(groundTransform);
    var com = new Ammo.btCompoundShape(true);
    // var shape = new Ammo.btSphereShape(1);
    // var ssTransform = new Ammo.btTransform();
    // ssTransform.setIdentity();
    // com.addChildShape(ssTransform, shape);
    com.addChildShape(gsTransform, groundShape);
    com.setMaterial(0, 0, 1);
    var rbInfo;
    if (1) {
      rbInfo = new Ammo.btRigidBodyConstructionInfo(0, myMotionState, com, localInertia);
    } else {
      rbInfo = new Ammo.btRigidBodyConstructionInfo(0, myMotionState, groundShape, localInertia);
    }
    var body = new Ammo.btRigidBody(rbInfo);
    // body.setRestitution(1);
    dynamicsWorld.addRigidBody(body);
    bodies.push(body);
  })();

  var boxShape = new Ammo.btBoxShape(new Ammo.btVector3(0.5, 0.5, 0.5));

  function resetPositions () {
    var side = Math.ceil(Math.pow(NUM, 1 / 3));
    var i = 1;
    for (var x = 0; x < side; x++) {
      for (var y = 0; y < side; y++) {
        for (var z = 0; z < side; z++) {
          if (i == bodies.length) break;
          var body = bodies[i++];
          var origin = body.getWorldTransform().getOrigin();
          origin.setX((x - side / 2) * (2.2 + Math.random()));
          origin.setY(y * (3 + Math.random()));
          origin.setZ((z - side / 2) * (2.2 + Math.random()) - side - 3);
          body.activate();
          var rotation = body.getWorldTransform().getRotation();
          rotation.setX(1);
          rotation.setY(0);
          rotation.setZ(0);
          rotation.setW(1);
        }
      }
    }
  }

  function startUp () {
    NUMRANGE.forEach(function (i) {

      var com;
      if (1 /** 0 : single, 1 : compound */) {
        com = new Ammo.btCompoundShape(true);

        var boxTrans0 = new Ammo.btTransform();
        boxTrans0.setIdentity();
        com.addChildShape(boxTrans0, boxShape);

        var boxTrans1 = new Ammo.btTransform();
        boxTrans1.setIdentity();
        boxTrans1.getOrigin().setValue(-2, -2, 0);
        com.addChildShape(boxTrans1, boxShape);
        com.setMaterial(0, 0, 1);
        com.setMaterial(1, 0, 1);
      } else {
        com = boxShape;
      }

      var startTransform = new Ammo.btTransform();
      startTransform.setIdentity();
      var mass = 1;
      var localInertia = new Ammo.btVector3(0, 0, 0);
      com.calculateLocalInertia(mass, localInertia);
      var myMotionState = new Ammo.btDefaultMotionState(startTransform);
      var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, myMotionState, com, localInertia);
      var body = new Ammo.btRigidBody(rbInfo);
      body.setUserIndex(i);
      dynamicsWorld.addRigidBody(body);
      bodies.push(body);
      // body.setRestitution(1);
    });

    resetPositions();
  }

  var transform = new Ammo.btTransform(); // taking this out of readBulletObject reduces the leaking

  function readBulletObject (i, object) {
    var body = bodies[i];
    body.getMotionState().getWorldTransform(transform);
    var origin = transform.getOrigin();
    object[0] = origin.x();
    object[1] = origin.y();
    object[2] = origin.z();
    var rotation = transform.getRotation();
    object[3] = rotation.x();
    object[4] = rotation.y();
    object[5] = rotation.z();
    object[6] = rotation.w();
  }

  var nextTimeToRestart = 0;
  function timeToRestart () { // restart if at least one is inactive - the scene is starting to get boring
    if (nextTimeToRestart) {
      if (Date.now() >= nextTimeToRestart) {
        nextTimeToRestart = 0;
        // return true;
      }
      return false;
    }
    for (var i = 1; i <= NUM; i++) {
      var body = bodies[i];
      if (!body.isActive()) {
        nextTimeToRestart = Date.now() + 1000; // add another second after first is inactive
        break;
      }
    }
    return false;
  }

  var meanDt = 0, meanDt2 = 0, frame = 1;

  function simulate (dt) {
    frameCount++;
    dt = dt || 1;

    dynamicsWorld.stepSimulation(dt, 2);

    var alpha;
    if (meanDt > 0) {
      alpha = Math.min(0.1, dt / 1000);
    } else {
      alpha = 0.1; // first run
    }
    meanDt = alpha * dt + (1 - alpha) * meanDt;

    var alpha2 = 1 / frame++;
    meanDt2 = alpha2 * dt + (1 - alpha2) * meanDt2;

    var data = { objects: [], currFPS: Math.round(1000 / meanDt), allFPS: Math.round(1000 / meanDt2) };

    // Read bullet data into JS objects
    for (var i = 0; i < NUM; i++) {
      var object = [];
      readBulletObject(i + 1, object);
      data.objects[i] = object;
    }

    postMessage(data);

    /**
     * EVENTS
     */
    // const numManifolds = dispatcher.getNumManifolds();
    // for (let i = 0; i < numManifolds; i++) {
    //   const manifold = dispatcher.getManifoldByIndexInternal(i);
    //   const body0 = manifold.getBody0();
    //   const body1 = manifold.getBody1();
    //   const indexA = body0.getUserIndex();
    //   const indexB = body1.getUserIndex();
    //   const numContacts = manifold.getNumContacts();
    //   for (let j = 0; j < numContacts; j++) {
    //     const manifoldPoint = manifold.getContactPoint(j);
    //     const d = manifoldPoint.getDistance();
    //     if (d <= 0) {
    //       // manifoldPoint.getPositionWorldOnA();
    //       // manifoldPoint.getPositionWorldOnB();
    //       // manifoldPoint.m_localPointA
    //       // manifoldPoint.m_localPointB
    //       // manifoldPoint.m_normalWorldOnB
    //       console.log('manifoldPoint', {
    //         m_distance1: manifoldPoint.m_distance1,
    //         m_combinedFriction: manifoldPoint.m_combinedFriction,
    //         m_combinedRollingFriction: manifoldPoint.m_combinedRollingFriction,
    //         m_combinedRestitution: manifoldPoint.m_combinedRestitution,
    //         m_partId0: manifoldPoint.m_partId0,
    //         m_partId1: manifoldPoint.m_partId1,
    //         m_index0: manifoldPoint.m_index0,
    //         m_index1: manifoldPoint.m_index1,
    //         m_userPersistentData: manifoldPoint.m_userPersistentData,
    //       });
    //       break;
    //     }
    //   }
    // }

    for (prop in eventList) {
      const item = eventList[prop];
      var shape = Ammo.wrapPointer(prop, Ammo.btCollisionShape);
      if (item.enter.length > 0) {
        eventObject.type = "enter";
        eventObject.selfShape = shape;
        const enter = item.enter;
        while (enter.length) {
          const cp = enter.pop();
          const c = {
            contactA: cp.m_localPointA,
            contactB: cp.m_localPointB,
            normalWorld: cp.m_normalWorldOnB,
          };
          eventObject.contacts.push(c);
        }
        console.log('enter', eventObject);
      } else if (item.stay.length > 0) {
        eventObject.type = "stay";
        eventObject.selfShape = shape;
        const stay = item.stay;
        while (stay.length) {
          const cp = stay.pop();
          const c = {
            contactA: cp.m_localPointA,
            contactB: cp.m_localPointB,
            normalWorld: cp.m_normalWorldOnB,
          };
          eventObject.contacts.push(c);
        }
        console.log('stay', eventObject);
      } else if (item.exit.length > 0) {
        eventObject.type = "exit";
        eventObject.selfShape = shape;
        const exit = item.exit;
        while (exit.length) {
          const cp = exit.pop();
          const c = {
            contactA: cp.m_localPointA,
            contactB: cp.m_localPointB,
            normalWorld: cp.m_normalWorldOnB,
          };
          eventObject.contacts.push(c);
        }
        console.log('exit', eventObject);

        delete prop in eventList;
      }
    }

    if (timeToRestart()) resetPositions();
  }

  // var contactAddedCallbackPtr = Ammo.addFunction((cp, co0, p0, i0, co1, p1, i1) => {
  //   // console.log('added', args);
  // });

  var eventList = {};
  var eventMap = {};
  var eventObject = {
    type: "enter",
    contacts: [],
  };
  var contactProcessedCallbackPtr = Ammo.addFunction((cp, b0, b1) => {
    b0 = Ammo.wrapPointer(b0, Ammo.btRigidBody);
    b1 = Ammo.wrapPointer(b1, Ammo.btRigidBody);
    cp = Ammo.wrapPointer(cp, Ammo.btManifoldPoint);
    const index0 = cp.m_index0;
    const index1 = cp.m_index1;
    var s0 = b0.getCollisionShape();
    if (s0.isCompound()) {
      s0 = Ammo.castObject(s0, Ammo.btCompoundShape);
      s0 = s0.getChildShape(index0);
    }
    var s1 = b1.getCollisionShape();
    if (s1.isCompound()) {
      s1 = Ammo.castObject(s1, Ammo.btCompoundShape);
      s1 = s1.getChildShape(index1);
    }

    var userPersistentData = cp.m_userPersistentData;
    if (userPersistentData == 0) {
      cp.m_userPersistentData = cp.ptr;
      cp.m_userPersistentData0 = 0;//s0.ptr;
      cp.m_userPersistentData1 = 1;//s1.ptr;
      if (eventMap[cp.ptr] == null) {
        eventMap[cp.ptr] = { s0, s1 }
      }
      if (eventList[s0.ptr] == null) {
        eventList[s0.ptr] = {
          enter: [],
          stay: [],
          exit: []
        };
      }
      eventList[s0.ptr].enter.push(cp);

      if (eventList[s1.ptr] == null) {
        eventList[s1.ptr] = {
          enter: [],
          stay: [],
          exit: []
        };
      }
      eventList[s1.ptr].enter.push(cp);
    } else {
      eventList[s0.ptr].stay.push(cp);
      eventList[s1.ptr].stay.push(cp);
      console.log(cp.m_userPersistentData0, cp.m_userPersistentData1);
    }
  });

  var contactDestroyedCallbackPtr = Ammo.addFunction((ptr) => {
    var cp = Ammo.wrapPointer(ptr, Ammo.btManifoldPoint);
    console.log(cp.m_userPersistentData0, cp.m_userPersistentData1);
    var s0 = eventMap[ptr].s0;
    var s1 = eventMap[ptr].s1;
    eventList[s0.ptr].exit.push(cp);
    eventList[s1.ptr].exit.push(cp);
    delete ptr in eventMap;
  });

  dynamicsWorld.setContactProcessedCallback(contactProcessedCallbackPtr);
  dynamicsWorld.setContactDestroyedCallback(contactDestroyedCallbackPtr);

  var interval = null;

  onmessage = function (event) {
    NUM = event.data;
    NUMRANGE.length = 0;
    while (NUMRANGE.length < NUM) NUMRANGE.push(NUMRANGE.length + 1);

    frame = 1;
    meanDt = meanDt2 = 0;

    startUp();

    var last = Date.now();
    function mainLoop () {
      var now = Date.now();
      simulate(now - last);
      last = now;
    }

    if (interval) clearInterval(interval);
    interval = setInterval(mainLoop, 1000 / 60);
  }
});
