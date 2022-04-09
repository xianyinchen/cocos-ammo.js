
// Bindings utilities

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function WrapperObject() {
}
WrapperObject.prototype = Object.create(WrapperObject.prototype);
WrapperObject.prototype.constructor = WrapperObject;
WrapperObject.prototype.__class__ = WrapperObject;
WrapperObject.__cache__ = {};
Module['WrapperObject'] = WrapperObject;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant)
    @param {*=} __class__ */
function getCache(__class__) {
  return (__class__ || WrapperObject).__cache__;
}
Module['getCache'] = getCache;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant)
    @param {*=} __class__ */
function wrapPointer(ptr, __class__) {
  var cache = getCache(__class__);
  var ret = cache[ptr];
  if (ret) return ret;
  ret = Object.create((__class__ || WrapperObject).prototype);
  ret.ptr = ptr;
  return cache[ptr] = ret;
}
Module['wrapPointer'] = wrapPointer;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function castObject(obj, __class__) {
  return wrapPointer(obj.ptr, __class__);
}
Module['castObject'] = castObject;

Module['NULL'] = wrapPointer(0);

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function destroy(obj) {
  if (!obj['__destroy__']) throw 'Error: Cannot destroy object. (Did you create it yourself?)';
  obj['__destroy__']();
  // Remove from cache, so the object can be GC'd and refs added onto it released
  delete getCache(obj.__class__)[obj.ptr];
}
Module['destroy'] = destroy;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function compare(obj1, obj2) {
  return obj1.ptr === obj2.ptr;
}
Module['compare'] = compare;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function getPointer(obj) {
  return obj.ptr;
}
Module['getPointer'] = getPointer;

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function getClass(obj) {
  return obj.__class__;
}
Module['getClass'] = getClass;

// Converts big (string or array) values into a C-style storage, in temporary space

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
var ensureCache = {
  buffer: 0,  // the main buffer of temporary storage
  size: 0,   // the size of buffer
  pos: 0,    // the next free offset in buffer
  temps: [], // extra allocations
  needed: 0, // the total size we need next time

  prepare: function() {
    if (ensureCache.needed) {
      // clear the temps
      for (var i = 0; i < ensureCache.temps.length; i++) {
        Module['_free'](ensureCache.temps[i]);
      }
      ensureCache.temps.length = 0;
      // prepare to allocate a bigger buffer
      Module['_free'](ensureCache.buffer);
      ensureCache.buffer = 0;
      ensureCache.size += ensureCache.needed;
      // clean up
      ensureCache.needed = 0;
    }
    if (!ensureCache.buffer) { // happens first time, or when we need to grow
      ensureCache.size += 128; // heuristic, avoid many small grow events
      ensureCache.buffer = Module['_malloc'](ensureCache.size);
      assert(ensureCache.buffer);
    }
    ensureCache.pos = 0;
  },
  alloc: function(array, view) {
    assert(ensureCache.buffer);
    var bytes = view.BYTES_PER_ELEMENT;
    var len = array.length * bytes;
    len = (len + 7) & -8; // keep things aligned to 8 byte boundaries
    var ret;
    if (ensureCache.pos + len >= ensureCache.size) {
      // we failed to allocate in the buffer, ensureCache time around :(
      assert(len > 0); // null terminator, at least
      ensureCache.needed += len;
      ret = Module['_malloc'](len);
      ensureCache.temps.push(ret);
    } else {
      // we can allocate in the buffer
      ret = ensureCache.buffer + ensureCache.pos;
      ensureCache.pos += len;
    }
    return ret;
  },
  copy: function(array, view, offset) {
    offset >>>= 0;
    var bytes = view.BYTES_PER_ELEMENT;
    switch (bytes) {
      case 2: offset >>>= 1; break;
      case 4: offset >>>= 2; break;
      case 8: offset >>>= 3; break;
    }
    for (var i = 0; i < array.length; i++) {
      view[offset + i] = array[i];
    }
  },
};

/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureString(value) {
  if (typeof value === 'string') {
    var intArray = intArrayFromString(value);
    var offset = ensureCache.alloc(intArray, HEAP8);
    ensureCache.copy(intArray, HEAP8, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt8(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP8);
    ensureCache.copy(value, HEAP8, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt16(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP16);
    ensureCache.copy(value, HEAP16, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureInt32(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAP32);
    ensureCache.copy(value, HEAP32, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureFloat32(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAPF32);
    ensureCache.copy(value, HEAPF32, offset);
    return offset;
  }
  return value;
}
/** @suppress {duplicate} (TODO: avoid emitting this multiple times, it is redundant) */
function ensureFloat64(value) {
  if (typeof value === 'object') {
    var offset = ensureCache.alloc(value, HEAPF64);
    ensureCache.copy(value, HEAPF64, offset);
    return offset;
  }
  return value;
}


// btCollisionShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCollisionShape() { throw "cannot construct a btCollisionShape, no constructor in IDL" }
btCollisionShape.prototype = Object.create(WrapperObject.prototype);
btCollisionShape.prototype.constructor = btCollisionShape;
btCollisionShape.prototype.__class__ = btCollisionShape;
btCollisionShape.__cache__ = {};
Module['btCollisionShape'] = btCollisionShape;

btCollisionShape.prototype['setLocalScaling'] = btCollisionShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btCollisionShape_setLocalScaling_1(self, scaling);
};;

btCollisionShape.prototype['getLocalScaling'] = btCollisionShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCollisionShape_getLocalScaling_0(self), btVector3);
};;

btCollisionShape.prototype['calculateLocalInertia'] = btCollisionShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btCollisionShape_calculateLocalInertia_2(self, mass, inertia);
};;

btCollisionShape.prototype['setMargin'] = btCollisionShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btCollisionShape_setMargin_1(self, margin);
};;

btCollisionShape.prototype['getMargin'] = btCollisionShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCollisionShape_getMargin_0(self);
};;

btCollisionShape.prototype['isCompound'] = btCollisionShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btCollisionShape_isCompound_0(self));
};;

btCollisionShape.prototype['getUserIndex'] = btCollisionShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCollisionShape_getUserIndex_0(self);
};;

btCollisionShape.prototype['setUserIndex'] = btCollisionShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCollisionShape_setUserIndex_1(self, index);
};;

btCollisionShape.prototype['getUserPointerAsInt'] = btCollisionShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCollisionShape_getUserPointerAsInt_0(self);
};;

btCollisionShape.prototype['setUserPointerAsInt'] = btCollisionShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCollisionShape_setUserPointerAsInt_1(self, index);
};;

btCollisionShape.prototype['getAabb'] = btCollisionShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btCollisionShape_getAabb_3(self, t, min, max);
};;

btCollisionShape.prototype['getLocalBoundingSphere'] = btCollisionShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCollisionShape_getLocalBoundingSphere_0(self);
};;

  btCollisionShape.prototype['__destroy__'] = btCollisionShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btCollisionShape___destroy___0(self);
};
// btCollisionWorld
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCollisionWorld() { throw "cannot construct a btCollisionWorld, no constructor in IDL" }
btCollisionWorld.prototype = Object.create(WrapperObject.prototype);
btCollisionWorld.prototype.constructor = btCollisionWorld;
btCollisionWorld.prototype.__class__ = btCollisionWorld;
btCollisionWorld.__cache__ = {};
Module['btCollisionWorld'] = btCollisionWorld;

btCollisionWorld.prototype['rayTest'] = btCollisionWorld.prototype.rayTest = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromWorld, rayToWorld, resultCallback) {
  var self = this.ptr;
  if (rayFromWorld && typeof rayFromWorld === 'object') rayFromWorld = rayFromWorld.ptr;
  if (rayToWorld && typeof rayToWorld === 'object') rayToWorld = rayToWorld.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _emscripten_bind_btCollisionWorld_rayTest_3(self, rayFromWorld, rayToWorld, resultCallback);
};;

btCollisionWorld.prototype['rayTestSingle'] = btCollisionWorld.prototype.rayTestSingle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback) {
  var self = this.ptr;
  if (rayFromTrans && typeof rayFromTrans === 'object') rayFromTrans = rayFromTrans.ptr;
  if (rayToTrans && typeof rayToTrans === 'object') rayToTrans = rayToTrans.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (colObjWorldTransform && typeof colObjWorldTransform === 'object') colObjWorldTransform = colObjWorldTransform.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _emscripten_bind_btCollisionWorld_rayTestSingle_6(self, rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback);
};;

btCollisionWorld.prototype['addCollisionObject'] = btCollisionWorld.prototype.addCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject, collisionFilterGroup, collisionFilterMask) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionFilterGroup && typeof collisionFilterGroup === 'object') collisionFilterGroup = collisionFilterGroup.ptr;
  if (collisionFilterMask && typeof collisionFilterMask === 'object') collisionFilterMask = collisionFilterMask.ptr;
  if (collisionFilterGroup === undefined) { _emscripten_bind_btCollisionWorld_addCollisionObject_1(self, collisionObject);  return }
  if (collisionFilterMask === undefined) { _emscripten_bind_btCollisionWorld_addCollisionObject_2(self, collisionObject, collisionFilterGroup);  return }
  _emscripten_bind_btCollisionWorld_addCollisionObject_3(self, collisionObject, collisionFilterGroup, collisionFilterMask);
};;

btCollisionWorld.prototype['removeCollisionObject'] = btCollisionWorld.prototype.removeCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  _emscripten_bind_btCollisionWorld_removeCollisionObject_1(self, collisionObject);
};;

btCollisionWorld.prototype['setContactBreakingThreshold'] = btCollisionWorld.prototype.setContactBreakingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(b) {
  var self = this.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  _emscripten_bind_btCollisionWorld_setContactBreakingThreshold_1(self, b);
};;

  btCollisionWorld.prototype['__destroy__'] = btCollisionWorld.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btCollisionWorld___destroy___0(self);
};
// RayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function RayResultCallback() { throw "cannot construct a RayResultCallback, no constructor in IDL" }
RayResultCallback.prototype = Object.create(WrapperObject.prototype);
RayResultCallback.prototype.constructor = RayResultCallback;
RayResultCallback.prototype.__class__ = RayResultCallback;
RayResultCallback.__cache__ = {};
Module['RayResultCallback'] = RayResultCallback;

RayResultCallback.prototype['hasHit'] = RayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_RayResultCallback_hasHit_0(self));
};;

  RayResultCallback.prototype['__destroy__'] = RayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_RayResultCallback___destroy___0(self);
};
// btConvexShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConvexShape() { throw "cannot construct a btConvexShape, no constructor in IDL" }
btConvexShape.prototype = Object.create(btCollisionShape.prototype);
btConvexShape.prototype.constructor = btConvexShape;
btConvexShape.prototype.__class__ = btConvexShape;
btConvexShape.__cache__ = {};
Module['btConvexShape'] = btConvexShape;

btConvexShape.prototype['setLocalScaling'] = btConvexShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btConvexShape_setLocalScaling_1(self, scaling);
};;

btConvexShape.prototype['getLocalScaling'] = btConvexShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btConvexShape_getLocalScaling_0(self), btVector3);
};;

btConvexShape.prototype['calculateLocalInertia'] = btConvexShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btConvexShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConvexShape.prototype['setMargin'] = btConvexShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btConvexShape_setMargin_1(self, margin);
};;

btConvexShape.prototype['getMargin'] = btConvexShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexShape_getMargin_0(self);
};;

btConvexShape.prototype['isCompound'] = btConvexShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btConvexShape_isCompound_0(self));
};;

btConvexShape.prototype['getUserIndex'] = btConvexShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexShape_getUserIndex_0(self);
};;

btConvexShape.prototype['setUserIndex'] = btConvexShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConvexShape_setUserIndex_1(self, index);
};;

btConvexShape.prototype['getUserPointerAsInt'] = btConvexShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexShape_getUserPointerAsInt_0(self);
};;

btConvexShape.prototype['setUserPointerAsInt'] = btConvexShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConvexShape_setUserPointerAsInt_1(self, index);
};;

btConvexShape.prototype['getAabb'] = btConvexShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btConvexShape_getAabb_3(self, t, min, max);
};;

btConvexShape.prototype['getLocalBoundingSphere'] = btConvexShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexShape_getLocalBoundingSphere_0(self);
};;

  btConvexShape.prototype['__destroy__'] = btConvexShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btConvexShape___destroy___0(self);
};
// btConcaveShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConcaveShape() { throw "cannot construct a btConcaveShape, no constructor in IDL" }
btConcaveShape.prototype = Object.create(btCollisionShape.prototype);
btConcaveShape.prototype.constructor = btConcaveShape;
btConcaveShape.prototype.__class__ = btConcaveShape;
btConcaveShape.__cache__ = {};
Module['btConcaveShape'] = btConcaveShape;

btConcaveShape.prototype['setLocalScaling'] = btConcaveShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btConcaveShape_setLocalScaling_1(self, scaling);
};;

btConcaveShape.prototype['getLocalScaling'] = btConcaveShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btConcaveShape_getLocalScaling_0(self), btVector3);
};;

btConcaveShape.prototype['calculateLocalInertia'] = btConcaveShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btConcaveShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConcaveShape.prototype['isCompound'] = btConcaveShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btConcaveShape_isCompound_0(self));
};;

btConcaveShape.prototype['getUserIndex'] = btConcaveShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConcaveShape_getUserIndex_0(self);
};;

btConcaveShape.prototype['setUserIndex'] = btConcaveShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConcaveShape_setUserIndex_1(self, index);
};;

btConcaveShape.prototype['getUserPointerAsInt'] = btConcaveShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConcaveShape_getUserPointerAsInt_0(self);
};;

btConcaveShape.prototype['setUserPointerAsInt'] = btConcaveShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConcaveShape_setUserPointerAsInt_1(self, index);
};;

btConcaveShape.prototype['getAabb'] = btConcaveShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btConcaveShape_getAabb_3(self, t, min, max);
};;

btConcaveShape.prototype['getLocalBoundingSphere'] = btConcaveShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConcaveShape_getLocalBoundingSphere_0(self);
};;

  btConcaveShape.prototype['__destroy__'] = btConcaveShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btConcaveShape___destroy___0(self);
};
// btDynamicsWorld
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDynamicsWorld() { throw "cannot construct a btDynamicsWorld, no constructor in IDL" }
btDynamicsWorld.prototype = Object.create(btCollisionWorld.prototype);
btDynamicsWorld.prototype.constructor = btDynamicsWorld;
btDynamicsWorld.prototype.__class__ = btDynamicsWorld;
btDynamicsWorld.__cache__ = {};
Module['btDynamicsWorld'] = btDynamicsWorld;

btDynamicsWorld.prototype['addAction'] = btDynamicsWorld.prototype.addAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _emscripten_bind_btDynamicsWorld_addAction_1(self, action);
};;

btDynamicsWorld.prototype['removeAction'] = btDynamicsWorld.prototype.removeAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _emscripten_bind_btDynamicsWorld_removeAction_1(self, action);
};;

btDynamicsWorld.prototype['getFixedBody'] = btDynamicsWorld.prototype.getFixedBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btDynamicsWorld_getFixedBody_0(self), btRigidBody);
};;

btDynamicsWorld.prototype['rayTest'] = btDynamicsWorld.prototype.rayTest = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromWorld, rayToWorld, resultCallback) {
  var self = this.ptr;
  if (rayFromWorld && typeof rayFromWorld === 'object') rayFromWorld = rayFromWorld.ptr;
  if (rayToWorld && typeof rayToWorld === 'object') rayToWorld = rayToWorld.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _emscripten_bind_btDynamicsWorld_rayTest_3(self, rayFromWorld, rayToWorld, resultCallback);
};;

btDynamicsWorld.prototype['rayTestSingle'] = btDynamicsWorld.prototype.rayTestSingle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback) {
  var self = this.ptr;
  if (rayFromTrans && typeof rayFromTrans === 'object') rayFromTrans = rayFromTrans.ptr;
  if (rayToTrans && typeof rayToTrans === 'object') rayToTrans = rayToTrans.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (colObjWorldTransform && typeof colObjWorldTransform === 'object') colObjWorldTransform = colObjWorldTransform.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _emscripten_bind_btDynamicsWorld_rayTestSingle_6(self, rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback);
};;

btDynamicsWorld.prototype['addCollisionObject'] = btDynamicsWorld.prototype.addCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject, collisionFilterGroup, collisionFilterMask) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionFilterGroup && typeof collisionFilterGroup === 'object') collisionFilterGroup = collisionFilterGroup.ptr;
  if (collisionFilterMask && typeof collisionFilterMask === 'object') collisionFilterMask = collisionFilterMask.ptr;
  if (collisionFilterGroup === undefined) { _emscripten_bind_btDynamicsWorld_addCollisionObject_1(self, collisionObject);  return }
  if (collisionFilterMask === undefined) { _emscripten_bind_btDynamicsWorld_addCollisionObject_2(self, collisionObject, collisionFilterGroup);  return }
  _emscripten_bind_btDynamicsWorld_addCollisionObject_3(self, collisionObject, collisionFilterGroup, collisionFilterMask);
};;

btDynamicsWorld.prototype['removeCollisionObject'] = btDynamicsWorld.prototype.removeCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  _emscripten_bind_btDynamicsWorld_removeCollisionObject_1(self, collisionObject);
};;

btDynamicsWorld.prototype['setContactBreakingThreshold'] = btDynamicsWorld.prototype.setContactBreakingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(b) {
  var self = this.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  _emscripten_bind_btDynamicsWorld_setContactBreakingThreshold_1(self, b);
};;

  btDynamicsWorld.prototype['__destroy__'] = btDynamicsWorld.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btDynamicsWorld___destroy___0(self);
};
// btQuadWord
/** @suppress {undefinedVars, duplicate} @this{Object} */function btQuadWord() { throw "cannot construct a btQuadWord, no constructor in IDL" }
btQuadWord.prototype = Object.create(WrapperObject.prototype);
btQuadWord.prototype.constructor = btQuadWord;
btQuadWord.prototype.__class__ = btQuadWord;
btQuadWord.__cache__ = {};
Module['btQuadWord'] = btQuadWord;

btQuadWord.prototype['x'] = btQuadWord.prototype.x = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btQuadWord_x_0(self);
};;

btQuadWord.prototype['y'] = btQuadWord.prototype.y = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btQuadWord_y_0(self);
};;

btQuadWord.prototype['z'] = btQuadWord.prototype.z = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btQuadWord_z_0(self);
};;

btQuadWord.prototype['w'] = btQuadWord.prototype.w = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btQuadWord_w_0(self);
};;

btQuadWord.prototype['setX'] = btQuadWord.prototype.setX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  _emscripten_bind_btQuadWord_setX_1(self, x);
};;

btQuadWord.prototype['setY'] = btQuadWord.prototype.setY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(y) {
  var self = this.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  _emscripten_bind_btQuadWord_setY_1(self, y);
};;

btQuadWord.prototype['setZ'] = btQuadWord.prototype.setZ = /** @suppress {undefinedVars, duplicate} @this{Object} */function(z) {
  var self = this.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  _emscripten_bind_btQuadWord_setZ_1(self, z);
};;

btQuadWord.prototype['setW'] = btQuadWord.prototype.setW = /** @suppress {undefinedVars, duplicate} @this{Object} */function(w) {
  var self = this.ptr;
  if (w && typeof w === 'object') w = w.ptr;
  _emscripten_bind_btQuadWord_setW_1(self, w);
};;

  btQuadWord.prototype['__destroy__'] = btQuadWord.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btQuadWord___destroy___0(self);
};
// btMotionState
/** @suppress {undefinedVars, duplicate} @this{Object} */function btMotionState() { throw "cannot construct a btMotionState, no constructor in IDL" }
btMotionState.prototype = Object.create(WrapperObject.prototype);
btMotionState.prototype.constructor = btMotionState;
btMotionState.prototype.__class__ = btMotionState;
btMotionState.__cache__ = {};
Module['btMotionState'] = btMotionState;

btMotionState.prototype['getWorldTransform'] = btMotionState.prototype.getWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _emscripten_bind_btMotionState_getWorldTransform_1(self, worldTrans);
};;

btMotionState.prototype['setWorldTransform'] = btMotionState.prototype.setWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _emscripten_bind_btMotionState_setWorldTransform_1(self, worldTrans);
};;

  btMotionState.prototype['__destroy__'] = btMotionState.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btMotionState___destroy___0(self);
};
// btCollisionObject
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCollisionObject() {
  this.ptr = _emscripten_bind_btCollisionObject_btCollisionObject_0();
  getCache(btCollisionObject)[this.ptr] = this;
};;
btCollisionObject.prototype = Object.create(WrapperObject.prototype);
btCollisionObject.prototype.constructor = btCollisionObject;
btCollisionObject.prototype.__class__ = btCollisionObject;
btCollisionObject.__cache__ = {};
Module['btCollisionObject'] = btCollisionObject;

btCollisionObject.prototype['getCollisionShape'] = btCollisionObject.prototype.getCollisionShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCollisionObject_getCollisionShape_0(self), btCollisionShape);
};;

btCollisionObject.prototype['getActivationState'] = btCollisionObject.prototype.getActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCollisionObject_getActivationState_0(self);
};;

btCollisionObject.prototype['setActivationState'] = btCollisionObject.prototype.setActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function(newState) {
  var self = this.ptr;
  if (newState && typeof newState === 'object') newState = newState.ptr;
  _emscripten_bind_btCollisionObject_setActivationState_1(self, newState);
};;

btCollisionObject.prototype['forceActivationState'] = btCollisionObject.prototype.forceActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function(newState) {
  var self = this.ptr;
  if (newState && typeof newState === 'object') newState = newState.ptr;
  _emscripten_bind_btCollisionObject_forceActivationState_1(self, newState);
};;

btCollisionObject.prototype['activate'] = btCollisionObject.prototype.activate = /** @suppress {undefinedVars, duplicate} @this{Object} */function(forceActivation) {
  var self = this.ptr;
  if (forceActivation && typeof forceActivation === 'object') forceActivation = forceActivation.ptr;
  if (forceActivation === undefined) { _emscripten_bind_btCollisionObject_activate_0(self);  return }
  _emscripten_bind_btCollisionObject_activate_1(self, forceActivation);
};;

btCollisionObject.prototype['isActive'] = btCollisionObject.prototype.isActive = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btCollisionObject_isActive_0(self));
};;

btCollisionObject.prototype['isKinematicObject'] = btCollisionObject.prototype.isKinematicObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btCollisionObject_isKinematicObject_0(self));
};;

btCollisionObject.prototype['isStaticObject'] = btCollisionObject.prototype.isStaticObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btCollisionObject_isStaticObject_0(self));
};;

btCollisionObject.prototype['isStaticOrKinematicObject'] = btCollisionObject.prototype.isStaticOrKinematicObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0(self));
};;

btCollisionObject.prototype['setRestitution'] = btCollisionObject.prototype.setRestitution = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r) {
  var self = this.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  _emscripten_bind_btCollisionObject_setRestitution_1(self, r);
};;

btCollisionObject.prototype['setFriction'] = btCollisionObject.prototype.setFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(f) {
  var self = this.ptr;
  if (f && typeof f === 'object') f = f.ptr;
  _emscripten_bind_btCollisionObject_setFriction_1(self, f);
};;

btCollisionObject.prototype['setRollingFriction'] = btCollisionObject.prototype.setRollingFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rf) {
  var self = this.ptr;
  if (rf && typeof rf === 'object') rf = rf.ptr;
  _emscripten_bind_btCollisionObject_setRollingFriction_1(self, rf);
};;

btCollisionObject.prototype['setSpinningFriction'] = btCollisionObject.prototype.setSpinningFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(sf) {
  var self = this.ptr;
  if (sf && typeof sf === 'object') sf = sf.ptr;
  _emscripten_bind_btCollisionObject_setSpinningFriction_1(self, sf);
};;

btCollisionObject.prototype['getWorldTransform'] = btCollisionObject.prototype.getWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCollisionObject_getWorldTransform_0(self), btTransform);
};;

btCollisionObject.prototype['getCollisionFlags'] = btCollisionObject.prototype.getCollisionFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCollisionObject_getCollisionFlags_0(self);
};;

btCollisionObject.prototype['setCollisionFlags'] = btCollisionObject.prototype.setCollisionFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  _emscripten_bind_btCollisionObject_setCollisionFlags_1(self, flags);
};;

btCollisionObject.prototype['setWorldTransform'] = btCollisionObject.prototype.setWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _emscripten_bind_btCollisionObject_setWorldTransform_1(self, worldTrans);
};;

btCollisionObject.prototype['setCollisionShape'] = btCollisionObject.prototype.setCollisionShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionShape) {
  var self = this.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  _emscripten_bind_btCollisionObject_setCollisionShape_1(self, collisionShape);
};;

btCollisionObject.prototype['setCcdMotionThreshold'] = btCollisionObject.prototype.setCcdMotionThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ccdMotionThreshold) {
  var self = this.ptr;
  if (ccdMotionThreshold && typeof ccdMotionThreshold === 'object') ccdMotionThreshold = ccdMotionThreshold.ptr;
  _emscripten_bind_btCollisionObject_setCcdMotionThreshold_1(self, ccdMotionThreshold);
};;

btCollisionObject.prototype['setCcdSweptSphereRadius'] = btCollisionObject.prototype.setCcdSweptSphereRadius = /** @suppress {undefinedVars, duplicate} @this{Object} */function(radius) {
  var self = this.ptr;
  if (radius && typeof radius === 'object') radius = radius.ptr;
  _emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1(self, radius);
};;

btCollisionObject.prototype['getUserIndex'] = btCollisionObject.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCollisionObject_getUserIndex_0(self);
};;

btCollisionObject.prototype['setUserIndex'] = btCollisionObject.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCollisionObject_setUserIndex_1(self, index);
};;

btCollisionObject.prototype['setUserIndex2'] = btCollisionObject.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCollisionObject_setUserIndex2_1(self, index);
};;

btCollisionObject.prototype['setIgnoreCollisionCheck'] = btCollisionObject.prototype.setIgnoreCollisionCheck = /** @suppress {undefinedVars, duplicate} @this{Object} */function(co, ig) {
  var self = this.ptr;
  if (co && typeof co === 'object') co = co.ptr;
  if (ig && typeof ig === 'object') ig = ig.ptr;
  _emscripten_bind_btCollisionObject_setIgnoreCollisionCheck_2(self, co, ig);
};;

btCollisionObject.prototype['setInterpolationWorldTransform'] = btCollisionObject.prototype.setInterpolationWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(trans) {
  var self = this.ptr;
  if (trans && typeof trans === 'object') trans = trans.ptr;
  _emscripten_bind_btCollisionObject_setInterpolationWorldTransform_1(self, trans);
};;

btCollisionObject.prototype['getInterpolationWorldTransform'] = btCollisionObject.prototype.getInterpolationWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCollisionObject_getInterpolationWorldTransform_0(self), btTransform);
};;

  btCollisionObject.prototype['__destroy__'] = btCollisionObject.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btCollisionObject___destroy___0(self);
};
// ClosestRayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function ClosestRayResultCallback() { throw "cannot construct a ClosestRayResultCallback, no constructor in IDL" }
ClosestRayResultCallback.prototype = Object.create(RayResultCallback.prototype);
ClosestRayResultCallback.prototype.constructor = ClosestRayResultCallback;
ClosestRayResultCallback.prototype.__class__ = ClosestRayResultCallback;
ClosestRayResultCallback.__cache__ = {};
Module['ClosestRayResultCallback'] = ClosestRayResultCallback;

ClosestRayResultCallback.prototype['hasHit'] = ClosestRayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ClosestRayResultCallback_hasHit_0(self));
};;

  ClosestRayResultCallback.prototype['get_m_rayFromWorld'] = ClosestRayResultCallback.prototype.get_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0(self), btVector3);
};
    ClosestRayResultCallback.prototype['set_m_rayFromWorld'] = ClosestRayResultCallback.prototype.set_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_rayFromWorld', { get: ClosestRayResultCallback.prototype.get_m_rayFromWorld, set: ClosestRayResultCallback.prototype.set_m_rayFromWorld });
  ClosestRayResultCallback.prototype['get_m_rayToWorld'] = ClosestRayResultCallback.prototype.get_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0(self), btVector3);
};
    ClosestRayResultCallback.prototype['set_m_rayToWorld'] = ClosestRayResultCallback.prototype.set_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_rayToWorld', { get: ClosestRayResultCallback.prototype.get_m_rayToWorld, set: ClosestRayResultCallback.prototype.set_m_rayToWorld });
  ClosestRayResultCallback.prototype['__destroy__'] = ClosestRayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ClosestRayResultCallback___destroy___0(self);
};
// AllHitsRayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function AllHitsRayResultCallback() { throw "cannot construct a AllHitsRayResultCallback, no constructor in IDL" }
AllHitsRayResultCallback.prototype = Object.create(RayResultCallback.prototype);
AllHitsRayResultCallback.prototype.constructor = AllHitsRayResultCallback;
AllHitsRayResultCallback.prototype.__class__ = AllHitsRayResultCallback;
AllHitsRayResultCallback.__cache__ = {};
Module['AllHitsRayResultCallback'] = AllHitsRayResultCallback;

AllHitsRayResultCallback.prototype['hasHit'] = AllHitsRayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_AllHitsRayResultCallback_hasHit_0(self));
};;

  AllHitsRayResultCallback.prototype['get_m_rayFromWorld'] = AllHitsRayResultCallback.prototype.get_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0(self), btVector3);
};
    AllHitsRayResultCallback.prototype['set_m_rayFromWorld'] = AllHitsRayResultCallback.prototype.set_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_rayFromWorld', { get: AllHitsRayResultCallback.prototype.get_m_rayFromWorld, set: AllHitsRayResultCallback.prototype.set_m_rayFromWorld });
  AllHitsRayResultCallback.prototype['get_m_rayToWorld'] = AllHitsRayResultCallback.prototype.get_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0(self), btVector3);
};
    AllHitsRayResultCallback.prototype['set_m_rayToWorld'] = AllHitsRayResultCallback.prototype.set_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_rayToWorld', { get: AllHitsRayResultCallback.prototype.get_m_rayToWorld, set: AllHitsRayResultCallback.prototype.set_m_rayToWorld });
  AllHitsRayResultCallback.prototype['__destroy__'] = AllHitsRayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_AllHitsRayResultCallback___destroy___0(self);
};
// btConvexInternalShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConvexInternalShape() { throw "cannot construct a btConvexInternalShape, no constructor in IDL" }
btConvexInternalShape.prototype = Object.create(btConvexShape.prototype);
btConvexInternalShape.prototype.constructor = btConvexInternalShape;
btConvexInternalShape.prototype.__class__ = btConvexInternalShape;
btConvexInternalShape.__cache__ = {};
Module['btConvexInternalShape'] = btConvexInternalShape;

btConvexInternalShape.prototype['getImplicitShapeDimensions'] = btConvexInternalShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btConvexInternalShape_getImplicitShapeDimensions_0(self), btVector3);
};;

btConvexInternalShape.prototype['setLocalScaling'] = btConvexInternalShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btConvexInternalShape_setLocalScaling_1(self, scaling);
};;

btConvexInternalShape.prototype['getLocalScaling'] = btConvexInternalShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btConvexInternalShape_getLocalScaling_0(self), btVector3);
};;

btConvexInternalShape.prototype['calculateLocalInertia'] = btConvexInternalShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btConvexInternalShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConvexInternalShape.prototype['setMargin'] = btConvexInternalShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btConvexInternalShape_setMargin_1(self, margin);
};;

btConvexInternalShape.prototype['getMargin'] = btConvexInternalShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexInternalShape_getMargin_0(self);
};;

btConvexInternalShape.prototype['isCompound'] = btConvexInternalShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btConvexInternalShape_isCompound_0(self));
};;

btConvexInternalShape.prototype['getUserIndex'] = btConvexInternalShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexInternalShape_getUserIndex_0(self);
};;

btConvexInternalShape.prototype['setUserIndex'] = btConvexInternalShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConvexInternalShape_setUserIndex_1(self, index);
};;

btConvexInternalShape.prototype['getUserPointerAsInt'] = btConvexInternalShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexInternalShape_getUserPointerAsInt_0(self);
};;

btConvexInternalShape.prototype['setUserPointerAsInt'] = btConvexInternalShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConvexInternalShape_setUserPointerAsInt_1(self, index);
};;

btConvexInternalShape.prototype['getAabb'] = btConvexInternalShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btConvexInternalShape_getAabb_3(self, t, min, max);
};;

btConvexInternalShape.prototype['getLocalBoundingSphere'] = btConvexInternalShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexInternalShape_getLocalBoundingSphere_0(self);
};;

  btConvexInternalShape.prototype['__destroy__'] = btConvexInternalShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btConvexInternalShape___destroy___0(self);
};
// btStridingMeshInterface
/** @suppress {undefinedVars, duplicate} @this{Object} */function btStridingMeshInterface() { throw "cannot construct a btStridingMeshInterface, no constructor in IDL" }
btStridingMeshInterface.prototype = Object.create(WrapperObject.prototype);
btStridingMeshInterface.prototype.constructor = btStridingMeshInterface;
btStridingMeshInterface.prototype.__class__ = btStridingMeshInterface;
btStridingMeshInterface.__cache__ = {};
Module['btStridingMeshInterface'] = btStridingMeshInterface;

btStridingMeshInterface.prototype['setScaling'] = btStridingMeshInterface.prototype.setScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btStridingMeshInterface_setScaling_1(self, scaling);
};;

  btStridingMeshInterface.prototype['__destroy__'] = btStridingMeshInterface.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btStridingMeshInterface___destroy___0(self);
};
// btTriangleMeshShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btTriangleMeshShape() { throw "cannot construct a btTriangleMeshShape, no constructor in IDL" }
btTriangleMeshShape.prototype = Object.create(btConcaveShape.prototype);
btTriangleMeshShape.prototype.constructor = btTriangleMeshShape;
btTriangleMeshShape.prototype.__class__ = btTriangleMeshShape;
btTriangleMeshShape.__cache__ = {};
Module['btTriangleMeshShape'] = btTriangleMeshShape;

btTriangleMeshShape.prototype['setLocalScaling'] = btTriangleMeshShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btTriangleMeshShape_setLocalScaling_1(self, scaling);
};;

btTriangleMeshShape.prototype['getLocalScaling'] = btTriangleMeshShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btTriangleMeshShape_getLocalScaling_0(self), btVector3);
};;

btTriangleMeshShape.prototype['calculateLocalInertia'] = btTriangleMeshShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btTriangleMeshShape_calculateLocalInertia_2(self, mass, inertia);
};;

btTriangleMeshShape.prototype['isCompound'] = btTriangleMeshShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btTriangleMeshShape_isCompound_0(self));
};;

btTriangleMeshShape.prototype['getUserIndex'] = btTriangleMeshShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btTriangleMeshShape_getUserIndex_0(self);
};;

btTriangleMeshShape.prototype['setUserIndex'] = btTriangleMeshShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btTriangleMeshShape_setUserIndex_1(self, index);
};;

btTriangleMeshShape.prototype['getUserPointerAsInt'] = btTriangleMeshShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btTriangleMeshShape_getUserPointerAsInt_0(self);
};;

btTriangleMeshShape.prototype['setUserPointerAsInt'] = btTriangleMeshShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btTriangleMeshShape_setUserPointerAsInt_1(self, index);
};;

btTriangleMeshShape.prototype['getAabb'] = btTriangleMeshShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btTriangleMeshShape_getAabb_3(self, t, min, max);
};;

btTriangleMeshShape.prototype['getLocalBoundingSphere'] = btTriangleMeshShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btTriangleMeshShape_getLocalBoundingSphere_0(self);
};;

  btTriangleMeshShape.prototype['__destroy__'] = btTriangleMeshShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btTriangleMeshShape___destroy___0(self);
};
// btDispatcher
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDispatcher() { throw "cannot construct a btDispatcher, no constructor in IDL" }
btDispatcher.prototype = Object.create(WrapperObject.prototype);
btDispatcher.prototype.constructor = btDispatcher;
btDispatcher.prototype.__class__ = btDispatcher;
btDispatcher.__cache__ = {};
Module['btDispatcher'] = btDispatcher;

btDispatcher.prototype['getNumManifolds'] = btDispatcher.prototype.getNumManifolds = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btDispatcher_getNumManifolds_0(self);
};;

btDispatcher.prototype['getManifoldByIndexInternal'] = btDispatcher.prototype.getManifoldByIndexInternal = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_emscripten_bind_btDispatcher_getManifoldByIndexInternal_1(self, index), btPersistentManifold);
};;

  btDispatcher.prototype['__destroy__'] = btDispatcher.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btDispatcher___destroy___0(self);
};
// btBroadphaseInterface
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBroadphaseInterface() { throw "cannot construct a btBroadphaseInterface, no constructor in IDL" }
btBroadphaseInterface.prototype = Object.create(WrapperObject.prototype);
btBroadphaseInterface.prototype.constructor = btBroadphaseInterface;
btBroadphaseInterface.prototype.__class__ = btBroadphaseInterface;
btBroadphaseInterface.__cache__ = {};
Module['btBroadphaseInterface'] = btBroadphaseInterface;

  btBroadphaseInterface.prototype['__destroy__'] = btBroadphaseInterface.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btBroadphaseInterface___destroy___0(self);
};
// btTypedConstraint
/** @suppress {undefinedVars, duplicate} @this{Object} */function btTypedConstraint() { throw "cannot construct a btTypedConstraint, no constructor in IDL" }
btTypedConstraint.prototype = Object.create(WrapperObject.prototype);
btTypedConstraint.prototype.constructor = btTypedConstraint;
btTypedConstraint.prototype.__class__ = btTypedConstraint;
btTypedConstraint.__cache__ = {};
Module['btTypedConstraint'] = btTypedConstraint;

btTypedConstraint.prototype['enableFeedback'] = btTypedConstraint.prototype.enableFeedback = /** @suppress {undefinedVars, duplicate} @this{Object} */function(needsFeedback) {
  var self = this.ptr;
  if (needsFeedback && typeof needsFeedback === 'object') needsFeedback = needsFeedback.ptr;
  _emscripten_bind_btTypedConstraint_enableFeedback_1(self, needsFeedback);
};;

btTypedConstraint.prototype['getBreakingImpulseThreshold'] = btTypedConstraint.prototype.getBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0(self);
};;

btTypedConstraint.prototype['setBreakingImpulseThreshold'] = btTypedConstraint.prototype.setBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(threshold) {
  var self = this.ptr;
  if (threshold && typeof threshold === 'object') threshold = threshold.ptr;
  _emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1(self, threshold);
};;

btTypedConstraint.prototype['getParam'] = btTypedConstraint.prototype.getParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  return _emscripten_bind_btTypedConstraint_getParam_2(self, num, axis);
};;

btTypedConstraint.prototype['setParam'] = btTypedConstraint.prototype.setParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, value, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  _emscripten_bind_btTypedConstraint_setParam_3(self, num, value, axis);
};;

  btTypedConstraint.prototype['__destroy__'] = btTypedConstraint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btTypedConstraint___destroy___0(self);
};
// btDiscreteDynamicsWorld
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDiscreteDynamicsWorld(dispatcher, pairCache, constraintSolver, collisionConfiguration) {
  if (dispatcher && typeof dispatcher === 'object') dispatcher = dispatcher.ptr;
  if (pairCache && typeof pairCache === 'object') pairCache = pairCache.ptr;
  if (constraintSolver && typeof constraintSolver === 'object') constraintSolver = constraintSolver.ptr;
  if (collisionConfiguration && typeof collisionConfiguration === 'object') collisionConfiguration = collisionConfiguration.ptr;
  this.ptr = _emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4(dispatcher, pairCache, constraintSolver, collisionConfiguration);
  getCache(btDiscreteDynamicsWorld)[this.ptr] = this;
};;
btDiscreteDynamicsWorld.prototype = Object.create(btDynamicsWorld.prototype);
btDiscreteDynamicsWorld.prototype.constructor = btDiscreteDynamicsWorld;
btDiscreteDynamicsWorld.prototype.__class__ = btDiscreteDynamicsWorld;
btDiscreteDynamicsWorld.__cache__ = {};
Module['btDiscreteDynamicsWorld'] = btDiscreteDynamicsWorld;

btDiscreteDynamicsWorld.prototype['setGravity'] = btDiscreteDynamicsWorld.prototype.setGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(gravity) {
  var self = this.ptr;
  if (gravity && typeof gravity === 'object') gravity = gravity.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_setGravity_1(self, gravity);
};;

btDiscreteDynamicsWorld.prototype['getGravity'] = btDiscreteDynamicsWorld.prototype.getGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btDiscreteDynamicsWorld_getGravity_0(self), btVector3);
};;

btDiscreteDynamicsWorld.prototype['addRigidBody'] = btDiscreteDynamicsWorld.prototype.addRigidBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function(body, group, mask) {
  var self = this.ptr;
  if (body && typeof body === 'object') body = body.ptr;
  if (group && typeof group === 'object') group = group.ptr;
  if (mask && typeof mask === 'object') mask = mask.ptr;
  if (group === undefined) { _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1(self, body);  return }
  if (mask === undefined) { _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_2(self, body, group);  return }
  _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3(self, body, group, mask);
};;

btDiscreteDynamicsWorld.prototype['removeRigidBody'] = btDiscreteDynamicsWorld.prototype.removeRigidBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function(body) {
  var self = this.ptr;
  if (body && typeof body === 'object') body = body.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1(self, body);
};;

btDiscreteDynamicsWorld.prototype['addConstraint'] = btDiscreteDynamicsWorld.prototype.addConstraint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(constraint, disableCollisionsBetweenLinkedBodies) {
  var self = this.ptr;
  if (constraint && typeof constraint === 'object') constraint = constraint.ptr;
  if (disableCollisionsBetweenLinkedBodies && typeof disableCollisionsBetweenLinkedBodies === 'object') disableCollisionsBetweenLinkedBodies = disableCollisionsBetweenLinkedBodies.ptr;
  if (disableCollisionsBetweenLinkedBodies === undefined) { _emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1(self, constraint);  return }
  _emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2(self, constraint, disableCollisionsBetweenLinkedBodies);
};;

btDiscreteDynamicsWorld.prototype['removeConstraint'] = btDiscreteDynamicsWorld.prototype.removeConstraint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(constraint) {
  var self = this.ptr;
  if (constraint && typeof constraint === 'object') constraint = constraint.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1(self, constraint);
};;

btDiscreteDynamicsWorld.prototype['stepSimulation'] = btDiscreteDynamicsWorld.prototype.stepSimulation = /** @suppress {undefinedVars, duplicate} @this{Object} */function(timeStep, maxSubSteps, fixedTimeStep) {
  var self = this.ptr;
  if (timeStep && typeof timeStep === 'object') timeStep = timeStep.ptr;
  if (maxSubSteps && typeof maxSubSteps === 'object') maxSubSteps = maxSubSteps.ptr;
  if (fixedTimeStep && typeof fixedTimeStep === 'object') fixedTimeStep = fixedTimeStep.ptr;
  if (maxSubSteps === undefined) { return _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1(self, timeStep) }
  if (fixedTimeStep === undefined) { return _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2(self, timeStep, maxSubSteps) }
  return _emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3(self, timeStep, maxSubSteps, fixedTimeStep);
};;

btDiscreteDynamicsWorld.prototype['rayTest'] = btDiscreteDynamicsWorld.prototype.rayTest = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromWorld, rayToWorld, resultCallback) {
  var self = this.ptr;
  if (rayFromWorld && typeof rayFromWorld === 'object') rayFromWorld = rayFromWorld.ptr;
  if (rayToWorld && typeof rayToWorld === 'object') rayToWorld = rayToWorld.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_rayTest_3(self, rayFromWorld, rayToWorld, resultCallback);
};;

btDiscreteDynamicsWorld.prototype['rayTestSingle'] = btDiscreteDynamicsWorld.prototype.rayTestSingle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback) {
  var self = this.ptr;
  if (rayFromTrans && typeof rayFromTrans === 'object') rayFromTrans = rayFromTrans.ptr;
  if (rayToTrans && typeof rayToTrans === 'object') rayToTrans = rayToTrans.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (colObjWorldTransform && typeof colObjWorldTransform === 'object') colObjWorldTransform = colObjWorldTransform.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_rayTestSingle_6(self, rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback);
};;

btDiscreteDynamicsWorld.prototype['addCollisionObject'] = btDiscreteDynamicsWorld.prototype.addCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject, collisionFilterGroup, collisionFilterMask) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionFilterGroup && typeof collisionFilterGroup === 'object') collisionFilterGroup = collisionFilterGroup.ptr;
  if (collisionFilterMask && typeof collisionFilterMask === 'object') collisionFilterMask = collisionFilterMask.ptr;
  if (collisionFilterGroup === undefined) { _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1(self, collisionObject);  return }
  if (collisionFilterMask === undefined) { _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2(self, collisionObject, collisionFilterGroup);  return }
  _emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3(self, collisionObject, collisionFilterGroup, collisionFilterMask);
};;

btDiscreteDynamicsWorld.prototype['removeCollisionObject'] = btDiscreteDynamicsWorld.prototype.removeCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1(self, collisionObject);
};;

btDiscreteDynamicsWorld.prototype['setContactBreakingThreshold'] = btDiscreteDynamicsWorld.prototype.setContactBreakingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(b) {
  var self = this.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_setContactBreakingThreshold_1(self, b);
};;

btDiscreteDynamicsWorld.prototype['addAction'] = btDiscreteDynamicsWorld.prototype.addAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_addAction_1(self, action);
};;

btDiscreteDynamicsWorld.prototype['removeAction'] = btDiscreteDynamicsWorld.prototype.removeAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld_removeAction_1(self, action);
};;

btDiscreteDynamicsWorld.prototype['getFixedBody'] = btDiscreteDynamicsWorld.prototype.getFixedBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btDiscreteDynamicsWorld_getFixedBody_0(self), btRigidBody);
};;

  btDiscreteDynamicsWorld.prototype['__destroy__'] = btDiscreteDynamicsWorld.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btDiscreteDynamicsWorld___destroy___0(self);
};
// VoidPtr
/** @suppress {undefinedVars, duplicate} @this{Object} */function VoidPtr() { throw "cannot construct a VoidPtr, no constructor in IDL" }
VoidPtr.prototype = Object.create(WrapperObject.prototype);
VoidPtr.prototype.constructor = VoidPtr;
VoidPtr.prototype.__class__ = VoidPtr;
VoidPtr.__cache__ = {};
Module['VoidPtr'] = VoidPtr;

  VoidPtr.prototype['__destroy__'] = VoidPtr.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_VoidPtr___destroy___0(self);
};
// btVector3
/** @suppress {undefinedVars, duplicate} @this{Object} */function btVector3(x, y, z) {
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  if (x === undefined) { this.ptr = _emscripten_bind_btVector3_btVector3_0(); getCache(btVector3)[this.ptr] = this;return }
  if (y === undefined) { this.ptr = _emscripten_bind_btVector3_btVector3_1(x); getCache(btVector3)[this.ptr] = this;return }
  if (z === undefined) { this.ptr = _emscripten_bind_btVector3_btVector3_2(x, y); getCache(btVector3)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btVector3_btVector3_3(x, y, z);
  getCache(btVector3)[this.ptr] = this;
};;
btVector3.prototype = Object.create(WrapperObject.prototype);
btVector3.prototype.constructor = btVector3;
btVector3.prototype.__class__ = btVector3;
btVector3.__cache__ = {};
Module['btVector3'] = btVector3;

btVector3.prototype['x'] = btVector3.prototype.x = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btVector3_x_0(self);
};;

btVector3.prototype['y'] = btVector3.prototype.y = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btVector3_y_0(self);
};;

btVector3.prototype['z'] = btVector3.prototype.z = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btVector3_z_0(self);
};;

btVector3.prototype['setX'] = btVector3.prototype.setX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  _emscripten_bind_btVector3_setX_1(self, x);
};;

btVector3.prototype['setY'] = btVector3.prototype.setY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(y) {
  var self = this.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  _emscripten_bind_btVector3_setY_1(self, y);
};;

btVector3.prototype['setZ'] = btVector3.prototype.setZ = /** @suppress {undefinedVars, duplicate} @this{Object} */function(z) {
  var self = this.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  _emscripten_bind_btVector3_setZ_1(self, z);
};;

btVector3.prototype['setValue'] = btVector3.prototype.setValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x, y, z) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  _emscripten_bind_btVector3_setValue_3(self, x, y, z);
};;

  btVector3.prototype['__destroy__'] = btVector3.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btVector3___destroy___0(self);
};
// btQuaternion
/** @suppress {undefinedVars, duplicate} @this{Object} */function btQuaternion(x, y, z, w) {
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  if (w && typeof w === 'object') w = w.ptr;
  this.ptr = _emscripten_bind_btQuaternion_btQuaternion_4(x, y, z, w);
  getCache(btQuaternion)[this.ptr] = this;
};;
btQuaternion.prototype = Object.create(btQuadWord.prototype);
btQuaternion.prototype.constructor = btQuaternion;
btQuaternion.prototype.__class__ = btQuaternion;
btQuaternion.__cache__ = {};
Module['btQuaternion'] = btQuaternion;

btQuaternion.prototype['setValue'] = btQuaternion.prototype.setValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x, y, z, w) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  if (w && typeof w === 'object') w = w.ptr;
  _emscripten_bind_btQuaternion_setValue_4(self, x, y, z, w);
};;

btQuaternion.prototype['x'] = btQuaternion.prototype.x = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btQuaternion_x_0(self);
};;

btQuaternion.prototype['y'] = btQuaternion.prototype.y = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btQuaternion_y_0(self);
};;

btQuaternion.prototype['z'] = btQuaternion.prototype.z = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btQuaternion_z_0(self);
};;

btQuaternion.prototype['w'] = btQuaternion.prototype.w = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btQuaternion_w_0(self);
};;

btQuaternion.prototype['setX'] = btQuaternion.prototype.setX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  _emscripten_bind_btQuaternion_setX_1(self, x);
};;

btQuaternion.prototype['setY'] = btQuaternion.prototype.setY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(y) {
  var self = this.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  _emscripten_bind_btQuaternion_setY_1(self, y);
};;

btQuaternion.prototype['setZ'] = btQuaternion.prototype.setZ = /** @suppress {undefinedVars, duplicate} @this{Object} */function(z) {
  var self = this.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  _emscripten_bind_btQuaternion_setZ_1(self, z);
};;

btQuaternion.prototype['setW'] = btQuaternion.prototype.setW = /** @suppress {undefinedVars, duplicate} @this{Object} */function(w) {
  var self = this.ptr;
  if (w && typeof w === 'object') w = w.ptr;
  _emscripten_bind_btQuaternion_setW_1(self, w);
};;

  btQuaternion.prototype['__destroy__'] = btQuaternion.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btQuaternion___destroy___0(self);
};
// btMatrix3x3
/** @suppress {undefinedVars, duplicate} @this{Object} */function btMatrix3x3() { throw "cannot construct a btMatrix3x3, no constructor in IDL" }
btMatrix3x3.prototype = Object.create(WrapperObject.prototype);
btMatrix3x3.prototype.constructor = btMatrix3x3;
btMatrix3x3.prototype.__class__ = btMatrix3x3;
btMatrix3x3.__cache__ = {};
Module['btMatrix3x3'] = btMatrix3x3;

btMatrix3x3.prototype['getRotation'] = btMatrix3x3.prototype.getRotation = /** @suppress {undefinedVars, duplicate} @this{Object} */function(q) {
  var self = this.ptr;
  if (q && typeof q === 'object') q = q.ptr;
  _emscripten_bind_btMatrix3x3_getRotation_1(self, q);
};;

  btMatrix3x3.prototype['__destroy__'] = btMatrix3x3.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btMatrix3x3___destroy___0(self);
};
// btTransform
/** @suppress {undefinedVars, duplicate} @this{Object} */function btTransform(q, v) {
  if (q && typeof q === 'object') q = q.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  if (q === undefined) { this.ptr = _emscripten_bind_btTransform_btTransform_0(); getCache(btTransform)[this.ptr] = this;return }
  if (v === undefined) { this.ptr = _emscripten_bind_btTransform_btTransform_1(q); getCache(btTransform)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btTransform_btTransform_2(q, v);
  getCache(btTransform)[this.ptr] = this;
};;
btTransform.prototype = Object.create(WrapperObject.prototype);
btTransform.prototype.constructor = btTransform;
btTransform.prototype.__class__ = btTransform;
btTransform.__cache__ = {};
Module['btTransform'] = btTransform;

btTransform.prototype['setIdentity'] = btTransform.prototype.setIdentity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btTransform_setIdentity_0(self);
};;

btTransform.prototype['setOrigin'] = btTransform.prototype.setOrigin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(origin) {
  var self = this.ptr;
  if (origin && typeof origin === 'object') origin = origin.ptr;
  _emscripten_bind_btTransform_setOrigin_1(self, origin);
};;

btTransform.prototype['setRotation'] = btTransform.prototype.setRotation = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rotation) {
  var self = this.ptr;
  if (rotation && typeof rotation === 'object') rotation = rotation.ptr;
  _emscripten_bind_btTransform_setRotation_1(self, rotation);
};;

btTransform.prototype['getOrigin'] = btTransform.prototype.getOrigin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btTransform_getOrigin_0(self), btVector3);
};;

btTransform.prototype['getRotation'] = btTransform.prototype.getRotation = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btTransform_getRotation_0(self), btQuaternion);
};;

btTransform.prototype['getBasis'] = btTransform.prototype.getBasis = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btTransform_getBasis_0(self), btMatrix3x3);
};;

btTransform.prototype['inverse'] = btTransform.prototype.inverse = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btTransform_inverse_0(self), btTransform);
};;

btTransform.prototype['op_mul'] = btTransform.prototype.op_mul = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  return wrapPointer(_emscripten_bind_btTransform_op_mul_1(self, t), btTransform);
};;

  btTransform.prototype['__destroy__'] = btTransform.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btTransform___destroy___0(self);
};
// btDefaultMotionState
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDefaultMotionState(startTrans, centerOfMassOffset) {
  if (startTrans && typeof startTrans === 'object') startTrans = startTrans.ptr;
  if (centerOfMassOffset && typeof centerOfMassOffset === 'object') centerOfMassOffset = centerOfMassOffset.ptr;
  if (startTrans === undefined) { this.ptr = _emscripten_bind_btDefaultMotionState_btDefaultMotionState_0(); getCache(btDefaultMotionState)[this.ptr] = this;return }
  if (centerOfMassOffset === undefined) { this.ptr = _emscripten_bind_btDefaultMotionState_btDefaultMotionState_1(startTrans); getCache(btDefaultMotionState)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btDefaultMotionState_btDefaultMotionState_2(startTrans, centerOfMassOffset);
  getCache(btDefaultMotionState)[this.ptr] = this;
};;
btDefaultMotionState.prototype = Object.create(btMotionState.prototype);
btDefaultMotionState.prototype.constructor = btDefaultMotionState;
btDefaultMotionState.prototype.__class__ = btDefaultMotionState;
btDefaultMotionState.__cache__ = {};
Module['btDefaultMotionState'] = btDefaultMotionState;

btDefaultMotionState.prototype['getWorldTransform'] = btDefaultMotionState.prototype.getWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _emscripten_bind_btDefaultMotionState_getWorldTransform_1(self, worldTrans);
};;

btDefaultMotionState.prototype['setWorldTransform'] = btDefaultMotionState.prototype.setWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _emscripten_bind_btDefaultMotionState_setWorldTransform_1(self, worldTrans);
};;

  btDefaultMotionState.prototype['__destroy__'] = btDefaultMotionState.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btDefaultMotionState___destroy___0(self);
};
// ccClosestRayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function ccClosestRayResultCallback(from, to) {
  if (from && typeof from === 'object') from = from.ptr;
  if (to && typeof to === 'object') to = to.ptr;
  this.ptr = _emscripten_bind_ccClosestRayResultCallback_ccClosestRayResultCallback_2(from, to);
  getCache(ccClosestRayResultCallback)[this.ptr] = this;
};;
ccClosestRayResultCallback.prototype = Object.create(ClosestRayResultCallback.prototype);
ccClosestRayResultCallback.prototype.constructor = ccClosestRayResultCallback;
ccClosestRayResultCallback.prototype.__class__ = ccClosestRayResultCallback;
ccClosestRayResultCallback.__cache__ = {};
Module['ccClosestRayResultCallback'] = ccClosestRayResultCallback;

ccClosestRayResultCallback.prototype['getHitNormalWorld'] = ccClosestRayResultCallback.prototype.getHitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccClosestRayResultCallback_getHitNormalWorld_0(self), btVector3);
};;

ccClosestRayResultCallback.prototype['getHitPointWorld'] = ccClosestRayResultCallback.prototype.getHitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccClosestRayResultCallback_getHitPointWorld_0(self), btVector3);
};;

ccClosestRayResultCallback.prototype['getCollisionShapePtr'] = ccClosestRayResultCallback.prototype.getCollisionShapePtr = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ccClosestRayResultCallback_getCollisionShapePtr_0(self);
};;

ccClosestRayResultCallback.prototype['getClosestHitFraction'] = ccClosestRayResultCallback.prototype.getClosestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_ccClosestRayResultCallback_getClosestHitFraction_0(self);
};;

ccClosestRayResultCallback.prototype['reset'] = ccClosestRayResultCallback.prototype.reset = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mask, queryTrigger) {
  var self = this.ptr;
  if (mask && typeof mask === 'object') mask = mask.ptr;
  if (queryTrigger && typeof queryTrigger === 'object') queryTrigger = queryTrigger.ptr;
  _emscripten_bind_ccClosestRayResultCallback_reset_2(self, mask, queryTrigger);
};;

ccClosestRayResultCallback.prototype['hasHit'] = ccClosestRayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ccClosestRayResultCallback_hasHit_0(self));
};;

  ccClosestRayResultCallback.prototype['get_m_rayFromWorld'] = ccClosestRayResultCallback.prototype.get_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccClosestRayResultCallback_get_m_rayFromWorld_0(self), btVector3);
};
    ccClosestRayResultCallback.prototype['set_m_rayFromWorld'] = ccClosestRayResultCallback.prototype.set_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ccClosestRayResultCallback_set_m_rayFromWorld_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_rayFromWorld', { get: ccClosestRayResultCallback.prototype.get_m_rayFromWorld, set: ccClosestRayResultCallback.prototype.set_m_rayFromWorld });
  ccClosestRayResultCallback.prototype['get_m_rayToWorld'] = ccClosestRayResultCallback.prototype.get_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccClosestRayResultCallback_get_m_rayToWorld_0(self), btVector3);
};
    ccClosestRayResultCallback.prototype['set_m_rayToWorld'] = ccClosestRayResultCallback.prototype.set_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ccClosestRayResultCallback_set_m_rayToWorld_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_rayToWorld', { get: ccClosestRayResultCallback.prototype.get_m_rayToWorld, set: ccClosestRayResultCallback.prototype.set_m_rayToWorld });
  ccClosestRayResultCallback.prototype['__destroy__'] = ccClosestRayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ccClosestRayResultCallback___destroy___0(self);
};
// btScalarArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function btScalarArray() { throw "cannot construct a btScalarArray, no constructor in IDL" }
btScalarArray.prototype = Object.create(WrapperObject.prototype);
btScalarArray.prototype.constructor = btScalarArray;
btScalarArray.prototype.__class__ = btScalarArray;
btScalarArray.__cache__ = {};
Module['btScalarArray'] = btScalarArray;

btScalarArray.prototype['size'] = btScalarArray.prototype.size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btScalarArray_size_0(self);
};;

btScalarArray.prototype['at'] = btScalarArray.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return _emscripten_bind_btScalarArray_at_1(self, n);
};;

btScalarArray.prototype['clear'] = btScalarArray.prototype.clear = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btScalarArray_clear_0(self);
};;

  btScalarArray.prototype['__destroy__'] = btScalarArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btScalarArray___destroy___0(self);
};
// ccAllHitsRayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function ccAllHitsRayResultCallback(from, to) {
  if (from && typeof from === 'object') from = from.ptr;
  if (to && typeof to === 'object') to = to.ptr;
  this.ptr = _emscripten_bind_ccAllHitsRayResultCallback_ccAllHitsRayResultCallback_2(from, to);
  getCache(ccAllHitsRayResultCallback)[this.ptr] = this;
};;
ccAllHitsRayResultCallback.prototype = Object.create(AllHitsRayResultCallback.prototype);
ccAllHitsRayResultCallback.prototype.constructor = ccAllHitsRayResultCallback;
ccAllHitsRayResultCallback.prototype.__class__ = ccAllHitsRayResultCallback;
ccAllHitsRayResultCallback.__cache__ = {};
Module['ccAllHitsRayResultCallback'] = ccAllHitsRayResultCallback;

ccAllHitsRayResultCallback.prototype['getHitFractions'] = ccAllHitsRayResultCallback.prototype.getHitFractions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccAllHitsRayResultCallback_getHitFractions_0(self), btScalarArray);
};;

ccAllHitsRayResultCallback.prototype['getHitNormalWorld'] = ccAllHitsRayResultCallback.prototype.getHitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccAllHitsRayResultCallback_getHitNormalWorld_0(self), btVector3Array);
};;

ccAllHitsRayResultCallback.prototype['getHitPointWorld'] = ccAllHitsRayResultCallback.prototype.getHitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccAllHitsRayResultCallback_getHitPointWorld_0(self), btVector3Array);
};;

ccAllHitsRayResultCallback.prototype['getCollisionShapePtrs'] = ccAllHitsRayResultCallback.prototype.getCollisionShapePtrs = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccAllHitsRayResultCallback_getCollisionShapePtrs_0(self), btIntArray);
};;

ccAllHitsRayResultCallback.prototype['reset'] = ccAllHitsRayResultCallback.prototype.reset = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mask, queryTrigger) {
  var self = this.ptr;
  if (mask && typeof mask === 'object') mask = mask.ptr;
  if (queryTrigger && typeof queryTrigger === 'object') queryTrigger = queryTrigger.ptr;
  _emscripten_bind_ccAllHitsRayResultCallback_reset_2(self, mask, queryTrigger);
};;

ccAllHitsRayResultCallback.prototype['hasHit'] = ccAllHitsRayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_ccAllHitsRayResultCallback_hasHit_0(self));
};;

  ccAllHitsRayResultCallback.prototype['get_m_rayFromWorld'] = ccAllHitsRayResultCallback.prototype.get_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccAllHitsRayResultCallback_get_m_rayFromWorld_0(self), btVector3);
};
    ccAllHitsRayResultCallback.prototype['set_m_rayFromWorld'] = ccAllHitsRayResultCallback.prototype.set_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ccAllHitsRayResultCallback_set_m_rayFromWorld_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_rayFromWorld', { get: ccAllHitsRayResultCallback.prototype.get_m_rayFromWorld, set: ccAllHitsRayResultCallback.prototype.set_m_rayFromWorld });
  ccAllHitsRayResultCallback.prototype['get_m_rayToWorld'] = ccAllHitsRayResultCallback.prototype.get_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccAllHitsRayResultCallback_get_m_rayToWorld_0(self), btVector3);
};
    ccAllHitsRayResultCallback.prototype['set_m_rayToWorld'] = ccAllHitsRayResultCallback.prototype.set_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_ccAllHitsRayResultCallback_set_m_rayToWorld_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_rayToWorld', { get: ccAllHitsRayResultCallback.prototype.get_m_rayToWorld, set: ccAllHitsRayResultCallback.prototype.set_m_rayToWorld });
  ccAllHitsRayResultCallback.prototype['__destroy__'] = ccAllHitsRayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ccAllHitsRayResultCallback___destroy___0(self);
};
// btManifoldPoint
/** @suppress {undefinedVars, duplicate} @this{Object} */function btManifoldPoint() { throw "cannot construct a btManifoldPoint, no constructor in IDL" }
btManifoldPoint.prototype = Object.create(WrapperObject.prototype);
btManifoldPoint.prototype.constructor = btManifoldPoint;
btManifoldPoint.prototype.__class__ = btManifoldPoint;
btManifoldPoint.__cache__ = {};
Module['btManifoldPoint'] = btManifoldPoint;

btManifoldPoint.prototype['getAppliedImpulse'] = btManifoldPoint.prototype.getAppliedImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btManifoldPoint_getAppliedImpulse_0(self);
};;

btManifoldPoint.prototype['getDistance'] = btManifoldPoint.prototype.getDistance = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btManifoldPoint_getDistance_0(self);
};;

btManifoldPoint.prototype['getShape0'] = btManifoldPoint.prototype.getShape0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btManifoldPoint_getShape0_0(self), btCollisionShape);
};;

btManifoldPoint.prototype['getShape1'] = btManifoldPoint.prototype.getShape1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btManifoldPoint_getShape1_0(self), btCollisionShape);
};;

  btManifoldPoint.prototype['get_m_localPointA'] = btManifoldPoint.prototype.get_m_localPointA = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btManifoldPoint_get_m_localPointA_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_localPointA'] = btManifoldPoint.prototype.set_m_localPointA = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btManifoldPoint_set_m_localPointA_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_localPointA', { get: btManifoldPoint.prototype.get_m_localPointA, set: btManifoldPoint.prototype.set_m_localPointA });
  btManifoldPoint.prototype['get_m_localPointB'] = btManifoldPoint.prototype.get_m_localPointB = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btManifoldPoint_get_m_localPointB_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_localPointB'] = btManifoldPoint.prototype.set_m_localPointB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btManifoldPoint_set_m_localPointB_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_localPointB', { get: btManifoldPoint.prototype.get_m_localPointB, set: btManifoldPoint.prototype.set_m_localPointB });
  btManifoldPoint.prototype['get_m_positionWorldOnA'] = btManifoldPoint.prototype.get_m_positionWorldOnA = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_positionWorldOnA'] = btManifoldPoint.prototype.set_m_positionWorldOnA = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_positionWorldOnA', { get: btManifoldPoint.prototype.get_m_positionWorldOnA, set: btManifoldPoint.prototype.set_m_positionWorldOnA });
  btManifoldPoint.prototype['get_m_positionWorldOnB'] = btManifoldPoint.prototype.get_m_positionWorldOnB = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_positionWorldOnB'] = btManifoldPoint.prototype.set_m_positionWorldOnB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_positionWorldOnB', { get: btManifoldPoint.prototype.get_m_positionWorldOnB, set: btManifoldPoint.prototype.set_m_positionWorldOnB });
  btManifoldPoint.prototype['get_m_normalWorldOnB'] = btManifoldPoint.prototype.get_m_normalWorldOnB = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_normalWorldOnB'] = btManifoldPoint.prototype.set_m_normalWorldOnB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_normalWorldOnB', { get: btManifoldPoint.prototype.get_m_normalWorldOnB, set: btManifoldPoint.prototype.set_m_normalWorldOnB });
  btManifoldPoint.prototype['get_m_distance1'] = btManifoldPoint.prototype.get_m_distance1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btManifoldPoint_get_m_distance1_0(self);
};
    btManifoldPoint.prototype['set_m_distance1'] = btManifoldPoint.prototype.set_m_distance1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btManifoldPoint_set_m_distance1_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_distance1', { get: btManifoldPoint.prototype.get_m_distance1, set: btManifoldPoint.prototype.set_m_distance1 });
  btManifoldPoint.prototype['get_m_index0'] = btManifoldPoint.prototype.get_m_index0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btManifoldPoint_get_m_index0_0(self);
};
    btManifoldPoint.prototype['set_m_index0'] = btManifoldPoint.prototype.set_m_index0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btManifoldPoint_set_m_index0_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_index0', { get: btManifoldPoint.prototype.get_m_index0, set: btManifoldPoint.prototype.set_m_index0 });
  btManifoldPoint.prototype['get_m_index1'] = btManifoldPoint.prototype.get_m_index1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btManifoldPoint_get_m_index1_0(self);
};
    btManifoldPoint.prototype['set_m_index1'] = btManifoldPoint.prototype.set_m_index1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btManifoldPoint_set_m_index1_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_index1', { get: btManifoldPoint.prototype.get_m_index1, set: btManifoldPoint.prototype.set_m_index1 });
  btManifoldPoint.prototype['__destroy__'] = btManifoldPoint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btManifoldPoint___destroy___0(self);
};
// LocalShapeInfo
/** @suppress {undefinedVars, duplicate} @this{Object} */function LocalShapeInfo() { throw "cannot construct a LocalShapeInfo, no constructor in IDL" }
LocalShapeInfo.prototype = Object.create(WrapperObject.prototype);
LocalShapeInfo.prototype.constructor = LocalShapeInfo;
LocalShapeInfo.prototype.__class__ = LocalShapeInfo;
LocalShapeInfo.__cache__ = {};
Module['LocalShapeInfo'] = LocalShapeInfo;

  LocalShapeInfo.prototype['get_m_shapePart'] = LocalShapeInfo.prototype.get_m_shapePart = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_LocalShapeInfo_get_m_shapePart_0(self);
};
    LocalShapeInfo.prototype['set_m_shapePart'] = LocalShapeInfo.prototype.set_m_shapePart = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_LocalShapeInfo_set_m_shapePart_1(self, arg0);
};
    Object.defineProperty(LocalShapeInfo.prototype, 'm_shapePart', { get: LocalShapeInfo.prototype.get_m_shapePart, set: LocalShapeInfo.prototype.set_m_shapePart });
  LocalShapeInfo.prototype['get_m_triangleIndex'] = LocalShapeInfo.prototype.get_m_triangleIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0(self);
};
    LocalShapeInfo.prototype['set_m_triangleIndex'] = LocalShapeInfo.prototype.set_m_triangleIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1(self, arg0);
};
    Object.defineProperty(LocalShapeInfo.prototype, 'm_triangleIndex', { get: LocalShapeInfo.prototype.get_m_triangleIndex, set: LocalShapeInfo.prototype.set_m_triangleIndex });
  LocalShapeInfo.prototype['__destroy__'] = LocalShapeInfo.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_LocalShapeInfo___destroy___0(self);
};
// btConvexTriangleMeshShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConvexTriangleMeshShape(meshInterface, calcAabb) {
  if (meshInterface && typeof meshInterface === 'object') meshInterface = meshInterface.ptr;
  if (calcAabb && typeof calcAabb === 'object') calcAabb = calcAabb.ptr;
  if (calcAabb === undefined) { this.ptr = _emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1(meshInterface); getCache(btConvexTriangleMeshShape)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2(meshInterface, calcAabb);
  getCache(btConvexTriangleMeshShape)[this.ptr] = this;
};;
btConvexTriangleMeshShape.prototype = Object.create(btConvexShape.prototype);
btConvexTriangleMeshShape.prototype.constructor = btConvexTriangleMeshShape;
btConvexTriangleMeshShape.prototype.__class__ = btConvexTriangleMeshShape;
btConvexTriangleMeshShape.__cache__ = {};
Module['btConvexTriangleMeshShape'] = btConvexTriangleMeshShape;

btConvexTriangleMeshShape.prototype['setLocalScaling'] = btConvexTriangleMeshShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1(self, scaling);
};;

btConvexTriangleMeshShape.prototype['getLocalScaling'] = btConvexTriangleMeshShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0(self), btVector3);
};;

btConvexTriangleMeshShape.prototype['calculateLocalInertia'] = btConvexTriangleMeshShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConvexTriangleMeshShape.prototype['setMargin'] = btConvexTriangleMeshShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btConvexTriangleMeshShape_setMargin_1(self, margin);
};;

btConvexTriangleMeshShape.prototype['getMargin'] = btConvexTriangleMeshShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexTriangleMeshShape_getMargin_0(self);
};;

btConvexTriangleMeshShape.prototype['isCompound'] = btConvexTriangleMeshShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btConvexTriangleMeshShape_isCompound_0(self));
};;

btConvexTriangleMeshShape.prototype['getUserIndex'] = btConvexTriangleMeshShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexTriangleMeshShape_getUserIndex_0(self);
};;

btConvexTriangleMeshShape.prototype['setUserIndex'] = btConvexTriangleMeshShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConvexTriangleMeshShape_setUserIndex_1(self, index);
};;

btConvexTriangleMeshShape.prototype['getUserPointerAsInt'] = btConvexTriangleMeshShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexTriangleMeshShape_getUserPointerAsInt_0(self);
};;

btConvexTriangleMeshShape.prototype['setUserPointerAsInt'] = btConvexTriangleMeshShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConvexTriangleMeshShape_setUserPointerAsInt_1(self, index);
};;

btConvexTriangleMeshShape.prototype['getAabb'] = btConvexTriangleMeshShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btConvexTriangleMeshShape_getAabb_3(self, t, min, max);
};;

btConvexTriangleMeshShape.prototype['getLocalBoundingSphere'] = btConvexTriangleMeshShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConvexTriangleMeshShape_getLocalBoundingSphere_0(self);
};;

  btConvexTriangleMeshShape.prototype['__destroy__'] = btConvexTriangleMeshShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btConvexTriangleMeshShape___destroy___0(self);
};
// btBoxShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBoxShape(boxHalfExtents) {
  if (boxHalfExtents && typeof boxHalfExtents === 'object') boxHalfExtents = boxHalfExtents.ptr;
  this.ptr = _emscripten_bind_btBoxShape_btBoxShape_1(boxHalfExtents);
  getCache(btBoxShape)[this.ptr] = this;
};;
btBoxShape.prototype = Object.create(btConvexInternalShape.prototype);
btBoxShape.prototype.constructor = btBoxShape;
btBoxShape.prototype.__class__ = btBoxShape;
btBoxShape.__cache__ = {};
Module['btBoxShape'] = btBoxShape;

btBoxShape.prototype['setMargin'] = btBoxShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btBoxShape_setMargin_1(self, margin);
};;

btBoxShape.prototype['getMargin'] = btBoxShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBoxShape_getMargin_0(self);
};;

btBoxShape.prototype['setUnscaledHalfExtents'] = btBoxShape.prototype.setUnscaledHalfExtents = /** @suppress {undefinedVars, duplicate} @this{Object} */function(boxHalfExtents) {
  var self = this.ptr;
  if (boxHalfExtents && typeof boxHalfExtents === 'object') boxHalfExtents = boxHalfExtents.ptr;
  _emscripten_bind_btBoxShape_setUnscaledHalfExtents_1(self, boxHalfExtents);
};;

btBoxShape.prototype['setLocalScaling'] = btBoxShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btBoxShape_setLocalScaling_1(self, scaling);
};;

btBoxShape.prototype['getLocalScaling'] = btBoxShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btBoxShape_getLocalScaling_0(self), btVector3);
};;

btBoxShape.prototype['calculateLocalInertia'] = btBoxShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btBoxShape_calculateLocalInertia_2(self, mass, inertia);
};;

btBoxShape.prototype['isCompound'] = btBoxShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btBoxShape_isCompound_0(self));
};;

btBoxShape.prototype['getUserIndex'] = btBoxShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBoxShape_getUserIndex_0(self);
};;

btBoxShape.prototype['setUserIndex'] = btBoxShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btBoxShape_setUserIndex_1(self, index);
};;

btBoxShape.prototype['getUserPointerAsInt'] = btBoxShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBoxShape_getUserPointerAsInt_0(self);
};;

btBoxShape.prototype['setUserPointerAsInt'] = btBoxShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btBoxShape_setUserPointerAsInt_1(self, index);
};;

btBoxShape.prototype['getAabb'] = btBoxShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btBoxShape_getAabb_3(self, t, min, max);
};;

btBoxShape.prototype['getLocalBoundingSphere'] = btBoxShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBoxShape_getLocalBoundingSphere_0(self);
};;

btBoxShape.prototype['getImplicitShapeDimensions'] = btBoxShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btBoxShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btBoxShape.prototype['__destroy__'] = btBoxShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btBoxShape___destroy___0(self);
};
// btCapsuleShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCapsuleShape(radius, height) {
  if (radius && typeof radius === 'object') radius = radius.ptr;
  if (height && typeof height === 'object') height = height.ptr;
  this.ptr = _emscripten_bind_btCapsuleShape_btCapsuleShape_2(radius, height);
  getCache(btCapsuleShape)[this.ptr] = this;
};;
btCapsuleShape.prototype = Object.create(btConvexInternalShape.prototype);
btCapsuleShape.prototype.constructor = btCapsuleShape;
btCapsuleShape.prototype.__class__ = btCapsuleShape;
btCapsuleShape.__cache__ = {};
Module['btCapsuleShape'] = btCapsuleShape;

btCapsuleShape.prototype['setMargin'] = btCapsuleShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btCapsuleShape_setMargin_1(self, margin);
};;

btCapsuleShape.prototype['getMargin'] = btCapsuleShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCapsuleShape_getMargin_0(self);
};;

btCapsuleShape.prototype['updateProp'] = btCapsuleShape.prototype.updateProp = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r, h, upAxis) {
  var self = this.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  if (h && typeof h === 'object') h = h.ptr;
  if (upAxis && typeof upAxis === 'object') upAxis = upAxis.ptr;
  _emscripten_bind_btCapsuleShape_updateProp_3(self, r, h, upAxis);
};;

btCapsuleShape.prototype['setLocalScaling'] = btCapsuleShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btCapsuleShape_setLocalScaling_1(self, scaling);
};;

btCapsuleShape.prototype['getLocalScaling'] = btCapsuleShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCapsuleShape_getLocalScaling_0(self), btVector3);
};;

btCapsuleShape.prototype['calculateLocalInertia'] = btCapsuleShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btCapsuleShape_calculateLocalInertia_2(self, mass, inertia);
};;

btCapsuleShape.prototype['isCompound'] = btCapsuleShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btCapsuleShape_isCompound_0(self));
};;

btCapsuleShape.prototype['getUserIndex'] = btCapsuleShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCapsuleShape_getUserIndex_0(self);
};;

btCapsuleShape.prototype['setUserIndex'] = btCapsuleShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCapsuleShape_setUserIndex_1(self, index);
};;

btCapsuleShape.prototype['getUserPointerAsInt'] = btCapsuleShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCapsuleShape_getUserPointerAsInt_0(self);
};;

btCapsuleShape.prototype['setUserPointerAsInt'] = btCapsuleShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCapsuleShape_setUserPointerAsInt_1(self, index);
};;

btCapsuleShape.prototype['getAabb'] = btCapsuleShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btCapsuleShape_getAabb_3(self, t, min, max);
};;

btCapsuleShape.prototype['getLocalBoundingSphere'] = btCapsuleShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCapsuleShape_getLocalBoundingSphere_0(self);
};;

btCapsuleShape.prototype['getImplicitShapeDimensions'] = btCapsuleShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCapsuleShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btCapsuleShape.prototype['__destroy__'] = btCapsuleShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btCapsuleShape___destroy___0(self);
};
// btCylinderShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCylinderShape(halfExtents) {
  if (halfExtents && typeof halfExtents === 'object') halfExtents = halfExtents.ptr;
  this.ptr = _emscripten_bind_btCylinderShape_btCylinderShape_1(halfExtents);
  getCache(btCylinderShape)[this.ptr] = this;
};;
btCylinderShape.prototype = Object.create(btConvexInternalShape.prototype);
btCylinderShape.prototype.constructor = btCylinderShape;
btCylinderShape.prototype.__class__ = btCylinderShape;
btCylinderShape.__cache__ = {};
Module['btCylinderShape'] = btCylinderShape;

btCylinderShape.prototype['setMargin'] = btCylinderShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btCylinderShape_setMargin_1(self, margin);
};;

btCylinderShape.prototype['getMargin'] = btCylinderShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCylinderShape_getMargin_0(self);
};;

btCylinderShape.prototype['updateProp'] = btCylinderShape.prototype.updateProp = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r, h, upAxis) {
  var self = this.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  if (h && typeof h === 'object') h = h.ptr;
  if (upAxis && typeof upAxis === 'object') upAxis = upAxis.ptr;
  _emscripten_bind_btCylinderShape_updateProp_3(self, r, h, upAxis);
};;

btCylinderShape.prototype['setLocalScaling'] = btCylinderShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btCylinderShape_setLocalScaling_1(self, scaling);
};;

btCylinderShape.prototype['getLocalScaling'] = btCylinderShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCylinderShape_getLocalScaling_0(self), btVector3);
};;

btCylinderShape.prototype['calculateLocalInertia'] = btCylinderShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btCylinderShape_calculateLocalInertia_2(self, mass, inertia);
};;

btCylinderShape.prototype['isCompound'] = btCylinderShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btCylinderShape_isCompound_0(self));
};;

btCylinderShape.prototype['getUserIndex'] = btCylinderShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCylinderShape_getUserIndex_0(self);
};;

btCylinderShape.prototype['setUserIndex'] = btCylinderShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCylinderShape_setUserIndex_1(self, index);
};;

btCylinderShape.prototype['getUserPointerAsInt'] = btCylinderShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCylinderShape_getUserPointerAsInt_0(self);
};;

btCylinderShape.prototype['setUserPointerAsInt'] = btCylinderShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCylinderShape_setUserPointerAsInt_1(self, index);
};;

btCylinderShape.prototype['getAabb'] = btCylinderShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btCylinderShape_getAabb_3(self, t, min, max);
};;

btCylinderShape.prototype['getLocalBoundingSphere'] = btCylinderShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCylinderShape_getLocalBoundingSphere_0(self);
};;

btCylinderShape.prototype['getImplicitShapeDimensions'] = btCylinderShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCylinderShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btCylinderShape.prototype['__destroy__'] = btCylinderShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btCylinderShape___destroy___0(self);
};
// btSphereShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btSphereShape(radius) {
  if (radius && typeof radius === 'object') radius = radius.ptr;
  this.ptr = _emscripten_bind_btSphereShape_btSphereShape_1(radius);
  getCache(btSphereShape)[this.ptr] = this;
};;
btSphereShape.prototype = Object.create(btConvexInternalShape.prototype);
btSphereShape.prototype.constructor = btSphereShape;
btSphereShape.prototype.__class__ = btSphereShape;
btSphereShape.__cache__ = {};
Module['btSphereShape'] = btSphereShape;

btSphereShape.prototype['setMargin'] = btSphereShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btSphereShape_setMargin_1(self, margin);
};;

btSphereShape.prototype['getMargin'] = btSphereShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btSphereShape_getMargin_0(self);
};;

btSphereShape.prototype['setUnscaledRadius'] = btSphereShape.prototype.setUnscaledRadius = /** @suppress {undefinedVars, duplicate} @this{Object} */function(radius) {
  var self = this.ptr;
  if (radius && typeof radius === 'object') radius = radius.ptr;
  _emscripten_bind_btSphereShape_setUnscaledRadius_1(self, radius);
};;

btSphereShape.prototype['setLocalScaling'] = btSphereShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btSphereShape_setLocalScaling_1(self, scaling);
};;

btSphereShape.prototype['getLocalScaling'] = btSphereShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btSphereShape_getLocalScaling_0(self), btVector3);
};;

btSphereShape.prototype['calculateLocalInertia'] = btSphereShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btSphereShape_calculateLocalInertia_2(self, mass, inertia);
};;

btSphereShape.prototype['isCompound'] = btSphereShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btSphereShape_isCompound_0(self));
};;

btSphereShape.prototype['getUserIndex'] = btSphereShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btSphereShape_getUserIndex_0(self);
};;

btSphereShape.prototype['setUserIndex'] = btSphereShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btSphereShape_setUserIndex_1(self, index);
};;

btSphereShape.prototype['getUserPointerAsInt'] = btSphereShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btSphereShape_getUserPointerAsInt_0(self);
};;

btSphereShape.prototype['setUserPointerAsInt'] = btSphereShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btSphereShape_setUserPointerAsInt_1(self, index);
};;

btSphereShape.prototype['getAabb'] = btSphereShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btSphereShape_getAabb_3(self, t, min, max);
};;

btSphereShape.prototype['getLocalBoundingSphere'] = btSphereShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btSphereShape_getLocalBoundingSphere_0(self);
};;

btSphereShape.prototype['getImplicitShapeDimensions'] = btSphereShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btSphereShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btSphereShape.prototype['__destroy__'] = btSphereShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btSphereShape___destroy___0(self);
};
// btConeShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConeShape(radius, height) {
  if (radius && typeof radius === 'object') radius = radius.ptr;
  if (height && typeof height === 'object') height = height.ptr;
  this.ptr = _emscripten_bind_btConeShape_btConeShape_2(radius, height);
  getCache(btConeShape)[this.ptr] = this;
};;
btConeShape.prototype = Object.create(btConvexInternalShape.prototype);
btConeShape.prototype.constructor = btConeShape;
btConeShape.prototype.__class__ = btConeShape;
btConeShape.__cache__ = {};
Module['btConeShape'] = btConeShape;

btConeShape.prototype['setRadius'] = btConeShape.prototype.setRadius = /** @suppress {undefinedVars, duplicate} @this{Object} */function(radius) {
  var self = this.ptr;
  if (radius && typeof radius === 'object') radius = radius.ptr;
  _emscripten_bind_btConeShape_setRadius_1(self, radius);
};;

btConeShape.prototype['setHeight'] = btConeShape.prototype.setHeight = /** @suppress {undefinedVars, duplicate} @this{Object} */function(height) {
  var self = this.ptr;
  if (height && typeof height === 'object') height = height.ptr;
  _emscripten_bind_btConeShape_setHeight_1(self, height);
};;

btConeShape.prototype['setConeUpIndex'] = btConeShape.prototype.setConeUpIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(upIndex) {
  var self = this.ptr;
  if (upIndex && typeof upIndex === 'object') upIndex = upIndex.ptr;
  _emscripten_bind_btConeShape_setConeUpIndex_1(self, upIndex);
};;

btConeShape.prototype['setLocalScaling'] = btConeShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btConeShape_setLocalScaling_1(self, scaling);
};;

btConeShape.prototype['getLocalScaling'] = btConeShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btConeShape_getLocalScaling_0(self), btVector3);
};;

btConeShape.prototype['calculateLocalInertia'] = btConeShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btConeShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConeShape.prototype['isCompound'] = btConeShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btConeShape_isCompound_0(self));
};;

btConeShape.prototype['getUserIndex'] = btConeShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConeShape_getUserIndex_0(self);
};;

btConeShape.prototype['setUserIndex'] = btConeShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConeShape_setUserIndex_1(self, index);
};;

btConeShape.prototype['getUserPointerAsInt'] = btConeShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConeShape_getUserPointerAsInt_0(self);
};;

btConeShape.prototype['setUserPointerAsInt'] = btConeShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btConeShape_setUserPointerAsInt_1(self, index);
};;

btConeShape.prototype['getAabb'] = btConeShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btConeShape_getAabb_3(self, t, min, max);
};;

btConeShape.prototype['getLocalBoundingSphere'] = btConeShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConeShape_getLocalBoundingSphere_0(self);
};;

btConeShape.prototype['getImplicitShapeDimensions'] = btConeShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btConeShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btConeShape.prototype['__destroy__'] = btConeShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btConeShape___destroy___0(self);
};
// btBU_Simplex1to4
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBU_Simplex1to4() {
  this.ptr = _emscripten_bind_btBU_Simplex1to4_btBU_Simplex1to4_0();
  getCache(btBU_Simplex1to4)[this.ptr] = this;
};;
btBU_Simplex1to4.prototype = Object.create(btConvexShape.prototype);
btBU_Simplex1to4.prototype.constructor = btBU_Simplex1to4;
btBU_Simplex1to4.prototype.__class__ = btBU_Simplex1to4;
btBU_Simplex1to4.__cache__ = {};
Module['btBU_Simplex1to4'] = btBU_Simplex1to4;

btBU_Simplex1to4.prototype['addVertex'] = btBU_Simplex1to4.prototype.addVertex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(pt) {
  var self = this.ptr;
  if (pt && typeof pt === 'object') pt = pt.ptr;
  _emscripten_bind_btBU_Simplex1to4_addVertex_1(self, pt);
};;

btBU_Simplex1to4.prototype['setLocalScaling'] = btBU_Simplex1to4.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btBU_Simplex1to4_setLocalScaling_1(self, scaling);
};;

btBU_Simplex1to4.prototype['getLocalScaling'] = btBU_Simplex1to4.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btBU_Simplex1to4_getLocalScaling_0(self), btVector3);
};;

btBU_Simplex1to4.prototype['calculateLocalInertia'] = btBU_Simplex1to4.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btBU_Simplex1to4_calculateLocalInertia_2(self, mass, inertia);
};;

btBU_Simplex1to4.prototype['isCompound'] = btBU_Simplex1to4.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btBU_Simplex1to4_isCompound_0(self));
};;

btBU_Simplex1to4.prototype['getUserIndex'] = btBU_Simplex1to4.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBU_Simplex1to4_getUserIndex_0(self);
};;

btBU_Simplex1to4.prototype['setUserIndex'] = btBU_Simplex1to4.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btBU_Simplex1to4_setUserIndex_1(self, index);
};;

btBU_Simplex1to4.prototype['getUserPointerAsInt'] = btBU_Simplex1to4.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBU_Simplex1to4_getUserPointerAsInt_0(self);
};;

btBU_Simplex1to4.prototype['setUserPointerAsInt'] = btBU_Simplex1to4.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btBU_Simplex1to4_setUserPointerAsInt_1(self, index);
};;

btBU_Simplex1to4.prototype['getAabb'] = btBU_Simplex1to4.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btBU_Simplex1to4_getAabb_3(self, t, min, max);
};;

btBU_Simplex1to4.prototype['getLocalBoundingSphere'] = btBU_Simplex1to4.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBU_Simplex1to4_getLocalBoundingSphere_0(self);
};;

  btBU_Simplex1to4.prototype['__destroy__'] = btBU_Simplex1to4.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btBU_Simplex1to4___destroy___0(self);
};
// btIntArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function btIntArray() { throw "cannot construct a btIntArray, no constructor in IDL" }
btIntArray.prototype = Object.create(WrapperObject.prototype);
btIntArray.prototype.constructor = btIntArray;
btIntArray.prototype.__class__ = btIntArray;
btIntArray.__cache__ = {};
Module['btIntArray'] = btIntArray;

btIntArray.prototype['size'] = btIntArray.prototype.size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btIntArray_size_0(self);
};;

btIntArray.prototype['at'] = btIntArray.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return _emscripten_bind_btIntArray_at_1(self, n);
};;

btIntArray.prototype['clear'] = btIntArray.prototype.clear = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btIntArray_clear_0(self);
};;

  btIntArray.prototype['__destroy__'] = btIntArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btIntArray___destroy___0(self);
};
// btVector3Array
/** @suppress {undefinedVars, duplicate} @this{Object} */function btVector3Array() { throw "cannot construct a btVector3Array, no constructor in IDL" }
btVector3Array.prototype = Object.create(WrapperObject.prototype);
btVector3Array.prototype.constructor = btVector3Array;
btVector3Array.prototype.__class__ = btVector3Array;
btVector3Array.__cache__ = {};
Module['btVector3Array'] = btVector3Array;

btVector3Array.prototype['size'] = btVector3Array.prototype.size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btVector3Array_size_0(self);
};;

btVector3Array.prototype['at'] = btVector3Array.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return wrapPointer(_emscripten_bind_btVector3Array_at_1(self, n), btVector3);
};;

btVector3Array.prototype['clear'] = btVector3Array.prototype.clear = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btVector3Array_clear_0(self);
};;

  btVector3Array.prototype['__destroy__'] = btVector3Array.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btVector3Array___destroy___0(self);
};
// btCompoundShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCompoundShape(enableDynamicAabbTree) {
  if (enableDynamicAabbTree && typeof enableDynamicAabbTree === 'object') enableDynamicAabbTree = enableDynamicAabbTree.ptr;
  if (enableDynamicAabbTree === undefined) { this.ptr = _emscripten_bind_btCompoundShape_btCompoundShape_0(); getCache(btCompoundShape)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btCompoundShape_btCompoundShape_1(enableDynamicAabbTree);
  getCache(btCompoundShape)[this.ptr] = this;
};;
btCompoundShape.prototype = Object.create(btCollisionShape.prototype);
btCompoundShape.prototype.constructor = btCompoundShape;
btCompoundShape.prototype.__class__ = btCompoundShape;
btCompoundShape.__cache__ = {};
Module['btCompoundShape'] = btCompoundShape;

btCompoundShape.prototype['addChildShape'] = btCompoundShape.prototype.addChildShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(localTransform, shape) {
  var self = this.ptr;
  if (localTransform && typeof localTransform === 'object') localTransform = localTransform.ptr;
  if (shape && typeof shape === 'object') shape = shape.ptr;
  _emscripten_bind_btCompoundShape_addChildShape_2(self, localTransform, shape);
};;

btCompoundShape.prototype['removeChildShape'] = btCompoundShape.prototype.removeChildShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(shape) {
  var self = this.ptr;
  if (shape && typeof shape === 'object') shape = shape.ptr;
  _emscripten_bind_btCompoundShape_removeChildShape_1(self, shape);
};;

btCompoundShape.prototype['removeChildShapeByIndex'] = btCompoundShape.prototype.removeChildShapeByIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(childShapeindex) {
  var self = this.ptr;
  if (childShapeindex && typeof childShapeindex === 'object') childShapeindex = childShapeindex.ptr;
  _emscripten_bind_btCompoundShape_removeChildShapeByIndex_1(self, childShapeindex);
};;

btCompoundShape.prototype['getNumChildShapes'] = btCompoundShape.prototype.getNumChildShapes = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCompoundShape_getNumChildShapes_0(self);
};;

btCompoundShape.prototype['getChildShape'] = btCompoundShape.prototype.getChildShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_emscripten_bind_btCompoundShape_getChildShape_1(self, index), btCollisionShape);
};;

btCompoundShape.prototype['updateChildTransform'] = btCompoundShape.prototype.updateChildTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(childIndex, newChildTransform, shouldRecalculateLocalAabb) {
  var self = this.ptr;
  if (childIndex && typeof childIndex === 'object') childIndex = childIndex.ptr;
  if (newChildTransform && typeof newChildTransform === 'object') newChildTransform = newChildTransform.ptr;
  if (shouldRecalculateLocalAabb && typeof shouldRecalculateLocalAabb === 'object') shouldRecalculateLocalAabb = shouldRecalculateLocalAabb.ptr;
  if (shouldRecalculateLocalAabb === undefined) { _emscripten_bind_btCompoundShape_updateChildTransform_2(self, childIndex, newChildTransform);  return }
  _emscripten_bind_btCompoundShape_updateChildTransform_3(self, childIndex, newChildTransform, shouldRecalculateLocalAabb);
};;

btCompoundShape.prototype['setMargin'] = btCompoundShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btCompoundShape_setMargin_1(self, margin);
};;

btCompoundShape.prototype['getMargin'] = btCompoundShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCompoundShape_getMargin_0(self);
};;

btCompoundShape.prototype['setMaterial'] = btCompoundShape.prototype.setMaterial = /** @suppress {undefinedVars, duplicate} @this{Object} */function(childShapeindex, f, r, rf, sf) {
  var self = this.ptr;
  if (childShapeindex && typeof childShapeindex === 'object') childShapeindex = childShapeindex.ptr;
  if (f && typeof f === 'object') f = f.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  if (rf && typeof rf === 'object') rf = rf.ptr;
  if (sf && typeof sf === 'object') sf = sf.ptr;
  if (rf === undefined) { _emscripten_bind_btCompoundShape_setMaterial_3(self, childShapeindex, f, r);  return }
  if (sf === undefined) { _emscripten_bind_btCompoundShape_setMaterial_4(self, childShapeindex, f, r, rf);  return }
  _emscripten_bind_btCompoundShape_setMaterial_5(self, childShapeindex, f, r, rf, sf);
};;

btCompoundShape.prototype['setLocalScaling'] = btCompoundShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btCompoundShape_setLocalScaling_1(self, scaling);
};;

btCompoundShape.prototype['getLocalScaling'] = btCompoundShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btCompoundShape_getLocalScaling_0(self), btVector3);
};;

btCompoundShape.prototype['calculateLocalInertia'] = btCompoundShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btCompoundShape_calculateLocalInertia_2(self, mass, inertia);
};;

btCompoundShape.prototype['isCompound'] = btCompoundShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btCompoundShape_isCompound_0(self));
};;

btCompoundShape.prototype['getUserIndex'] = btCompoundShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCompoundShape_getUserIndex_0(self);
};;

btCompoundShape.prototype['setUserIndex'] = btCompoundShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCompoundShape_setUserIndex_1(self, index);
};;

btCompoundShape.prototype['getUserPointerAsInt'] = btCompoundShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCompoundShape_getUserPointerAsInt_0(self);
};;

btCompoundShape.prototype['setUserPointerAsInt'] = btCompoundShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btCompoundShape_setUserPointerAsInt_1(self, index);
};;

btCompoundShape.prototype['getAabb'] = btCompoundShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btCompoundShape_getAabb_3(self, t, min, max);
};;

btCompoundShape.prototype['getLocalBoundingSphere'] = btCompoundShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCompoundShape_getLocalBoundingSphere_0(self);
};;

  btCompoundShape.prototype['__destroy__'] = btCompoundShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btCompoundShape___destroy___0(self);
};
// btIndexedMesh
/** @suppress {undefinedVars, duplicate} @this{Object} */function btIndexedMesh() { throw "cannot construct a btIndexedMesh, no constructor in IDL" }
btIndexedMesh.prototype = Object.create(WrapperObject.prototype);
btIndexedMesh.prototype.constructor = btIndexedMesh;
btIndexedMesh.prototype.__class__ = btIndexedMesh;
btIndexedMesh.__cache__ = {};
Module['btIndexedMesh'] = btIndexedMesh;

  btIndexedMesh.prototype['get_m_numTriangles'] = btIndexedMesh.prototype.get_m_numTriangles = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btIndexedMesh_get_m_numTriangles_0(self);
};
    btIndexedMesh.prototype['set_m_numTriangles'] = btIndexedMesh.prototype.set_m_numTriangles = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btIndexedMesh_set_m_numTriangles_1(self, arg0);
};
    Object.defineProperty(btIndexedMesh.prototype, 'm_numTriangles', { get: btIndexedMesh.prototype.get_m_numTriangles, set: btIndexedMesh.prototype.set_m_numTriangles });
  btIndexedMesh.prototype['__destroy__'] = btIndexedMesh.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btIndexedMesh___destroy___0(self);
};
// btIndexedMeshArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function btIndexedMeshArray() { throw "cannot construct a btIndexedMeshArray, no constructor in IDL" }
btIndexedMeshArray.prototype = Object.create(WrapperObject.prototype);
btIndexedMeshArray.prototype.constructor = btIndexedMeshArray;
btIndexedMeshArray.prototype.__class__ = btIndexedMeshArray;
btIndexedMeshArray.__cache__ = {};
Module['btIndexedMeshArray'] = btIndexedMeshArray;

btIndexedMeshArray.prototype['size'] = btIndexedMeshArray.prototype.size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btIndexedMeshArray_size_0(self);
};;

btIndexedMeshArray.prototype['at'] = btIndexedMeshArray.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return wrapPointer(_emscripten_bind_btIndexedMeshArray_at_1(self, n), btIndexedMesh);
};;

  btIndexedMeshArray.prototype['__destroy__'] = btIndexedMeshArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btIndexedMeshArray___destroy___0(self);
};
// btTriangleMesh
/** @suppress {undefinedVars, duplicate} @this{Object} */function btTriangleMesh(use32bitIndices, use4componentVertices) {
  if (use32bitIndices && typeof use32bitIndices === 'object') use32bitIndices = use32bitIndices.ptr;
  if (use4componentVertices && typeof use4componentVertices === 'object') use4componentVertices = use4componentVertices.ptr;
  if (use32bitIndices === undefined) { this.ptr = _emscripten_bind_btTriangleMesh_btTriangleMesh_0(); getCache(btTriangleMesh)[this.ptr] = this;return }
  if (use4componentVertices === undefined) { this.ptr = _emscripten_bind_btTriangleMesh_btTriangleMesh_1(use32bitIndices); getCache(btTriangleMesh)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btTriangleMesh_btTriangleMesh_2(use32bitIndices, use4componentVertices);
  getCache(btTriangleMesh)[this.ptr] = this;
};;
btTriangleMesh.prototype = Object.create(btStridingMeshInterface.prototype);
btTriangleMesh.prototype.constructor = btTriangleMesh;
btTriangleMesh.prototype.__class__ = btTriangleMesh;
btTriangleMesh.__cache__ = {};
Module['btTriangleMesh'] = btTriangleMesh;

btTriangleMesh.prototype['addTriangle'] = btTriangleMesh.prototype.addTriangle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(vertex0, vertex1, vertex2, removeDuplicateVertices) {
  var self = this.ptr;
  if (vertex0 && typeof vertex0 === 'object') vertex0 = vertex0.ptr;
  if (vertex1 && typeof vertex1 === 'object') vertex1 = vertex1.ptr;
  if (vertex2 && typeof vertex2 === 'object') vertex2 = vertex2.ptr;
  if (removeDuplicateVertices && typeof removeDuplicateVertices === 'object') removeDuplicateVertices = removeDuplicateVertices.ptr;
  if (removeDuplicateVertices === undefined) { _emscripten_bind_btTriangleMesh_addTriangle_3(self, vertex0, vertex1, vertex2);  return }
  _emscripten_bind_btTriangleMesh_addTriangle_4(self, vertex0, vertex1, vertex2, removeDuplicateVertices);
};;

btTriangleMesh.prototype['addTriangleIndices'] = btTriangleMesh.prototype.addTriangleIndices = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index1, index2, index3) {
  var self = this.ptr;
  if (index1 && typeof index1 === 'object') index1 = index1.ptr;
  if (index2 && typeof index2 === 'object') index2 = index2.ptr;
  if (index3 && typeof index3 === 'object') index3 = index3.ptr;
  _emscripten_bind_btTriangleMesh_addTriangleIndices_3(self, index1, index2, index3);
};;

btTriangleMesh.prototype['getIndexedMeshArray'] = btTriangleMesh.prototype.getIndexedMeshArray = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btTriangleMesh_getIndexedMeshArray_0(self), btIndexedMeshArray);
};;

btTriangleMesh.prototype['setScaling'] = btTriangleMesh.prototype.setScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btTriangleMesh_setScaling_1(self, scaling);
};;

  btTriangleMesh.prototype['__destroy__'] = btTriangleMesh.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btTriangleMesh___destroy___0(self);
};
// btEmptyShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btEmptyShape() {
  this.ptr = _emscripten_bind_btEmptyShape_btEmptyShape_0();
  getCache(btEmptyShape)[this.ptr] = this;
};;
btEmptyShape.prototype = Object.create(btConcaveShape.prototype);
btEmptyShape.prototype.constructor = btEmptyShape;
btEmptyShape.prototype.__class__ = btEmptyShape;
btEmptyShape.__cache__ = {};
Module['btEmptyShape'] = btEmptyShape;

btEmptyShape.prototype['setLocalScaling'] = btEmptyShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btEmptyShape_setLocalScaling_1(self, scaling);
};;

btEmptyShape.prototype['getLocalScaling'] = btEmptyShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btEmptyShape_getLocalScaling_0(self), btVector3);
};;

btEmptyShape.prototype['calculateLocalInertia'] = btEmptyShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btEmptyShape_calculateLocalInertia_2(self, mass, inertia);
};;

btEmptyShape.prototype['isCompound'] = btEmptyShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btEmptyShape_isCompound_0(self));
};;

btEmptyShape.prototype['getUserIndex'] = btEmptyShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btEmptyShape_getUserIndex_0(self);
};;

btEmptyShape.prototype['setUserIndex'] = btEmptyShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btEmptyShape_setUserIndex_1(self, index);
};;

btEmptyShape.prototype['getUserPointerAsInt'] = btEmptyShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btEmptyShape_getUserPointerAsInt_0(self);
};;

btEmptyShape.prototype['setUserPointerAsInt'] = btEmptyShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btEmptyShape_setUserPointerAsInt_1(self, index);
};;

btEmptyShape.prototype['getAabb'] = btEmptyShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btEmptyShape_getAabb_3(self, t, min, max);
};;

btEmptyShape.prototype['getLocalBoundingSphere'] = btEmptyShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btEmptyShape_getLocalBoundingSphere_0(self);
};;

  btEmptyShape.prototype['__destroy__'] = btEmptyShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btEmptyShape___destroy___0(self);
};
// btStaticPlaneShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btStaticPlaneShape(planeNormal, planeConstant) {
  if (planeNormal && typeof planeNormal === 'object') planeNormal = planeNormal.ptr;
  if (planeConstant && typeof planeConstant === 'object') planeConstant = planeConstant.ptr;
  this.ptr = _emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2(planeNormal, planeConstant);
  getCache(btStaticPlaneShape)[this.ptr] = this;
};;
btStaticPlaneShape.prototype = Object.create(btConcaveShape.prototype);
btStaticPlaneShape.prototype.constructor = btStaticPlaneShape;
btStaticPlaneShape.prototype.__class__ = btStaticPlaneShape;
btStaticPlaneShape.__cache__ = {};
Module['btStaticPlaneShape'] = btStaticPlaneShape;

btStaticPlaneShape.prototype['getPlaneNormal'] = btStaticPlaneShape.prototype.getPlaneNormal = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btStaticPlaneShape_getPlaneNormal_0(self), btVector3);
};;

btStaticPlaneShape.prototype['setPlaneConstant'] = btStaticPlaneShape.prototype.setPlaneConstant = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_btStaticPlaneShape_setPlaneConstant_1(self, v);
};;

btStaticPlaneShape.prototype['setLocalScaling'] = btStaticPlaneShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btStaticPlaneShape_setLocalScaling_1(self, scaling);
};;

btStaticPlaneShape.prototype['getLocalScaling'] = btStaticPlaneShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btStaticPlaneShape_getLocalScaling_0(self), btVector3);
};;

btStaticPlaneShape.prototype['calculateLocalInertia'] = btStaticPlaneShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btStaticPlaneShape_calculateLocalInertia_2(self, mass, inertia);
};;

btStaticPlaneShape.prototype['isCompound'] = btStaticPlaneShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btStaticPlaneShape_isCompound_0(self));
};;

btStaticPlaneShape.prototype['getUserIndex'] = btStaticPlaneShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btStaticPlaneShape_getUserIndex_0(self);
};;

btStaticPlaneShape.prototype['setUserIndex'] = btStaticPlaneShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btStaticPlaneShape_setUserIndex_1(self, index);
};;

btStaticPlaneShape.prototype['getUserPointerAsInt'] = btStaticPlaneShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btStaticPlaneShape_getUserPointerAsInt_0(self);
};;

btStaticPlaneShape.prototype['setUserPointerAsInt'] = btStaticPlaneShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btStaticPlaneShape_setUserPointerAsInt_1(self, index);
};;

btStaticPlaneShape.prototype['getAabb'] = btStaticPlaneShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btStaticPlaneShape_getAabb_3(self, t, min, max);
};;

btStaticPlaneShape.prototype['getLocalBoundingSphere'] = btStaticPlaneShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btStaticPlaneShape_getLocalBoundingSphere_0(self);
};;

  btStaticPlaneShape.prototype['__destroy__'] = btStaticPlaneShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btStaticPlaneShape___destroy___0(self);
};
// btBvhTriangleMeshShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBvhTriangleMeshShape(meshInterface, useQuantizedAabbCompression, buildBvh) {
  if (meshInterface && typeof meshInterface === 'object') meshInterface = meshInterface.ptr;
  if (useQuantizedAabbCompression && typeof useQuantizedAabbCompression === 'object') useQuantizedAabbCompression = useQuantizedAabbCompression.ptr;
  if (buildBvh && typeof buildBvh === 'object') buildBvh = buildBvh.ptr;
  if (buildBvh === undefined) { this.ptr = _emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2(meshInterface, useQuantizedAabbCompression); getCache(btBvhTriangleMeshShape)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3(meshInterface, useQuantizedAabbCompression, buildBvh);
  getCache(btBvhTriangleMeshShape)[this.ptr] = this;
};;
btBvhTriangleMeshShape.prototype = Object.create(btTriangleMeshShape.prototype);
btBvhTriangleMeshShape.prototype.constructor = btBvhTriangleMeshShape;
btBvhTriangleMeshShape.prototype.__class__ = btBvhTriangleMeshShape;
btBvhTriangleMeshShape.__cache__ = {};
Module['btBvhTriangleMeshShape'] = btBvhTriangleMeshShape;

btBvhTriangleMeshShape.prototype['setLocalScaling'] = btBvhTriangleMeshShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btBvhTriangleMeshShape_setLocalScaling_1(self, scaling);
};;

btBvhTriangleMeshShape.prototype['getLocalScaling'] = btBvhTriangleMeshShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btBvhTriangleMeshShape_getLocalScaling_0(self), btVector3);
};;

btBvhTriangleMeshShape.prototype['calculateLocalInertia'] = btBvhTriangleMeshShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btBvhTriangleMeshShape_calculateLocalInertia_2(self, mass, inertia);
};;

btBvhTriangleMeshShape.prototype['isCompound'] = btBvhTriangleMeshShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btBvhTriangleMeshShape_isCompound_0(self));
};;

btBvhTriangleMeshShape.prototype['getUserIndex'] = btBvhTriangleMeshShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBvhTriangleMeshShape_getUserIndex_0(self);
};;

btBvhTriangleMeshShape.prototype['setUserIndex'] = btBvhTriangleMeshShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btBvhTriangleMeshShape_setUserIndex_1(self, index);
};;

btBvhTriangleMeshShape.prototype['getUserPointerAsInt'] = btBvhTriangleMeshShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBvhTriangleMeshShape_getUserPointerAsInt_0(self);
};;

btBvhTriangleMeshShape.prototype['setUserPointerAsInt'] = btBvhTriangleMeshShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btBvhTriangleMeshShape_setUserPointerAsInt_1(self, index);
};;

btBvhTriangleMeshShape.prototype['getAabb'] = btBvhTriangleMeshShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btBvhTriangleMeshShape_getAabb_3(self, t, min, max);
};;

btBvhTriangleMeshShape.prototype['getLocalBoundingSphere'] = btBvhTriangleMeshShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBvhTriangleMeshShape_getLocalBoundingSphere_0(self);
};;

  btBvhTriangleMeshShape.prototype['__destroy__'] = btBvhTriangleMeshShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btBvhTriangleMeshShape___destroy___0(self);
};
// btHeightfieldTerrainShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btHeightfieldTerrainShape(heightStickWidth, heightStickLength, heightfieldData, heightScale, minHeight, maxHeight, upAxis, hdt, flipQuadEdges) {
  if (heightStickWidth && typeof heightStickWidth === 'object') heightStickWidth = heightStickWidth.ptr;
  if (heightStickLength && typeof heightStickLength === 'object') heightStickLength = heightStickLength.ptr;
  if (heightfieldData && typeof heightfieldData === 'object') heightfieldData = heightfieldData.ptr;
  if (heightScale && typeof heightScale === 'object') heightScale = heightScale.ptr;
  if (minHeight && typeof minHeight === 'object') minHeight = minHeight.ptr;
  if (maxHeight && typeof maxHeight === 'object') maxHeight = maxHeight.ptr;
  if (upAxis && typeof upAxis === 'object') upAxis = upAxis.ptr;
  if (hdt && typeof hdt === 'object') hdt = hdt.ptr;
  if (flipQuadEdges && typeof flipQuadEdges === 'object') flipQuadEdges = flipQuadEdges.ptr;
  this.ptr = _emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9(heightStickWidth, heightStickLength, heightfieldData, heightScale, minHeight, maxHeight, upAxis, hdt, flipQuadEdges);
  getCache(btHeightfieldTerrainShape)[this.ptr] = this;
};;
btHeightfieldTerrainShape.prototype = Object.create(btConcaveShape.prototype);
btHeightfieldTerrainShape.prototype.constructor = btHeightfieldTerrainShape;
btHeightfieldTerrainShape.prototype.__class__ = btHeightfieldTerrainShape;
btHeightfieldTerrainShape.__cache__ = {};
Module['btHeightfieldTerrainShape'] = btHeightfieldTerrainShape;

btHeightfieldTerrainShape.prototype['setMargin'] = btHeightfieldTerrainShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _emscripten_bind_btHeightfieldTerrainShape_setMargin_1(self, margin);
};;

btHeightfieldTerrainShape.prototype['getMargin'] = btHeightfieldTerrainShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btHeightfieldTerrainShape_getMargin_0(self);
};;

btHeightfieldTerrainShape.prototype['setLocalScaling'] = btHeightfieldTerrainShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _emscripten_bind_btHeightfieldTerrainShape_setLocalScaling_1(self, scaling);
};;

btHeightfieldTerrainShape.prototype['getLocalScaling'] = btHeightfieldTerrainShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btHeightfieldTerrainShape_getLocalScaling_0(self), btVector3);
};;

btHeightfieldTerrainShape.prototype['calculateLocalInertia'] = btHeightfieldTerrainShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btHeightfieldTerrainShape_calculateLocalInertia_2(self, mass, inertia);
};;

btHeightfieldTerrainShape.prototype['isCompound'] = btHeightfieldTerrainShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btHeightfieldTerrainShape_isCompound_0(self));
};;

btHeightfieldTerrainShape.prototype['getUserIndex'] = btHeightfieldTerrainShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btHeightfieldTerrainShape_getUserIndex_0(self);
};;

btHeightfieldTerrainShape.prototype['setUserIndex'] = btHeightfieldTerrainShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btHeightfieldTerrainShape_setUserIndex_1(self, index);
};;

btHeightfieldTerrainShape.prototype['getUserPointerAsInt'] = btHeightfieldTerrainShape.prototype.getUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btHeightfieldTerrainShape_getUserPointerAsInt_0(self);
};;

btHeightfieldTerrainShape.prototype['setUserPointerAsInt'] = btHeightfieldTerrainShape.prototype.setUserPointerAsInt = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btHeightfieldTerrainShape_setUserPointerAsInt_1(self, index);
};;

btHeightfieldTerrainShape.prototype['getAabb'] = btHeightfieldTerrainShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _emscripten_bind_btHeightfieldTerrainShape_getAabb_3(self, t, min, max);
};;

btHeightfieldTerrainShape.prototype['getLocalBoundingSphere'] = btHeightfieldTerrainShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btHeightfieldTerrainShape_getLocalBoundingSphere_0(self);
};;

  btHeightfieldTerrainShape.prototype['__destroy__'] = btHeightfieldTerrainShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btHeightfieldTerrainShape___destroy___0(self);
};
// btDefaultCollisionConstructionInfo
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDefaultCollisionConstructionInfo() {
  this.ptr = _emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0();
  getCache(btDefaultCollisionConstructionInfo)[this.ptr] = this;
};;
btDefaultCollisionConstructionInfo.prototype = Object.create(WrapperObject.prototype);
btDefaultCollisionConstructionInfo.prototype.constructor = btDefaultCollisionConstructionInfo;
btDefaultCollisionConstructionInfo.prototype.__class__ = btDefaultCollisionConstructionInfo;
btDefaultCollisionConstructionInfo.__cache__ = {};
Module['btDefaultCollisionConstructionInfo'] = btDefaultCollisionConstructionInfo;

  btDefaultCollisionConstructionInfo.prototype['__destroy__'] = btDefaultCollisionConstructionInfo.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0(self);
};
// btDefaultCollisionConfiguration
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDefaultCollisionConfiguration(info) {
  if (info && typeof info === 'object') info = info.ptr;
  if (info === undefined) { this.ptr = _emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0(); getCache(btDefaultCollisionConfiguration)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1(info);
  getCache(btDefaultCollisionConfiguration)[this.ptr] = this;
};;
btDefaultCollisionConfiguration.prototype = Object.create(WrapperObject.prototype);
btDefaultCollisionConfiguration.prototype.constructor = btDefaultCollisionConfiguration;
btDefaultCollisionConfiguration.prototype.__class__ = btDefaultCollisionConfiguration;
btDefaultCollisionConfiguration.__cache__ = {};
Module['btDefaultCollisionConfiguration'] = btDefaultCollisionConfiguration;

  btDefaultCollisionConfiguration.prototype['__destroy__'] = btDefaultCollisionConfiguration.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btDefaultCollisionConfiguration___destroy___0(self);
};
// btPersistentManifold
/** @suppress {undefinedVars, duplicate} @this{Object} */function btPersistentManifold() {
  this.ptr = _emscripten_bind_btPersistentManifold_btPersistentManifold_0();
  getCache(btPersistentManifold)[this.ptr] = this;
};;
btPersistentManifold.prototype = Object.create(WrapperObject.prototype);
btPersistentManifold.prototype.constructor = btPersistentManifold;
btPersistentManifold.prototype.__class__ = btPersistentManifold;
btPersistentManifold.__cache__ = {};
Module['btPersistentManifold'] = btPersistentManifold;

btPersistentManifold.prototype['getBody0'] = btPersistentManifold.prototype.getBody0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btPersistentManifold_getBody0_0(self), btCollisionObject);
};;

btPersistentManifold.prototype['getBody1'] = btPersistentManifold.prototype.getBody1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btPersistentManifold_getBody1_0(self), btCollisionObject);
};;

btPersistentManifold.prototype['getNumContacts'] = btPersistentManifold.prototype.getNumContacts = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btPersistentManifold_getNumContacts_0(self);
};;

btPersistentManifold.prototype['getContactPoint'] = btPersistentManifold.prototype.getContactPoint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_emscripten_bind_btPersistentManifold_getContactPoint_1(self, index), btManifoldPoint);
};;

  btPersistentManifold.prototype['__destroy__'] = btPersistentManifold.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btPersistentManifold___destroy___0(self);
};
// btCollisionDispatcher
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCollisionDispatcher(conf) {
  if (conf && typeof conf === 'object') conf = conf.ptr;
  this.ptr = _emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1(conf);
  getCache(btCollisionDispatcher)[this.ptr] = this;
};;
btCollisionDispatcher.prototype = Object.create(btDispatcher.prototype);
btCollisionDispatcher.prototype.constructor = btCollisionDispatcher;
btCollisionDispatcher.prototype.__class__ = btCollisionDispatcher;
btCollisionDispatcher.__cache__ = {};
Module['btCollisionDispatcher'] = btCollisionDispatcher;

btCollisionDispatcher.prototype['setDispatcherFlags'] = btCollisionDispatcher.prototype.setDispatcherFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  _emscripten_bind_btCollisionDispatcher_setDispatcherFlags_1(self, flags);
};;

btCollisionDispatcher.prototype['getNumManifolds'] = btCollisionDispatcher.prototype.getNumManifolds = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btCollisionDispatcher_getNumManifolds_0(self);
};;

btCollisionDispatcher.prototype['getManifoldByIndexInternal'] = btCollisionDispatcher.prototype.getManifoldByIndexInternal = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1(self, index), btPersistentManifold);
};;

  btCollisionDispatcher.prototype['__destroy__'] = btCollisionDispatcher.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btCollisionDispatcher___destroy___0(self);
};
// btOverlappingPairCache
/** @suppress {undefinedVars, duplicate} @this{Object} */function btOverlappingPairCache() { throw "cannot construct a btOverlappingPairCache, no constructor in IDL" }
btOverlappingPairCache.prototype = Object.create(WrapperObject.prototype);
btOverlappingPairCache.prototype.constructor = btOverlappingPairCache;
btOverlappingPairCache.prototype.__class__ = btOverlappingPairCache;
btOverlappingPairCache.__cache__ = {};
Module['btOverlappingPairCache'] = btOverlappingPairCache;

  btOverlappingPairCache.prototype['__destroy__'] = btOverlappingPairCache.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btOverlappingPairCache___destroy___0(self);
};
// btCollisionConfiguration
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCollisionConfiguration() { throw "cannot construct a btCollisionConfiguration, no constructor in IDL" }
btCollisionConfiguration.prototype = Object.create(WrapperObject.prototype);
btCollisionConfiguration.prototype.constructor = btCollisionConfiguration;
btCollisionConfiguration.prototype.__class__ = btCollisionConfiguration;
btCollisionConfiguration.__cache__ = {};
Module['btCollisionConfiguration'] = btCollisionConfiguration;

  btCollisionConfiguration.prototype['__destroy__'] = btCollisionConfiguration.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btCollisionConfiguration___destroy___0(self);
};
// btDbvtBroadphase
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDbvtBroadphase() {
  this.ptr = _emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0();
  getCache(btDbvtBroadphase)[this.ptr] = this;
};;
btDbvtBroadphase.prototype = Object.create(btBroadphaseInterface.prototype);
btDbvtBroadphase.prototype.constructor = btDbvtBroadphase;
btDbvtBroadphase.prototype.__class__ = btDbvtBroadphase;
btDbvtBroadphase.__cache__ = {};
Module['btDbvtBroadphase'] = btDbvtBroadphase;

  btDbvtBroadphase.prototype['__destroy__'] = btDbvtBroadphase.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btDbvtBroadphase___destroy___0(self);
};
// btBroadphaseProxy
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBroadphaseProxy() { throw "cannot construct a btBroadphaseProxy, no constructor in IDL" }
btBroadphaseProxy.prototype = Object.create(WrapperObject.prototype);
btBroadphaseProxy.prototype.constructor = btBroadphaseProxy;
btBroadphaseProxy.prototype.__class__ = btBroadphaseProxy;
btBroadphaseProxy.__cache__ = {};
Module['btBroadphaseProxy'] = btBroadphaseProxy;

  btBroadphaseProxy.prototype['get_m_collisionFilterGroup'] = btBroadphaseProxy.prototype.get_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0(self);
};
    btBroadphaseProxy.prototype['set_m_collisionFilterGroup'] = btBroadphaseProxy.prototype.set_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1(self, arg0);
};
    Object.defineProperty(btBroadphaseProxy.prototype, 'm_collisionFilterGroup', { get: btBroadphaseProxy.prototype.get_m_collisionFilterGroup, set: btBroadphaseProxy.prototype.set_m_collisionFilterGroup });
  btBroadphaseProxy.prototype['get_m_collisionFilterMask'] = btBroadphaseProxy.prototype.get_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0(self);
};
    btBroadphaseProxy.prototype['set_m_collisionFilterMask'] = btBroadphaseProxy.prototype.set_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1(self, arg0);
};
    Object.defineProperty(btBroadphaseProxy.prototype, 'm_collisionFilterMask', { get: btBroadphaseProxy.prototype.get_m_collisionFilterMask, set: btBroadphaseProxy.prototype.set_m_collisionFilterMask });
  btBroadphaseProxy.prototype['__destroy__'] = btBroadphaseProxy.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btBroadphaseProxy___destroy___0(self);
};
// btRigidBodyConstructionInfo
/** @suppress {undefinedVars, duplicate} @this{Object} */function btRigidBodyConstructionInfo(mass, motionState, collisionShape, localInertia) {
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (motionState && typeof motionState === 'object') motionState = motionState.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (localInertia && typeof localInertia === 'object') localInertia = localInertia.ptr;
  if (localInertia === undefined) { this.ptr = _emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3(mass, motionState, collisionShape); getCache(btRigidBodyConstructionInfo)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4(mass, motionState, collisionShape, localInertia);
  getCache(btRigidBodyConstructionInfo)[this.ptr] = this;
};;
btRigidBodyConstructionInfo.prototype = Object.create(WrapperObject.prototype);
btRigidBodyConstructionInfo.prototype.constructor = btRigidBodyConstructionInfo;
btRigidBodyConstructionInfo.prototype.__class__ = btRigidBodyConstructionInfo;
btRigidBodyConstructionInfo.__cache__ = {};
Module['btRigidBodyConstructionInfo'] = btRigidBodyConstructionInfo;

  btRigidBodyConstructionInfo.prototype['get_m_linearDamping'] = btRigidBodyConstructionInfo.prototype.get_m_linearDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_linearDamping'] = btRigidBodyConstructionInfo.prototype.set_m_linearDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_linearDamping', { get: btRigidBodyConstructionInfo.prototype.get_m_linearDamping, set: btRigidBodyConstructionInfo.prototype.set_m_linearDamping });
  btRigidBodyConstructionInfo.prototype['get_m_angularDamping'] = btRigidBodyConstructionInfo.prototype.get_m_angularDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_angularDamping'] = btRigidBodyConstructionInfo.prototype.set_m_angularDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_angularDamping', { get: btRigidBodyConstructionInfo.prototype.get_m_angularDamping, set: btRigidBodyConstructionInfo.prototype.set_m_angularDamping });
  btRigidBodyConstructionInfo.prototype['get_m_friction'] = btRigidBodyConstructionInfo.prototype.get_m_friction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_friction'] = btRigidBodyConstructionInfo.prototype.set_m_friction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_friction', { get: btRigidBodyConstructionInfo.prototype.get_m_friction, set: btRigidBodyConstructionInfo.prototype.set_m_friction });
  btRigidBodyConstructionInfo.prototype['get_m_rollingFriction'] = btRigidBodyConstructionInfo.prototype.get_m_rollingFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_rollingFriction'] = btRigidBodyConstructionInfo.prototype.set_m_rollingFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_rollingFriction', { get: btRigidBodyConstructionInfo.prototype.get_m_rollingFriction, set: btRigidBodyConstructionInfo.prototype.set_m_rollingFriction });
  btRigidBodyConstructionInfo.prototype['get_m_restitution'] = btRigidBodyConstructionInfo.prototype.get_m_restitution = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_restitution'] = btRigidBodyConstructionInfo.prototype.set_m_restitution = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_restitution', { get: btRigidBodyConstructionInfo.prototype.get_m_restitution, set: btRigidBodyConstructionInfo.prototype.set_m_restitution });
  btRigidBodyConstructionInfo.prototype['get_m_linearSleepingThreshold'] = btRigidBodyConstructionInfo.prototype.get_m_linearSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_linearSleepingThreshold'] = btRigidBodyConstructionInfo.prototype.set_m_linearSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_linearSleepingThreshold', { get: btRigidBodyConstructionInfo.prototype.get_m_linearSleepingThreshold, set: btRigidBodyConstructionInfo.prototype.set_m_linearSleepingThreshold });
  btRigidBodyConstructionInfo.prototype['get_m_angularSleepingThreshold'] = btRigidBodyConstructionInfo.prototype.get_m_angularSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_angularSleepingThreshold'] = btRigidBodyConstructionInfo.prototype.set_m_angularSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_angularSleepingThreshold', { get: btRigidBodyConstructionInfo.prototype.get_m_angularSleepingThreshold, set: btRigidBodyConstructionInfo.prototype.set_m_angularSleepingThreshold });
  btRigidBodyConstructionInfo.prototype['__destroy__'] = btRigidBodyConstructionInfo.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btRigidBodyConstructionInfo___destroy___0(self);
};
// btRigidBody
/** @suppress {undefinedVars, duplicate} @this{Object} */function btRigidBody(constructionInfo) {
  if (constructionInfo && typeof constructionInfo === 'object') constructionInfo = constructionInfo.ptr;
  this.ptr = _emscripten_bind_btRigidBody_btRigidBody_1(constructionInfo);
  getCache(btRigidBody)[this.ptr] = this;
};;
btRigidBody.prototype = Object.create(btCollisionObject.prototype);
btRigidBody.prototype.constructor = btRigidBody;
btRigidBody.prototype.__class__ = btRigidBody;
btRigidBody.__cache__ = {};
Module['btRigidBody'] = btRigidBody;

btRigidBody.prototype['getCenterOfMassTransform'] = btRigidBody.prototype.getCenterOfMassTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getCenterOfMassTransform_0(self), btTransform);
};;

btRigidBody.prototype['setCenterOfMassTransform'] = btRigidBody.prototype.setCenterOfMassTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(xform) {
  var self = this.ptr;
  if (xform && typeof xform === 'object') xform = xform.ptr;
  _emscripten_bind_btRigidBody_setCenterOfMassTransform_1(self, xform);
};;

btRigidBody.prototype['setSleepingThresholds'] = btRigidBody.prototype.setSleepingThresholds = /** @suppress {undefinedVars, duplicate} @this{Object} */function(linear, angular) {
  var self = this.ptr;
  if (linear && typeof linear === 'object') linear = linear.ptr;
  if (angular && typeof angular === 'object') angular = angular.ptr;
  _emscripten_bind_btRigidBody_setSleepingThresholds_2(self, linear, angular);
};;

btRigidBody.prototype['getLinearSleepingThreshold'] = btRigidBody.prototype.getLinearSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBody_getLinearSleepingThreshold_0(self);
};;

btRigidBody.prototype['setDamping'] = btRigidBody.prototype.setDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function(lin_damping, ang_damping) {
  var self = this.ptr;
  if (lin_damping && typeof lin_damping === 'object') lin_damping = lin_damping.ptr;
  if (ang_damping && typeof ang_damping === 'object') ang_damping = ang_damping.ptr;
  _emscripten_bind_btRigidBody_setDamping_2(self, lin_damping, ang_damping);
};;

btRigidBody.prototype['setMassProps'] = btRigidBody.prototype.setMassProps = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _emscripten_bind_btRigidBody_setMassProps_2(self, mass, inertia);
};;

btRigidBody.prototype['getLinearFactor'] = btRigidBody.prototype.getLinearFactor = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getLinearFactor_0(self), btVector3);
};;

btRigidBody.prototype['setLinearFactor'] = btRigidBody.prototype.setLinearFactor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(linearFactor) {
  var self = this.ptr;
  if (linearFactor && typeof linearFactor === 'object') linearFactor = linearFactor.ptr;
  _emscripten_bind_btRigidBody_setLinearFactor_1(self, linearFactor);
};;

btRigidBody.prototype['applyTorque'] = btRigidBody.prototype.applyTorque = /** @suppress {undefinedVars, duplicate} @this{Object} */function(torque) {
  var self = this.ptr;
  if (torque && typeof torque === 'object') torque = torque.ptr;
  _emscripten_bind_btRigidBody_applyTorque_1(self, torque);
};;

btRigidBody.prototype['applyForce'] = btRigidBody.prototype.applyForce = /** @suppress {undefinedVars, duplicate} @this{Object} */function(force, rel_pos) {
  var self = this.ptr;
  if (force && typeof force === 'object') force = force.ptr;
  if (rel_pos && typeof rel_pos === 'object') rel_pos = rel_pos.ptr;
  _emscripten_bind_btRigidBody_applyForce_2(self, force, rel_pos);
};;

btRigidBody.prototype['applyCentralForce'] = btRigidBody.prototype.applyCentralForce = /** @suppress {undefinedVars, duplicate} @this{Object} */function(force) {
  var self = this.ptr;
  if (force && typeof force === 'object') force = force.ptr;
  _emscripten_bind_btRigidBody_applyCentralForce_1(self, force);
};;

btRigidBody.prototype['applyTorqueImpulse'] = btRigidBody.prototype.applyTorqueImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(torque) {
  var self = this.ptr;
  if (torque && typeof torque === 'object') torque = torque.ptr;
  _emscripten_bind_btRigidBody_applyTorqueImpulse_1(self, torque);
};;

btRigidBody.prototype['applyImpulse'] = btRigidBody.prototype.applyImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(impulse, rel_pos) {
  var self = this.ptr;
  if (impulse && typeof impulse === 'object') impulse = impulse.ptr;
  if (rel_pos && typeof rel_pos === 'object') rel_pos = rel_pos.ptr;
  _emscripten_bind_btRigidBody_applyImpulse_2(self, impulse, rel_pos);
};;

btRigidBody.prototype['updateInertiaTensor'] = btRigidBody.prototype.updateInertiaTensor = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btRigidBody_updateInertiaTensor_0(self);
};;

btRigidBody.prototype['getLinearVelocity'] = btRigidBody.prototype.getLinearVelocity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getLinearVelocity_0(self), btVector3);
};;

btRigidBody.prototype['getAngularVelocity'] = btRigidBody.prototype.getAngularVelocity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getAngularVelocity_0(self), btVector3);
};;

btRigidBody.prototype['setLinearVelocity'] = btRigidBody.prototype.setLinearVelocity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(lin_vel) {
  var self = this.ptr;
  if (lin_vel && typeof lin_vel === 'object') lin_vel = lin_vel.ptr;
  _emscripten_bind_btRigidBody_setLinearVelocity_1(self, lin_vel);
};;

btRigidBody.prototype['setAngularVelocity'] = btRigidBody.prototype.setAngularVelocity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ang_vel) {
  var self = this.ptr;
  if (ang_vel && typeof ang_vel === 'object') ang_vel = ang_vel.ptr;
  _emscripten_bind_btRigidBody_setAngularVelocity_1(self, ang_vel);
};;

btRigidBody.prototype['getMotionState'] = btRigidBody.prototype.getMotionState = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getMotionState_0(self), btMotionState);
};;

btRigidBody.prototype['getAngularFactor'] = btRigidBody.prototype.getAngularFactor = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getAngularFactor_0(self), btVector3);
};;

btRigidBody.prototype['setAngularFactor'] = btRigidBody.prototype.setAngularFactor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(angularFactor) {
  var self = this.ptr;
  if (angularFactor && typeof angularFactor === 'object') angularFactor = angularFactor.ptr;
  _emscripten_bind_btRigidBody_setAngularFactor_1(self, angularFactor);
};;

btRigidBody.prototype['getAabb'] = btRigidBody.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(aabbMin, aabbMax) {
  var self = this.ptr;
  if (aabbMin && typeof aabbMin === 'object') aabbMin = aabbMin.ptr;
  if (aabbMax && typeof aabbMax === 'object') aabbMax = aabbMax.ptr;
  _emscripten_bind_btRigidBody_getAabb_2(self, aabbMin, aabbMax);
};;

btRigidBody.prototype['setGravity'] = btRigidBody.prototype.setGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(acceleration) {
  var self = this.ptr;
  if (acceleration && typeof acceleration === 'object') acceleration = acceleration.ptr;
  _emscripten_bind_btRigidBody_setGravity_1(self, acceleration);
};;

btRigidBody.prototype['getFlags'] = btRigidBody.prototype.getFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBody_getFlags_0(self);
};;

btRigidBody.prototype['setFlags'] = btRigidBody.prototype.setFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  _emscripten_bind_btRigidBody_setFlags_1(self, flags);
};;

btRigidBody.prototype['wantsSleeping'] = btRigidBody.prototype.wantsSleeping = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btRigidBody_wantsSleeping_0(self));
};;

btRigidBody.prototype['clearForces'] = btRigidBody.prototype.clearForces = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btRigidBody_clearForces_0(self);
};;

btRigidBody.prototype['getTotalForce'] = btRigidBody.prototype.getTotalForce = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getTotalForce_0(self), btVector3);
};;

btRigidBody.prototype['getTotalTorque'] = btRigidBody.prototype.getTotalTorque = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getTotalTorque_0(self), btVector3);
};;

btRigidBody.prototype['clearState'] = btRigidBody.prototype.clearState = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btRigidBody_clearState_0(self);
};;

btRigidBody.prototype['getCollisionShape'] = btRigidBody.prototype.getCollisionShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getCollisionShape_0(self), btCollisionShape);
};;

btRigidBody.prototype['getActivationState'] = btRigidBody.prototype.getActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBody_getActivationState_0(self);
};;

btRigidBody.prototype['setActivationState'] = btRigidBody.prototype.setActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function(newState) {
  var self = this.ptr;
  if (newState && typeof newState === 'object') newState = newState.ptr;
  _emscripten_bind_btRigidBody_setActivationState_1(self, newState);
};;

btRigidBody.prototype['forceActivationState'] = btRigidBody.prototype.forceActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function(newState) {
  var self = this.ptr;
  if (newState && typeof newState === 'object') newState = newState.ptr;
  _emscripten_bind_btRigidBody_forceActivationState_1(self, newState);
};;

btRigidBody.prototype['activate'] = btRigidBody.prototype.activate = /** @suppress {undefinedVars, duplicate} @this{Object} */function(forceActivation) {
  var self = this.ptr;
  if (forceActivation && typeof forceActivation === 'object') forceActivation = forceActivation.ptr;
  if (forceActivation === undefined) { _emscripten_bind_btRigidBody_activate_0(self);  return }
  _emscripten_bind_btRigidBody_activate_1(self, forceActivation);
};;

btRigidBody.prototype['isActive'] = btRigidBody.prototype.isActive = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btRigidBody_isActive_0(self));
};;

btRigidBody.prototype['isKinematicObject'] = btRigidBody.prototype.isKinematicObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btRigidBody_isKinematicObject_0(self));
};;

btRigidBody.prototype['isStaticObject'] = btRigidBody.prototype.isStaticObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btRigidBody_isStaticObject_0(self));
};;

btRigidBody.prototype['isStaticOrKinematicObject'] = btRigidBody.prototype.isStaticOrKinematicObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_emscripten_bind_btRigidBody_isStaticOrKinematicObject_0(self));
};;

btRigidBody.prototype['setRestitution'] = btRigidBody.prototype.setRestitution = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r) {
  var self = this.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  _emscripten_bind_btRigidBody_setRestitution_1(self, r);
};;

btRigidBody.prototype['setFriction'] = btRigidBody.prototype.setFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(f) {
  var self = this.ptr;
  if (f && typeof f === 'object') f = f.ptr;
  _emscripten_bind_btRigidBody_setFriction_1(self, f);
};;

btRigidBody.prototype['setRollingFriction'] = btRigidBody.prototype.setRollingFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rf) {
  var self = this.ptr;
  if (rf && typeof rf === 'object') rf = rf.ptr;
  _emscripten_bind_btRigidBody_setRollingFriction_1(self, rf);
};;

btRigidBody.prototype['setSpinningFriction'] = btRigidBody.prototype.setSpinningFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(sf) {
  var self = this.ptr;
  if (sf && typeof sf === 'object') sf = sf.ptr;
  _emscripten_bind_btRigidBody_setSpinningFriction_1(self, sf);
};;

btRigidBody.prototype['getWorldTransform'] = btRigidBody.prototype.getWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getWorldTransform_0(self), btTransform);
};;

btRigidBody.prototype['getCollisionFlags'] = btRigidBody.prototype.getCollisionFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBody_getCollisionFlags_0(self);
};;

btRigidBody.prototype['setCollisionFlags'] = btRigidBody.prototype.setCollisionFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  _emscripten_bind_btRigidBody_setCollisionFlags_1(self, flags);
};;

btRigidBody.prototype['setWorldTransform'] = btRigidBody.prototype.setWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _emscripten_bind_btRigidBody_setWorldTransform_1(self, worldTrans);
};;

btRigidBody.prototype['setCollisionShape'] = btRigidBody.prototype.setCollisionShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionShape) {
  var self = this.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  _emscripten_bind_btRigidBody_setCollisionShape_1(self, collisionShape);
};;

btRigidBody.prototype['setCcdMotionThreshold'] = btRigidBody.prototype.setCcdMotionThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ccdMotionThreshold) {
  var self = this.ptr;
  if (ccdMotionThreshold && typeof ccdMotionThreshold === 'object') ccdMotionThreshold = ccdMotionThreshold.ptr;
  _emscripten_bind_btRigidBody_setCcdMotionThreshold_1(self, ccdMotionThreshold);
};;

btRigidBody.prototype['setCcdSweptSphereRadius'] = btRigidBody.prototype.setCcdSweptSphereRadius = /** @suppress {undefinedVars, duplicate} @this{Object} */function(radius) {
  var self = this.ptr;
  if (radius && typeof radius === 'object') radius = radius.ptr;
  _emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1(self, radius);
};;

btRigidBody.prototype['getUserIndex'] = btRigidBody.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btRigidBody_getUserIndex_0(self);
};;

btRigidBody.prototype['setUserIndex'] = btRigidBody.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btRigidBody_setUserIndex_1(self, index);
};;

btRigidBody.prototype['setUserIndex2'] = btRigidBody.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _emscripten_bind_btRigidBody_setUserIndex2_1(self, index);
};;

btRigidBody.prototype['setIgnoreCollisionCheck'] = btRigidBody.prototype.setIgnoreCollisionCheck = /** @suppress {undefinedVars, duplicate} @this{Object} */function(co, ig) {
  var self = this.ptr;
  if (co && typeof co === 'object') co = co.ptr;
  if (ig && typeof ig === 'object') ig = ig.ptr;
  _emscripten_bind_btRigidBody_setIgnoreCollisionCheck_2(self, co, ig);
};;

btRigidBody.prototype['setInterpolationWorldTransform'] = btRigidBody.prototype.setInterpolationWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(trans) {
  var self = this.ptr;
  if (trans && typeof trans === 'object') trans = trans.ptr;
  _emscripten_bind_btRigidBody_setInterpolationWorldTransform_1(self, trans);
};;

btRigidBody.prototype['getInterpolationWorldTransform'] = btRigidBody.prototype.getInterpolationWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btRigidBody_getInterpolationWorldTransform_0(self), btTransform);
};;

  btRigidBody.prototype['__destroy__'] = btRigidBody.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btRigidBody___destroy___0(self);
};
// btConstraintSetting
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConstraintSetting() {
  this.ptr = _emscripten_bind_btConstraintSetting_btConstraintSetting_0();
  getCache(btConstraintSetting)[this.ptr] = this;
};;
btConstraintSetting.prototype = Object.create(WrapperObject.prototype);
btConstraintSetting.prototype.constructor = btConstraintSetting;
btConstraintSetting.prototype.__class__ = btConstraintSetting;
btConstraintSetting.__cache__ = {};
Module['btConstraintSetting'] = btConstraintSetting;

  btConstraintSetting.prototype['get_m_tau'] = btConstraintSetting.prototype.get_m_tau = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConstraintSetting_get_m_tau_0(self);
};
    btConstraintSetting.prototype['set_m_tau'] = btConstraintSetting.prototype.set_m_tau = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btConstraintSetting_set_m_tau_1(self, arg0);
};
    Object.defineProperty(btConstraintSetting.prototype, 'm_tau', { get: btConstraintSetting.prototype.get_m_tau, set: btConstraintSetting.prototype.set_m_tau });
  btConstraintSetting.prototype['get_m_damping'] = btConstraintSetting.prototype.get_m_damping = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConstraintSetting_get_m_damping_0(self);
};
    btConstraintSetting.prototype['set_m_damping'] = btConstraintSetting.prototype.set_m_damping = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btConstraintSetting_set_m_damping_1(self, arg0);
};
    Object.defineProperty(btConstraintSetting.prototype, 'm_damping', { get: btConstraintSetting.prototype.get_m_damping, set: btConstraintSetting.prototype.set_m_damping });
  btConstraintSetting.prototype['get_m_impulseClamp'] = btConstraintSetting.prototype.get_m_impulseClamp = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btConstraintSetting_get_m_impulseClamp_0(self);
};
    btConstraintSetting.prototype['set_m_impulseClamp'] = btConstraintSetting.prototype.set_m_impulseClamp = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btConstraintSetting_set_m_impulseClamp_1(self, arg0);
};
    Object.defineProperty(btConstraintSetting.prototype, 'm_impulseClamp', { get: btConstraintSetting.prototype.get_m_impulseClamp, set: btConstraintSetting.prototype.set_m_impulseClamp });
  btConstraintSetting.prototype['__destroy__'] = btConstraintSetting.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btConstraintSetting___destroy___0(self);
};
// btPoint2PointConstraint
/** @suppress {undefinedVars, duplicate} @this{Object} */function btPoint2PointConstraint(rbA, rbB, pivotInA, pivotInB) {
  if (rbA && typeof rbA === 'object') rbA = rbA.ptr;
  if (rbB && typeof rbB === 'object') rbB = rbB.ptr;
  if (pivotInA && typeof pivotInA === 'object') pivotInA = pivotInA.ptr;
  if (pivotInB && typeof pivotInB === 'object') pivotInB = pivotInB.ptr;
  if (pivotInA === undefined) { this.ptr = _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2(rbA, rbB); getCache(btPoint2PointConstraint)[this.ptr] = this;return }
  if (pivotInB === undefined) { this.ptr = _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_3(rbA, rbB, pivotInA); getCache(btPoint2PointConstraint)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4(rbA, rbB, pivotInA, pivotInB);
  getCache(btPoint2PointConstraint)[this.ptr] = this;
};;
btPoint2PointConstraint.prototype = Object.create(btTypedConstraint.prototype);
btPoint2PointConstraint.prototype.constructor = btPoint2PointConstraint;
btPoint2PointConstraint.prototype.__class__ = btPoint2PointConstraint;
btPoint2PointConstraint.__cache__ = {};
Module['btPoint2PointConstraint'] = btPoint2PointConstraint;

btPoint2PointConstraint.prototype['setPivotA'] = btPoint2PointConstraint.prototype.setPivotA = /** @suppress {undefinedVars, duplicate} @this{Object} */function(pivotA) {
  var self = this.ptr;
  if (pivotA && typeof pivotA === 'object') pivotA = pivotA.ptr;
  _emscripten_bind_btPoint2PointConstraint_setPivotA_1(self, pivotA);
};;

btPoint2PointConstraint.prototype['setPivotB'] = btPoint2PointConstraint.prototype.setPivotB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(pivotB) {
  var self = this.ptr;
  if (pivotB && typeof pivotB === 'object') pivotB = pivotB.ptr;
  _emscripten_bind_btPoint2PointConstraint_setPivotB_1(self, pivotB);
};;

btPoint2PointConstraint.prototype['getPivotInA'] = btPoint2PointConstraint.prototype.getPivotInA = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btPoint2PointConstraint_getPivotInA_0(self), btVector3);
};;

btPoint2PointConstraint.prototype['getPivotInB'] = btPoint2PointConstraint.prototype.getPivotInB = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btPoint2PointConstraint_getPivotInB_0(self), btVector3);
};;

btPoint2PointConstraint.prototype['enableFeedback'] = btPoint2PointConstraint.prototype.enableFeedback = /** @suppress {undefinedVars, duplicate} @this{Object} */function(needsFeedback) {
  var self = this.ptr;
  if (needsFeedback && typeof needsFeedback === 'object') needsFeedback = needsFeedback.ptr;
  _emscripten_bind_btPoint2PointConstraint_enableFeedback_1(self, needsFeedback);
};;

btPoint2PointConstraint.prototype['getBreakingImpulseThreshold'] = btPoint2PointConstraint.prototype.getBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0(self);
};;

btPoint2PointConstraint.prototype['setBreakingImpulseThreshold'] = btPoint2PointConstraint.prototype.setBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(threshold) {
  var self = this.ptr;
  if (threshold && typeof threshold === 'object') threshold = threshold.ptr;
  _emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1(self, threshold);
};;

btPoint2PointConstraint.prototype['getParam'] = btPoint2PointConstraint.prototype.getParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  return _emscripten_bind_btPoint2PointConstraint_getParam_2(self, num, axis);
};;

btPoint2PointConstraint.prototype['setParam'] = btPoint2PointConstraint.prototype.setParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, value, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  _emscripten_bind_btPoint2PointConstraint_setParam_3(self, num, value, axis);
};;

  btPoint2PointConstraint.prototype['get_m_setting'] = btPoint2PointConstraint.prototype.get_m_setting = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_btPoint2PointConstraint_get_m_setting_0(self), btConstraintSetting);
};
    btPoint2PointConstraint.prototype['set_m_setting'] = btPoint2PointConstraint.prototype.set_m_setting = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _emscripten_bind_btPoint2PointConstraint_set_m_setting_1(self, arg0);
};
    Object.defineProperty(btPoint2PointConstraint.prototype, 'm_setting', { get: btPoint2PointConstraint.prototype.get_m_setting, set: btPoint2PointConstraint.prototype.set_m_setting });
  btPoint2PointConstraint.prototype['__destroy__'] = btPoint2PointConstraint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btPoint2PointConstraint___destroy___0(self);
};
// btHingeConstraint
/** @suppress {undefinedVars, duplicate} @this{Object} */function btHingeConstraint(rbA, rbB, rbAFrame, rbBFrame, useReferenceFrameA) {
  if (rbA && typeof rbA === 'object') rbA = rbA.ptr;
  if (rbB && typeof rbB === 'object') rbB = rbB.ptr;
  if (rbAFrame && typeof rbAFrame === 'object') rbAFrame = rbAFrame.ptr;
  if (rbBFrame && typeof rbBFrame === 'object') rbBFrame = rbBFrame.ptr;
  if (useReferenceFrameA && typeof useReferenceFrameA === 'object') useReferenceFrameA = useReferenceFrameA.ptr;
  if (useReferenceFrameA === undefined) { this.ptr = _emscripten_bind_btHingeConstraint_btHingeConstraint_4(rbA, rbB, rbAFrame, rbBFrame); getCache(btHingeConstraint)[this.ptr] = this;return }
  this.ptr = _emscripten_bind_btHingeConstraint_btHingeConstraint_5(rbA, rbB, rbAFrame, rbBFrame, useReferenceFrameA);
  getCache(btHingeConstraint)[this.ptr] = this;
};;
btHingeConstraint.prototype = Object.create(btTypedConstraint.prototype);
btHingeConstraint.prototype.constructor = btHingeConstraint;
btHingeConstraint.prototype.__class__ = btHingeConstraint;
btHingeConstraint.__cache__ = {};
Module['btHingeConstraint'] = btHingeConstraint;

btHingeConstraint.prototype['setLimit'] = btHingeConstraint.prototype.setLimit = /** @suppress {undefinedVars, duplicate} @this{Object} */function(low, high, softness, biasFactor, relaxationFactor) {
  var self = this.ptr;
  if (low && typeof low === 'object') low = low.ptr;
  if (high && typeof high === 'object') high = high.ptr;
  if (softness && typeof softness === 'object') softness = softness.ptr;
  if (biasFactor && typeof biasFactor === 'object') biasFactor = biasFactor.ptr;
  if (relaxationFactor && typeof relaxationFactor === 'object') relaxationFactor = relaxationFactor.ptr;
  if (relaxationFactor === undefined) { _emscripten_bind_btHingeConstraint_setLimit_4(self, low, high, softness, biasFactor);  return }
  _emscripten_bind_btHingeConstraint_setLimit_5(self, low, high, softness, biasFactor, relaxationFactor);
};;

btHingeConstraint.prototype['enableAngularMotor'] = btHingeConstraint.prototype.enableAngularMotor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(enableMotor, targetVelocity, maxMotorImpulse) {
  var self = this.ptr;
  if (enableMotor && typeof enableMotor === 'object') enableMotor = enableMotor.ptr;
  if (targetVelocity && typeof targetVelocity === 'object') targetVelocity = targetVelocity.ptr;
  if (maxMotorImpulse && typeof maxMotorImpulse === 'object') maxMotorImpulse = maxMotorImpulse.ptr;
  _emscripten_bind_btHingeConstraint_enableAngularMotor_3(self, enableMotor, targetVelocity, maxMotorImpulse);
};;

btHingeConstraint.prototype['setAngularOnly'] = btHingeConstraint.prototype.setAngularOnly = /** @suppress {undefinedVars, duplicate} @this{Object} */function(angularOnly) {
  var self = this.ptr;
  if (angularOnly && typeof angularOnly === 'object') angularOnly = angularOnly.ptr;
  _emscripten_bind_btHingeConstraint_setAngularOnly_1(self, angularOnly);
};;

btHingeConstraint.prototype['enableMotor'] = btHingeConstraint.prototype.enableMotor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(enableMotor) {
  var self = this.ptr;
  if (enableMotor && typeof enableMotor === 'object') enableMotor = enableMotor.ptr;
  _emscripten_bind_btHingeConstraint_enableMotor_1(self, enableMotor);
};;

btHingeConstraint.prototype['setMaxMotorImpulse'] = btHingeConstraint.prototype.setMaxMotorImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(maxMotorImpulse) {
  var self = this.ptr;
  if (maxMotorImpulse && typeof maxMotorImpulse === 'object') maxMotorImpulse = maxMotorImpulse.ptr;
  _emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1(self, maxMotorImpulse);
};;

btHingeConstraint.prototype['setMotorTarget'] = btHingeConstraint.prototype.setMotorTarget = /** @suppress {undefinedVars, duplicate} @this{Object} */function(targetAngle, dt) {
  var self = this.ptr;
  if (targetAngle && typeof targetAngle === 'object') targetAngle = targetAngle.ptr;
  if (dt && typeof dt === 'object') dt = dt.ptr;
  _emscripten_bind_btHingeConstraint_setMotorTarget_2(self, targetAngle, dt);
};;

btHingeConstraint.prototype['setFrames'] = btHingeConstraint.prototype.setFrames = /** @suppress {undefinedVars, duplicate} @this{Object} */function(frameA, frameB) {
  var self = this.ptr;
  if (frameA && typeof frameA === 'object') frameA = frameA.ptr;
  if (frameB && typeof frameB === 'object') frameB = frameB.ptr;
  _emscripten_bind_btHingeConstraint_setFrames_2(self, frameA, frameB);
};;

btHingeConstraint.prototype['setAxis'] = btHingeConstraint.prototype.setAxis = /** @suppress {undefinedVars, duplicate} @this{Object} */function(axisInA) {
  var self = this.ptr;
  if (axisInA && typeof axisInA === 'object') axisInA = axisInA.ptr;
  _emscripten_bind_btHingeConstraint_setAxis_1(self, axisInA);
};;

btHingeConstraint.prototype['setUseReferenceFrameA'] = btHingeConstraint.prototype.setUseReferenceFrameA = /** @suppress {undefinedVars, duplicate} @this{Object} */function(urfa) {
  var self = this.ptr;
  if (urfa && typeof urfa === 'object') urfa = urfa.ptr;
  _emscripten_bind_btHingeConstraint_setUseReferenceFrameA_1(self, urfa);
};;

btHingeConstraint.prototype['enableFeedback'] = btHingeConstraint.prototype.enableFeedback = /** @suppress {undefinedVars, duplicate} @this{Object} */function(needsFeedback) {
  var self = this.ptr;
  if (needsFeedback && typeof needsFeedback === 'object') needsFeedback = needsFeedback.ptr;
  _emscripten_bind_btHingeConstraint_enableFeedback_1(self, needsFeedback);
};;

btHingeConstraint.prototype['getBreakingImpulseThreshold'] = btHingeConstraint.prototype.getBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0(self);
};;

btHingeConstraint.prototype['setBreakingImpulseThreshold'] = btHingeConstraint.prototype.setBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(threshold) {
  var self = this.ptr;
  if (threshold && typeof threshold === 'object') threshold = threshold.ptr;
  _emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1(self, threshold);
};;

btHingeConstraint.prototype['getParam'] = btHingeConstraint.prototype.getParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  return _emscripten_bind_btHingeConstraint_getParam_2(self, num, axis);
};;

btHingeConstraint.prototype['setParam'] = btHingeConstraint.prototype.setParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, value, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  _emscripten_bind_btHingeConstraint_setParam_3(self, num, value, axis);
};;

  btHingeConstraint.prototype['__destroy__'] = btHingeConstraint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btHingeConstraint___destroy___0(self);
};
// btFixedConstraint
/** @suppress {undefinedVars, duplicate} @this{Object} */function btFixedConstraint(rbA, rbB, frameInA, frameInB) {
  if (rbA && typeof rbA === 'object') rbA = rbA.ptr;
  if (rbB && typeof rbB === 'object') rbB = rbB.ptr;
  if (frameInA && typeof frameInA === 'object') frameInA = frameInA.ptr;
  if (frameInB && typeof frameInB === 'object') frameInB = frameInB.ptr;
  this.ptr = _emscripten_bind_btFixedConstraint_btFixedConstraint_4(rbA, rbB, frameInA, frameInB);
  getCache(btFixedConstraint)[this.ptr] = this;
};;
btFixedConstraint.prototype = Object.create(btTypedConstraint.prototype);
btFixedConstraint.prototype.constructor = btFixedConstraint;
btFixedConstraint.prototype.__class__ = btFixedConstraint;
btFixedConstraint.__cache__ = {};
Module['btFixedConstraint'] = btFixedConstraint;

btFixedConstraint.prototype['enableFeedback'] = btFixedConstraint.prototype.enableFeedback = /** @suppress {undefinedVars, duplicate} @this{Object} */function(needsFeedback) {
  var self = this.ptr;
  if (needsFeedback && typeof needsFeedback === 'object') needsFeedback = needsFeedback.ptr;
  _emscripten_bind_btFixedConstraint_enableFeedback_1(self, needsFeedback);
};;

btFixedConstraint.prototype['getBreakingImpulseThreshold'] = btFixedConstraint.prototype.getBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0(self);
};;

btFixedConstraint.prototype['setBreakingImpulseThreshold'] = btFixedConstraint.prototype.setBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(threshold) {
  var self = this.ptr;
  if (threshold && typeof threshold === 'object') threshold = threshold.ptr;
  _emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1(self, threshold);
};;

btFixedConstraint.prototype['getParam'] = btFixedConstraint.prototype.getParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  return _emscripten_bind_btFixedConstraint_getParam_2(self, num, axis);
};;

btFixedConstraint.prototype['setParam'] = btFixedConstraint.prototype.setParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, value, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  _emscripten_bind_btFixedConstraint_setParam_3(self, num, value, axis);
};;

  btFixedConstraint.prototype['__destroy__'] = btFixedConstraint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btFixedConstraint___destroy___0(self);
};
// btSequentialImpulseConstraintSolver
/** @suppress {undefinedVars, duplicate} @this{Object} */function btSequentialImpulseConstraintSolver() {
  this.ptr = _emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0();
  getCache(btSequentialImpulseConstraintSolver)[this.ptr] = this;
};;
btSequentialImpulseConstraintSolver.prototype = Object.create(WrapperObject.prototype);
btSequentialImpulseConstraintSolver.prototype.constructor = btSequentialImpulseConstraintSolver;
btSequentialImpulseConstraintSolver.prototype.__class__ = btSequentialImpulseConstraintSolver;
btSequentialImpulseConstraintSolver.__cache__ = {};
Module['btSequentialImpulseConstraintSolver'] = btSequentialImpulseConstraintSolver;

  btSequentialImpulseConstraintSolver.prototype['__destroy__'] = btSequentialImpulseConstraintSolver.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0(self);
};
// btConstraintSolver
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConstraintSolver() { throw "cannot construct a btConstraintSolver, no constructor in IDL" }
btConstraintSolver.prototype = Object.create(WrapperObject.prototype);
btConstraintSolver.prototype.constructor = btConstraintSolver;
btConstraintSolver.prototype.__class__ = btConstraintSolver;
btConstraintSolver.__cache__ = {};
Module['btConstraintSolver'] = btConstraintSolver;

  btConstraintSolver.prototype['__destroy__'] = btConstraintSolver.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btConstraintSolver___destroy___0(self);
};
// ccDiscreteDynamicsWorld
/** @suppress {undefinedVars, duplicate} @this{Object} */function ccDiscreteDynamicsWorld(dispatcher, pairCache, constraintSolver, collisionConfiguration) {
  if (dispatcher && typeof dispatcher === 'object') dispatcher = dispatcher.ptr;
  if (pairCache && typeof pairCache === 'object') pairCache = pairCache.ptr;
  if (constraintSolver && typeof constraintSolver === 'object') constraintSolver = constraintSolver.ptr;
  if (collisionConfiguration && typeof collisionConfiguration === 'object') collisionConfiguration = collisionConfiguration.ptr;
  this.ptr = _emscripten_bind_ccDiscreteDynamicsWorld_ccDiscreteDynamicsWorld_4(dispatcher, pairCache, constraintSolver, collisionConfiguration);
  getCache(ccDiscreteDynamicsWorld)[this.ptr] = this;
};;
ccDiscreteDynamicsWorld.prototype = Object.create(btDiscreteDynamicsWorld.prototype);
ccDiscreteDynamicsWorld.prototype.constructor = ccDiscreteDynamicsWorld;
ccDiscreteDynamicsWorld.prototype.__class__ = ccDiscreteDynamicsWorld;
ccDiscreteDynamicsWorld.__cache__ = {};
Module['ccDiscreteDynamicsWorld'] = ccDiscreteDynamicsWorld;

ccDiscreteDynamicsWorld.prototype['setAllowSleep'] = ccDiscreteDynamicsWorld.prototype.setAllowSleep = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_setAllowSleep_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['setDeactivationTime'] = ccDiscreteDynamicsWorld.prototype.setDeactivationTime = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_setDeactivationTime_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['setNarrowPhaseMethod'] = ccDiscreteDynamicsWorld.prototype.setNarrowPhaseMethod = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_setNarrowPhaseMethod_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['setAllowCcdPenetration'] = ccDiscreteDynamicsWorld.prototype.setAllowCcdPenetration = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_setAllowCcdPenetration_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['setCcdCastCheckResponse'] = ccDiscreteDynamicsWorld.prototype.setCcdCastCheckResponse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_setCcdCastCheckResponse_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['getCcdTriggerRecorder'] = ccDiscreteDynamicsWorld.prototype.getCcdTriggerRecorder = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccDiscreteDynamicsWorld_getCcdTriggerRecorder_0(self), btIntArray);
};;

ccDiscreteDynamicsWorld.prototype['rayTest'] = ccDiscreteDynamicsWorld.prototype.rayTest = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromWorld, rayToWorld, resultCallback) {
  var self = this.ptr;
  if (rayFromWorld && typeof rayFromWorld === 'object') rayFromWorld = rayFromWorld.ptr;
  if (rayToWorld && typeof rayToWorld === 'object') rayToWorld = rayToWorld.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_rayTest_3(self, rayFromWorld, rayToWorld, resultCallback);
};;

ccDiscreteDynamicsWorld.prototype['rayTestSingle'] = ccDiscreteDynamicsWorld.prototype.rayTestSingle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback) {
  var self = this.ptr;
  if (rayFromTrans && typeof rayFromTrans === 'object') rayFromTrans = rayFromTrans.ptr;
  if (rayToTrans && typeof rayToTrans === 'object') rayToTrans = rayToTrans.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (colObjWorldTransform && typeof colObjWorldTransform === 'object') colObjWorldTransform = colObjWorldTransform.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_rayTestSingle_6(self, rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback);
};;

ccDiscreteDynamicsWorld.prototype['addCollisionObject'] = ccDiscreteDynamicsWorld.prototype.addCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject, collisionFilterGroup, collisionFilterMask) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionFilterGroup && typeof collisionFilterGroup === 'object') collisionFilterGroup = collisionFilterGroup.ptr;
  if (collisionFilterMask && typeof collisionFilterMask === 'object') collisionFilterMask = collisionFilterMask.ptr;
  if (collisionFilterGroup === undefined) { _emscripten_bind_ccDiscreteDynamicsWorld_addCollisionObject_1(self, collisionObject);  return }
  if (collisionFilterMask === undefined) { _emscripten_bind_ccDiscreteDynamicsWorld_addCollisionObject_2(self, collisionObject, collisionFilterGroup);  return }
  _emscripten_bind_ccDiscreteDynamicsWorld_addCollisionObject_3(self, collisionObject, collisionFilterGroup, collisionFilterMask);
};;

ccDiscreteDynamicsWorld.prototype['removeCollisionObject'] = ccDiscreteDynamicsWorld.prototype.removeCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_removeCollisionObject_1(self, collisionObject);
};;

ccDiscreteDynamicsWorld.prototype['setContactBreakingThreshold'] = ccDiscreteDynamicsWorld.prototype.setContactBreakingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(b) {
  var self = this.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_setContactBreakingThreshold_1(self, b);
};;

ccDiscreteDynamicsWorld.prototype['setGravity'] = ccDiscreteDynamicsWorld.prototype.setGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(gravity) {
  var self = this.ptr;
  if (gravity && typeof gravity === 'object') gravity = gravity.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_setGravity_1(self, gravity);
};;

ccDiscreteDynamicsWorld.prototype['getGravity'] = ccDiscreteDynamicsWorld.prototype.getGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccDiscreteDynamicsWorld_getGravity_0(self), btVector3);
};;

ccDiscreteDynamicsWorld.prototype['addRigidBody'] = ccDiscreteDynamicsWorld.prototype.addRigidBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function(body, group, mask) {
  var self = this.ptr;
  if (body && typeof body === 'object') body = body.ptr;
  if (group && typeof group === 'object') group = group.ptr;
  if (mask && typeof mask === 'object') mask = mask.ptr;
  if (group === undefined) { _emscripten_bind_ccDiscreteDynamicsWorld_addRigidBody_1(self, body);  return }
  if (mask === undefined) { _emscripten_bind_ccDiscreteDynamicsWorld_addRigidBody_2(self, body, group);  return }
  _emscripten_bind_ccDiscreteDynamicsWorld_addRigidBody_3(self, body, group, mask);
};;

ccDiscreteDynamicsWorld.prototype['removeRigidBody'] = ccDiscreteDynamicsWorld.prototype.removeRigidBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function(body) {
  var self = this.ptr;
  if (body && typeof body === 'object') body = body.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_removeRigidBody_1(self, body);
};;

ccDiscreteDynamicsWorld.prototype['addConstraint'] = ccDiscreteDynamicsWorld.prototype.addConstraint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(constraint, disableCollisionsBetweenLinkedBodies) {
  var self = this.ptr;
  if (constraint && typeof constraint === 'object') constraint = constraint.ptr;
  if (disableCollisionsBetweenLinkedBodies && typeof disableCollisionsBetweenLinkedBodies === 'object') disableCollisionsBetweenLinkedBodies = disableCollisionsBetweenLinkedBodies.ptr;
  if (disableCollisionsBetweenLinkedBodies === undefined) { _emscripten_bind_ccDiscreteDynamicsWorld_addConstraint_1(self, constraint);  return }
  _emscripten_bind_ccDiscreteDynamicsWorld_addConstraint_2(self, constraint, disableCollisionsBetweenLinkedBodies);
};;

ccDiscreteDynamicsWorld.prototype['removeConstraint'] = ccDiscreteDynamicsWorld.prototype.removeConstraint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(constraint) {
  var self = this.ptr;
  if (constraint && typeof constraint === 'object') constraint = constraint.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_removeConstraint_1(self, constraint);
};;

ccDiscreteDynamicsWorld.prototype['stepSimulation'] = ccDiscreteDynamicsWorld.prototype.stepSimulation = /** @suppress {undefinedVars, duplicate} @this{Object} */function(timeStep, maxSubSteps, fixedTimeStep) {
  var self = this.ptr;
  if (timeStep && typeof timeStep === 'object') timeStep = timeStep.ptr;
  if (maxSubSteps && typeof maxSubSteps === 'object') maxSubSteps = maxSubSteps.ptr;
  if (fixedTimeStep && typeof fixedTimeStep === 'object') fixedTimeStep = fixedTimeStep.ptr;
  if (maxSubSteps === undefined) { return _emscripten_bind_ccDiscreteDynamicsWorld_stepSimulation_1(self, timeStep) }
  if (fixedTimeStep === undefined) { return _emscripten_bind_ccDiscreteDynamicsWorld_stepSimulation_2(self, timeStep, maxSubSteps) }
  return _emscripten_bind_ccDiscreteDynamicsWorld_stepSimulation_3(self, timeStep, maxSubSteps, fixedTimeStep);
};;

ccDiscreteDynamicsWorld.prototype['addAction'] = ccDiscreteDynamicsWorld.prototype.addAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_addAction_1(self, action);
};;

ccDiscreteDynamicsWorld.prototype['removeAction'] = ccDiscreteDynamicsWorld.prototype.removeAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld_removeAction_1(self, action);
};;

ccDiscreteDynamicsWorld.prototype['getFixedBody'] = ccDiscreteDynamicsWorld.prototype.getFixedBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_emscripten_bind_ccDiscreteDynamicsWorld_getFixedBody_0(self), btRigidBody);
};;

  ccDiscreteDynamicsWorld.prototype['__destroy__'] = ccDiscreteDynamicsWorld.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_ccDiscreteDynamicsWorld___destroy___0(self);
};
// btActionInterface
/** @suppress {undefinedVars, duplicate} @this{Object} */function btActionInterface() { throw "cannot construct a btActionInterface, no constructor in IDL" }
btActionInterface.prototype = Object.create(WrapperObject.prototype);
btActionInterface.prototype.constructor = btActionInterface;
btActionInterface.prototype.__class__ = btActionInterface;
btActionInterface.__cache__ = {};
Module['btActionInterface'] = btActionInterface;

btActionInterface.prototype['updateAction'] = btActionInterface.prototype.updateAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionWorld, deltaTimeStep) {
  var self = this.ptr;
  if (collisionWorld && typeof collisionWorld === 'object') collisionWorld = collisionWorld.ptr;
  if (deltaTimeStep && typeof deltaTimeStep === 'object') deltaTimeStep = deltaTimeStep.ptr;
  _emscripten_bind_btActionInterface_updateAction_2(self, collisionWorld, deltaTimeStep);
};;

  btActionInterface.prototype['__destroy__'] = btActionInterface.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _emscripten_bind_btActionInterface___destroy___0(self);
};
(function() {
  function setupEnums() {
    

    // PHY_ScalarType

    Module['PHY_FLOAT'] = _emscripten_enum_PHY_ScalarType_PHY_FLOAT();

    Module['PHY_DOUBLE'] = _emscripten_enum_PHY_ScalarType_PHY_DOUBLE();

    Module['PHY_INTEGER'] = _emscripten_enum_PHY_ScalarType_PHY_INTEGER();

    Module['PHY_SHORT'] = _emscripten_enum_PHY_ScalarType_PHY_SHORT();

    Module['PHY_FIXEDPOINT88'] = _emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88();

    Module['PHY_UCHAR'] = _emscripten_enum_PHY_ScalarType_PHY_UCHAR();

    

    // btConstraintParams

    Module['BT_CONSTRAINT_ERP'] = _emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP();

    Module['BT_CONSTRAINT_STOP_ERP'] = _emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP();

    Module['BT_CONSTRAINT_CFM'] = _emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM();

    Module['BT_CONSTRAINT_STOP_CFM'] = _emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM();

  }
  if (runtimeInitialized) setupEnums();
  else addOnInit(setupEnums);
})();
