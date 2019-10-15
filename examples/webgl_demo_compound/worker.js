
var Module = { TOTAL_MEMORY: 256*1024*1024 };

importScripts('../../builds/ammo.js');

Ammo().then(function(Ammo) {
  var NUM = 0, NUMRANGE = [];

  // Bullet-interfacing code

  var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
  var dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
  var overlappingPairCache = new Ammo.btDbvtBroadphase();
  var solver = new Ammo.btSequentialImpulseConstraintSolver();
  var dynamicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
  dynamicsWorld.setGravity(new Ammo.btVector3(0, -10, 0));

  var box1 = new Ammo.btBoxShape(new Ammo.btVector3(50, 1, 50));
  var box1Trans = new Ammo.btTransform();
  box1Trans.setIdentity();

  var spVec3 = new Ammo.btVector3(5, 5, 5);
  var sphere1 = new Ammo.btBoxShape(spVec3);
  
  // sphere1.setLocalScaling(new Ammo.btVector3(2, 2, 2)); working 

  // var sphere1 = new Ammo.btSphereShape(5);
  var s1_localPos = new Ammo.btVector3();
  var s1_localRot = new Ammo.btQuaternion();
  var s1_localEuler = new Ammo.btVector3(0, 0, 0);
  // s1_localRot.setEulerZYX(45, 45, 45); working
  var sphere1Trans = new Ammo.btTransform(s1_localRot, s1_localPos);
  sphere1Trans.setIdentity();

  var groundShape = new Ammo.btCompoundShape(true);
  groundShape.addChildShape(box1Trans, box1);
  groundShape.addChildShape(sphere1Trans, sphere1);

  var bodies = [];

  var groundTransform = new Ammo.btTransform();
  groundTransform.setIdentity();
  groundTransform.setOrigin(new Ammo.btVector3(0, -7, 0));

  var groundBody;

  (function() {
    var mass = 0;
    var localInertia = new Ammo.btVector3(0, 0, 0);
    var myMotionState = new Ammo.btDefaultMotionState(groundTransform);
    var rbInfo = new Ammo.btRigidBodyConstructionInfo(0, myMotionState, groundShape, localInertia);
    var body = groundBody = new Ammo.btRigidBody(rbInfo);

    dynamicsWorld.addRigidBody(body);
    bodies.push(body);
  })();

  var boxShape = new Ammo.btBoxShape(new Ammo.btVector3(1, 1, 1));

  function resetPositions() {
    var side = Math.ceil(Math.pow(NUM, 1/3));
    var i = 1;
    for (var x = 0; x < side; x++) {
      for (var y = 0; y < side; y++) {
        for (var z = 0; z < side; z++) {
          if (i == bodies.length) break;
          var body = bodies[i++];
          var origin = body.getWorldTransform().getOrigin();
          origin.setX((x - side/2)*(2.2 + Math.random()));
          origin.setY(y * (3 + Math.random()));
          origin.setZ((z - side/2)*(2.2 + Math.random()) - side - 3);
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

  function startUp() {
    NUMRANGE.forEach(function(i) {
      var startTransform = new Ammo.btTransform();
      startTransform.setIdentity();
      var mass = 1;
      var localInertia = new Ammo.btVector3(0, 0, 0);
      boxShape.calculateLocalInertia(mass, localInertia);

      var myMotionState = new Ammo.btDefaultMotionState(startTransform);
      var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, myMotionState, boxShape, localInertia);
      var body = new Ammo.btRigidBody(rbInfo);
      body.setActivationState( 4 );
      dynamicsWorld.addRigidBody(body);
      bodies.push(body);
    });

    resetPositions();
  }

  var transform = new Ammo.btTransform(); // taking this out of readBulletObject reduces the leaking

  function readBulletObject(i, object) {
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
  function timeToRestart() { // restart if at least one is inactive - the scene is starting to get boring
    
    globalThis.CC_UPDATE_SCALE = true;
    globalThis.CC_UPDATE_POSITION = true;
    globalThis.CC_UPDATE_ROTATION = true;

    if(globalThis.CC_UPDATE_SCALE){
      /** 更新子形状 scale */
      let y = sphere1.getLocalScaling().y();
      if(y < 10){
        y += 0.01;
        /** scaling sub shape */
        sphere1.setLocalScaling(new Ammo.btVector3(y,y,y));
        groundShape.updateChildTransform(1, sphere1Trans, true);
        
        // not work
        // dynamicsWorld.removeRigidBody(groundBody);
        // groundShape.removeChildShape(sphere1);
        // sphere1Trans.setIdentity();
        // groundShape.addChildShape(sphere1Trans, sphere1);
        
        // dynamicsWorld.addRigidBody(groundBody);

        // not work
        // dynamicsWorld.updateSingleAabb(groundBody);
              
        // not work
        // groundShape.removeChildShapeByIndex(1);

        // not work
        // dynamicsWorld.updateSingleAabb(bodies[0]);
        // spVec3.setX(4 + y);
        // spVec3.setY(4 + y);
        // spVec3.setZ(4 + y);
      }
    }
    if(globalThis.CC_UPDATE_POSITION){
      /** translate sub shape */
      if(sphere1Trans.getOrigin().y() == 2){
        sphere1Trans.getOrigin().setY(0);
      }else{
        sphere1Trans.getOrigin().setY(sphere1Trans.getOrigin().y() + 0.01);
      }
      groundShape.updateChildTransform(1, sphere1Trans, true);
    }
    if(globalThis.CC_UPDATE_ROTATION){
      /** rotate sub shape */      
      if(s1_localEuler.y() == 45){
        s1_localEuler.setValue(0, 0, 0);
        s1_localRot.setEulerZYX(s1_localEuler.z(), s1_localEuler.y(), s1_localEuler.x());
      }else{
        var e = 0.01;
        s1_localEuler.setValue(0, s1_localEuler.y() + e, 0);        
        s1_localRot.setEulerZYX(s1_localEuler.z(), s1_localEuler.y(), s1_localEuler.x());
      }
      sphere1Trans.setRotation(s1_localRot);
      groundShape.updateChildTransform(1, sphere1Trans, true);
    }

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

    // if(0) {
    //   /** 更新子形状 pos */
    //   if(sphere1Trans.getOrigin().y() == 1){
    //     sphere1Trans.getOrigin().setY(0);
    //   }else{
    //     sphere1Trans.getOrigin().setY(1);
    //   }
    //   groundShape.updateChildTransform(1, sphere1Trans, true);
    // } else {
    //   /** 动态移除、添加子形状 */
    //   if(groundShape.getNumChildShapes() >=2){
    //     groundShape.removeChildShapeByIndex(1);
    //   } else {
    //     groundShape.addChildShape(sphere1Trans, sphere1);
    //   }
    // }
    return false;
  }

  var meanDt = 0, meanDt2 = 0, frame = 1;

  function simulate(dt) {
    dt = dt || 1;

    dynamicsWorld.stepSimulation(dt, 2);

    var alpha;
    if (meanDt > 0) {
      alpha = Math.min(0.1, dt/1000);
    } else {
      alpha = 0.1; // first run
    }
    meanDt = alpha*dt + (1-alpha)*meanDt;

    var alpha2 = 1/frame++;
    meanDt2 = alpha2*dt + (1-alpha2)*meanDt2;

    var data = { objects: [], currFPS: Math.round(1000/meanDt), allFPS: Math.round(1000/meanDt2) };

    // Read bullet data into JS objects
    for (var i = 0; i < NUM; i++) {
      var object = [];
      readBulletObject(i+1, object);
      data.objects[i] = object;
    }

    groundBody.getMotionState().getWorldTransform(transform);
    var origin1 = transform.getOrigin();
    var rotation1 = transform.getRotation();
    var origin = sphere1Trans.getOrigin();
    object[0] = origin1.x() + origin.x();
    object[1] = origin1.y() + origin.y();
    object[2] = origin1.z() + origin.z();
    var rotation = sphere1Trans.getRotation();
    // rotation.op_mulq(rotation1);
    object[3] = rotation.x();
    object[4] = rotation.y();
    object[5] = rotation.z();
    object[6] = rotation.w();
    data.objects[NUM] = object;

    postMessage(data);

    if (timeToRestart()) resetPositions();
  }

  var interval = null;

  onmessage = function(event) {
    NUM = event.data;
    NUMRANGE.length = 0;
    while (NUMRANGE.length < NUM) NUMRANGE.push(NUMRANGE.length+1);

    frame = 1;
    meanDt = meanDt2 = 0;

    startUp();

    var last = Date.now();
    function mainLoop() {
      var now = Date.now();
      simulate(now - last);
      last = now;
    }

    if (interval) clearInterval(interval);
    interval = setInterval(mainLoop, 1000/60);
  }
});
