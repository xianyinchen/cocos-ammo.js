
  // This is ammo.js, a port of Bullet Physics to JavaScript. zlib licensed.
  
var Ammo = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Ammo) {
  Ammo = Ammo || {};

/**
 * @license
 * Copyright 2010 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Ammo !== 'undefined' ? Ammo : {};

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise(function(resolve, reject) {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_main')) {
        Object.defineProperty(Module['ready'], '_main', { configurable: true, get: function() { abort('You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_main', { configurable: true, set: function() { abort('You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_malloc')) {
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, get: function() { abort('You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_malloc', { configurable: true, set: function() { abort('You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_free')) {
        Object.defineProperty(Module['ready'], '_free', { configurable: true, get: function() { abort('You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_free', { configurable: true, set: function() { abort('You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___data_end')) {
        Object.defineProperty(Module['ready'], '___data_end', { configurable: true, get: function() { abort('You are getting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___data_end', { configurable: true, set: function() { abort('You are setting ___data_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___wasm_call_ctors')) {
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, get: function() { abort('You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___wasm_call_ctors', { configurable: true, set: function() { abort('You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '___errno_location')) {
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, get: function() { abort('You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '___errno_location', { configurable: true, set: function() { abort('You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '__ZSt18uncaught_exceptionv')) {
        Object.defineProperty(Module['ready'], '__ZSt18uncaught_exceptionv', { configurable: true, get: function() { abort('You are getting __ZSt18uncaught_exceptionv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '__ZSt18uncaught_exceptionv', { configurable: true, set: function() { abort('You are setting __ZSt18uncaught_exceptionv on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], '_setThrew')) {
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, get: function() { abort('You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], '_setThrew', { configurable: true, set: function() { abort('You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

      if (!Object.getOwnPropertyDescriptor(Module['ready'], 'onRuntimeInitialized')) {
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, get: function() { abort('You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
        Object.defineProperty(Module['ready'], 'onRuntimeInitialized', { configurable: true, set: function() { abort('You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js') } });
      }
    

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
// {{PRE_JSES}}

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = function(status, toThrow) {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === 'object';
ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof process.versions === 'object' && typeof process.versions.node === 'string';
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)');
}



// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary,
    setWindowTitle;


// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window === 'object' || typeof importScripts === 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

  read_ = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };




  }

  setWindowTitle = function(title) { document.title = title };
} else
{
  throw new Error('environment detection error');
}


// Set up the out() and err() hooks, which are how we can print to stdout or
// stderr, respectively.
var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.warn.bind(console);

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.
if (Module['arguments']) arguments_ = Module['arguments'];if (!Object.getOwnPropertyDescriptor(Module, 'arguments')) Object.defineProperty(Module, 'arguments', { configurable: true, get: function() { abort('Module.arguments has been replaced with plain arguments_') } });
if (Module['thisProgram']) thisProgram = Module['thisProgram'];if (!Object.getOwnPropertyDescriptor(Module, 'thisProgram')) Object.defineProperty(Module, 'thisProgram', { configurable: true, get: function() { abort('Module.thisProgram has been replaced with plain thisProgram') } });
if (Module['quit']) quit_ = Module['quit'];if (!Object.getOwnPropertyDescriptor(Module, 'quit')) Object.defineProperty(Module, 'quit', { configurable: true, get: function() { abort('Module.quit has been replaced with plain quit_') } });

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] === 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] === 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] === 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] === 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] === 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] === 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] === 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] === 'undefined', 'Module.setWindowTitle option was removed (modify setWindowTitle in JS)');
assert(typeof Module['TOTAL_MEMORY'] === 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
if (!Object.getOwnPropertyDescriptor(Module, 'read')) Object.defineProperty(Module, 'read', { configurable: true, get: function() { abort('Module.read has been replaced with plain read_') } });
if (!Object.getOwnPropertyDescriptor(Module, 'readAsync')) Object.defineProperty(Module, 'readAsync', { configurable: true, get: function() { abort('Module.readAsync has been replaced with plain readAsync') } });
if (!Object.getOwnPropertyDescriptor(Module, 'readBinary')) Object.defineProperty(Module, 'readBinary', { configurable: true, get: function() { abort('Module.readBinary has been replaced with plain readBinary') } });
if (!Object.getOwnPropertyDescriptor(Module, 'setWindowTitle')) Object.defineProperty(Module, 'setWindowTitle', { configurable: true, get: function() { abort('Module.setWindowTitle has been replaced with plain setWindowTitle') } });
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';




/**
 * @license
 * Copyright 2017 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;

// stack management, and other functionality that is provided by the compiled code,
// should not be used before it is ready

/** @suppress{duplicate} */
var stackSave;
/** @suppress{duplicate} */
var stackRestore;
/** @suppress{duplicate} */
var stackAlloc;

stackSave = stackRestore = stackAlloc = function() {
  abort('cannot use the stack before compiled code is ready to run, and has provided stack access');
};

function staticAlloc(size) {
  abort('staticAlloc is no longer available at runtime; instead, perform static allocations at compile time (using makeStaticAlloc)');
}

function dynamicAlloc(size) {
  assert(DYNAMICTOP_PTR);
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  assert(end <= HEAP8.length, 'failure to dynamicAlloc - memory growth etc. is not supported there, call malloc/sbrk directly');
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  return Math.ceil(size / factor) * factor;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = Number(type.substr(1));
        assert(bits % 8 === 0, 'getNativeTypeSize invalid bits ' + bits + ', type ' + type);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    err(text);
  }
}





/**
 * @license
 * Copyright 2020 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */


// Wraps a JS function as a wasm function with a given signature.
function convertJsFunctionToWasm(func, sig) {

  // If the type reflection proposal is available, use the new
  // "WebAssembly.Function" constructor.
  // Otherwise, construct a minimal wasm module importing the JS function and
  // re-exporting it.
  if (typeof WebAssembly.Function === "function") {
    var typeNames = {
      'i': 'i32',
      'j': 'i64',
      'f': 'f32',
      'd': 'f64'
    };
    var type = {
      parameters: [],
      results: sig[0] == 'v' ? [] : [typeNames[sig[0]]]
    };
    for (var i = 1; i < sig.length; ++i) {
      type.parameters.push(typeNames[sig[i]]);
    }
    return new WebAssembly.Function(type, func);
  }

  // The module is static, with the exception of the type section, which is
  // generated based on the signature passed in.
  var typeSection = [
    0x01, // id: section,
    0x00, // length: 0 (placeholder)
    0x01, // count: 1
    0x60, // form: func
  ];
  var sigRet = sig.slice(0, 1);
  var sigParam = sig.slice(1);
  var typeCodes = {
    'i': 0x7f, // i32
    'j': 0x7e, // i64
    'f': 0x7d, // f32
    'd': 0x7c, // f64
  };

  // Parameters, length + signatures
  typeSection.push(sigParam.length);
  for (var i = 0; i < sigParam.length; ++i) {
    typeSection.push(typeCodes[sigParam[i]]);
  }

  // Return values, length + signatures
  // With no multi-return in MVP, either 0 (void) or 1 (anything else)
  if (sigRet == 'v') {
    typeSection.push(0x00);
  } else {
    typeSection = typeSection.concat([0x01, typeCodes[sigRet]]);
  }

  // Write the overall length of the type section back into the section header
  // (excepting the 2 bytes for the section id and length)
  typeSection[1] = typeSection.length - 2;

  // Rest of the module is static
  var bytes = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, // magic ("\0asm")
    0x01, 0x00, 0x00, 0x00, // version: 1
  ].concat(typeSection, [
    0x02, 0x07, // import section
      // (import "e" "f" (func 0 (type 0)))
      0x01, 0x01, 0x65, 0x01, 0x66, 0x00, 0x00,
    0x07, 0x05, // export section
      // (export "f" (func 0 (type 0)))
      0x01, 0x01, 0x66, 0x00, 0x00,
  ]));

   // We can compile this wasm module synchronously because it is very small.
  // This accepts an import (at "e.f"), that it reroutes to an export (at "f")
  var module = new WebAssembly.Module(bytes);
  var instance = new WebAssembly.Instance(module, {
    'e': {
      'f': func
    }
  });
  var wrappedFunc = instance.exports['f'];
  return wrappedFunc;
}

var freeTableIndexes = [];

// Weak map of functions in the table to their indexes, created on first use.
var functionsInTableMap;

// Add a wasm function to the table.
function addFunctionWasm(func, sig) {
  var table = wasmTable;

  // Check if the function is already in the table, to ensure each function
  // gets a unique index. First, create the map if this is the first use.
  if (!functionsInTableMap) {
    functionsInTableMap = new WeakMap();
    for (var i = 0; i < table.length; i++) {
      var item = table.get(i);
      // Ignore null values.
      if (item) {
        functionsInTableMap.set(item, i);
      }
    }
  }
  if (functionsInTableMap.has(func)) {
    return functionsInTableMap.get(func);
  }

  // It's not in the table, add it now.


  var ret;
  // Reuse a free index if there is one, otherwise grow.
  if (freeTableIndexes.length) {
    ret = freeTableIndexes.pop();
  } else {
    ret = table.length;
    // Grow the table
    try {
      table.grow(1);
    } catch (err) {
      if (!(err instanceof RangeError)) {
        throw err;
      }
      throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
    }
  }

  // Set the new value.
  try {
    // Attempting to call this with JS function will cause of table.set() to fail
    table.set(ret, func);
  } catch (err) {
    if (!(err instanceof TypeError)) {
      throw err;
    }
    assert(typeof sig !== 'undefined', 'Missing signature argument to addFunction');
    var wrapped = convertJsFunctionToWasm(func, sig);
    table.set(ret, wrapped);
  }

  functionsInTableMap.set(func, ret);

  return ret;
}

function removeFunctionWasm(index) {
  functionsInTableMap.delete(wasmTable.get(index));
  freeTableIndexes.push(index);
}

// 'sig' parameter is required for the llvm backend but only when func is not
// already a WebAssembly function.
function addFunction(func, sig) {
  assert(typeof func !== 'undefined');

  return addFunctionWasm(func, sig);
}

function removeFunction(index) {
  removeFunctionWasm(index);
}



var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}


/**
 * @license
 * Copyright 2020 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */




function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

/** @param {Array=} args */
function dynCall(sig, ptr, args) {
  if (args && args.length) {
    // j (64-bit integer) must be passed in as two numbers [low 32, high 32].
    assert(args.length === sig.substring(1).replace(/j/g, '--').length);
    assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    assert(sig.length == 1);
    assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
    return Module['dynCall_' + sig].call(null, ptr);
  }
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
  tempRet0 = value;
};

var getTempRet0 = function() {
  return tempRet0;
};

function getCompilerSetting(name) {
  throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for getCompilerSetting or emscripten_get_compiler_setting to work';
}

// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 1024;



/**
 * @license
 * Copyright 2010 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html


var wasmBinary;if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];if (!Object.getOwnPropertyDescriptor(Module, 'wasmBinary')) Object.defineProperty(Module, 'wasmBinary', { configurable: true, get: function() { abort('Module.wasmBinary has been replaced with plain wasmBinary') } });
var noExitRuntime;if (Module['noExitRuntime']) noExitRuntime = Module['noExitRuntime'];if (!Object.getOwnPropertyDescriptor(Module, 'noExitRuntime')) Object.defineProperty(Module, 'noExitRuntime', { configurable: true, get: function() { abort('Module.noExitRuntime has been replaced with plain noExitRuntime') } });


if (typeof WebAssembly !== 'object') {
  abort('No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.');
}


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// In MINIMAL_RUNTIME, setValue() and getValue() are only available when building with safe heap enabled, for heap safety checking.
// In traditional runtime, setValue() and getValue() are always available (although their use is highly discouraged due to perf penalties)

/** @param {number} ptr
    @param {number} value
    @param {string} type
    @param {number|boolean=} noSafe */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? ((Math_min((+(Math_floor((tempDouble)/4294967296.0))), 4294967295.0))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @param {number} ptr
    @param {string} type
    @param {number|boolean=} noSafe */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}






// Wasm globals

var wasmMemory;

// In fastcomp asm.js, we don't need a wasm Table at all.
// In the wasm backend, we polyfill the WebAssembly object,
// so this creates a (non-native-wasm) table for us.
var wasmTable = new WebAssembly.Table({
  'initial': 685,
  'maximum': 685 + 20,
  'element': 'anyfunc'
});


//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

// C calling interface.
/** @param {string|null=} returnType
    @param {Array=} argTypes
    @param {Arguments|Array=} args
    @param {Object=} opts */
function ccall(ident, returnType, argTypes, args, opts) {
  // For fast lookup of conversion functions
  var toC = {
    'string': function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    },
    'array': function(arr) {
      var ret = stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    }
  };

  function convertReturnValue(ret) {
    if (returnType === 'string') return UTF8ToString(ret);
    if (returnType === 'boolean') return Boolean(ret);
    return ret;
  }

  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  assert(returnType !== 'array', 'Return type should not be "array".');
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);

  ret = convertReturnValue(ret);
  if (stack !== 0) stackRestore(stack);
  return ret;
}

/** @param {string=} returnType
    @param {Array=} argTypes
    @param {Object=} opts */
function cwrap(ident, returnType, argTypes, opts) {
  return function() {
    return ccall(ident, returnType, argTypes, arguments, opts);
  }
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_DYNAMIC = 2; // Cannot be freed except through sbrk
var ALLOC_NONE = 3; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc,
    stackAlloc,
    dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// runtime_strings.js: Strings related runtime functions that are part of both MINIMAL_RUNTIME and regular runtime.

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;

/**
 * @param {number} idx
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ArrayToString(heap, idx, maxBytesToRead) {
  var endIdx = idx + maxBytesToRead;
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  // (As a tiny code save trick, compare endPtr against endIdx using a negation, so that undefined means Infinity)
  while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;

  if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(heap.subarray(idx, endPtr));
  } else {
    var str = '';
    // If building with TextDecoder, we have already computed the string length above, so test loop end condition against that
    while (idx < endPtr) {
      // For UTF8 byte structure, see:
      // http://en.wikipedia.org/wiki/UTF-8#Description
      // https://www.ietf.org/rfc/rfc2279.txt
      // https://tools.ietf.org/html/rfc3629
      var u0 = heap[idx++];
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      var u1 = heap[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      var u2 = heap[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte 0x' + u0.toString(16) + ' encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!');
        u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heap[idx++] & 63);
      }

      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
  return str;
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns a
// copy of that string as a Javascript String object.
// maxBytesToRead: an optional length that specifies the maximum number of bytes to read. You can omit
//                 this parameter to scan the string until the first \0 byte. If maxBytesToRead is
//                 passed, and the string at [ptr, ptr+maxBytesToReadr[ contains a null byte in the
//                 middle, then the string will cut short at that byte index (i.e. maxBytesToRead will
//                 not produce a string of exact length [ptr, ptr+maxBytesToRead[)
//                 N.B. mixing frequent uses of UTF8ToString() with and without maxBytesToRead may
//                 throw JS JIT optimizations off, so it is worth to consider consistently using one
//                 style or the other.
/**
 * @param {number} ptr
 * @param {number=} maxBytesToRead
 * @return {string}
 */
function UTF8ToString(ptr, maxBytesToRead) {
  return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   heap: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array.
//                    This count should include the null terminator,
//                    i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) {
      var u1 = str.charCodeAt(++i);
      u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
    }
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      heap[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      heap[outIdx++] = 0xC0 | (u >> 6);
      heap[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      heap[outIdx++] = 0xE0 | (u >> 12);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 3 >= endIdx) break;
      if (u >= 0x200000) warnOnce('Invalid Unicode code point 0x' + u.toString(16) + ' encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).');
      heap[outIdx++] = 0xF0 | (u >> 18);
      heap[outIdx++] = 0x80 | ((u >> 12) & 63);
      heap[outIdx++] = 0x80 | ((u >> 6) & 63);
      heap[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  heap[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.
function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) ++len;
    else if (u <= 0x7FF) len += 2;
    else if (u <= 0xFFFF) len += 3;
    else len += 4;
  }
  return len;
}



/**
 * @license
 * Copyright 2020 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// runtime_strings_extra.js: Strings related runtime functions that are available only in regular runtime.

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAPU8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  var maxIdx = idx + maxBytesToRead / 2;
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(idx >= maxIdx) && HEAPU16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0 || i == maxBytesToRead / 2) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr, maxBytesToRead) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  // If maxBytesToRead is not passed explicitly, it will be undefined, and this
  // will always evaluate to true. This saves on code size.
  while (!(i >= maxBytesToRead / 4)) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0) break;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
  return str;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Allocate stack space for a JS string, and write it there.
function allocateUTF8OnStack(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = stackAlloc(size);
  stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated
    @param {boolean=} dontAddNull */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}

/** @param {boolean=} dontAddNull */
function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}



// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBufferAndViews(buf) {
  buffer = buf;
  Module['HEAP8'] = HEAP8 = new Int8Array(buf);
  Module['HEAP16'] = HEAP16 = new Int16Array(buf);
  Module['HEAP32'] = HEAP32 = new Int32Array(buf);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buf);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buf);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buf);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buf);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buf);
}

var STATIC_BASE = 1024,
    STACK_BASE = 5268608,
    STACKTOP = STACK_BASE,
    STACK_MAX = 25728,
    DYNAMIC_BASE = 5268608,
    DYNAMICTOP_PTR = 25568;

assert(STACK_BASE % 16 === 0, 'stack must start aligned');
assert(DYNAMIC_BASE % 16 === 0, 'heap must start aligned');



var TOTAL_STACK = 5242880;
if (Module['TOTAL_STACK']) assert(TOTAL_STACK === Module['TOTAL_STACK'], 'the stack size can no longer be determined at runtime')

var INITIAL_INITIAL_MEMORY = Module['INITIAL_MEMORY'] || 67108864;if (!Object.getOwnPropertyDescriptor(Module, 'INITIAL_MEMORY')) Object.defineProperty(Module, 'INITIAL_MEMORY', { configurable: true, get: function() { abort('Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY') } });

assert(INITIAL_INITIAL_MEMORY >= TOTAL_STACK, 'INITIAL_MEMORY should be larger than TOTAL_STACK, was ' + INITIAL_INITIAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined,
       'JS engine does not provide full typed array support');



/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */




// In standalone mode, the wasm creates the memory, and the user can't provide it.
// In non-standalone/normal mode, we create the memory here.

/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// Create the main memory. (Note: this isn't used in STANDALONE_WASM mode since the wasm
// memory is created in the wasm, not in JS.)

  if (Module['wasmMemory']) {
    wasmMemory = Module['wasmMemory'];
  } else
  {
    wasmMemory = new WebAssembly.Memory({
      'initial': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
      ,
      'maximum': INITIAL_INITIAL_MEMORY / WASM_PAGE_SIZE
    });
  }


if (wasmMemory) {
  buffer = wasmMemory.buffer;
}

// If the user provides an incorrect length, just use that length instead rather than providing the user to
// specifically provide the memory length with Module['INITIAL_MEMORY'].
INITIAL_INITIAL_MEMORY = buffer.byteLength;
assert(INITIAL_INITIAL_MEMORY % WASM_PAGE_SIZE === 0);
updateGlobalBufferAndViews(buffer);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;




/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  // The stack grows downwards
  HEAPU32[(STACK_MAX >> 2)+1] = 0x2135467;
  HEAPU32[(STACK_MAX >> 2)+2] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  // We don't do this with ASan because ASan does its own checks for this.
  HEAP32[0] = 0x63736d65; /* 'emsc' */
}

function checkStackCookie() {
  var cookie1 = HEAPU32[(STACK_MAX >> 2)+1];
  var cookie2 = HEAPU32[(STACK_MAX >> 2)+2];
  if (cookie1 != 0x2135467 || cookie2 != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x' + cookie2.toString(16) + ' ' + cookie1.toString(16));
  }
  // Also test the global address 0 for integrity.
  // We don't do this with ASan because ASan does its own checks for this.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - stackSave() + allocSize) + ' bytes available!');
}




/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// Endianness check (note: assumes compiler arch was little-endian)
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';
})();

function abortFnPtrError(ptr, sig) {
	abort("Invalid function pointer " + ptr + " called with signature '" + sig + "'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this). Build with ASSERTIONS=2 for more info.");
}



function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback(Module); // Pass the module as the first argument.
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {

  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  checkStackCookie();
  assert(!runtimeInitialized);
  runtimeInitialized = true;
  
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

/** @param {number|boolean=} ignore */
function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
/** @param {number|boolean=} ignore */
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


/**
 * @license
 * Copyright 2019 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;



// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err('dependency: ' + dep);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data


/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what += '';
  out(what);
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  var output = 'abort(' + what + ') at ' + stackTrace();
  what = output;

  // Throw a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  throw new WebAssembly.RuntimeError(what);
}


var memoryInitializer = null;


/**
 * @license
 * Copyright 2015 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */




// show errors on likely calls to FS when it was not included
var FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;



/**
 * @license
 * Copyright 2017 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

function hasPrefix(str, prefix) {
  return String.prototype.startsWith ?
      str.startsWith(prefix) :
      str.indexOf(prefix) === 0;
}

// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return hasPrefix(filename, dataURIPrefix);
}

var fileURIPrefix = "file://";

// Indicates whether filename is delivered via file protocol (as opposed to http/https)
function isFileURI(filename) {
  return hasPrefix(filename, fileURIPrefix);
}



var wasmBinaryFile = 'ammo.wasm.wasm';
if (!isDataURI(wasmBinaryFile)) {
  wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary() {
  try {
    if (wasmBinary) {
      return new Uint8Array(wasmBinary);
    }

    if (readBinary) {
      return readBinary(wasmBinaryFile);
    } else {
      throw "both async and sync fetching of the wasm failed";
    }
  }
  catch (err) {
    abort(err);
  }
}

function getBinaryPromise() {
  // If we don't have the binary yet, and have the Fetch api, use that;
  // in some environments, like Electron's render process, Fetch api may be present, but have a different context than expected, let's only use it on the Web
  if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === 'function'
      ) {
    return fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function(response) {
      if (!response['ok']) {
        throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
      }
      return response['arrayBuffer']();
    }).catch(function () {
      return getBinary();
    });
  }
  // Otherwise, getBinary should be able to get it synchronously
  return new Promise(function(resolve, reject) {
    resolve(getBinary());
  });
}



// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': asmLibraryArg,
    'wasi_snapshot_preview1': asmLibraryArg
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    var exports = instance.exports;
    Module['asm'] = exports;
    removeRunDependency('wasm-instantiate');
  }
  // we can't run yet (except in a pthread, where we have a custom sync instantiator)
  addRunDependency('wasm-instantiate');


  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiatedSource(output) {
    // 'output' is a WebAssemblyInstantiatedSource object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above USE_PTHREADS-enabled path.
    receiveInstance(output['instance']);
  }


  function instantiateArrayBuffer(receiver) {
    return getBinaryPromise().then(function(binary) {
      return WebAssembly.instantiate(binary, info);
    }).then(receiver, function(reason) {
      err('failed to asynchronously prepare wasm: ' + reason);
      abort(reason);
    });
  }

  // Prefer streaming instantiation if available.
  function instantiateAsync() {
    if (!wasmBinary &&
        typeof WebAssembly.instantiateStreaming === 'function' &&
        !isDataURI(wasmBinaryFile) &&
        typeof fetch === 'function') {
      fetch(wasmBinaryFile, { credentials: 'same-origin' }).then(function (response) {
        var result = WebAssembly.instantiateStreaming(response, info);
        return result.then(receiveInstantiatedSource, function(reason) {
            // We expect the most common failure cause to be a bad MIME type for the binary,
            // in which case falling back to ArrayBuffer instantiation should work.
            err('wasm streaming compile failed: ' + reason);
            err('falling back to ArrayBuffer instantiation');
            instantiateArrayBuffer(receiveInstantiatedSource);
          });
      });
    } else {
      return instantiateArrayBuffer(receiveInstantiatedSource);
    }
  }
  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to run the instantiation parallel
  // to any other async startup actions they are performing.
  if (Module['instantiateWasm']) {
    try {
      var exports = Module['instantiateWasm'](info, receiveInstance);
      return exports;
    } catch(e) {
      err('Module.instantiateWasm callback failed with error: ' + e);
      return false;
    }
  }

  instantiateAsync();
  return {}; // no exports yet; we'll fill them in later
}


// Globals used by JS i64 conversions
var tempDouble;
var tempI64;

// === Body ===

var ASM_CONSTS = {
  
};
function array_bounds_check_error(idx,size){ throw 'Array index ' + idx + ' out of bounds: [0,' + size + ')'; }



// STATICTOP = STATIC_BASE + 24704;
/* global initializers */  __ATINIT__.push({ func: function() { ___wasm_call_ctors() } });




/* no memory initializer */
// {{PRE_LIBRARY}}


  function demangle(func) {
      warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
      return func;
    }

  function demangleAll(text) {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    }

  function jsStackTrace() {
      var err = new Error();
      if (!err.stack) {
        // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
        // so try that as a special-case.
        try {
          throw new Error();
        } catch(e) {
          err = e;
        }
        if (!err.stack) {
          return '(no stack trace available)';
        }
      }
      return err.stack.toString();
    }

  function stackTrace() {
      var js = jsStackTrace();
      if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
      return demangleAll(js);
    }

  
  function _atexit(func, arg) {
      warnOnce('atexit() called, but EXIT_RUNTIME is not set, so atexits() will not be called. set EXIT_RUNTIME to 1 (see the FAQ)');
      __ATEXIT__.unshift({ func: func, arg: arg });
    }function ___cxa_atexit(a0,a1
  ) {
  return _atexit(a0,a1);
  }

  function ___handle_stack_overflow() {
      abort('stack overflow')
    }

  function _abort() {
      abort();
    }

  function _emscripten_get_sbrk_ptr() {
      return 25568;
    }

  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.copyWithin(dest, src, src + num);
    }

  
  function _emscripten_get_heap_size() {
      return HEAPU8.length;
    }
  
  function abortOnCannotGrowMemory(requestedSize) {
      abort('Cannot enlarge memory arrays to size ' + requestedSize + ' bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value ' + HEAP8.length + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
    }function _emscripten_resize_heap(requestedSize) {
      requestedSize = requestedSize >>> 0;
      abortOnCannotGrowMemory(requestedSize);
    }

  function _gettimeofday(ptr) {
      var now = Date.now();
      HEAP32[((ptr)>>2)]=(now/1000)|0; // seconds
      HEAP32[(((ptr)+(4))>>2)]=((now % 1000)*1000)|0; // microseconds
      return 0;
    }
var ASSERTIONS = true;

/**
 * @license
 * Copyright 2017 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}


var asmGlobalArg = {};
var asmLibraryArg = { "__cxa_atexit": ___cxa_atexit, "__handle_stack_overflow": ___handle_stack_overflow, "abort": _abort, "array_bounds_check_error": array_bounds_check_error, "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr, "emscripten_memcpy_big": _emscripten_memcpy_big, "emscripten_resize_heap": _emscripten_resize_heap, "gettimeofday": _gettimeofday, "memory": wasmMemory, "table": wasmTable };
var asm = createWasm();
Module["asm"] = asm;
/** @type {function(...*):?} */
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["__wasm_call_ctors"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_setLocalScaling_1 = Module["_btCollisionShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_getLocalScaling_0 = Module["_btCollisionShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_calculateLocalInertia_2 = Module["_btCollisionShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_setMargin_1 = Module["_btCollisionShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_getMargin_0 = Module["_btCollisionShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_isCompound_0 = Module["_btCollisionShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_getUserIndex_0 = Module["_btCollisionShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_setUserIndex_1 = Module["_btCollisionShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_getUserIndex2_0 = Module["_btCollisionShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_setUserIndex2_1 = Module["_btCollisionShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_getAabb_3 = Module["_btCollisionShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape_getLocalBoundingSphere_0 = Module["_btCollisionShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionShape___destroy___0 = Module["_btCollisionShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld_rayTest_3 = Module["_btCollisionWorld_rayTest_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld_rayTest_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld_rayTestSingle_6 = Module["_btCollisionWorld_rayTestSingle_6"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld_rayTestSingle_6"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld_getPairCache_0 = Module["_btCollisionWorld_getPairCache_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld_getPairCache_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld_addCollisionObject_1 = Module["_btCollisionWorld_addCollisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld_addCollisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld_addCollisionObject_2 = Module["_btCollisionWorld_addCollisionObject_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld_addCollisionObject_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld_addCollisionObject_3 = Module["_btCollisionWorld_addCollisionObject_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld_addCollisionObject_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld_removeCollisionObject_1 = Module["_btCollisionWorld_removeCollisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld_removeCollisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld_setContactBreakingThreshold_1 = Module["_btCollisionWorld_setContactBreakingThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld_setContactBreakingThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionWorld___destroy___0 = Module["_btCollisionWorld___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionWorld___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_setLocalScaling_1 = Module["_btConvexShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_getLocalScaling_0 = Module["_btConvexShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_calculateLocalInertia_2 = Module["_btConvexShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_setMargin_1 = Module["_btConvexShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_getMargin_0 = Module["_btConvexShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_isCompound_0 = Module["_btConvexShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_getUserIndex_0 = Module["_btConvexShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_setUserIndex_1 = Module["_btConvexShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_getUserIndex2_0 = Module["_btConvexShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_setUserIndex2_1 = Module["_btConvexShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_getAabb_3 = Module["_btConvexShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape_getLocalBoundingSphere_0 = Module["_btConvexShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexShape___destroy___0 = Module["_btConvexShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_addAction_1 = Module["_btDynamicsWorld_addAction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_addAction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_removeAction_1 = Module["_btDynamicsWorld_removeAction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_removeAction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_getSolverInfo_0 = Module["_btDynamicsWorld_getSolverInfo_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_getSolverInfo_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_getFixedBody_0 = Module["_btDynamicsWorld_getFixedBody_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_getFixedBody_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_rayTest_3 = Module["_btDynamicsWorld_rayTest_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_rayTest_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_rayTestSingle_6 = Module["_btDynamicsWorld_rayTestSingle_6"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_rayTestSingle_6"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_getPairCache_0 = Module["_btDynamicsWorld_getPairCache_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_getPairCache_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_addCollisionObject_1 = Module["_btDynamicsWorld_addCollisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_addCollisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_addCollisionObject_2 = Module["_btDynamicsWorld_addCollisionObject_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_addCollisionObject_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_addCollisionObject_3 = Module["_btDynamicsWorld_addCollisionObject_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_addCollisionObject_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_removeCollisionObject_1 = Module["_btDynamicsWorld_removeCollisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_removeCollisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld_setContactBreakingThreshold_1 = Module["_btDynamicsWorld_setContactBreakingThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld_setContactBreakingThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDynamicsWorld___destroy___0 = Module["_btDynamicsWorld___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDynamicsWorld___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_hasHit_0 = Module["_RayResultCallback_hasHit_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_hasHit_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_get_m_collisionFilterGroup_0 = Module["_RayResultCallback_get_m_collisionFilterGroup_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_get_m_collisionFilterGroup_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_set_m_collisionFilterGroup_1 = Module["_RayResultCallback_set_m_collisionFilterGroup_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_set_m_collisionFilterGroup_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_get_m_collisionFilterMask_0 = Module["_RayResultCallback_get_m_collisionFilterMask_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_get_m_collisionFilterMask_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_set_m_collisionFilterMask_1 = Module["_RayResultCallback_set_m_collisionFilterMask_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_set_m_collisionFilterMask_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_get_m_closestHitFraction_0 = Module["_RayResultCallback_get_m_closestHitFraction_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_get_m_closestHitFraction_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_set_m_closestHitFraction_1 = Module["_RayResultCallback_set_m_closestHitFraction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_set_m_closestHitFraction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_get_m_collisionObject_0 = Module["_RayResultCallback_get_m_collisionObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_get_m_collisionObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback_set_m_collisionObject_1 = Module["_RayResultCallback_set_m_collisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback_set_m_collisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _RayResultCallback___destroy___0 = Module["_RayResultCallback___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["RayResultCallback___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_setLocalScaling_1 = Module["_btConcaveShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_getLocalScaling_0 = Module["_btConcaveShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_calculateLocalInertia_2 = Module["_btConcaveShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_isCompound_0 = Module["_btConcaveShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_getUserIndex_0 = Module["_btConcaveShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_setUserIndex_1 = Module["_btConcaveShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_getUserIndex2_0 = Module["_btConcaveShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_setUserIndex2_1 = Module["_btConcaveShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_getAabb_3 = Module["_btConcaveShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape_getLocalBoundingSphere_0 = Module["_btConcaveShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConcaveShape___destroy___0 = Module["_btConcaveShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConcaveShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStridingMeshInterface_setScaling_1 = Module["_btStridingMeshInterface_setScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStridingMeshInterface_setScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStridingMeshInterface___destroy___0 = Module["_btStridingMeshInterface___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStridingMeshInterface___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBroadphaseInterface_getOverlappingPairCache_0 = Module["_btBroadphaseInterface_getOverlappingPairCache_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBroadphaseInterface_getOverlappingPairCache_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBroadphaseInterface___destroy___0 = Module["_btBroadphaseInterface___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBroadphaseInterface___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_btCollisionObject_0 = Module["_btCollisionObject_btCollisionObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_btCollisionObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_getCollisionShape_0 = Module["_btCollisionObject_getCollisionShape_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_getCollisionShape_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_getActivationState_0 = Module["_btCollisionObject_getActivationState_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_getActivationState_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setActivationState_1 = Module["_btCollisionObject_setActivationState_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setActivationState_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_forceActivationState_1 = Module["_btCollisionObject_forceActivationState_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_forceActivationState_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_activate_0 = Module["_btCollisionObject_activate_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_activate_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_activate_1 = Module["_btCollisionObject_activate_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_activate_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_isActive_0 = Module["_btCollisionObject_isActive_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_isActive_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_isKinematicObject_0 = Module["_btCollisionObject_isKinematicObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_isKinematicObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_isStaticObject_0 = Module["_btCollisionObject_isStaticObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_isStaticObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_isStaticOrKinematicObject_0 = Module["_btCollisionObject_isStaticOrKinematicObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_isStaticOrKinematicObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setRestitution_1 = Module["_btCollisionObject_setRestitution_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setRestitution_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setFriction_1 = Module["_btCollisionObject_setFriction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setFriction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setRollingFriction_1 = Module["_btCollisionObject_setRollingFriction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setRollingFriction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setSpinningFriction_1 = Module["_btCollisionObject_setSpinningFriction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setSpinningFriction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_getWorldTransform_0 = Module["_btCollisionObject_getWorldTransform_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_getWorldTransform_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_getCollisionFlags_0 = Module["_btCollisionObject_getCollisionFlags_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_getCollisionFlags_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setCollisionFlags_1 = Module["_btCollisionObject_setCollisionFlags_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setCollisionFlags_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setWorldTransform_1 = Module["_btCollisionObject_setWorldTransform_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setWorldTransform_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setCollisionShape_1 = Module["_btCollisionObject_setCollisionShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setCollisionShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setCcdMotionThreshold_1 = Module["_btCollisionObject_setCcdMotionThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setCcdMotionThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setCcdSweptSphereRadius_1 = Module["_btCollisionObject_setCcdSweptSphereRadius_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setCcdSweptSphereRadius_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_getUserIndex_0 = Module["_btCollisionObject_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setUserIndex_1 = Module["_btCollisionObject_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setUserIndex2_1 = Module["_btCollisionObject_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject_setIgnoreCollisionCheck_2 = Module["_btCollisionObject_setIgnoreCollisionCheck_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject_setIgnoreCollisionCheck_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionObject___destroy___0 = Module["_btCollisionObject___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionObject___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4 = Module["_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_setGravity_1 = Module["_btDiscreteDynamicsWorld_setGravity_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_setGravity_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_getGravity_0 = Module["_btDiscreteDynamicsWorld_getGravity_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_getGravity_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_addRigidBody_1 = Module["_btDiscreteDynamicsWorld_addRigidBody_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_addRigidBody_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_addRigidBody_3 = Module["_btDiscreteDynamicsWorld_addRigidBody_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_addRigidBody_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_removeRigidBody_1 = Module["_btDiscreteDynamicsWorld_removeRigidBody_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_removeRigidBody_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_addConstraint_1 = Module["_btDiscreteDynamicsWorld_addConstraint_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_addConstraint_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_addConstraint_2 = Module["_btDiscreteDynamicsWorld_addConstraint_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_addConstraint_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_removeConstraint_1 = Module["_btDiscreteDynamicsWorld_removeConstraint_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_removeConstraint_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_stepSimulation_1 = Module["_btDiscreteDynamicsWorld_stepSimulation_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_stepSimulation_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_stepSimulation_2 = Module["_btDiscreteDynamicsWorld_stepSimulation_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_stepSimulation_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_stepSimulation_3 = Module["_btDiscreteDynamicsWorld_stepSimulation_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_stepSimulation_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_rayTest_3 = Module["_btDiscreteDynamicsWorld_rayTest_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_rayTest_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_rayTestSingle_6 = Module["_btDiscreteDynamicsWorld_rayTestSingle_6"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_rayTestSingle_6"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_getPairCache_0 = Module["_btDiscreteDynamicsWorld_getPairCache_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_getPairCache_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_addCollisionObject_1 = Module["_btDiscreteDynamicsWorld_addCollisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_addCollisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_addCollisionObject_2 = Module["_btDiscreteDynamicsWorld_addCollisionObject_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_addCollisionObject_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_addCollisionObject_3 = Module["_btDiscreteDynamicsWorld_addCollisionObject_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_addCollisionObject_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_removeCollisionObject_1 = Module["_btDiscreteDynamicsWorld_removeCollisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_removeCollisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_setContactBreakingThreshold_1 = Module["_btDiscreteDynamicsWorld_setContactBreakingThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_setContactBreakingThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_addAction_1 = Module["_btDiscreteDynamicsWorld_addAction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_addAction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_removeAction_1 = Module["_btDiscreteDynamicsWorld_removeAction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_removeAction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_getSolverInfo_0 = Module["_btDiscreteDynamicsWorld_getSolverInfo_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_getSolverInfo_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld_getFixedBody_0 = Module["_btDiscreteDynamicsWorld_getFixedBody_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld_getFixedBody_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDiscreteDynamicsWorld___destroy___0 = Module["_btDiscreteDynamicsWorld___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDiscreteDynamicsWorld___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btMotionState_getWorldTransform_1 = Module["_btMotionState_getWorldTransform_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btMotionState_getWorldTransform_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btMotionState_setWorldTransform_1 = Module["_btMotionState_setWorldTransform_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btMotionState_setWorldTransform_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btMotionState___destroy___0 = Module["_btMotionState___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btMotionState___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_getImplicitShapeDimensions_0 = Module["_btConvexInternalShape_getImplicitShapeDimensions_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_getImplicitShapeDimensions_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_setLocalScaling_1 = Module["_btConvexInternalShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_getLocalScaling_0 = Module["_btConvexInternalShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_calculateLocalInertia_2 = Module["_btConvexInternalShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_setMargin_1 = Module["_btConvexInternalShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_getMargin_0 = Module["_btConvexInternalShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_isCompound_0 = Module["_btConvexInternalShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_getUserIndex_0 = Module["_btConvexInternalShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_setUserIndex_1 = Module["_btConvexInternalShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_getUserIndex2_0 = Module["_btConvexInternalShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_setUserIndex2_1 = Module["_btConvexInternalShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_getAabb_3 = Module["_btConvexInternalShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape_getLocalBoundingSphere_0 = Module["_btConvexInternalShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexInternalShape___destroy___0 = Module["_btConvexInternalShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexInternalShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_AllHitsRayResultCallback_2 = Module["_AllHitsRayResultCallback_AllHitsRayResultCallback_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_AllHitsRayResultCallback_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_hasHit_0 = Module["_AllHitsRayResultCallback_hasHit_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_hasHit_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_collisionObjects_0 = Module["_AllHitsRayResultCallback_get_m_collisionObjects_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_collisionObjects_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_collisionObjects_1 = Module["_AllHitsRayResultCallback_set_m_collisionObjects_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_collisionObjects_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_rayFromWorld_0 = Module["_AllHitsRayResultCallback_get_m_rayFromWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_rayFromWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_rayFromWorld_1 = Module["_AllHitsRayResultCallback_set_m_rayFromWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_rayFromWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_rayToWorld_0 = Module["_AllHitsRayResultCallback_get_m_rayToWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_rayToWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_rayToWorld_1 = Module["_AllHitsRayResultCallback_set_m_rayToWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_rayToWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_hitNormalWorld_0 = Module["_AllHitsRayResultCallback_get_m_hitNormalWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_hitNormalWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_hitNormalWorld_1 = Module["_AllHitsRayResultCallback_set_m_hitNormalWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_hitNormalWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_hitPointWorld_0 = Module["_AllHitsRayResultCallback_get_m_hitPointWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_hitPointWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_hitPointWorld_1 = Module["_AllHitsRayResultCallback_set_m_hitPointWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_hitPointWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_hitFractions_0 = Module["_AllHitsRayResultCallback_get_m_hitFractions_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_hitFractions_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_hitFractions_1 = Module["_AllHitsRayResultCallback_set_m_hitFractions_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_hitFractions_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_collisionFilterGroup_0 = Module["_AllHitsRayResultCallback_get_m_collisionFilterGroup_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_collisionFilterGroup_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_collisionFilterGroup_1 = Module["_AllHitsRayResultCallback_set_m_collisionFilterGroup_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_collisionFilterGroup_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_collisionFilterMask_0 = Module["_AllHitsRayResultCallback_get_m_collisionFilterMask_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_collisionFilterMask_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_collisionFilterMask_1 = Module["_AllHitsRayResultCallback_set_m_collisionFilterMask_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_collisionFilterMask_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_closestHitFraction_0 = Module["_AllHitsRayResultCallback_get_m_closestHitFraction_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_closestHitFraction_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_closestHitFraction_1 = Module["_AllHitsRayResultCallback_set_m_closestHitFraction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_closestHitFraction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_get_m_collisionObject_0 = Module["_AllHitsRayResultCallback_get_m_collisionObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_get_m_collisionObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback_set_m_collisionObject_1 = Module["_AllHitsRayResultCallback_set_m_collisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback_set_m_collisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _AllHitsRayResultCallback___destroy___0 = Module["_AllHitsRayResultCallback___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["AllHitsRayResultCallback___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDispatcher_getNumManifolds_0 = Module["_btDispatcher_getNumManifolds_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDispatcher_getNumManifolds_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDispatcher_getManifoldByIndexInternal_1 = Module["_btDispatcher_getManifoldByIndexInternal_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDispatcher_getManifoldByIndexInternal_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDispatcher___destroy___0 = Module["_btDispatcher___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDispatcher___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_ClosestRayResultCallback_2 = Module["_ClosestRayResultCallback_ClosestRayResultCallback_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_ClosestRayResultCallback_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_hasHit_0 = Module["_ClosestRayResultCallback_hasHit_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_hasHit_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_get_m_rayFromWorld_0 = Module["_ClosestRayResultCallback_get_m_rayFromWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_get_m_rayFromWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_set_m_rayFromWorld_1 = Module["_ClosestRayResultCallback_set_m_rayFromWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_set_m_rayFromWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_get_m_rayToWorld_0 = Module["_ClosestRayResultCallback_get_m_rayToWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_get_m_rayToWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_set_m_rayToWorld_1 = Module["_ClosestRayResultCallback_set_m_rayToWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_set_m_rayToWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_get_m_hitNormalWorld_0 = Module["_ClosestRayResultCallback_get_m_hitNormalWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_get_m_hitNormalWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_set_m_hitNormalWorld_1 = Module["_ClosestRayResultCallback_set_m_hitNormalWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_set_m_hitNormalWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_get_m_hitPointWorld_0 = Module["_ClosestRayResultCallback_get_m_hitPointWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_get_m_hitPointWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_set_m_hitPointWorld_1 = Module["_ClosestRayResultCallback_set_m_hitPointWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_set_m_hitPointWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_get_m_collisionFilterGroup_0 = Module["_ClosestRayResultCallback_get_m_collisionFilterGroup_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_get_m_collisionFilterGroup_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_set_m_collisionFilterGroup_1 = Module["_ClosestRayResultCallback_set_m_collisionFilterGroup_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_set_m_collisionFilterGroup_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_get_m_collisionFilterMask_0 = Module["_ClosestRayResultCallback_get_m_collisionFilterMask_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_get_m_collisionFilterMask_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_set_m_collisionFilterMask_1 = Module["_ClosestRayResultCallback_set_m_collisionFilterMask_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_set_m_collisionFilterMask_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_get_m_closestHitFraction_0 = Module["_ClosestRayResultCallback_get_m_closestHitFraction_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_get_m_closestHitFraction_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_set_m_closestHitFraction_1 = Module["_ClosestRayResultCallback_set_m_closestHitFraction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_set_m_closestHitFraction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_get_m_collisionObject_0 = Module["_ClosestRayResultCallback_get_m_collisionObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_get_m_collisionObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback_set_m_collisionObject_1 = Module["_ClosestRayResultCallback_set_m_collisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback_set_m_collisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ClosestRayResultCallback___destroy___0 = Module["_ClosestRayResultCallback___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ClosestRayResultCallback___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_setLocalScaling_1 = Module["_btTriangleMeshShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_getLocalScaling_0 = Module["_btTriangleMeshShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_calculateLocalInertia_2 = Module["_btTriangleMeshShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_isCompound_0 = Module["_btTriangleMeshShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_getUserIndex_0 = Module["_btTriangleMeshShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_setUserIndex_1 = Module["_btTriangleMeshShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_getUserIndex2_0 = Module["_btTriangleMeshShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_setUserIndex2_1 = Module["_btTriangleMeshShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_getAabb_3 = Module["_btTriangleMeshShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape_getLocalBoundingSphere_0 = Module["_btTriangleMeshShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMeshShape___destroy___0 = Module["_btTriangleMeshShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMeshShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btOverlapFilterCallback___destroy___0 = Module["_btOverlapFilterCallback___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btOverlapFilterCallback___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord_x_0 = Module["_btQuadWord_x_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord_x_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord_y_0 = Module["_btQuadWord_y_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord_y_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord_z_0 = Module["_btQuadWord_z_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord_z_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord_w_0 = Module["_btQuadWord_w_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord_w_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord_setX_1 = Module["_btQuadWord_setX_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord_setX_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord_setY_1 = Module["_btQuadWord_setY_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord_setY_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord_setZ_1 = Module["_btQuadWord_setZ_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord_setZ_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord_setW_1 = Module["_btQuadWord_setW_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord_setW_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuadWord___destroy___0 = Module["_btQuadWord___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuadWord___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTypedConstraint_enableFeedback_1 = Module["_btTypedConstraint_enableFeedback_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTypedConstraint_enableFeedback_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTypedConstraint_getBreakingImpulseThreshold_0 = Module["_btTypedConstraint_getBreakingImpulseThreshold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTypedConstraint_getBreakingImpulseThreshold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTypedConstraint_setBreakingImpulseThreshold_1 = Module["_btTypedConstraint_setBreakingImpulseThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTypedConstraint_setBreakingImpulseThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTypedConstraint_getParam_2 = Module["_btTypedConstraint_getParam_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTypedConstraint_getParam_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTypedConstraint_setParam_3 = Module["_btTypedConstraint_setParam_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTypedConstraint_setParam_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTypedConstraint___destroy___0 = Module["_btTypedConstraint___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTypedConstraint___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btMatrix3x3_getRotation_1 = Module["_btMatrix3x3_getRotation_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btMatrix3x3_getRotation_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btMatrix3x3___destroy___0 = Module["_btMatrix3x3___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btMatrix3x3___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btScalarArray_size_0 = Module["_btScalarArray_size_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btScalarArray_size_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btScalarArray_at_1 = Module["_btScalarArray_at_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btScalarArray_at_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btScalarArray_clear_0 = Module["_btScalarArray_clear_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btScalarArray_clear_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btScalarArray___destroy___0 = Module["_btScalarArray___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btScalarArray___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_btBvhTriangleMeshShape_2 = Module["_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_btBvhTriangleMeshShape_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_btBvhTriangleMeshShape_3 = Module["_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_btBvhTriangleMeshShape_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_setLocalScaling_1 = Module["_btBvhTriangleMeshShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_getLocalScaling_0 = Module["_btBvhTriangleMeshShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_calculateLocalInertia_2 = Module["_btBvhTriangleMeshShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_isCompound_0 = Module["_btBvhTriangleMeshShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_getUserIndex_0 = Module["_btBvhTriangleMeshShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_setUserIndex_1 = Module["_btBvhTriangleMeshShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_getUserIndex2_0 = Module["_btBvhTriangleMeshShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_setUserIndex2_1 = Module["_btBvhTriangleMeshShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_getAabb_3 = Module["_btBvhTriangleMeshShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape_getLocalBoundingSphere_0 = Module["_btBvhTriangleMeshShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBvhTriangleMeshShape___destroy___0 = Module["_btBvhTriangleMeshShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBvhTriangleMeshShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDbvtBroadphase_btDbvtBroadphase_0 = Module["_btDbvtBroadphase_btDbvtBroadphase_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDbvtBroadphase_btDbvtBroadphase_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDbvtBroadphase_getOverlappingPairCache_0 = Module["_btDbvtBroadphase_getOverlappingPairCache_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDbvtBroadphase_getOverlappingPairCache_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDbvtBroadphase___destroy___0 = Module["_btDbvtBroadphase___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDbvtBroadphase___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIntArray_size_0 = Module["_btIntArray_size_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIntArray_size_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIntArray_at_1 = Module["_btIntArray_at_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIntArray_at_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIntArray_clear_0 = Module["_btIntArray_clear_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIntArray_clear_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIntArray___destroy___0 = Module["_btIntArray___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIntArray___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_ccAllHitsRayResultCallback_2 = Module["_ccAllHitsRayResultCallback_ccAllHitsRayResultCallback_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_ccAllHitsRayResultCallback_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_setQueryTrigger_1 = Module["_ccAllHitsRayResultCallback_setQueryTrigger_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_setQueryTrigger_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_hasHit_0 = Module["_ccAllHitsRayResultCallback_hasHit_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_hasHit_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_shapeParts_0 = Module["_ccAllHitsRayResultCallback_get_m_shapeParts_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_shapeParts_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_shapeParts_1 = Module["_ccAllHitsRayResultCallback_set_m_shapeParts_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_shapeParts_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_collisionObjects_0 = Module["_ccAllHitsRayResultCallback_get_m_collisionObjects_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_collisionObjects_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_collisionObjects_1 = Module["_ccAllHitsRayResultCallback_set_m_collisionObjects_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_collisionObjects_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_rayFromWorld_0 = Module["_ccAllHitsRayResultCallback_get_m_rayFromWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_rayFromWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_rayFromWorld_1 = Module["_ccAllHitsRayResultCallback_set_m_rayFromWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_rayFromWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_rayToWorld_0 = Module["_ccAllHitsRayResultCallback_get_m_rayToWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_rayToWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_rayToWorld_1 = Module["_ccAllHitsRayResultCallback_set_m_rayToWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_rayToWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_hitNormalWorld_0 = Module["_ccAllHitsRayResultCallback_get_m_hitNormalWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_hitNormalWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_hitNormalWorld_1 = Module["_ccAllHitsRayResultCallback_set_m_hitNormalWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_hitNormalWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_hitPointWorld_0 = Module["_ccAllHitsRayResultCallback_get_m_hitPointWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_hitPointWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_hitPointWorld_1 = Module["_ccAllHitsRayResultCallback_set_m_hitPointWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_hitPointWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_hitFractions_0 = Module["_ccAllHitsRayResultCallback_get_m_hitFractions_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_hitFractions_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_hitFractions_1 = Module["_ccAllHitsRayResultCallback_set_m_hitFractions_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_hitFractions_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_collisionFilterGroup_0 = Module["_ccAllHitsRayResultCallback_get_m_collisionFilterGroup_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_collisionFilterGroup_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_collisionFilterGroup_1 = Module["_ccAllHitsRayResultCallback_set_m_collisionFilterGroup_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_collisionFilterGroup_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_collisionFilterMask_0 = Module["_ccAllHitsRayResultCallback_get_m_collisionFilterMask_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_collisionFilterMask_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_collisionFilterMask_1 = Module["_ccAllHitsRayResultCallback_set_m_collisionFilterMask_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_collisionFilterMask_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_closestHitFraction_0 = Module["_ccAllHitsRayResultCallback_get_m_closestHitFraction_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_closestHitFraction_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_closestHitFraction_1 = Module["_ccAllHitsRayResultCallback_set_m_closestHitFraction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_closestHitFraction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_get_m_collisionObject_0 = Module["_ccAllHitsRayResultCallback_get_m_collisionObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_get_m_collisionObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback_set_m_collisionObject_1 = Module["_ccAllHitsRayResultCallback_set_m_collisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback_set_m_collisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccAllHitsRayResultCallback___destroy___0 = Module["_ccAllHitsRayResultCallback___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccAllHitsRayResultCallback___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstCollisionObjectArray_size_0 = Module["_btConstCollisionObjectArray_size_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstCollisionObjectArray_size_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstCollisionObjectArray_at_1 = Module["_btConstCollisionObjectArray_at_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstCollisionObjectArray_at_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstCollisionObjectArray_clear_0 = Module["_btConstCollisionObjectArray_clear_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstCollisionObjectArray_clear_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstCollisionObjectArray___destroy___0 = Module["_btConstCollisionObjectArray___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstCollisionObjectArray___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBroadphaseProxy_get_m_collisionFilterGroup_0 = Module["_btBroadphaseProxy_get_m_collisionFilterGroup_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBroadphaseProxy_get_m_collisionFilterGroup_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBroadphaseProxy_set_m_collisionFilterGroup_1 = Module["_btBroadphaseProxy_set_m_collisionFilterGroup_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBroadphaseProxy_set_m_collisionFilterGroup_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBroadphaseProxy_get_m_collisionFilterMask_0 = Module["_btBroadphaseProxy_get_m_collisionFilterMask_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBroadphaseProxy_get_m_collisionFilterMask_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBroadphaseProxy_set_m_collisionFilterMask_1 = Module["_btBroadphaseProxy_set_m_collisionFilterMask_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBroadphaseProxy_set_m_collisionFilterMask_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBroadphaseProxy___destroy___0 = Module["_btBroadphaseProxy___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBroadphaseProxy___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIndexedMesh_get_m_numTriangles_0 = Module["_btIndexedMesh_get_m_numTriangles_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIndexedMesh_get_m_numTriangles_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIndexedMesh_set_m_numTriangles_1 = Module["_btIndexedMesh_set_m_numTriangles_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIndexedMesh_set_m_numTriangles_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIndexedMesh___destroy___0 = Module["_btIndexedMesh___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIndexedMesh___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3 = Module["_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4 = Module["_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_get_m_linearDamping_0 = Module["_btRigidBodyConstructionInfo_get_m_linearDamping_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_get_m_linearDamping_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_set_m_linearDamping_1 = Module["_btRigidBodyConstructionInfo_set_m_linearDamping_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_set_m_linearDamping_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_get_m_angularDamping_0 = Module["_btRigidBodyConstructionInfo_get_m_angularDamping_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_get_m_angularDamping_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_set_m_angularDamping_1 = Module["_btRigidBodyConstructionInfo_set_m_angularDamping_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_set_m_angularDamping_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_get_m_friction_0 = Module["_btRigidBodyConstructionInfo_get_m_friction_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_get_m_friction_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_set_m_friction_1 = Module["_btRigidBodyConstructionInfo_set_m_friction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_set_m_friction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_get_m_rollingFriction_0 = Module["_btRigidBodyConstructionInfo_get_m_rollingFriction_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_get_m_rollingFriction_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_set_m_rollingFriction_1 = Module["_btRigidBodyConstructionInfo_set_m_rollingFriction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_set_m_rollingFriction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_get_m_restitution_0 = Module["_btRigidBodyConstructionInfo_get_m_restitution_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_get_m_restitution_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_set_m_restitution_1 = Module["_btRigidBodyConstructionInfo_set_m_restitution_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_set_m_restitution_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0 = Module["_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1 = Module["_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0 = Module["_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1 = Module["_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBodyConstructionInfo___destroy___0 = Module["_btRigidBodyConstructionInfo___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBodyConstructionInfo___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_getAppliedImpulse_0 = Module["_btManifoldPoint_getAppliedImpulse_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_getAppliedImpulse_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_getDistance_0 = Module["_btManifoldPoint_getDistance_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_getDistance_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_getShape0_0 = Module["_btManifoldPoint_getShape0_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_getShape0_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_getShape1_0 = Module["_btManifoldPoint_getShape1_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_getShape1_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_localPointA_0 = Module["_btManifoldPoint_get_m_localPointA_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_localPointA_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_localPointA_1 = Module["_btManifoldPoint_set_m_localPointA_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_localPointA_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_localPointB_0 = Module["_btManifoldPoint_get_m_localPointB_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_localPointB_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_localPointB_1 = Module["_btManifoldPoint_set_m_localPointB_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_localPointB_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_positionWorldOnA_0 = Module["_btManifoldPoint_get_m_positionWorldOnA_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_positionWorldOnA_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_positionWorldOnA_1 = Module["_btManifoldPoint_set_m_positionWorldOnA_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_positionWorldOnA_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_positionWorldOnB_0 = Module["_btManifoldPoint_get_m_positionWorldOnB_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_positionWorldOnB_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_positionWorldOnB_1 = Module["_btManifoldPoint_set_m_positionWorldOnB_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_positionWorldOnB_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_normalWorldOnB_0 = Module["_btManifoldPoint_get_m_normalWorldOnB_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_normalWorldOnB_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_normalWorldOnB_1 = Module["_btManifoldPoint_set_m_normalWorldOnB_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_normalWorldOnB_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_distance1_0 = Module["_btManifoldPoint_get_m_distance1_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_distance1_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_distance1_1 = Module["_btManifoldPoint_set_m_distance1_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_distance1_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_index0_0 = Module["_btManifoldPoint_get_m_index0_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_index0_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_index0_1 = Module["_btManifoldPoint_set_m_index0_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_index0_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_index1_0 = Module["_btManifoldPoint_get_m_index1_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_index1_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_index1_1 = Module["_btManifoldPoint_set_m_index1_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_index1_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_userPersistentData_0 = Module["_btManifoldPoint_get_m_userPersistentData_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_userPersistentData_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_userPersistentData_1 = Module["_btManifoldPoint_set_m_userPersistentData_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_userPersistentData_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_userPersistentData0_0 = Module["_btManifoldPoint_get_m_userPersistentData0_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_userPersistentData0_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_userPersistentData0_1 = Module["_btManifoldPoint_set_m_userPersistentData0_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_userPersistentData0_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_get_m_userPersistentData1_0 = Module["_btManifoldPoint_get_m_userPersistentData1_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_get_m_userPersistentData1_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint_set_m_userPersistentData1_1 = Module["_btManifoldPoint_set_m_userPersistentData1_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint_set_m_userPersistentData1_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btManifoldPoint___destroy___0 = Module["_btManifoldPoint___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btManifoldPoint___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0 = Module["_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSequentialImpulseConstraintSolver___destroy___0 = Module["_btSequentialImpulseConstraintSolver___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSequentialImpulseConstraintSolver___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_btPoint2PointConstraint_2 = Module["_btPoint2PointConstraint_btPoint2PointConstraint_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_btPoint2PointConstraint_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_btPoint2PointConstraint_4 = Module["_btPoint2PointConstraint_btPoint2PointConstraint_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_btPoint2PointConstraint_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_setPivotA_1 = Module["_btPoint2PointConstraint_setPivotA_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_setPivotA_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_setPivotB_1 = Module["_btPoint2PointConstraint_setPivotB_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_setPivotB_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_getPivotInA_0 = Module["_btPoint2PointConstraint_getPivotInA_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_getPivotInA_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_getPivotInB_0 = Module["_btPoint2PointConstraint_getPivotInB_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_getPivotInB_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_enableFeedback_1 = Module["_btPoint2PointConstraint_enableFeedback_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_enableFeedback_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_getBreakingImpulseThreshold_0 = Module["_btPoint2PointConstraint_getBreakingImpulseThreshold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_getBreakingImpulseThreshold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_setBreakingImpulseThreshold_1 = Module["_btPoint2PointConstraint_setBreakingImpulseThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_setBreakingImpulseThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_getParam_2 = Module["_btPoint2PointConstraint_getParam_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_getParam_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_setParam_3 = Module["_btPoint2PointConstraint_setParam_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_setParam_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_get_m_setting_0 = Module["_btPoint2PointConstraint_get_m_setting_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_get_m_setting_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint_set_m_setting_1 = Module["_btPoint2PointConstraint_set_m_setting_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint_set_m_setting_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPoint2PointConstraint___destroy___0 = Module["_btPoint2PointConstraint___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPoint2PointConstraint___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccOverlapFilterCallback_ccOverlapFilterCallback_0 = Module["_ccOverlapFilterCallback_ccOverlapFilterCallback_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccOverlapFilterCallback_ccOverlapFilterCallback_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccOverlapFilterCallback___destroy___0 = Module["_ccOverlapFilterCallback___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccOverlapFilterCallback___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_btConvexTriangleMeshShape_1 = Module["_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_btConvexTriangleMeshShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_btConvexTriangleMeshShape_2 = Module["_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_btConvexTriangleMeshShape_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_setLocalScaling_1 = Module["_btConvexTriangleMeshShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_getLocalScaling_0 = Module["_btConvexTriangleMeshShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_calculateLocalInertia_2 = Module["_btConvexTriangleMeshShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_setMargin_1 = Module["_btConvexTriangleMeshShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_getMargin_0 = Module["_btConvexTriangleMeshShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_isCompound_0 = Module["_btConvexTriangleMeshShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_getUserIndex_0 = Module["_btConvexTriangleMeshShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_setUserIndex_1 = Module["_btConvexTriangleMeshShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_getUserIndex2_0 = Module["_btConvexTriangleMeshShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_setUserIndex2_1 = Module["_btConvexTriangleMeshShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_getAabb_3 = Module["_btConvexTriangleMeshShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape_getLocalBoundingSphere_0 = Module["_btConvexTriangleMeshShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConvexTriangleMeshShape___destroy___0 = Module["_btConvexTriangleMeshShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConvexTriangleMeshShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_ccClosestRayResultCallback_2 = Module["_ccClosestRayResultCallback_ccClosestRayResultCallback_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_ccClosestRayResultCallback_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_setQueryTrigger_1 = Module["_ccClosestRayResultCallback_setQueryTrigger_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_setQueryTrigger_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_hasHit_0 = Module["_ccClosestRayResultCallback_hasHit_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_hasHit_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_shapePart_0 = Module["_ccClosestRayResultCallback_get_m_shapePart_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_shapePart_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_shapePart_1 = Module["_ccClosestRayResultCallback_set_m_shapePart_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_shapePart_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_rayFromWorld_0 = Module["_ccClosestRayResultCallback_get_m_rayFromWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_rayFromWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_rayFromWorld_1 = Module["_ccClosestRayResultCallback_set_m_rayFromWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_rayFromWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_rayToWorld_0 = Module["_ccClosestRayResultCallback_get_m_rayToWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_rayToWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_rayToWorld_1 = Module["_ccClosestRayResultCallback_set_m_rayToWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_rayToWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_hitNormalWorld_0 = Module["_ccClosestRayResultCallback_get_m_hitNormalWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_hitNormalWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_hitNormalWorld_1 = Module["_ccClosestRayResultCallback_set_m_hitNormalWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_hitNormalWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_hitPointWorld_0 = Module["_ccClosestRayResultCallback_get_m_hitPointWorld_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_hitPointWorld_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_hitPointWorld_1 = Module["_ccClosestRayResultCallback_set_m_hitPointWorld_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_hitPointWorld_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_collisionFilterGroup_0 = Module["_ccClosestRayResultCallback_get_m_collisionFilterGroup_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_collisionFilterGroup_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_collisionFilterGroup_1 = Module["_ccClosestRayResultCallback_set_m_collisionFilterGroup_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_collisionFilterGroup_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_collisionFilterMask_0 = Module["_ccClosestRayResultCallback_get_m_collisionFilterMask_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_collisionFilterMask_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_collisionFilterMask_1 = Module["_ccClosestRayResultCallback_set_m_collisionFilterMask_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_collisionFilterMask_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_closestHitFraction_0 = Module["_ccClosestRayResultCallback_get_m_closestHitFraction_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_closestHitFraction_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_closestHitFraction_1 = Module["_ccClosestRayResultCallback_set_m_closestHitFraction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_closestHitFraction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_get_m_collisionObject_0 = Module["_ccClosestRayResultCallback_get_m_collisionObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_get_m_collisionObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback_set_m_collisionObject_1 = Module["_ccClosestRayResultCallback_set_m_collisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback_set_m_collisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccClosestRayResultCallback___destroy___0 = Module["_ccClosestRayResultCallback___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccClosestRayResultCallback___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_btHeightfieldTerrainShape_9 = Module["_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_btHeightfieldTerrainShape_9"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_setMargin_1 = Module["_btHeightfieldTerrainShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_getMargin_0 = Module["_btHeightfieldTerrainShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_setLocalScaling_1 = Module["_btHeightfieldTerrainShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_getLocalScaling_0 = Module["_btHeightfieldTerrainShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_calculateLocalInertia_2 = Module["_btHeightfieldTerrainShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_isCompound_0 = Module["_btHeightfieldTerrainShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_getUserIndex_0 = Module["_btHeightfieldTerrainShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_setUserIndex_1 = Module["_btHeightfieldTerrainShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_getUserIndex2_0 = Module["_btHeightfieldTerrainShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_setUserIndex2_1 = Module["_btHeightfieldTerrainShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_getAabb_3 = Module["_btHeightfieldTerrainShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape_getLocalBoundingSphere_0 = Module["_btHeightfieldTerrainShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHeightfieldTerrainShape___destroy___0 = Module["_btHeightfieldTerrainShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHeightfieldTerrainShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _VoidPtr___destroy___0 = Module["_VoidPtr___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["VoidPtr___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0 = Module["_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1 = Module["_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultCollisionConfiguration___destroy___0 = Module["_btDefaultCollisionConfiguration___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultCollisionConfiguration___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btOverlappingPairCallback___destroy___0 = Module["_btOverlappingPairCallback___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btOverlappingPairCallback___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh_btTriangleMesh_0 = Module["_btTriangleMesh_btTriangleMesh_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh_btTriangleMesh_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh_btTriangleMesh_1 = Module["_btTriangleMesh_btTriangleMesh_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh_btTriangleMesh_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh_btTriangleMesh_2 = Module["_btTriangleMesh_btTriangleMesh_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh_btTriangleMesh_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh_addTriangle_3 = Module["_btTriangleMesh_addTriangle_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh_addTriangle_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh_addTriangle_4 = Module["_btTriangleMesh_addTriangle_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh_addTriangle_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh_addTriangleIndices_3 = Module["_btTriangleMesh_addTriangleIndices_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh_addTriangleIndices_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh_getIndexedMeshArray_0 = Module["_btTriangleMesh_getIndexedMeshArray_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh_getIndexedMeshArray_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh_setScaling_1 = Module["_btTriangleMesh_setScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh_setScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTriangleMesh___destroy___0 = Module["_btTriangleMesh___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTriangleMesh___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionConfiguration___destroy___0 = Module["_btCollisionConfiguration___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionConfiguration___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPersistentManifold_btPersistentManifold_0 = Module["_btPersistentManifold_btPersistentManifold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPersistentManifold_btPersistentManifold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPersistentManifold_getBody0_0 = Module["_btPersistentManifold_getBody0_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPersistentManifold_getBody0_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPersistentManifold_getBody1_0 = Module["_btPersistentManifold_getBody1_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPersistentManifold_getBody1_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPersistentManifold_getNumContacts_0 = Module["_btPersistentManifold_getNumContacts_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPersistentManifold_getNumContacts_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPersistentManifold_getContactPoint_1 = Module["_btPersistentManifold_getContactPoint_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPersistentManifold_getContactPoint_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btPersistentManifold___destroy___0 = Module["_btPersistentManifold___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btPersistentManifold___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_btBoxShape_1 = Module["_btBoxShape_btBoxShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_btBoxShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_setMargin_1 = Module["_btBoxShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_getMargin_0 = Module["_btBoxShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_setUnscaledHalfExtents_1 = Module["_btBoxShape_setUnscaledHalfExtents_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_setUnscaledHalfExtents_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_setLocalScaling_1 = Module["_btBoxShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_getLocalScaling_0 = Module["_btBoxShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_calculateLocalInertia_2 = Module["_btBoxShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_isCompound_0 = Module["_btBoxShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_getUserIndex_0 = Module["_btBoxShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_setUserIndex_1 = Module["_btBoxShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_getUserIndex2_0 = Module["_btBoxShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_setUserIndex2_1 = Module["_btBoxShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_getAabb_3 = Module["_btBoxShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_getLocalBoundingSphere_0 = Module["_btBoxShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape_getImplicitShapeDimensions_0 = Module["_btBoxShape_getImplicitShapeDimensions_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape_getImplicitShapeDimensions_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBoxShape___destroy___0 = Module["_btBoxShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBoxShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_btCapsuleShape_2 = Module["_btCapsuleShape_btCapsuleShape_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_btCapsuleShape_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_setMargin_1 = Module["_btCapsuleShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_getMargin_0 = Module["_btCapsuleShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_updateProp_3 = Module["_btCapsuleShape_updateProp_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_updateProp_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_setLocalScaling_1 = Module["_btCapsuleShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_getLocalScaling_0 = Module["_btCapsuleShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_calculateLocalInertia_2 = Module["_btCapsuleShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_isCompound_0 = Module["_btCapsuleShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_getUserIndex_0 = Module["_btCapsuleShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_setUserIndex_1 = Module["_btCapsuleShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_getUserIndex2_0 = Module["_btCapsuleShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_setUserIndex2_1 = Module["_btCapsuleShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_getAabb_3 = Module["_btCapsuleShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_getLocalBoundingSphere_0 = Module["_btCapsuleShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape_getImplicitShapeDimensions_0 = Module["_btCapsuleShape_getImplicitShapeDimensions_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape_getImplicitShapeDimensions_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCapsuleShape___destroy___0 = Module["_btCapsuleShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCapsuleShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_btCompoundShape_0 = Module["_btCompoundShape_btCompoundShape_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_btCompoundShape_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_btCompoundShape_1 = Module["_btCompoundShape_btCompoundShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_btCompoundShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_addChildShape_2 = Module["_btCompoundShape_addChildShape_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_addChildShape_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_removeChildShape_1 = Module["_btCompoundShape_removeChildShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_removeChildShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_removeChildShapeByIndex_1 = Module["_btCompoundShape_removeChildShapeByIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_removeChildShapeByIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_getNumChildShapes_0 = Module["_btCompoundShape_getNumChildShapes_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_getNumChildShapes_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_getChildShape_1 = Module["_btCompoundShape_getChildShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_getChildShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_updateChildTransform_2 = Module["_btCompoundShape_updateChildTransform_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_updateChildTransform_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_updateChildTransform_3 = Module["_btCompoundShape_updateChildTransform_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_updateChildTransform_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_setMargin_1 = Module["_btCompoundShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_getMargin_0 = Module["_btCompoundShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_setMaterial_3 = Module["_btCompoundShape_setMaterial_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_setMaterial_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_setMaterial_4 = Module["_btCompoundShape_setMaterial_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_setMaterial_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_setMaterial_5 = Module["_btCompoundShape_setMaterial_5"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_setMaterial_5"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_setMaterial_6 = Module["_btCompoundShape_setMaterial_6"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_setMaterial_6"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_setLocalScaling_1 = Module["_btCompoundShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_getLocalScaling_0 = Module["_btCompoundShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_calculateLocalInertia_2 = Module["_btCompoundShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_isCompound_0 = Module["_btCompoundShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_getUserIndex_0 = Module["_btCompoundShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_setUserIndex_1 = Module["_btCompoundShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_getUserIndex2_0 = Module["_btCompoundShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_setUserIndex2_1 = Module["_btCompoundShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_getAabb_3 = Module["_btCompoundShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape_getLocalBoundingSphere_0 = Module["_btCompoundShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCompoundShape___destroy___0 = Module["_btCompoundShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCompoundShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultMotionState_btDefaultMotionState_0 = Module["_btDefaultMotionState_btDefaultMotionState_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultMotionState_btDefaultMotionState_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultMotionState_btDefaultMotionState_1 = Module["_btDefaultMotionState_btDefaultMotionState_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultMotionState_btDefaultMotionState_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultMotionState_btDefaultMotionState_2 = Module["_btDefaultMotionState_btDefaultMotionState_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultMotionState_btDefaultMotionState_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultMotionState_getWorldTransform_1 = Module["_btDefaultMotionState_getWorldTransform_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultMotionState_getWorldTransform_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultMotionState_setWorldTransform_1 = Module["_btDefaultMotionState_setWorldTransform_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultMotionState_setWorldTransform_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultMotionState___destroy___0 = Module["_btDefaultMotionState___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultMotionState___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_btHingeConstraint_4 = Module["_btHingeConstraint_btHingeConstraint_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_btHingeConstraint_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_btHingeConstraint_5 = Module["_btHingeConstraint_btHingeConstraint_5"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_btHingeConstraint_5"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setLimit_4 = Module["_btHingeConstraint_setLimit_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setLimit_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setLimit_5 = Module["_btHingeConstraint_setLimit_5"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setLimit_5"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_enableAngularMotor_3 = Module["_btHingeConstraint_enableAngularMotor_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_enableAngularMotor_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setAngularOnly_1 = Module["_btHingeConstraint_setAngularOnly_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setAngularOnly_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_enableMotor_1 = Module["_btHingeConstraint_enableMotor_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_enableMotor_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setMaxMotorImpulse_1 = Module["_btHingeConstraint_setMaxMotorImpulse_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setMaxMotorImpulse_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setMotorTarget_2 = Module["_btHingeConstraint_setMotorTarget_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setMotorTarget_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setFrames_2 = Module["_btHingeConstraint_setFrames_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setFrames_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setAxis_1 = Module["_btHingeConstraint_setAxis_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setAxis_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setUseReferenceFrameA_1 = Module["_btHingeConstraint_setUseReferenceFrameA_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setUseReferenceFrameA_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_enableFeedback_1 = Module["_btHingeConstraint_enableFeedback_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_enableFeedback_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_getBreakingImpulseThreshold_0 = Module["_btHingeConstraint_getBreakingImpulseThreshold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_getBreakingImpulseThreshold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setBreakingImpulseThreshold_1 = Module["_btHingeConstraint_setBreakingImpulseThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setBreakingImpulseThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_getParam_2 = Module["_btHingeConstraint_getParam_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_getParam_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint_setParam_3 = Module["_btHingeConstraint_setParam_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint_setParam_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btHingeConstraint___destroy___0 = Module["_btHingeConstraint___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btHingeConstraint___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_btQuaternion_4 = Module["_btQuaternion_btQuaternion_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_btQuaternion_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_setValue_4 = Module["_btQuaternion_setValue_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_setValue_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_x_0 = Module["_btQuaternion_x_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_x_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_y_0 = Module["_btQuaternion_y_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_y_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_z_0 = Module["_btQuaternion_z_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_z_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_w_0 = Module["_btQuaternion_w_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_w_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_setX_1 = Module["_btQuaternion_setX_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_setX_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_setY_1 = Module["_btQuaternion_setY_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_setY_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_setZ_1 = Module["_btQuaternion_setZ_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_setZ_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion_setW_1 = Module["_btQuaternion_setW_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion_setW_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btQuaternion___destroy___0 = Module["_btQuaternion___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btQuaternion___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_btConeShape_2 = Module["_btConeShape_btConeShape_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_btConeShape_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_setRadius_1 = Module["_btConeShape_setRadius_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_setRadius_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_setHeight_1 = Module["_btConeShape_setHeight_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_setHeight_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_setConeUpIndex_1 = Module["_btConeShape_setConeUpIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_setConeUpIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_setLocalScaling_1 = Module["_btConeShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_getLocalScaling_0 = Module["_btConeShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_calculateLocalInertia_2 = Module["_btConeShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_isCompound_0 = Module["_btConeShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_getUserIndex_0 = Module["_btConeShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_setUserIndex_1 = Module["_btConeShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_getUserIndex2_0 = Module["_btConeShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_setUserIndex2_1 = Module["_btConeShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_getAabb_3 = Module["_btConeShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_getLocalBoundingSphere_0 = Module["_btConeShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape_getImplicitShapeDimensions_0 = Module["_btConeShape_getImplicitShapeDimensions_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape_getImplicitShapeDimensions_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConeShape___destroy___0 = Module["_btConeShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConeShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_btBU_Simplex1to4_0 = Module["_btBU_Simplex1to4_btBU_Simplex1to4_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_btBU_Simplex1to4_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_addVertex_1 = Module["_btBU_Simplex1to4_addVertex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_addVertex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_setLocalScaling_1 = Module["_btBU_Simplex1to4_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_getLocalScaling_0 = Module["_btBU_Simplex1to4_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_calculateLocalInertia_2 = Module["_btBU_Simplex1to4_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_isCompound_0 = Module["_btBU_Simplex1to4_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_getUserIndex_0 = Module["_btBU_Simplex1to4_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_setUserIndex_1 = Module["_btBU_Simplex1to4_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_getUserIndex2_0 = Module["_btBU_Simplex1to4_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_setUserIndex2_1 = Module["_btBU_Simplex1to4_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_getAabb_3 = Module["_btBU_Simplex1to4_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4_getLocalBoundingSphere_0 = Module["_btBU_Simplex1to4_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btBU_Simplex1to4___destroy___0 = Module["_btBU_Simplex1to4___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btBU_Simplex1to4___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btContactSolverInfo_get_m_splitImpulse_0 = Module["_btContactSolverInfo_get_m_splitImpulse_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btContactSolverInfo_get_m_splitImpulse_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btContactSolverInfo_set_m_splitImpulse_1 = Module["_btContactSolverInfo_set_m_splitImpulse_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btContactSolverInfo_set_m_splitImpulse_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0 = Module["_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1 = Module["_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btContactSolverInfo_get_m_numIterations_0 = Module["_btContactSolverInfo_get_m_numIterations_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btContactSolverInfo_get_m_numIterations_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btContactSolverInfo_set_m_numIterations_1 = Module["_btContactSolverInfo_set_m_numIterations_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btContactSolverInfo_set_m_numIterations_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btContactSolverInfo___destroy___0 = Module["_btContactSolverInfo___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btContactSolverInfo___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_btStaticPlaneShape_2 = Module["_btStaticPlaneShape_btStaticPlaneShape_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_btStaticPlaneShape_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_getPlaneNormal_0 = Module["_btStaticPlaneShape_getPlaneNormal_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_getPlaneNormal_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_setPlaneConstant_1 = Module["_btStaticPlaneShape_setPlaneConstant_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_setPlaneConstant_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_setLocalScaling_1 = Module["_btStaticPlaneShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_getLocalScaling_0 = Module["_btStaticPlaneShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_calculateLocalInertia_2 = Module["_btStaticPlaneShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_isCompound_0 = Module["_btStaticPlaneShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_getUserIndex_0 = Module["_btStaticPlaneShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_setUserIndex_1 = Module["_btStaticPlaneShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_getUserIndex2_0 = Module["_btStaticPlaneShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_setUserIndex2_1 = Module["_btStaticPlaneShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_getAabb_3 = Module["_btStaticPlaneShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape_getLocalBoundingSphere_0 = Module["_btStaticPlaneShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btStaticPlaneShape___destroy___0 = Module["_btStaticPlaneShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btStaticPlaneShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btActionInterface_updateAction_2 = Module["_btActionInterface_updateAction_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btActionInterface_updateAction_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btActionInterface___destroy___0 = Module["_btActionInterface___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btActionInterface___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btOverlappingPairCache_setInternalGhostPairCallback_1 = Module["_btOverlappingPairCache_setInternalGhostPairCallback_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btOverlappingPairCache_setInternalGhostPairCallback_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btOverlappingPairCache_setOverlapFilterCallback_1 = Module["_btOverlappingPairCache_setOverlapFilterCallback_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btOverlappingPairCache_setOverlapFilterCallback_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btOverlappingPairCache_getNumOverlappingPairs_0 = Module["_btOverlappingPairCache_getNumOverlappingPairs_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btOverlappingPairCache_getNumOverlappingPairs_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btOverlappingPairCache___destroy___0 = Module["_btOverlappingPairCache___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btOverlappingPairCache___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_btVector3_0 = Module["_btVector3_btVector3_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_btVector3_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_btVector3_3 = Module["_btVector3_btVector3_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_btVector3_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_x_0 = Module["_btVector3_x_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_x_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_y_0 = Module["_btVector3_y_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_y_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_z_0 = Module["_btVector3_z_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_z_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_setX_1 = Module["_btVector3_setX_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_setX_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_setY_1 = Module["_btVector3_setY_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_setY_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_setZ_1 = Module["_btVector3_setZ_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_setZ_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3_setValue_3 = Module["_btVector3_setValue_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3_setValue_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3___destroy___0 = Module["_btVector3___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_btSphereShape_1 = Module["_btSphereShape_btSphereShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_btSphereShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_setMargin_1 = Module["_btSphereShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_getMargin_0 = Module["_btSphereShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_setUnscaledRadius_1 = Module["_btSphereShape_setUnscaledRadius_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_setUnscaledRadius_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_setLocalScaling_1 = Module["_btSphereShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_getLocalScaling_0 = Module["_btSphereShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_calculateLocalInertia_2 = Module["_btSphereShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_isCompound_0 = Module["_btSphereShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_getUserIndex_0 = Module["_btSphereShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_setUserIndex_1 = Module["_btSphereShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_getUserIndex2_0 = Module["_btSphereShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_setUserIndex2_1 = Module["_btSphereShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_getAabb_3 = Module["_btSphereShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_getLocalBoundingSphere_0 = Module["_btSphereShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape_getImplicitShapeDimensions_0 = Module["_btSphereShape_getImplicitShapeDimensions_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape_getImplicitShapeDimensions_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btSphereShape___destroy___0 = Module["_btSphereShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btSphereShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0 = Module["_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btDefaultCollisionConstructionInfo___destroy___0 = Module["_btDefaultCollisionConstructionInfo___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btDefaultCollisionConstructionInfo___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_btEmptyShape_0 = Module["_btEmptyShape_btEmptyShape_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_btEmptyShape_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_setLocalScaling_1 = Module["_btEmptyShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_getLocalScaling_0 = Module["_btEmptyShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_calculateLocalInertia_2 = Module["_btEmptyShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_isCompound_0 = Module["_btEmptyShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_getUserIndex_0 = Module["_btEmptyShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_setUserIndex_1 = Module["_btEmptyShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_getUserIndex2_0 = Module["_btEmptyShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_setUserIndex2_1 = Module["_btEmptyShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_getAabb_3 = Module["_btEmptyShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape_getLocalBoundingSphere_0 = Module["_btEmptyShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btEmptyShape___destroy___0 = Module["_btEmptyShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btEmptyShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSetting_btConstraintSetting_0 = Module["_btConstraintSetting_btConstraintSetting_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSetting_btConstraintSetting_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSetting_get_m_tau_0 = Module["_btConstraintSetting_get_m_tau_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSetting_get_m_tau_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSetting_set_m_tau_1 = Module["_btConstraintSetting_set_m_tau_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSetting_set_m_tau_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSetting_get_m_damping_0 = Module["_btConstraintSetting_get_m_damping_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSetting_get_m_damping_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSetting_set_m_damping_1 = Module["_btConstraintSetting_set_m_damping_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSetting_set_m_damping_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSetting_get_m_impulseClamp_0 = Module["_btConstraintSetting_get_m_impulseClamp_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSetting_get_m_impulseClamp_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSetting_set_m_impulseClamp_1 = Module["_btConstraintSetting_set_m_impulseClamp_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSetting_set_m_impulseClamp_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSetting___destroy___0 = Module["_btConstraintSetting___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSetting___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _LocalShapeInfo_get_m_shapePart_0 = Module["_LocalShapeInfo_get_m_shapePart_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["LocalShapeInfo_get_m_shapePart_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _LocalShapeInfo_set_m_shapePart_1 = Module["_LocalShapeInfo_set_m_shapePart_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["LocalShapeInfo_set_m_shapePart_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _LocalShapeInfo_get_m_triangleIndex_0 = Module["_LocalShapeInfo_get_m_triangleIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["LocalShapeInfo_get_m_triangleIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _LocalShapeInfo_set_m_triangleIndex_1 = Module["_LocalShapeInfo_set_m_triangleIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["LocalShapeInfo_set_m_triangleIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _LocalShapeInfo___destroy___0 = Module["_LocalShapeInfo___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["LocalShapeInfo___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3Array_size_0 = Module["_btVector3Array_size_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3Array_size_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3Array_at_1 = Module["_btVector3Array_at_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3Array_at_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3Array_clear_0 = Module["_btVector3Array_clear_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3Array_clear_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btVector3Array___destroy___0 = Module["_btVector3Array___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btVector3Array___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintSolver___destroy___0 = Module["_btConstraintSolver___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintSolver___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btFixedConstraint_btFixedConstraint_4 = Module["_btFixedConstraint_btFixedConstraint_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btFixedConstraint_btFixedConstraint_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btFixedConstraint_enableFeedback_1 = Module["_btFixedConstraint_enableFeedback_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btFixedConstraint_enableFeedback_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btFixedConstraint_getBreakingImpulseThreshold_0 = Module["_btFixedConstraint_getBreakingImpulseThreshold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btFixedConstraint_getBreakingImpulseThreshold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btFixedConstraint_setBreakingImpulseThreshold_1 = Module["_btFixedConstraint_setBreakingImpulseThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btFixedConstraint_setBreakingImpulseThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btFixedConstraint_getParam_2 = Module["_btFixedConstraint_getParam_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btFixedConstraint_getParam_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btFixedConstraint_setParam_3 = Module["_btFixedConstraint_setParam_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btFixedConstraint_setParam_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btFixedConstraint___destroy___0 = Module["_btFixedConstraint___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btFixedConstraint___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionDispatcher_btCollisionDispatcher_1 = Module["_btCollisionDispatcher_btCollisionDispatcher_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionDispatcher_btCollisionDispatcher_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionDispatcher_setDispatcherFlags_1 = Module["_btCollisionDispatcher_setDispatcherFlags_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionDispatcher_setDispatcherFlags_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionDispatcher_getNumManifolds_0 = Module["_btCollisionDispatcher_getNumManifolds_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionDispatcher_getNumManifolds_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionDispatcher_getManifoldByIndexInternal_1 = Module["_btCollisionDispatcher_getManifoldByIndexInternal_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionDispatcher_getManifoldByIndexInternal_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCollisionDispatcher___destroy___0 = Module["_btCollisionDispatcher___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCollisionDispatcher___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_btRigidBody_1 = Module["_btRigidBody_btRigidBody_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_btRigidBody_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getCenterOfMassTransform_0 = Module["_btRigidBody_getCenterOfMassTransform_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getCenterOfMassTransform_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setCenterOfMassTransform_1 = Module["_btRigidBody_setCenterOfMassTransform_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setCenterOfMassTransform_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setSleepingThresholds_2 = Module["_btRigidBody_setSleepingThresholds_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setSleepingThresholds_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getLinearSleepingThreshold_0 = Module["_btRigidBody_getLinearSleepingThreshold_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getLinearSleepingThreshold_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setDamping_2 = Module["_btRigidBody_setDamping_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setDamping_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setMassProps_2 = Module["_btRigidBody_setMassProps_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setMassProps_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getLinearFactor_0 = Module["_btRigidBody_getLinearFactor_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getLinearFactor_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setLinearFactor_1 = Module["_btRigidBody_setLinearFactor_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setLinearFactor_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_applyTorque_1 = Module["_btRigidBody_applyTorque_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_applyTorque_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_applyForce_2 = Module["_btRigidBody_applyForce_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_applyForce_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_applyCentralForce_1 = Module["_btRigidBody_applyCentralForce_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_applyCentralForce_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_applyTorqueImpulse_1 = Module["_btRigidBody_applyTorqueImpulse_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_applyTorqueImpulse_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_applyImpulse_2 = Module["_btRigidBody_applyImpulse_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_applyImpulse_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_updateInertiaTensor_0 = Module["_btRigidBody_updateInertiaTensor_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_updateInertiaTensor_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getLinearVelocity_0 = Module["_btRigidBody_getLinearVelocity_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getLinearVelocity_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getAngularVelocity_0 = Module["_btRigidBody_getAngularVelocity_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getAngularVelocity_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setLinearVelocity_1 = Module["_btRigidBody_setLinearVelocity_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setLinearVelocity_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setAngularVelocity_1 = Module["_btRigidBody_setAngularVelocity_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setAngularVelocity_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getMotionState_0 = Module["_btRigidBody_getMotionState_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getMotionState_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getAngularFactor_0 = Module["_btRigidBody_getAngularFactor_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getAngularFactor_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setAngularFactor_1 = Module["_btRigidBody_setAngularFactor_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setAngularFactor_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getAabb_2 = Module["_btRigidBody_getAabb_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getAabb_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setGravity_1 = Module["_btRigidBody_setGravity_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setGravity_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getFlags_0 = Module["_btRigidBody_getFlags_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getFlags_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setFlags_1 = Module["_btRigidBody_setFlags_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setFlags_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_wantsSleeping_0 = Module["_btRigidBody_wantsSleeping_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_wantsSleeping_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_clearForces_0 = Module["_btRigidBody_clearForces_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_clearForces_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getTotalForce_0 = Module["_btRigidBody_getTotalForce_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getTotalForce_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getTotalTorque_0 = Module["_btRigidBody_getTotalTorque_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getTotalTorque_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_clearState_0 = Module["_btRigidBody_clearState_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_clearState_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getCollisionShape_0 = Module["_btRigidBody_getCollisionShape_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getCollisionShape_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getActivationState_0 = Module["_btRigidBody_getActivationState_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getActivationState_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setActivationState_1 = Module["_btRigidBody_setActivationState_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setActivationState_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_forceActivationState_1 = Module["_btRigidBody_forceActivationState_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_forceActivationState_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_activate_0 = Module["_btRigidBody_activate_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_activate_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_activate_1 = Module["_btRigidBody_activate_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_activate_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_isActive_0 = Module["_btRigidBody_isActive_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_isActive_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_isKinematicObject_0 = Module["_btRigidBody_isKinematicObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_isKinematicObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_isStaticObject_0 = Module["_btRigidBody_isStaticObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_isStaticObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_isStaticOrKinematicObject_0 = Module["_btRigidBody_isStaticOrKinematicObject_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_isStaticOrKinematicObject_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setRestitution_1 = Module["_btRigidBody_setRestitution_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setRestitution_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setFriction_1 = Module["_btRigidBody_setFriction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setFriction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setRollingFriction_1 = Module["_btRigidBody_setRollingFriction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setRollingFriction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setSpinningFriction_1 = Module["_btRigidBody_setSpinningFriction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setSpinningFriction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getWorldTransform_0 = Module["_btRigidBody_getWorldTransform_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getWorldTransform_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getCollisionFlags_0 = Module["_btRigidBody_getCollisionFlags_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getCollisionFlags_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setCollisionFlags_1 = Module["_btRigidBody_setCollisionFlags_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setCollisionFlags_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setWorldTransform_1 = Module["_btRigidBody_setWorldTransform_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setWorldTransform_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setCollisionShape_1 = Module["_btRigidBody_setCollisionShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setCollisionShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setCcdMotionThreshold_1 = Module["_btRigidBody_setCcdMotionThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setCcdMotionThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setCcdSweptSphereRadius_1 = Module["_btRigidBody_setCcdSweptSphereRadius_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setCcdSweptSphereRadius_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_getUserIndex_0 = Module["_btRigidBody_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setUserIndex_1 = Module["_btRigidBody_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setUserIndex2_1 = Module["_btRigidBody_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody_setIgnoreCollisionCheck_2 = Module["_btRigidBody_setIgnoreCollisionCheck_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody_setIgnoreCollisionCheck_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btRigidBody___destroy___0 = Module["_btRigidBody___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btRigidBody___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIndexedMeshArray_size_0 = Module["_btIndexedMeshArray_size_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIndexedMeshArray_size_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIndexedMeshArray_at_1 = Module["_btIndexedMeshArray_at_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIndexedMeshArray_at_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btIndexedMeshArray___destroy___0 = Module["_btIndexedMeshArray___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btIndexedMeshArray___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_ccDiscreteDynamicsWorld_4 = Module["_ccDiscreteDynamicsWorld_ccDiscreteDynamicsWorld_4"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_ccDiscreteDynamicsWorld_4"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_setAllowSleep_1 = Module["_ccDiscreteDynamicsWorld_setAllowSleep_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_setAllowSleep_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_setDeactivationTime_1 = Module["_ccDiscreteDynamicsWorld_setDeactivationTime_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_setDeactivationTime_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_setNarrowPhaseMethod_1 = Module["_ccDiscreteDynamicsWorld_setNarrowPhaseMethod_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_setNarrowPhaseMethod_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_setAllowCcdPenetration_1 = Module["_ccDiscreteDynamicsWorld_setAllowCcdPenetration_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_setAllowCcdPenetration_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_getCcdTriggerRecorder_0 = Module["_ccDiscreteDynamicsWorld_getCcdTriggerRecorder_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_getCcdTriggerRecorder_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_rayTest_3 = Module["_ccDiscreteDynamicsWorld_rayTest_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_rayTest_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_rayTestSingle_6 = Module["_ccDiscreteDynamicsWorld_rayTestSingle_6"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_rayTestSingle_6"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_getPairCache_0 = Module["_ccDiscreteDynamicsWorld_getPairCache_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_getPairCache_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_addCollisionObject_1 = Module["_ccDiscreteDynamicsWorld_addCollisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_addCollisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_addCollisionObject_2 = Module["_ccDiscreteDynamicsWorld_addCollisionObject_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_addCollisionObject_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_addCollisionObject_3 = Module["_ccDiscreteDynamicsWorld_addCollisionObject_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_addCollisionObject_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_removeCollisionObject_1 = Module["_ccDiscreteDynamicsWorld_removeCollisionObject_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_removeCollisionObject_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_setContactBreakingThreshold_1 = Module["_ccDiscreteDynamicsWorld_setContactBreakingThreshold_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_setContactBreakingThreshold_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_setGravity_1 = Module["_ccDiscreteDynamicsWorld_setGravity_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_setGravity_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_getGravity_0 = Module["_ccDiscreteDynamicsWorld_getGravity_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_getGravity_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_addRigidBody_1 = Module["_ccDiscreteDynamicsWorld_addRigidBody_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_addRigidBody_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_addRigidBody_3 = Module["_ccDiscreteDynamicsWorld_addRigidBody_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_addRigidBody_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_removeRigidBody_1 = Module["_ccDiscreteDynamicsWorld_removeRigidBody_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_removeRigidBody_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_addConstraint_1 = Module["_ccDiscreteDynamicsWorld_addConstraint_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_addConstraint_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_addConstraint_2 = Module["_ccDiscreteDynamicsWorld_addConstraint_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_addConstraint_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_removeConstraint_1 = Module["_ccDiscreteDynamicsWorld_removeConstraint_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_removeConstraint_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_stepSimulation_1 = Module["_ccDiscreteDynamicsWorld_stepSimulation_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_stepSimulation_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_stepSimulation_2 = Module["_ccDiscreteDynamicsWorld_stepSimulation_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_stepSimulation_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_stepSimulation_3 = Module["_ccDiscreteDynamicsWorld_stepSimulation_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_stepSimulation_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_addAction_1 = Module["_ccDiscreteDynamicsWorld_addAction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_addAction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_removeAction_1 = Module["_ccDiscreteDynamicsWorld_removeAction_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_removeAction_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_getSolverInfo_0 = Module["_ccDiscreteDynamicsWorld_getSolverInfo_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_getSolverInfo_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld_getFixedBody_0 = Module["_ccDiscreteDynamicsWorld_getFixedBody_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld_getFixedBody_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _ccDiscreteDynamicsWorld___destroy___0 = Module["_ccDiscreteDynamicsWorld___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["ccDiscreteDynamicsWorld___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_btTransform_0 = Module["_btTransform_btTransform_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_btTransform_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_btTransform_2 = Module["_btTransform_btTransform_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_btTransform_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_setIdentity_0 = Module["_btTransform_setIdentity_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_setIdentity_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_setOrigin_1 = Module["_btTransform_setOrigin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_setOrigin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_setRotation_1 = Module["_btTransform_setRotation_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_setRotation_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_getOrigin_0 = Module["_btTransform_getOrigin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_getOrigin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_getRotation_0 = Module["_btTransform_getRotation_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_getRotation_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_getBasis_0 = Module["_btTransform_getBasis_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_getBasis_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_inverse_0 = Module["_btTransform_inverse_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_inverse_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform_op_mul_1 = Module["_btTransform_op_mul_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform_op_mul_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btTransform___destroy___0 = Module["_btTransform___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btTransform___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_btCylinderShape_1 = Module["_btCylinderShape_btCylinderShape_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_btCylinderShape_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_setMargin_1 = Module["_btCylinderShape_setMargin_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_setMargin_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_getMargin_0 = Module["_btCylinderShape_getMargin_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_getMargin_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_updateProp_3 = Module["_btCylinderShape_updateProp_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_updateProp_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_setLocalScaling_1 = Module["_btCylinderShape_setLocalScaling_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_setLocalScaling_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_getLocalScaling_0 = Module["_btCylinderShape_getLocalScaling_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_getLocalScaling_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_calculateLocalInertia_2 = Module["_btCylinderShape_calculateLocalInertia_2"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_calculateLocalInertia_2"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_isCompound_0 = Module["_btCylinderShape_isCompound_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_isCompound_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_getUserIndex_0 = Module["_btCylinderShape_getUserIndex_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_getUserIndex_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_setUserIndex_1 = Module["_btCylinderShape_setUserIndex_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_setUserIndex_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_getUserIndex2_0 = Module["_btCylinderShape_getUserIndex2_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_getUserIndex2_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_setUserIndex2_1 = Module["_btCylinderShape_setUserIndex2_1"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_setUserIndex2_1"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_getAabb_3 = Module["_btCylinderShape_getAabb_3"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_getAabb_3"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_getLocalBoundingSphere_0 = Module["_btCylinderShape_getLocalBoundingSphere_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_getLocalBoundingSphere_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape_getImplicitShapeDimensions_0 = Module["_btCylinderShape_getImplicitShapeDimensions_0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape_getImplicitShapeDimensions_0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btCylinderShape___destroy___0 = Module["_btCylinderShape___destroy___0"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btCylinderShape___destroy___0"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintParamsBT_CONSTRAINT_ERP = Module["_btConstraintParamsBT_CONSTRAINT_ERP"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintParamsBT_CONSTRAINT_ERP"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintParamsBT_CONSTRAINT_STOP_ERP = Module["_btConstraintParamsBT_CONSTRAINT_STOP_ERP"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintParamsBT_CONSTRAINT_STOP_ERP"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintParamsBT_CONSTRAINT_CFM = Module["_btConstraintParamsBT_CONSTRAINT_CFM"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintParamsBT_CONSTRAINT_CFM"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _btConstraintParamsBT_CONSTRAINT_STOP_CFM = Module["_btConstraintParamsBT_CONSTRAINT_STOP_CFM"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["btConstraintParamsBT_CONSTRAINT_STOP_CFM"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _PHY_ScalarTypePHY_FLOAT = Module["_PHY_ScalarTypePHY_FLOAT"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["PHY_ScalarTypePHY_FLOAT"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _PHY_ScalarTypePHY_DOUBLE = Module["_PHY_ScalarTypePHY_DOUBLE"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["PHY_ScalarTypePHY_DOUBLE"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _PHY_ScalarTypePHY_INTEGER = Module["_PHY_ScalarTypePHY_INTEGER"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["PHY_ScalarTypePHY_INTEGER"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _PHY_ScalarTypePHY_SHORT = Module["_PHY_ScalarTypePHY_SHORT"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["PHY_ScalarTypePHY_SHORT"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _PHY_ScalarTypePHY_FIXEDPOINT88 = Module["_PHY_ScalarTypePHY_FIXEDPOINT88"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["PHY_ScalarTypePHY_FIXEDPOINT88"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _PHY_ScalarTypePHY_UCHAR = Module["_PHY_ScalarTypePHY_UCHAR"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["PHY_ScalarTypePHY_UCHAR"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _malloc = Module["_malloc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["malloc"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _free = Module["_free"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["free"].apply(null, arguments)
};

/** @type {function(...*):?} */
var ___errno_location = Module["___errno_location"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["__errno_location"].apply(null, arguments)
};

/** @type {function(...*):?} */
var _setThrew = Module["_setThrew"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["setThrew"].apply(null, arguments)
};

/** @type {function(...*):?} */
var __ZSt18uncaught_exceptionv = Module["__ZSt18uncaught_exceptionv"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["_ZSt18uncaught_exceptionv"].apply(null, arguments)
};

/** @type {function(...*):?} */
var ___set_stack_limit = Module["___set_stack_limit"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["__set_stack_limit"].apply(null, arguments)
};

/** @type {function(...*):?} */
var stackSave = Module["stackSave"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["stackSave"].apply(null, arguments)
};

/** @type {function(...*):?} */
var stackAlloc = Module["stackAlloc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["stackAlloc"].apply(null, arguments)
};

/** @type {function(...*):?} */
var stackRestore = Module["stackRestore"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["stackRestore"].apply(null, arguments)
};

/** @type {function(...*):?} */
var __growWasmMemory = Module["__growWasmMemory"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["__growWasmMemory"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_vi = Module["dynCall_vi"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_vi"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iiiiii = Module["dynCall_iiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_ii = Module["dynCall_ii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_ii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_vii = Module["dynCall_vii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_vii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viiii = Module["dynCall_viiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iifif = Module["dynCall_iifif"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iifif"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viii = Module["dynCall_viii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iii = Module["dynCall_iii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_vif = Module["dynCall_vif"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_vif"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fiii = Module["dynCall_fiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_v = Module["dynCall_v"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_v"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iiii = Module["dynCall_iiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viiiif = Module["dynCall_viiiif"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viiiif"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viiif = Module["dynCall_viiif"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viiif"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viifi = Module["dynCall_viifi"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viifi"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fiiiiiiiiii = Module["dynCall_fiiiiiiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fiiiiiiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viiiiiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fiiii = Module["dynCall_fiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fiiiiiiiii = Module["dynCall_fiiiiiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fiiiiiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iiiiiiiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fiiiii = Module["dynCall_fiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iiiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fi = Module["dynCall_fi"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fi"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fif = Module["dynCall_fif"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fif"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_vifi = Module["dynCall_vifi"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_vifi"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viiiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iiif = Module["dynCall_iiif"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iiif"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fiifii = Module["dynCall_fiifii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fiifii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viif = Module["dynCall_viif"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viif"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_fiiifii = Module["dynCall_fiiifii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_fiiifii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_viiiiiiiiii"].apply(null, arguments)
};

/** @type {function(...*):?} */
var dynCall_iiiiiiiii = Module["dynCall_iiiiiiiii"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
  return Module["asm"]["dynCall_iiiiiiiii"].apply(null, arguments)
};



/**
 * @license
 * Copyright 2010 The Emscripten Authors
 * SPDX-License-Identifier: MIT
 */

// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() { abort("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() { abort("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() { abort("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "cwrap")) Module["cwrap"] = function() { abort("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() { abort("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() { abort("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() { abort("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getMemory")) Module["getMemory"] = function() { abort("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() { abort("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() { abort("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() { abort("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() { abort("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() { abort("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() { abort("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() { abort("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() { abort("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() { abort("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() { abort("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() { abort("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() { abort("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() { abort("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() { abort("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() { abort("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() { abort("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() { abort("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() { abort("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() { abort("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() { abort("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() { abort("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() { abort("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() { abort("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you") };
if (!Object.getOwnPropertyDescriptor(Module, "dynamicAlloc")) Module["dynamicAlloc"] = function() { abort("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "loadDynamicLibrary")) Module["loadDynamicLibrary"] = function() { abort("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "loadWebAssemblyModule")) Module["loadWebAssemblyModule"] = function() { abort("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() { abort("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() { abort("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() { abort("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() { abort("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["addFunction"] = addFunction;
if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() { abort("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() { abort("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() { abort("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "makeBigInt")) Module["makeBigInt"] = function() { abort("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() { abort("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() { abort("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() { abort("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() { abort("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() { abort("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() { abort("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "callMain")) Module["callMain"] = function() { abort("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() { abort("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() { abort("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "abortOnCannotGrowMemory")) Module["abortOnCannotGrowMemory"] = function() { abort("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() { abort("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() { abort("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setjmpId")) Module["setjmpId"] = function() { abort("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() { abort("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() { abort("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() { abort("'setErrNo' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() { abort("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() { abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() { abort("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() { abort("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() { abort("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() { abort("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() { abort("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() { abort("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() { abort("'reallyNegative' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() { abort("'formatString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() { abort("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() { abort("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() { abort("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() { abort("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() { abort("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "flush_NO_FILESYSTEM")) Module["flush_NO_FILESYSTEM"] = function() { abort("'flush_NO_FILESYSTEM' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() { abort("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() { abort("'specialHTMLTargets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() { abort("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() { abort("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() { abort("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() { abort("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() { abort("'getEnvStrings' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() { abort("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() { abort("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() { abort("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() { abort("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() { abort("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() { abort("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() { abort("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() { abort("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() { abort("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() { abort("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() { abort("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() { abort("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() { abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() { abort("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() { abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() { abort("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() { abort("'SDL_unicode' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() { abort("'SDL_ttfContext' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() { abort("'SDL_audio' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() { abort("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() { abort("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() { abort("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() { abort("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() { abort("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() { abort("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() { abort("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() { abort("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() { abort("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() { abort("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() { abort("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() { abort("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() { abort("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() { abort("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() { abort("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() { abort("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() { abort("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() { abort("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() { abort("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() { abort("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() { abort("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() { abort("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() { abort("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") };
Module["writeStackCookie"] = writeStackCookie;
Module["checkStackCookie"] = checkStackCookie;
Module["abortStackOverflow"] = abortStackOverflow;if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", { configurable: true, get: function() { abort("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", { configurable: true, get: function() { abort("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_DYNAMIC")) Object.defineProperty(Module, "ALLOC_DYNAMIC", { configurable: true, get: function() { abort("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });
if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NONE")) Object.defineProperty(Module, "ALLOC_NONE", { configurable: true, get: function() { abort("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)") } });



var calledRun;

/**
 * @constructor
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
}

var calledMain = false;


dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};





/** @type {function(Array=)} */
function run(args) {
  args = args || arguments_;

  if (runDependencies > 0) {
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = run;

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var print = out;
  var printErr = err;
  var has = false;
  out = err = function(x) {
    has = true;
  }
  try { // it doesn't matter if it fails
    var flush = null;
    if (flush) flush();
  } catch(e) {}
  out = print;
  err = printErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the FAQ), or make sure to emit a newline when you printf etc.');
    warnOnce('(this may also be due to not including full filesystem support - try building with -s FORCE_FILESYSTEM=1)');
  }
}

/** @param {boolean|number=} implicit */
function exit(status, implicit) {
  checkUnflushedContent();

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && noExitRuntime && status === 0) {
    return;
  }

  if (noExitRuntime) {
    // if exit() was called, we may warn the user if the runtime isn't actually being shut down
    if (!implicit) {
      var msg = 'program exited (with status: ' + status + '), but EXIT_RUNTIME is not set, so halting execution but not exiting the runtime or preventing further async execution (build with EXIT_RUNTIME=1, if you want a true shutdown)';
      readyPromiseReject(msg);
    }
  } else {

    ABORT = true;
    EXITSTATUS = status;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  quit_(status, new ExitStatus(status));
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}


  noExitRuntime = true;

run();





// {{MODULE_ADDITIONS}}




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
  _btCollisionShape_setLocalScaling_1(self, scaling);
};;

btCollisionShape.prototype['getLocalScaling'] = btCollisionShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCollisionShape_getLocalScaling_0(self), btVector3);
};;

btCollisionShape.prototype['calculateLocalInertia'] = btCollisionShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btCollisionShape_calculateLocalInertia_2(self, mass, inertia);
};;

btCollisionShape.prototype['setMargin'] = btCollisionShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _btCollisionShape_setMargin_1(self, margin);
};;

btCollisionShape.prototype['getMargin'] = btCollisionShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCollisionShape_getMargin_0(self);
};;

btCollisionShape.prototype['isCompound'] = btCollisionShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btCollisionShape_isCompound_0(self));
};;

btCollisionShape.prototype['getUserIndex'] = btCollisionShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCollisionShape_getUserIndex_0(self);
};;

btCollisionShape.prototype['setUserIndex'] = btCollisionShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCollisionShape_setUserIndex_1(self, index);
};;

btCollisionShape.prototype['getUserIndex2'] = btCollisionShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCollisionShape_getUserIndex2_0(self);
};;

btCollisionShape.prototype['setUserIndex2'] = btCollisionShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCollisionShape_setUserIndex2_1(self, index);
};;

btCollisionShape.prototype['getAabb'] = btCollisionShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btCollisionShape_getAabb_3(self, t, min, max);
};;

btCollisionShape.prototype['getLocalBoundingSphere'] = btCollisionShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCollisionShape_getLocalBoundingSphere_0(self);
};;

  btCollisionShape.prototype['__destroy__'] = btCollisionShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btCollisionShape___destroy___0(self);
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
  _btCollisionWorld_rayTest_3(self, rayFromWorld, rayToWorld, resultCallback);
};;

btCollisionWorld.prototype['rayTestSingle'] = btCollisionWorld.prototype.rayTestSingle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback) {
  var self = this.ptr;
  if (rayFromTrans && typeof rayFromTrans === 'object') rayFromTrans = rayFromTrans.ptr;
  if (rayToTrans && typeof rayToTrans === 'object') rayToTrans = rayToTrans.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (colObjWorldTransform && typeof colObjWorldTransform === 'object') colObjWorldTransform = colObjWorldTransform.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _btCollisionWorld_rayTestSingle_6(self, rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback);
};;

btCollisionWorld.prototype['getPairCache'] = btCollisionWorld.prototype.getPairCache = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCollisionWorld_getPairCache_0(self), btOverlappingPairCache);
};;

btCollisionWorld.prototype['addCollisionObject'] = btCollisionWorld.prototype.addCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject, collisionFilterGroup, collisionFilterMask) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionFilterGroup && typeof collisionFilterGroup === 'object') collisionFilterGroup = collisionFilterGroup.ptr;
  if (collisionFilterMask && typeof collisionFilterMask === 'object') collisionFilterMask = collisionFilterMask.ptr;
  if (collisionFilterGroup === undefined) { _btCollisionWorld_addCollisionObject_1(self, collisionObject);  return }
  if (collisionFilterMask === undefined) { _btCollisionWorld_addCollisionObject_2(self, collisionObject, collisionFilterGroup);  return }
  _btCollisionWorld_addCollisionObject_3(self, collisionObject, collisionFilterGroup, collisionFilterMask);
};;

btCollisionWorld.prototype['removeCollisionObject'] = btCollisionWorld.prototype.removeCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  _btCollisionWorld_removeCollisionObject_1(self, collisionObject);
};;

btCollisionWorld.prototype['setContactBreakingThreshold'] = btCollisionWorld.prototype.setContactBreakingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(b) {
  var self = this.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  _btCollisionWorld_setContactBreakingThreshold_1(self, b);
};;

  btCollisionWorld.prototype['__destroy__'] = btCollisionWorld.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btCollisionWorld___destroy___0(self);
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
  _btConvexShape_setLocalScaling_1(self, scaling);
};;

btConvexShape.prototype['getLocalScaling'] = btConvexShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btConvexShape_getLocalScaling_0(self), btVector3);
};;

btConvexShape.prototype['calculateLocalInertia'] = btConvexShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btConvexShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConvexShape.prototype['setMargin'] = btConvexShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _btConvexShape_setMargin_1(self, margin);
};;

btConvexShape.prototype['getMargin'] = btConvexShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexShape_getMargin_0(self);
};;

btConvexShape.prototype['isCompound'] = btConvexShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btConvexShape_isCompound_0(self));
};;

btConvexShape.prototype['getUserIndex'] = btConvexShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexShape_getUserIndex_0(self);
};;

btConvexShape.prototype['setUserIndex'] = btConvexShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConvexShape_setUserIndex_1(self, index);
};;

btConvexShape.prototype['getUserIndex2'] = btConvexShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexShape_getUserIndex2_0(self);
};;

btConvexShape.prototype['setUserIndex2'] = btConvexShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConvexShape_setUserIndex2_1(self, index);
};;

btConvexShape.prototype['getAabb'] = btConvexShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btConvexShape_getAabb_3(self, t, min, max);
};;

btConvexShape.prototype['getLocalBoundingSphere'] = btConvexShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexShape_getLocalBoundingSphere_0(self);
};;

  btConvexShape.prototype['__destroy__'] = btConvexShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btConvexShape___destroy___0(self);
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
  _btDynamicsWorld_addAction_1(self, action);
};;

btDynamicsWorld.prototype['removeAction'] = btDynamicsWorld.prototype.removeAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _btDynamicsWorld_removeAction_1(self, action);
};;

btDynamicsWorld.prototype['getSolverInfo'] = btDynamicsWorld.prototype.getSolverInfo = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btDynamicsWorld_getSolverInfo_0(self), btContactSolverInfo);
};;

btDynamicsWorld.prototype['getFixedBody'] = btDynamicsWorld.prototype.getFixedBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btDynamicsWorld_getFixedBody_0(self), btRigidBody);
};;

btDynamicsWorld.prototype['rayTest'] = btDynamicsWorld.prototype.rayTest = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromWorld, rayToWorld, resultCallback) {
  var self = this.ptr;
  if (rayFromWorld && typeof rayFromWorld === 'object') rayFromWorld = rayFromWorld.ptr;
  if (rayToWorld && typeof rayToWorld === 'object') rayToWorld = rayToWorld.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _btDynamicsWorld_rayTest_3(self, rayFromWorld, rayToWorld, resultCallback);
};;

btDynamicsWorld.prototype['rayTestSingle'] = btDynamicsWorld.prototype.rayTestSingle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback) {
  var self = this.ptr;
  if (rayFromTrans && typeof rayFromTrans === 'object') rayFromTrans = rayFromTrans.ptr;
  if (rayToTrans && typeof rayToTrans === 'object') rayToTrans = rayToTrans.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (colObjWorldTransform && typeof colObjWorldTransform === 'object') colObjWorldTransform = colObjWorldTransform.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _btDynamicsWorld_rayTestSingle_6(self, rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback);
};;

btDynamicsWorld.prototype['getPairCache'] = btDynamicsWorld.prototype.getPairCache = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btDynamicsWorld_getPairCache_0(self), btOverlappingPairCache);
};;

btDynamicsWorld.prototype['addCollisionObject'] = btDynamicsWorld.prototype.addCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject, collisionFilterGroup, collisionFilterMask) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionFilterGroup && typeof collisionFilterGroup === 'object') collisionFilterGroup = collisionFilterGroup.ptr;
  if (collisionFilterMask && typeof collisionFilterMask === 'object') collisionFilterMask = collisionFilterMask.ptr;
  if (collisionFilterGroup === undefined) { _btDynamicsWorld_addCollisionObject_1(self, collisionObject);  return }
  if (collisionFilterMask === undefined) { _btDynamicsWorld_addCollisionObject_2(self, collisionObject, collisionFilterGroup);  return }
  _btDynamicsWorld_addCollisionObject_3(self, collisionObject, collisionFilterGroup, collisionFilterMask);
};;

btDynamicsWorld.prototype['removeCollisionObject'] = btDynamicsWorld.prototype.removeCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  _btDynamicsWorld_removeCollisionObject_1(self, collisionObject);
};;

btDynamicsWorld.prototype['setContactBreakingThreshold'] = btDynamicsWorld.prototype.setContactBreakingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(b) {
  var self = this.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  _btDynamicsWorld_setContactBreakingThreshold_1(self, b);
};;

  btDynamicsWorld.prototype['__destroy__'] = btDynamicsWorld.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btDynamicsWorld___destroy___0(self);
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
  return !!(_RayResultCallback_hasHit_0(self));
};;

  RayResultCallback.prototype['get_m_collisionFilterGroup'] = RayResultCallback.prototype.get_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _RayResultCallback_get_m_collisionFilterGroup_0(self);
};
    RayResultCallback.prototype['set_m_collisionFilterGroup'] = RayResultCallback.prototype.set_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _RayResultCallback_set_m_collisionFilterGroup_1(self, arg0);
};
    Object.defineProperty(RayResultCallback.prototype, 'm_collisionFilterGroup', { get: RayResultCallback.prototype.get_m_collisionFilterGroup, set: RayResultCallback.prototype.set_m_collisionFilterGroup });
  RayResultCallback.prototype['get_m_collisionFilterMask'] = RayResultCallback.prototype.get_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _RayResultCallback_get_m_collisionFilterMask_0(self);
};
    RayResultCallback.prototype['set_m_collisionFilterMask'] = RayResultCallback.prototype.set_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _RayResultCallback_set_m_collisionFilterMask_1(self, arg0);
};
    Object.defineProperty(RayResultCallback.prototype, 'm_collisionFilterMask', { get: RayResultCallback.prototype.get_m_collisionFilterMask, set: RayResultCallback.prototype.set_m_collisionFilterMask });
  RayResultCallback.prototype['get_m_closestHitFraction'] = RayResultCallback.prototype.get_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _RayResultCallback_get_m_closestHitFraction_0(self);
};
    RayResultCallback.prototype['set_m_closestHitFraction'] = RayResultCallback.prototype.set_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _RayResultCallback_set_m_closestHitFraction_1(self, arg0);
};
    Object.defineProperty(RayResultCallback.prototype, 'm_closestHitFraction', { get: RayResultCallback.prototype.get_m_closestHitFraction, set: RayResultCallback.prototype.set_m_closestHitFraction });
  RayResultCallback.prototype['get_m_collisionObject'] = RayResultCallback.prototype.get_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_RayResultCallback_get_m_collisionObject_0(self), btCollisionObject);
};
    RayResultCallback.prototype['set_m_collisionObject'] = RayResultCallback.prototype.set_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _RayResultCallback_set_m_collisionObject_1(self, arg0);
};
    Object.defineProperty(RayResultCallback.prototype, 'm_collisionObject', { get: RayResultCallback.prototype.get_m_collisionObject, set: RayResultCallback.prototype.set_m_collisionObject });
  RayResultCallback.prototype['__destroy__'] = RayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _RayResultCallback___destroy___0(self);
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
  _btConcaveShape_setLocalScaling_1(self, scaling);
};;

btConcaveShape.prototype['getLocalScaling'] = btConcaveShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btConcaveShape_getLocalScaling_0(self), btVector3);
};;

btConcaveShape.prototype['calculateLocalInertia'] = btConcaveShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btConcaveShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConcaveShape.prototype['isCompound'] = btConcaveShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btConcaveShape_isCompound_0(self));
};;

btConcaveShape.prototype['getUserIndex'] = btConcaveShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConcaveShape_getUserIndex_0(self);
};;

btConcaveShape.prototype['setUserIndex'] = btConcaveShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConcaveShape_setUserIndex_1(self, index);
};;

btConcaveShape.prototype['getUserIndex2'] = btConcaveShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConcaveShape_getUserIndex2_0(self);
};;

btConcaveShape.prototype['setUserIndex2'] = btConcaveShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConcaveShape_setUserIndex2_1(self, index);
};;

btConcaveShape.prototype['getAabb'] = btConcaveShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btConcaveShape_getAabb_3(self, t, min, max);
};;

btConcaveShape.prototype['getLocalBoundingSphere'] = btConcaveShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConcaveShape_getLocalBoundingSphere_0(self);
};;

  btConcaveShape.prototype['__destroy__'] = btConcaveShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btConcaveShape___destroy___0(self);
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
  _btStridingMeshInterface_setScaling_1(self, scaling);
};;

  btStridingMeshInterface.prototype['__destroy__'] = btStridingMeshInterface.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btStridingMeshInterface___destroy___0(self);
};
// btBroadphaseInterface
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBroadphaseInterface() { throw "cannot construct a btBroadphaseInterface, no constructor in IDL" }
btBroadphaseInterface.prototype = Object.create(WrapperObject.prototype);
btBroadphaseInterface.prototype.constructor = btBroadphaseInterface;
btBroadphaseInterface.prototype.__class__ = btBroadphaseInterface;
btBroadphaseInterface.__cache__ = {};
Module['btBroadphaseInterface'] = btBroadphaseInterface;

btBroadphaseInterface.prototype['getOverlappingPairCache'] = btBroadphaseInterface.prototype.getOverlappingPairCache = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btBroadphaseInterface_getOverlappingPairCache_0(self), btOverlappingPairCache);
};;

  btBroadphaseInterface.prototype['__destroy__'] = btBroadphaseInterface.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btBroadphaseInterface___destroy___0(self);
};
// btCollisionObject
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCollisionObject() {
  this.ptr = _btCollisionObject_btCollisionObject_0();
  getCache(btCollisionObject)[this.ptr] = this;
};;
btCollisionObject.prototype = Object.create(WrapperObject.prototype);
btCollisionObject.prototype.constructor = btCollisionObject;
btCollisionObject.prototype.__class__ = btCollisionObject;
btCollisionObject.__cache__ = {};
Module['btCollisionObject'] = btCollisionObject;

btCollisionObject.prototype['getCollisionShape'] = btCollisionObject.prototype.getCollisionShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCollisionObject_getCollisionShape_0(self), btCollisionShape);
};;

btCollisionObject.prototype['getActivationState'] = btCollisionObject.prototype.getActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCollisionObject_getActivationState_0(self);
};;

btCollisionObject.prototype['setActivationState'] = btCollisionObject.prototype.setActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function(newState) {
  var self = this.ptr;
  if (newState && typeof newState === 'object') newState = newState.ptr;
  _btCollisionObject_setActivationState_1(self, newState);
};;

btCollisionObject.prototype['forceActivationState'] = btCollisionObject.prototype.forceActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function(newState) {
  var self = this.ptr;
  if (newState && typeof newState === 'object') newState = newState.ptr;
  _btCollisionObject_forceActivationState_1(self, newState);
};;

btCollisionObject.prototype['activate'] = btCollisionObject.prototype.activate = /** @suppress {undefinedVars, duplicate} @this{Object} */function(forceActivation) {
  var self = this.ptr;
  if (forceActivation && typeof forceActivation === 'object') forceActivation = forceActivation.ptr;
  if (forceActivation === undefined) { _btCollisionObject_activate_0(self);  return }
  _btCollisionObject_activate_1(self, forceActivation);
};;

btCollisionObject.prototype['isActive'] = btCollisionObject.prototype.isActive = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btCollisionObject_isActive_0(self));
};;

btCollisionObject.prototype['isKinematicObject'] = btCollisionObject.prototype.isKinematicObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btCollisionObject_isKinematicObject_0(self));
};;

btCollisionObject.prototype['isStaticObject'] = btCollisionObject.prototype.isStaticObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btCollisionObject_isStaticObject_0(self));
};;

btCollisionObject.prototype['isStaticOrKinematicObject'] = btCollisionObject.prototype.isStaticOrKinematicObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btCollisionObject_isStaticOrKinematicObject_0(self));
};;

btCollisionObject.prototype['setRestitution'] = btCollisionObject.prototype.setRestitution = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r) {
  var self = this.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  _btCollisionObject_setRestitution_1(self, r);
};;

btCollisionObject.prototype['setFriction'] = btCollisionObject.prototype.setFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(f) {
  var self = this.ptr;
  if (f && typeof f === 'object') f = f.ptr;
  _btCollisionObject_setFriction_1(self, f);
};;

btCollisionObject.prototype['setRollingFriction'] = btCollisionObject.prototype.setRollingFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rf) {
  var self = this.ptr;
  if (rf && typeof rf === 'object') rf = rf.ptr;
  _btCollisionObject_setRollingFriction_1(self, rf);
};;

btCollisionObject.prototype['setSpinningFriction'] = btCollisionObject.prototype.setSpinningFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(sf) {
  var self = this.ptr;
  if (sf && typeof sf === 'object') sf = sf.ptr;
  _btCollisionObject_setSpinningFriction_1(self, sf);
};;

btCollisionObject.prototype['getWorldTransform'] = btCollisionObject.prototype.getWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCollisionObject_getWorldTransform_0(self), btTransform);
};;

btCollisionObject.prototype['getCollisionFlags'] = btCollisionObject.prototype.getCollisionFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCollisionObject_getCollisionFlags_0(self);
};;

btCollisionObject.prototype['setCollisionFlags'] = btCollisionObject.prototype.setCollisionFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  _btCollisionObject_setCollisionFlags_1(self, flags);
};;

btCollisionObject.prototype['setWorldTransform'] = btCollisionObject.prototype.setWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _btCollisionObject_setWorldTransform_1(self, worldTrans);
};;

btCollisionObject.prototype['setCollisionShape'] = btCollisionObject.prototype.setCollisionShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionShape) {
  var self = this.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  _btCollisionObject_setCollisionShape_1(self, collisionShape);
};;

btCollisionObject.prototype['setCcdMotionThreshold'] = btCollisionObject.prototype.setCcdMotionThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ccdMotionThreshold) {
  var self = this.ptr;
  if (ccdMotionThreshold && typeof ccdMotionThreshold === 'object') ccdMotionThreshold = ccdMotionThreshold.ptr;
  _btCollisionObject_setCcdMotionThreshold_1(self, ccdMotionThreshold);
};;

btCollisionObject.prototype['setCcdSweptSphereRadius'] = btCollisionObject.prototype.setCcdSweptSphereRadius = /** @suppress {undefinedVars, duplicate} @this{Object} */function(radius) {
  var self = this.ptr;
  if (radius && typeof radius === 'object') radius = radius.ptr;
  _btCollisionObject_setCcdSweptSphereRadius_1(self, radius);
};;

btCollisionObject.prototype['getUserIndex'] = btCollisionObject.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCollisionObject_getUserIndex_0(self);
};;

btCollisionObject.prototype['setUserIndex'] = btCollisionObject.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCollisionObject_setUserIndex_1(self, index);
};;

btCollisionObject.prototype['setUserIndex2'] = btCollisionObject.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCollisionObject_setUserIndex2_1(self, index);
};;

btCollisionObject.prototype['setIgnoreCollisionCheck'] = btCollisionObject.prototype.setIgnoreCollisionCheck = /** @suppress {undefinedVars, duplicate} @this{Object} */function(co, ig) {
  var self = this.ptr;
  if (co && typeof co === 'object') co = co.ptr;
  if (ig && typeof ig === 'object') ig = ig.ptr;
  _btCollisionObject_setIgnoreCollisionCheck_2(self, co, ig);
};;

  btCollisionObject.prototype['__destroy__'] = btCollisionObject.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btCollisionObject___destroy___0(self);
};
// btDiscreteDynamicsWorld
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDiscreteDynamicsWorld(dispatcher, pairCache, constraintSolver, collisionConfiguration) {
  if (dispatcher && typeof dispatcher === 'object') dispatcher = dispatcher.ptr;
  if (pairCache && typeof pairCache === 'object') pairCache = pairCache.ptr;
  if (constraintSolver && typeof constraintSolver === 'object') constraintSolver = constraintSolver.ptr;
  if (collisionConfiguration && typeof collisionConfiguration === 'object') collisionConfiguration = collisionConfiguration.ptr;
  this.ptr = _btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4(dispatcher, pairCache, constraintSolver, collisionConfiguration);
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
  _btDiscreteDynamicsWorld_setGravity_1(self, gravity);
};;

btDiscreteDynamicsWorld.prototype['getGravity'] = btDiscreteDynamicsWorld.prototype.getGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btDiscreteDynamicsWorld_getGravity_0(self), btVector3);
};;

btDiscreteDynamicsWorld.prototype['addRigidBody'] = btDiscreteDynamicsWorld.prototype.addRigidBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function(body, group, mask) {
  var self = this.ptr;
  if (body && typeof body === 'object') body = body.ptr;
  if (group && typeof group === 'object') group = group.ptr;
  if (mask && typeof mask === 'object') mask = mask.ptr;
  if (group === undefined) { _btDiscreteDynamicsWorld_addRigidBody_1(self, body);  return }
  if (mask === undefined) { _btDiscreteDynamicsWorld_addRigidBody_2(self, body, group);  return }
  _btDiscreteDynamicsWorld_addRigidBody_3(self, body, group, mask);
};;

btDiscreteDynamicsWorld.prototype['removeRigidBody'] = btDiscreteDynamicsWorld.prototype.removeRigidBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function(body) {
  var self = this.ptr;
  if (body && typeof body === 'object') body = body.ptr;
  _btDiscreteDynamicsWorld_removeRigidBody_1(self, body);
};;

btDiscreteDynamicsWorld.prototype['addConstraint'] = btDiscreteDynamicsWorld.prototype.addConstraint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(constraint, disableCollisionsBetweenLinkedBodies) {
  var self = this.ptr;
  if (constraint && typeof constraint === 'object') constraint = constraint.ptr;
  if (disableCollisionsBetweenLinkedBodies && typeof disableCollisionsBetweenLinkedBodies === 'object') disableCollisionsBetweenLinkedBodies = disableCollisionsBetweenLinkedBodies.ptr;
  if (disableCollisionsBetweenLinkedBodies === undefined) { _btDiscreteDynamicsWorld_addConstraint_1(self, constraint);  return }
  _btDiscreteDynamicsWorld_addConstraint_2(self, constraint, disableCollisionsBetweenLinkedBodies);
};;

btDiscreteDynamicsWorld.prototype['removeConstraint'] = btDiscreteDynamicsWorld.prototype.removeConstraint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(constraint) {
  var self = this.ptr;
  if (constraint && typeof constraint === 'object') constraint = constraint.ptr;
  _btDiscreteDynamicsWorld_removeConstraint_1(self, constraint);
};;

btDiscreteDynamicsWorld.prototype['stepSimulation'] = btDiscreteDynamicsWorld.prototype.stepSimulation = /** @suppress {undefinedVars, duplicate} @this{Object} */function(timeStep, maxSubSteps, fixedTimeStep) {
  var self = this.ptr;
  if (timeStep && typeof timeStep === 'object') timeStep = timeStep.ptr;
  if (maxSubSteps && typeof maxSubSteps === 'object') maxSubSteps = maxSubSteps.ptr;
  if (fixedTimeStep && typeof fixedTimeStep === 'object') fixedTimeStep = fixedTimeStep.ptr;
  if (maxSubSteps === undefined) { return _btDiscreteDynamicsWorld_stepSimulation_1(self, timeStep) }
  if (fixedTimeStep === undefined) { return _btDiscreteDynamicsWorld_stepSimulation_2(self, timeStep, maxSubSteps) }
  return _btDiscreteDynamicsWorld_stepSimulation_3(self, timeStep, maxSubSteps, fixedTimeStep);
};;

btDiscreteDynamicsWorld.prototype['rayTest'] = btDiscreteDynamicsWorld.prototype.rayTest = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromWorld, rayToWorld, resultCallback) {
  var self = this.ptr;
  if (rayFromWorld && typeof rayFromWorld === 'object') rayFromWorld = rayFromWorld.ptr;
  if (rayToWorld && typeof rayToWorld === 'object') rayToWorld = rayToWorld.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _btDiscreteDynamicsWorld_rayTest_3(self, rayFromWorld, rayToWorld, resultCallback);
};;

btDiscreteDynamicsWorld.prototype['rayTestSingle'] = btDiscreteDynamicsWorld.prototype.rayTestSingle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback) {
  var self = this.ptr;
  if (rayFromTrans && typeof rayFromTrans === 'object') rayFromTrans = rayFromTrans.ptr;
  if (rayToTrans && typeof rayToTrans === 'object') rayToTrans = rayToTrans.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (colObjWorldTransform && typeof colObjWorldTransform === 'object') colObjWorldTransform = colObjWorldTransform.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _btDiscreteDynamicsWorld_rayTestSingle_6(self, rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback);
};;

btDiscreteDynamicsWorld.prototype['getPairCache'] = btDiscreteDynamicsWorld.prototype.getPairCache = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btDiscreteDynamicsWorld_getPairCache_0(self), btOverlappingPairCache);
};;

btDiscreteDynamicsWorld.prototype['addCollisionObject'] = btDiscreteDynamicsWorld.prototype.addCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject, collisionFilterGroup, collisionFilterMask) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionFilterGroup && typeof collisionFilterGroup === 'object') collisionFilterGroup = collisionFilterGroup.ptr;
  if (collisionFilterMask && typeof collisionFilterMask === 'object') collisionFilterMask = collisionFilterMask.ptr;
  if (collisionFilterGroup === undefined) { _btDiscreteDynamicsWorld_addCollisionObject_1(self, collisionObject);  return }
  if (collisionFilterMask === undefined) { _btDiscreteDynamicsWorld_addCollisionObject_2(self, collisionObject, collisionFilterGroup);  return }
  _btDiscreteDynamicsWorld_addCollisionObject_3(self, collisionObject, collisionFilterGroup, collisionFilterMask);
};;

btDiscreteDynamicsWorld.prototype['removeCollisionObject'] = btDiscreteDynamicsWorld.prototype.removeCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  _btDiscreteDynamicsWorld_removeCollisionObject_1(self, collisionObject);
};;

btDiscreteDynamicsWorld.prototype['setContactBreakingThreshold'] = btDiscreteDynamicsWorld.prototype.setContactBreakingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(b) {
  var self = this.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  _btDiscreteDynamicsWorld_setContactBreakingThreshold_1(self, b);
};;

btDiscreteDynamicsWorld.prototype['addAction'] = btDiscreteDynamicsWorld.prototype.addAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _btDiscreteDynamicsWorld_addAction_1(self, action);
};;

btDiscreteDynamicsWorld.prototype['removeAction'] = btDiscreteDynamicsWorld.prototype.removeAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _btDiscreteDynamicsWorld_removeAction_1(self, action);
};;

btDiscreteDynamicsWorld.prototype['getSolverInfo'] = btDiscreteDynamicsWorld.prototype.getSolverInfo = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btDiscreteDynamicsWorld_getSolverInfo_0(self), btContactSolverInfo);
};;

btDiscreteDynamicsWorld.prototype['getFixedBody'] = btDiscreteDynamicsWorld.prototype.getFixedBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btDiscreteDynamicsWorld_getFixedBody_0(self), btRigidBody);
};;

  btDiscreteDynamicsWorld.prototype['__destroy__'] = btDiscreteDynamicsWorld.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btDiscreteDynamicsWorld___destroy___0(self);
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
  _btMotionState_getWorldTransform_1(self, worldTrans);
};;

btMotionState.prototype['setWorldTransform'] = btMotionState.prototype.setWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _btMotionState_setWorldTransform_1(self, worldTrans);
};;

  btMotionState.prototype['__destroy__'] = btMotionState.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btMotionState___destroy___0(self);
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
  return wrapPointer(_btConvexInternalShape_getImplicitShapeDimensions_0(self), btVector3);
};;

btConvexInternalShape.prototype['setLocalScaling'] = btConvexInternalShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btConvexInternalShape_setLocalScaling_1(self, scaling);
};;

btConvexInternalShape.prototype['getLocalScaling'] = btConvexInternalShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btConvexInternalShape_getLocalScaling_0(self), btVector3);
};;

btConvexInternalShape.prototype['calculateLocalInertia'] = btConvexInternalShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btConvexInternalShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConvexInternalShape.prototype['setMargin'] = btConvexInternalShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _btConvexInternalShape_setMargin_1(self, margin);
};;

btConvexInternalShape.prototype['getMargin'] = btConvexInternalShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexInternalShape_getMargin_0(self);
};;

btConvexInternalShape.prototype['isCompound'] = btConvexInternalShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btConvexInternalShape_isCompound_0(self));
};;

btConvexInternalShape.prototype['getUserIndex'] = btConvexInternalShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexInternalShape_getUserIndex_0(self);
};;

btConvexInternalShape.prototype['setUserIndex'] = btConvexInternalShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConvexInternalShape_setUserIndex_1(self, index);
};;

btConvexInternalShape.prototype['getUserIndex2'] = btConvexInternalShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexInternalShape_getUserIndex2_0(self);
};;

btConvexInternalShape.prototype['setUserIndex2'] = btConvexInternalShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConvexInternalShape_setUserIndex2_1(self, index);
};;

btConvexInternalShape.prototype['getAabb'] = btConvexInternalShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btConvexInternalShape_getAabb_3(self, t, min, max);
};;

btConvexInternalShape.prototype['getLocalBoundingSphere'] = btConvexInternalShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexInternalShape_getLocalBoundingSphere_0(self);
};;

  btConvexInternalShape.prototype['__destroy__'] = btConvexInternalShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btConvexInternalShape___destroy___0(self);
};
// AllHitsRayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function AllHitsRayResultCallback(from, to) {
  if (from && typeof from === 'object') from = from.ptr;
  if (to && typeof to === 'object') to = to.ptr;
  this.ptr = _AllHitsRayResultCallback_AllHitsRayResultCallback_2(from, to);
  getCache(AllHitsRayResultCallback)[this.ptr] = this;
};;
AllHitsRayResultCallback.prototype = Object.create(RayResultCallback.prototype);
AllHitsRayResultCallback.prototype.constructor = AllHitsRayResultCallback;
AllHitsRayResultCallback.prototype.__class__ = AllHitsRayResultCallback;
AllHitsRayResultCallback.__cache__ = {};
Module['AllHitsRayResultCallback'] = AllHitsRayResultCallback;

AllHitsRayResultCallback.prototype['hasHit'] = AllHitsRayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_AllHitsRayResultCallback_hasHit_0(self));
};;

  AllHitsRayResultCallback.prototype['get_m_collisionObjects'] = AllHitsRayResultCallback.prototype.get_m_collisionObjects = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_AllHitsRayResultCallback_get_m_collisionObjects_0(self), btConstCollisionObjectArray);
};
    AllHitsRayResultCallback.prototype['set_m_collisionObjects'] = AllHitsRayResultCallback.prototype.set_m_collisionObjects = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_collisionObjects_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_collisionObjects', { get: AllHitsRayResultCallback.prototype.get_m_collisionObjects, set: AllHitsRayResultCallback.prototype.set_m_collisionObjects });
  AllHitsRayResultCallback.prototype['get_m_rayFromWorld'] = AllHitsRayResultCallback.prototype.get_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_AllHitsRayResultCallback_get_m_rayFromWorld_0(self), btVector3);
};
    AllHitsRayResultCallback.prototype['set_m_rayFromWorld'] = AllHitsRayResultCallback.prototype.set_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_rayFromWorld_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_rayFromWorld', { get: AllHitsRayResultCallback.prototype.get_m_rayFromWorld, set: AllHitsRayResultCallback.prototype.set_m_rayFromWorld });
  AllHitsRayResultCallback.prototype['get_m_rayToWorld'] = AllHitsRayResultCallback.prototype.get_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_AllHitsRayResultCallback_get_m_rayToWorld_0(self), btVector3);
};
    AllHitsRayResultCallback.prototype['set_m_rayToWorld'] = AllHitsRayResultCallback.prototype.set_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_rayToWorld_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_rayToWorld', { get: AllHitsRayResultCallback.prototype.get_m_rayToWorld, set: AllHitsRayResultCallback.prototype.set_m_rayToWorld });
  AllHitsRayResultCallback.prototype['get_m_hitNormalWorld'] = AllHitsRayResultCallback.prototype.get_m_hitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_AllHitsRayResultCallback_get_m_hitNormalWorld_0(self), btVector3Array);
};
    AllHitsRayResultCallback.prototype['set_m_hitNormalWorld'] = AllHitsRayResultCallback.prototype.set_m_hitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_hitNormalWorld_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_hitNormalWorld', { get: AllHitsRayResultCallback.prototype.get_m_hitNormalWorld, set: AllHitsRayResultCallback.prototype.set_m_hitNormalWorld });
  AllHitsRayResultCallback.prototype['get_m_hitPointWorld'] = AllHitsRayResultCallback.prototype.get_m_hitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_AllHitsRayResultCallback_get_m_hitPointWorld_0(self), btVector3Array);
};
    AllHitsRayResultCallback.prototype['set_m_hitPointWorld'] = AllHitsRayResultCallback.prototype.set_m_hitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_hitPointWorld_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_hitPointWorld', { get: AllHitsRayResultCallback.prototype.get_m_hitPointWorld, set: AllHitsRayResultCallback.prototype.set_m_hitPointWorld });
  AllHitsRayResultCallback.prototype['get_m_hitFractions'] = AllHitsRayResultCallback.prototype.get_m_hitFractions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_AllHitsRayResultCallback_get_m_hitFractions_0(self), btScalarArray);
};
    AllHitsRayResultCallback.prototype['set_m_hitFractions'] = AllHitsRayResultCallback.prototype.set_m_hitFractions = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_hitFractions_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_hitFractions', { get: AllHitsRayResultCallback.prototype.get_m_hitFractions, set: AllHitsRayResultCallback.prototype.set_m_hitFractions });
  AllHitsRayResultCallback.prototype['get_m_collisionFilterGroup'] = AllHitsRayResultCallback.prototype.get_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _AllHitsRayResultCallback_get_m_collisionFilterGroup_0(self);
};
    AllHitsRayResultCallback.prototype['set_m_collisionFilterGroup'] = AllHitsRayResultCallback.prototype.set_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_collisionFilterGroup_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_collisionFilterGroup', { get: AllHitsRayResultCallback.prototype.get_m_collisionFilterGroup, set: AllHitsRayResultCallback.prototype.set_m_collisionFilterGroup });
  AllHitsRayResultCallback.prototype['get_m_collisionFilterMask'] = AllHitsRayResultCallback.prototype.get_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _AllHitsRayResultCallback_get_m_collisionFilterMask_0(self);
};
    AllHitsRayResultCallback.prototype['set_m_collisionFilterMask'] = AllHitsRayResultCallback.prototype.set_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_collisionFilterMask_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_collisionFilterMask', { get: AllHitsRayResultCallback.prototype.get_m_collisionFilterMask, set: AllHitsRayResultCallback.prototype.set_m_collisionFilterMask });
  AllHitsRayResultCallback.prototype['get_m_closestHitFraction'] = AllHitsRayResultCallback.prototype.get_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _AllHitsRayResultCallback_get_m_closestHitFraction_0(self);
};
    AllHitsRayResultCallback.prototype['set_m_closestHitFraction'] = AllHitsRayResultCallback.prototype.set_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_closestHitFraction_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_closestHitFraction', { get: AllHitsRayResultCallback.prototype.get_m_closestHitFraction, set: AllHitsRayResultCallback.prototype.set_m_closestHitFraction });
  AllHitsRayResultCallback.prototype['get_m_collisionObject'] = AllHitsRayResultCallback.prototype.get_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_AllHitsRayResultCallback_get_m_collisionObject_0(self), btCollisionObject);
};
    AllHitsRayResultCallback.prototype['set_m_collisionObject'] = AllHitsRayResultCallback.prototype.set_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _AllHitsRayResultCallback_set_m_collisionObject_1(self, arg0);
};
    Object.defineProperty(AllHitsRayResultCallback.prototype, 'm_collisionObject', { get: AllHitsRayResultCallback.prototype.get_m_collisionObject, set: AllHitsRayResultCallback.prototype.set_m_collisionObject });
  AllHitsRayResultCallback.prototype['__destroy__'] = AllHitsRayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _AllHitsRayResultCallback___destroy___0(self);
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
  return _btDispatcher_getNumManifolds_0(self);
};;

btDispatcher.prototype['getManifoldByIndexInternal'] = btDispatcher.prototype.getManifoldByIndexInternal = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_btDispatcher_getManifoldByIndexInternal_1(self, index), btPersistentManifold);
};;

  btDispatcher.prototype['__destroy__'] = btDispatcher.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btDispatcher___destroy___0(self);
};
// ClosestRayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function ClosestRayResultCallback(from, to) {
  if (from && typeof from === 'object') from = from.ptr;
  if (to && typeof to === 'object') to = to.ptr;
  this.ptr = _ClosestRayResultCallback_ClosestRayResultCallback_2(from, to);
  getCache(ClosestRayResultCallback)[this.ptr] = this;
};;
ClosestRayResultCallback.prototype = Object.create(RayResultCallback.prototype);
ClosestRayResultCallback.prototype.constructor = ClosestRayResultCallback;
ClosestRayResultCallback.prototype.__class__ = ClosestRayResultCallback;
ClosestRayResultCallback.__cache__ = {};
Module['ClosestRayResultCallback'] = ClosestRayResultCallback;

ClosestRayResultCallback.prototype['hasHit'] = ClosestRayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_ClosestRayResultCallback_hasHit_0(self));
};;

  ClosestRayResultCallback.prototype['get_m_rayFromWorld'] = ClosestRayResultCallback.prototype.get_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ClosestRayResultCallback_get_m_rayFromWorld_0(self), btVector3);
};
    ClosestRayResultCallback.prototype['set_m_rayFromWorld'] = ClosestRayResultCallback.prototype.set_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ClosestRayResultCallback_set_m_rayFromWorld_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_rayFromWorld', { get: ClosestRayResultCallback.prototype.get_m_rayFromWorld, set: ClosestRayResultCallback.prototype.set_m_rayFromWorld });
  ClosestRayResultCallback.prototype['get_m_rayToWorld'] = ClosestRayResultCallback.prototype.get_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ClosestRayResultCallback_get_m_rayToWorld_0(self), btVector3);
};
    ClosestRayResultCallback.prototype['set_m_rayToWorld'] = ClosestRayResultCallback.prototype.set_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ClosestRayResultCallback_set_m_rayToWorld_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_rayToWorld', { get: ClosestRayResultCallback.prototype.get_m_rayToWorld, set: ClosestRayResultCallback.prototype.set_m_rayToWorld });
  ClosestRayResultCallback.prototype['get_m_hitNormalWorld'] = ClosestRayResultCallback.prototype.get_m_hitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ClosestRayResultCallback_get_m_hitNormalWorld_0(self), btVector3);
};
    ClosestRayResultCallback.prototype['set_m_hitNormalWorld'] = ClosestRayResultCallback.prototype.set_m_hitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ClosestRayResultCallback_set_m_hitNormalWorld_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_hitNormalWorld', { get: ClosestRayResultCallback.prototype.get_m_hitNormalWorld, set: ClosestRayResultCallback.prototype.set_m_hitNormalWorld });
  ClosestRayResultCallback.prototype['get_m_hitPointWorld'] = ClosestRayResultCallback.prototype.get_m_hitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ClosestRayResultCallback_get_m_hitPointWorld_0(self), btVector3);
};
    ClosestRayResultCallback.prototype['set_m_hitPointWorld'] = ClosestRayResultCallback.prototype.set_m_hitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ClosestRayResultCallback_set_m_hitPointWorld_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_hitPointWorld', { get: ClosestRayResultCallback.prototype.get_m_hitPointWorld, set: ClosestRayResultCallback.prototype.set_m_hitPointWorld });
  ClosestRayResultCallback.prototype['get_m_collisionFilterGroup'] = ClosestRayResultCallback.prototype.get_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ClosestRayResultCallback_get_m_collisionFilterGroup_0(self);
};
    ClosestRayResultCallback.prototype['set_m_collisionFilterGroup'] = ClosestRayResultCallback.prototype.set_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ClosestRayResultCallback_set_m_collisionFilterGroup_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_collisionFilterGroup', { get: ClosestRayResultCallback.prototype.get_m_collisionFilterGroup, set: ClosestRayResultCallback.prototype.set_m_collisionFilterGroup });
  ClosestRayResultCallback.prototype['get_m_collisionFilterMask'] = ClosestRayResultCallback.prototype.get_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ClosestRayResultCallback_get_m_collisionFilterMask_0(self);
};
    ClosestRayResultCallback.prototype['set_m_collisionFilterMask'] = ClosestRayResultCallback.prototype.set_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ClosestRayResultCallback_set_m_collisionFilterMask_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_collisionFilterMask', { get: ClosestRayResultCallback.prototype.get_m_collisionFilterMask, set: ClosestRayResultCallback.prototype.set_m_collisionFilterMask });
  ClosestRayResultCallback.prototype['get_m_closestHitFraction'] = ClosestRayResultCallback.prototype.get_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ClosestRayResultCallback_get_m_closestHitFraction_0(self);
};
    ClosestRayResultCallback.prototype['set_m_closestHitFraction'] = ClosestRayResultCallback.prototype.set_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ClosestRayResultCallback_set_m_closestHitFraction_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_closestHitFraction', { get: ClosestRayResultCallback.prototype.get_m_closestHitFraction, set: ClosestRayResultCallback.prototype.set_m_closestHitFraction });
  ClosestRayResultCallback.prototype['get_m_collisionObject'] = ClosestRayResultCallback.prototype.get_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ClosestRayResultCallback_get_m_collisionObject_0(self), btCollisionObject);
};
    ClosestRayResultCallback.prototype['set_m_collisionObject'] = ClosestRayResultCallback.prototype.set_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ClosestRayResultCallback_set_m_collisionObject_1(self, arg0);
};
    Object.defineProperty(ClosestRayResultCallback.prototype, 'm_collisionObject', { get: ClosestRayResultCallback.prototype.get_m_collisionObject, set: ClosestRayResultCallback.prototype.set_m_collisionObject });
  ClosestRayResultCallback.prototype['__destroy__'] = ClosestRayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _ClosestRayResultCallback___destroy___0(self);
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
  _btTriangleMeshShape_setLocalScaling_1(self, scaling);
};;

btTriangleMeshShape.prototype['getLocalScaling'] = btTriangleMeshShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btTriangleMeshShape_getLocalScaling_0(self), btVector3);
};;

btTriangleMeshShape.prototype['calculateLocalInertia'] = btTriangleMeshShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btTriangleMeshShape_calculateLocalInertia_2(self, mass, inertia);
};;

btTriangleMeshShape.prototype['isCompound'] = btTriangleMeshShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btTriangleMeshShape_isCompound_0(self));
};;

btTriangleMeshShape.prototype['getUserIndex'] = btTriangleMeshShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btTriangleMeshShape_getUserIndex_0(self);
};;

btTriangleMeshShape.prototype['setUserIndex'] = btTriangleMeshShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btTriangleMeshShape_setUserIndex_1(self, index);
};;

btTriangleMeshShape.prototype['getUserIndex2'] = btTriangleMeshShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btTriangleMeshShape_getUserIndex2_0(self);
};;

btTriangleMeshShape.prototype['setUserIndex2'] = btTriangleMeshShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btTriangleMeshShape_setUserIndex2_1(self, index);
};;

btTriangleMeshShape.prototype['getAabb'] = btTriangleMeshShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btTriangleMeshShape_getAabb_3(self, t, min, max);
};;

btTriangleMeshShape.prototype['getLocalBoundingSphere'] = btTriangleMeshShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btTriangleMeshShape_getLocalBoundingSphere_0(self);
};;

  btTriangleMeshShape.prototype['__destroy__'] = btTriangleMeshShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btTriangleMeshShape___destroy___0(self);
};
// btOverlapFilterCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function btOverlapFilterCallback() { throw "cannot construct a btOverlapFilterCallback, no constructor in IDL" }
btOverlapFilterCallback.prototype = Object.create(WrapperObject.prototype);
btOverlapFilterCallback.prototype.constructor = btOverlapFilterCallback;
btOverlapFilterCallback.prototype.__class__ = btOverlapFilterCallback;
btOverlapFilterCallback.__cache__ = {};
Module['btOverlapFilterCallback'] = btOverlapFilterCallback;

  btOverlapFilterCallback.prototype['__destroy__'] = btOverlapFilterCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btOverlapFilterCallback___destroy___0(self);
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
  return _btQuadWord_x_0(self);
};;

btQuadWord.prototype['y'] = btQuadWord.prototype.y = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btQuadWord_y_0(self);
};;

btQuadWord.prototype['z'] = btQuadWord.prototype.z = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btQuadWord_z_0(self);
};;

btQuadWord.prototype['w'] = btQuadWord.prototype.w = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btQuadWord_w_0(self);
};;

btQuadWord.prototype['setX'] = btQuadWord.prototype.setX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  _btQuadWord_setX_1(self, x);
};;

btQuadWord.prototype['setY'] = btQuadWord.prototype.setY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(y) {
  var self = this.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  _btQuadWord_setY_1(self, y);
};;

btQuadWord.prototype['setZ'] = btQuadWord.prototype.setZ = /** @suppress {undefinedVars, duplicate} @this{Object} */function(z) {
  var self = this.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  _btQuadWord_setZ_1(self, z);
};;

btQuadWord.prototype['setW'] = btQuadWord.prototype.setW = /** @suppress {undefinedVars, duplicate} @this{Object} */function(w) {
  var self = this.ptr;
  if (w && typeof w === 'object') w = w.ptr;
  _btQuadWord_setW_1(self, w);
};;

  btQuadWord.prototype['__destroy__'] = btQuadWord.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btQuadWord___destroy___0(self);
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
  _btTypedConstraint_enableFeedback_1(self, needsFeedback);
};;

btTypedConstraint.prototype['getBreakingImpulseThreshold'] = btTypedConstraint.prototype.getBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btTypedConstraint_getBreakingImpulseThreshold_0(self);
};;

btTypedConstraint.prototype['setBreakingImpulseThreshold'] = btTypedConstraint.prototype.setBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(threshold) {
  var self = this.ptr;
  if (threshold && typeof threshold === 'object') threshold = threshold.ptr;
  _btTypedConstraint_setBreakingImpulseThreshold_1(self, threshold);
};;

btTypedConstraint.prototype['getParam'] = btTypedConstraint.prototype.getParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  return _btTypedConstraint_getParam_2(self, num, axis);
};;

btTypedConstraint.prototype['setParam'] = btTypedConstraint.prototype.setParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, value, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  _btTypedConstraint_setParam_3(self, num, value, axis);
};;

  btTypedConstraint.prototype['__destroy__'] = btTypedConstraint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btTypedConstraint___destroy___0(self);
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
  _btMatrix3x3_getRotation_1(self, q);
};;

  btMatrix3x3.prototype['__destroy__'] = btMatrix3x3.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btMatrix3x3___destroy___0(self);
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
  return _btScalarArray_size_0(self);
};;

btScalarArray.prototype['at'] = btScalarArray.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return _btScalarArray_at_1(self, n);
};;

btScalarArray.prototype['clear'] = btScalarArray.prototype.clear = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btScalarArray_clear_0(self);
};;

  btScalarArray.prototype['__destroy__'] = btScalarArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btScalarArray___destroy___0(self);
};
// btBvhTriangleMeshShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBvhTriangleMeshShape(meshInterface, useQuantizedAabbCompression, buildBvh) {
  if (meshInterface && typeof meshInterface === 'object') meshInterface = meshInterface.ptr;
  if (useQuantizedAabbCompression && typeof useQuantizedAabbCompression === 'object') useQuantizedAabbCompression = useQuantizedAabbCompression.ptr;
  if (buildBvh && typeof buildBvh === 'object') buildBvh = buildBvh.ptr;
  if (buildBvh === undefined) { this.ptr = _btBvhTriangleMeshShape_btBvhTriangleMeshShape_2(meshInterface, useQuantizedAabbCompression); getCache(btBvhTriangleMeshShape)[this.ptr] = this;return }
  this.ptr = _btBvhTriangleMeshShape_btBvhTriangleMeshShape_3(meshInterface, useQuantizedAabbCompression, buildBvh);
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
  _btBvhTriangleMeshShape_setLocalScaling_1(self, scaling);
};;

btBvhTriangleMeshShape.prototype['getLocalScaling'] = btBvhTriangleMeshShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btBvhTriangleMeshShape_getLocalScaling_0(self), btVector3);
};;

btBvhTriangleMeshShape.prototype['calculateLocalInertia'] = btBvhTriangleMeshShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btBvhTriangleMeshShape_calculateLocalInertia_2(self, mass, inertia);
};;

btBvhTriangleMeshShape.prototype['isCompound'] = btBvhTriangleMeshShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btBvhTriangleMeshShape_isCompound_0(self));
};;

btBvhTriangleMeshShape.prototype['getUserIndex'] = btBvhTriangleMeshShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBvhTriangleMeshShape_getUserIndex_0(self);
};;

btBvhTriangleMeshShape.prototype['setUserIndex'] = btBvhTriangleMeshShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btBvhTriangleMeshShape_setUserIndex_1(self, index);
};;

btBvhTriangleMeshShape.prototype['getUserIndex2'] = btBvhTriangleMeshShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBvhTriangleMeshShape_getUserIndex2_0(self);
};;

btBvhTriangleMeshShape.prototype['setUserIndex2'] = btBvhTriangleMeshShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btBvhTriangleMeshShape_setUserIndex2_1(self, index);
};;

btBvhTriangleMeshShape.prototype['getAabb'] = btBvhTriangleMeshShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btBvhTriangleMeshShape_getAabb_3(self, t, min, max);
};;

btBvhTriangleMeshShape.prototype['getLocalBoundingSphere'] = btBvhTriangleMeshShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBvhTriangleMeshShape_getLocalBoundingSphere_0(self);
};;

  btBvhTriangleMeshShape.prototype['__destroy__'] = btBvhTriangleMeshShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btBvhTriangleMeshShape___destroy___0(self);
};
// btDbvtBroadphase
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDbvtBroadphase() {
  this.ptr = _btDbvtBroadphase_btDbvtBroadphase_0();
  getCache(btDbvtBroadphase)[this.ptr] = this;
};;
btDbvtBroadphase.prototype = Object.create(btBroadphaseInterface.prototype);
btDbvtBroadphase.prototype.constructor = btDbvtBroadphase;
btDbvtBroadphase.prototype.__class__ = btDbvtBroadphase;
btDbvtBroadphase.__cache__ = {};
Module['btDbvtBroadphase'] = btDbvtBroadphase;

btDbvtBroadphase.prototype['getOverlappingPairCache'] = btDbvtBroadphase.prototype.getOverlappingPairCache = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btDbvtBroadphase_getOverlappingPairCache_0(self), btOverlappingPairCache);
};;

  btDbvtBroadphase.prototype['__destroy__'] = btDbvtBroadphase.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btDbvtBroadphase___destroy___0(self);
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
  return _btIntArray_size_0(self);
};;

btIntArray.prototype['at'] = btIntArray.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return _btIntArray_at_1(self, n);
};;

btIntArray.prototype['clear'] = btIntArray.prototype.clear = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btIntArray_clear_0(self);
};;

  btIntArray.prototype['__destroy__'] = btIntArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btIntArray___destroy___0(self);
};
// ccAllHitsRayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function ccAllHitsRayResultCallback(from, to) {
  if (from && typeof from === 'object') from = from.ptr;
  if (to && typeof to === 'object') to = to.ptr;
  this.ptr = _ccAllHitsRayResultCallback_ccAllHitsRayResultCallback_2(from, to);
  getCache(ccAllHitsRayResultCallback)[this.ptr] = this;
};;
ccAllHitsRayResultCallback.prototype = Object.create(AllHitsRayResultCallback.prototype);
ccAllHitsRayResultCallback.prototype.constructor = ccAllHitsRayResultCallback;
ccAllHitsRayResultCallback.prototype.__class__ = ccAllHitsRayResultCallback;
ccAllHitsRayResultCallback.__cache__ = {};
Module['ccAllHitsRayResultCallback'] = ccAllHitsRayResultCallback;

ccAllHitsRayResultCallback.prototype['setQueryTrigger'] = ccAllHitsRayResultCallback.prototype.setQueryTrigger = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _ccAllHitsRayResultCallback_setQueryTrigger_1(self, v);
};;

ccAllHitsRayResultCallback.prototype['hasHit'] = ccAllHitsRayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_ccAllHitsRayResultCallback_hasHit_0(self));
};;

  ccAllHitsRayResultCallback.prototype['get_m_shapeParts'] = ccAllHitsRayResultCallback.prototype.get_m_shapeParts = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccAllHitsRayResultCallback_get_m_shapeParts_0(self), btIntArray);
};
    ccAllHitsRayResultCallback.prototype['set_m_shapeParts'] = ccAllHitsRayResultCallback.prototype.set_m_shapeParts = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_shapeParts_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_shapeParts', { get: ccAllHitsRayResultCallback.prototype.get_m_shapeParts, set: ccAllHitsRayResultCallback.prototype.set_m_shapeParts });
  ccAllHitsRayResultCallback.prototype['get_m_collisionObjects'] = ccAllHitsRayResultCallback.prototype.get_m_collisionObjects = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccAllHitsRayResultCallback_get_m_collisionObjects_0(self), btConstCollisionObjectArray);
};
    ccAllHitsRayResultCallback.prototype['set_m_collisionObjects'] = ccAllHitsRayResultCallback.prototype.set_m_collisionObjects = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_collisionObjects_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_collisionObjects', { get: ccAllHitsRayResultCallback.prototype.get_m_collisionObjects, set: ccAllHitsRayResultCallback.prototype.set_m_collisionObjects });
  ccAllHitsRayResultCallback.prototype['get_m_rayFromWorld'] = ccAllHitsRayResultCallback.prototype.get_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccAllHitsRayResultCallback_get_m_rayFromWorld_0(self), btVector3);
};
    ccAllHitsRayResultCallback.prototype['set_m_rayFromWorld'] = ccAllHitsRayResultCallback.prototype.set_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_rayFromWorld_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_rayFromWorld', { get: ccAllHitsRayResultCallback.prototype.get_m_rayFromWorld, set: ccAllHitsRayResultCallback.prototype.set_m_rayFromWorld });
  ccAllHitsRayResultCallback.prototype['get_m_rayToWorld'] = ccAllHitsRayResultCallback.prototype.get_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccAllHitsRayResultCallback_get_m_rayToWorld_0(self), btVector3);
};
    ccAllHitsRayResultCallback.prototype['set_m_rayToWorld'] = ccAllHitsRayResultCallback.prototype.set_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_rayToWorld_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_rayToWorld', { get: ccAllHitsRayResultCallback.prototype.get_m_rayToWorld, set: ccAllHitsRayResultCallback.prototype.set_m_rayToWorld });
  ccAllHitsRayResultCallback.prototype['get_m_hitNormalWorld'] = ccAllHitsRayResultCallback.prototype.get_m_hitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccAllHitsRayResultCallback_get_m_hitNormalWorld_0(self), btVector3Array);
};
    ccAllHitsRayResultCallback.prototype['set_m_hitNormalWorld'] = ccAllHitsRayResultCallback.prototype.set_m_hitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_hitNormalWorld_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_hitNormalWorld', { get: ccAllHitsRayResultCallback.prototype.get_m_hitNormalWorld, set: ccAllHitsRayResultCallback.prototype.set_m_hitNormalWorld });
  ccAllHitsRayResultCallback.prototype['get_m_hitPointWorld'] = ccAllHitsRayResultCallback.prototype.get_m_hitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccAllHitsRayResultCallback_get_m_hitPointWorld_0(self), btVector3Array);
};
    ccAllHitsRayResultCallback.prototype['set_m_hitPointWorld'] = ccAllHitsRayResultCallback.prototype.set_m_hitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_hitPointWorld_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_hitPointWorld', { get: ccAllHitsRayResultCallback.prototype.get_m_hitPointWorld, set: ccAllHitsRayResultCallback.prototype.set_m_hitPointWorld });
  ccAllHitsRayResultCallback.prototype['get_m_hitFractions'] = ccAllHitsRayResultCallback.prototype.get_m_hitFractions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccAllHitsRayResultCallback_get_m_hitFractions_0(self), btScalarArray);
};
    ccAllHitsRayResultCallback.prototype['set_m_hitFractions'] = ccAllHitsRayResultCallback.prototype.set_m_hitFractions = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_hitFractions_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_hitFractions', { get: ccAllHitsRayResultCallback.prototype.get_m_hitFractions, set: ccAllHitsRayResultCallback.prototype.set_m_hitFractions });
  ccAllHitsRayResultCallback.prototype['get_m_collisionFilterGroup'] = ccAllHitsRayResultCallback.prototype.get_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ccAllHitsRayResultCallback_get_m_collisionFilterGroup_0(self);
};
    ccAllHitsRayResultCallback.prototype['set_m_collisionFilterGroup'] = ccAllHitsRayResultCallback.prototype.set_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_collisionFilterGroup_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_collisionFilterGroup', { get: ccAllHitsRayResultCallback.prototype.get_m_collisionFilterGroup, set: ccAllHitsRayResultCallback.prototype.set_m_collisionFilterGroup });
  ccAllHitsRayResultCallback.prototype['get_m_collisionFilterMask'] = ccAllHitsRayResultCallback.prototype.get_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ccAllHitsRayResultCallback_get_m_collisionFilterMask_0(self);
};
    ccAllHitsRayResultCallback.prototype['set_m_collisionFilterMask'] = ccAllHitsRayResultCallback.prototype.set_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_collisionFilterMask_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_collisionFilterMask', { get: ccAllHitsRayResultCallback.prototype.get_m_collisionFilterMask, set: ccAllHitsRayResultCallback.prototype.set_m_collisionFilterMask });
  ccAllHitsRayResultCallback.prototype['get_m_closestHitFraction'] = ccAllHitsRayResultCallback.prototype.get_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ccAllHitsRayResultCallback_get_m_closestHitFraction_0(self);
};
    ccAllHitsRayResultCallback.prototype['set_m_closestHitFraction'] = ccAllHitsRayResultCallback.prototype.set_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_closestHitFraction_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_closestHitFraction', { get: ccAllHitsRayResultCallback.prototype.get_m_closestHitFraction, set: ccAllHitsRayResultCallback.prototype.set_m_closestHitFraction });
  ccAllHitsRayResultCallback.prototype['get_m_collisionObject'] = ccAllHitsRayResultCallback.prototype.get_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccAllHitsRayResultCallback_get_m_collisionObject_0(self), btCollisionObject);
};
    ccAllHitsRayResultCallback.prototype['set_m_collisionObject'] = ccAllHitsRayResultCallback.prototype.set_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccAllHitsRayResultCallback_set_m_collisionObject_1(self, arg0);
};
    Object.defineProperty(ccAllHitsRayResultCallback.prototype, 'm_collisionObject', { get: ccAllHitsRayResultCallback.prototype.get_m_collisionObject, set: ccAllHitsRayResultCallback.prototype.set_m_collisionObject });
  ccAllHitsRayResultCallback.prototype['__destroy__'] = ccAllHitsRayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _ccAllHitsRayResultCallback___destroy___0(self);
};
// btConstCollisionObjectArray
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConstCollisionObjectArray() { throw "cannot construct a btConstCollisionObjectArray, no constructor in IDL" }
btConstCollisionObjectArray.prototype = Object.create(WrapperObject.prototype);
btConstCollisionObjectArray.prototype.constructor = btConstCollisionObjectArray;
btConstCollisionObjectArray.prototype.__class__ = btConstCollisionObjectArray;
btConstCollisionObjectArray.__cache__ = {};
Module['btConstCollisionObjectArray'] = btConstCollisionObjectArray;

btConstCollisionObjectArray.prototype['size'] = btConstCollisionObjectArray.prototype.size = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConstCollisionObjectArray_size_0(self);
};;

btConstCollisionObjectArray.prototype['at'] = btConstCollisionObjectArray.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return wrapPointer(_btConstCollisionObjectArray_at_1(self, n), btCollisionObject);
};;

btConstCollisionObjectArray.prototype['clear'] = btConstCollisionObjectArray.prototype.clear = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btConstCollisionObjectArray_clear_0(self);
};;

  btConstCollisionObjectArray.prototype['__destroy__'] = btConstCollisionObjectArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btConstCollisionObjectArray___destroy___0(self);
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
  return _btBroadphaseProxy_get_m_collisionFilterGroup_0(self);
};
    btBroadphaseProxy.prototype['set_m_collisionFilterGroup'] = btBroadphaseProxy.prototype.set_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btBroadphaseProxy_set_m_collisionFilterGroup_1(self, arg0);
};
    Object.defineProperty(btBroadphaseProxy.prototype, 'm_collisionFilterGroup', { get: btBroadphaseProxy.prototype.get_m_collisionFilterGroup, set: btBroadphaseProxy.prototype.set_m_collisionFilterGroup });
  btBroadphaseProxy.prototype['get_m_collisionFilterMask'] = btBroadphaseProxy.prototype.get_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBroadphaseProxy_get_m_collisionFilterMask_0(self);
};
    btBroadphaseProxy.prototype['set_m_collisionFilterMask'] = btBroadphaseProxy.prototype.set_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btBroadphaseProxy_set_m_collisionFilterMask_1(self, arg0);
};
    Object.defineProperty(btBroadphaseProxy.prototype, 'm_collisionFilterMask', { get: btBroadphaseProxy.prototype.get_m_collisionFilterMask, set: btBroadphaseProxy.prototype.set_m_collisionFilterMask });
  btBroadphaseProxy.prototype['__destroy__'] = btBroadphaseProxy.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btBroadphaseProxy___destroy___0(self);
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
  return _btIndexedMesh_get_m_numTriangles_0(self);
};
    btIndexedMesh.prototype['set_m_numTriangles'] = btIndexedMesh.prototype.set_m_numTriangles = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btIndexedMesh_set_m_numTriangles_1(self, arg0);
};
    Object.defineProperty(btIndexedMesh.prototype, 'm_numTriangles', { get: btIndexedMesh.prototype.get_m_numTriangles, set: btIndexedMesh.prototype.set_m_numTriangles });
  btIndexedMesh.prototype['__destroy__'] = btIndexedMesh.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btIndexedMesh___destroy___0(self);
};
// btRigidBodyConstructionInfo
/** @suppress {undefinedVars, duplicate} @this{Object} */function btRigidBodyConstructionInfo(mass, motionState, collisionShape, localInertia) {
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (motionState && typeof motionState === 'object') motionState = motionState.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (localInertia && typeof localInertia === 'object') localInertia = localInertia.ptr;
  if (localInertia === undefined) { this.ptr = _btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3(mass, motionState, collisionShape); getCache(btRigidBodyConstructionInfo)[this.ptr] = this;return }
  this.ptr = _btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4(mass, motionState, collisionShape, localInertia);
  getCache(btRigidBodyConstructionInfo)[this.ptr] = this;
};;
btRigidBodyConstructionInfo.prototype = Object.create(WrapperObject.prototype);
btRigidBodyConstructionInfo.prototype.constructor = btRigidBodyConstructionInfo;
btRigidBodyConstructionInfo.prototype.__class__ = btRigidBodyConstructionInfo;
btRigidBodyConstructionInfo.__cache__ = {};
Module['btRigidBodyConstructionInfo'] = btRigidBodyConstructionInfo;

  btRigidBodyConstructionInfo.prototype['get_m_linearDamping'] = btRigidBodyConstructionInfo.prototype.get_m_linearDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBodyConstructionInfo_get_m_linearDamping_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_linearDamping'] = btRigidBodyConstructionInfo.prototype.set_m_linearDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btRigidBodyConstructionInfo_set_m_linearDamping_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_linearDamping', { get: btRigidBodyConstructionInfo.prototype.get_m_linearDamping, set: btRigidBodyConstructionInfo.prototype.set_m_linearDamping });
  btRigidBodyConstructionInfo.prototype['get_m_angularDamping'] = btRigidBodyConstructionInfo.prototype.get_m_angularDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBodyConstructionInfo_get_m_angularDamping_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_angularDamping'] = btRigidBodyConstructionInfo.prototype.set_m_angularDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btRigidBodyConstructionInfo_set_m_angularDamping_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_angularDamping', { get: btRigidBodyConstructionInfo.prototype.get_m_angularDamping, set: btRigidBodyConstructionInfo.prototype.set_m_angularDamping });
  btRigidBodyConstructionInfo.prototype['get_m_friction'] = btRigidBodyConstructionInfo.prototype.get_m_friction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBodyConstructionInfo_get_m_friction_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_friction'] = btRigidBodyConstructionInfo.prototype.set_m_friction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btRigidBodyConstructionInfo_set_m_friction_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_friction', { get: btRigidBodyConstructionInfo.prototype.get_m_friction, set: btRigidBodyConstructionInfo.prototype.set_m_friction });
  btRigidBodyConstructionInfo.prototype['get_m_rollingFriction'] = btRigidBodyConstructionInfo.prototype.get_m_rollingFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBodyConstructionInfo_get_m_rollingFriction_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_rollingFriction'] = btRigidBodyConstructionInfo.prototype.set_m_rollingFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btRigidBodyConstructionInfo_set_m_rollingFriction_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_rollingFriction', { get: btRigidBodyConstructionInfo.prototype.get_m_rollingFriction, set: btRigidBodyConstructionInfo.prototype.set_m_rollingFriction });
  btRigidBodyConstructionInfo.prototype['get_m_restitution'] = btRigidBodyConstructionInfo.prototype.get_m_restitution = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBodyConstructionInfo_get_m_restitution_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_restitution'] = btRigidBodyConstructionInfo.prototype.set_m_restitution = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btRigidBodyConstructionInfo_set_m_restitution_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_restitution', { get: btRigidBodyConstructionInfo.prototype.get_m_restitution, set: btRigidBodyConstructionInfo.prototype.set_m_restitution });
  btRigidBodyConstructionInfo.prototype['get_m_linearSleepingThreshold'] = btRigidBodyConstructionInfo.prototype.get_m_linearSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_linearSleepingThreshold'] = btRigidBodyConstructionInfo.prototype.set_m_linearSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_linearSleepingThreshold', { get: btRigidBodyConstructionInfo.prototype.get_m_linearSleepingThreshold, set: btRigidBodyConstructionInfo.prototype.set_m_linearSleepingThreshold });
  btRigidBodyConstructionInfo.prototype['get_m_angularSleepingThreshold'] = btRigidBodyConstructionInfo.prototype.get_m_angularSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0(self);
};
    btRigidBodyConstructionInfo.prototype['set_m_angularSleepingThreshold'] = btRigidBodyConstructionInfo.prototype.set_m_angularSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1(self, arg0);
};
    Object.defineProperty(btRigidBodyConstructionInfo.prototype, 'm_angularSleepingThreshold', { get: btRigidBodyConstructionInfo.prototype.get_m_angularSleepingThreshold, set: btRigidBodyConstructionInfo.prototype.set_m_angularSleepingThreshold });
  btRigidBodyConstructionInfo.prototype['__destroy__'] = btRigidBodyConstructionInfo.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btRigidBodyConstructionInfo___destroy___0(self);
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
  return _btManifoldPoint_getAppliedImpulse_0(self);
};;

btManifoldPoint.prototype['getDistance'] = btManifoldPoint.prototype.getDistance = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btManifoldPoint_getDistance_0(self);
};;

btManifoldPoint.prototype['getShape0'] = btManifoldPoint.prototype.getShape0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btManifoldPoint_getShape0_0(self), btCollisionShape);
};;

btManifoldPoint.prototype['getShape1'] = btManifoldPoint.prototype.getShape1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btManifoldPoint_getShape1_0(self), btCollisionShape);
};;

  btManifoldPoint.prototype['get_m_localPointA'] = btManifoldPoint.prototype.get_m_localPointA = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btManifoldPoint_get_m_localPointA_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_localPointA'] = btManifoldPoint.prototype.set_m_localPointA = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_localPointA_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_localPointA', { get: btManifoldPoint.prototype.get_m_localPointA, set: btManifoldPoint.prototype.set_m_localPointA });
  btManifoldPoint.prototype['get_m_localPointB'] = btManifoldPoint.prototype.get_m_localPointB = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btManifoldPoint_get_m_localPointB_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_localPointB'] = btManifoldPoint.prototype.set_m_localPointB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_localPointB_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_localPointB', { get: btManifoldPoint.prototype.get_m_localPointB, set: btManifoldPoint.prototype.set_m_localPointB });
  btManifoldPoint.prototype['get_m_positionWorldOnA'] = btManifoldPoint.prototype.get_m_positionWorldOnA = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btManifoldPoint_get_m_positionWorldOnA_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_positionWorldOnA'] = btManifoldPoint.prototype.set_m_positionWorldOnA = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_positionWorldOnA_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_positionWorldOnA', { get: btManifoldPoint.prototype.get_m_positionWorldOnA, set: btManifoldPoint.prototype.set_m_positionWorldOnA });
  btManifoldPoint.prototype['get_m_positionWorldOnB'] = btManifoldPoint.prototype.get_m_positionWorldOnB = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btManifoldPoint_get_m_positionWorldOnB_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_positionWorldOnB'] = btManifoldPoint.prototype.set_m_positionWorldOnB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_positionWorldOnB_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_positionWorldOnB', { get: btManifoldPoint.prototype.get_m_positionWorldOnB, set: btManifoldPoint.prototype.set_m_positionWorldOnB });
  btManifoldPoint.prototype['get_m_normalWorldOnB'] = btManifoldPoint.prototype.get_m_normalWorldOnB = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btManifoldPoint_get_m_normalWorldOnB_0(self), btVector3);
};
    btManifoldPoint.prototype['set_m_normalWorldOnB'] = btManifoldPoint.prototype.set_m_normalWorldOnB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_normalWorldOnB_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_normalWorldOnB', { get: btManifoldPoint.prototype.get_m_normalWorldOnB, set: btManifoldPoint.prototype.set_m_normalWorldOnB });
  btManifoldPoint.prototype['get_m_distance1'] = btManifoldPoint.prototype.get_m_distance1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btManifoldPoint_get_m_distance1_0(self);
};
    btManifoldPoint.prototype['set_m_distance1'] = btManifoldPoint.prototype.set_m_distance1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_distance1_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_distance1', { get: btManifoldPoint.prototype.get_m_distance1, set: btManifoldPoint.prototype.set_m_distance1 });
  btManifoldPoint.prototype['get_m_index0'] = btManifoldPoint.prototype.get_m_index0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btManifoldPoint_get_m_index0_0(self);
};
    btManifoldPoint.prototype['set_m_index0'] = btManifoldPoint.prototype.set_m_index0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_index0_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_index0', { get: btManifoldPoint.prototype.get_m_index0, set: btManifoldPoint.prototype.set_m_index0 });
  btManifoldPoint.prototype['get_m_index1'] = btManifoldPoint.prototype.get_m_index1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btManifoldPoint_get_m_index1_0(self);
};
    btManifoldPoint.prototype['set_m_index1'] = btManifoldPoint.prototype.set_m_index1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_index1_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_index1', { get: btManifoldPoint.prototype.get_m_index1, set: btManifoldPoint.prototype.set_m_index1 });
  btManifoldPoint.prototype['get_m_userPersistentData'] = btManifoldPoint.prototype.get_m_userPersistentData = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btManifoldPoint_get_m_userPersistentData_0(self);
};
    btManifoldPoint.prototype['set_m_userPersistentData'] = btManifoldPoint.prototype.set_m_userPersistentData = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_userPersistentData_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_userPersistentData', { get: btManifoldPoint.prototype.get_m_userPersistentData, set: btManifoldPoint.prototype.set_m_userPersistentData });
  btManifoldPoint.prototype['get_m_userPersistentData0'] = btManifoldPoint.prototype.get_m_userPersistentData0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btManifoldPoint_get_m_userPersistentData0_0(self);
};
    btManifoldPoint.prototype['set_m_userPersistentData0'] = btManifoldPoint.prototype.set_m_userPersistentData0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_userPersistentData0_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_userPersistentData0', { get: btManifoldPoint.prototype.get_m_userPersistentData0, set: btManifoldPoint.prototype.set_m_userPersistentData0 });
  btManifoldPoint.prototype['get_m_userPersistentData1'] = btManifoldPoint.prototype.get_m_userPersistentData1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btManifoldPoint_get_m_userPersistentData1_0(self);
};
    btManifoldPoint.prototype['set_m_userPersistentData1'] = btManifoldPoint.prototype.set_m_userPersistentData1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btManifoldPoint_set_m_userPersistentData1_1(self, arg0);
};
    Object.defineProperty(btManifoldPoint.prototype, 'm_userPersistentData1', { get: btManifoldPoint.prototype.get_m_userPersistentData1, set: btManifoldPoint.prototype.set_m_userPersistentData1 });
  btManifoldPoint.prototype['__destroy__'] = btManifoldPoint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btManifoldPoint___destroy___0(self);
};
// btSequentialImpulseConstraintSolver
/** @suppress {undefinedVars, duplicate} @this{Object} */function btSequentialImpulseConstraintSolver() {
  this.ptr = _btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0();
  getCache(btSequentialImpulseConstraintSolver)[this.ptr] = this;
};;
btSequentialImpulseConstraintSolver.prototype = Object.create(WrapperObject.prototype);
btSequentialImpulseConstraintSolver.prototype.constructor = btSequentialImpulseConstraintSolver;
btSequentialImpulseConstraintSolver.prototype.__class__ = btSequentialImpulseConstraintSolver;
btSequentialImpulseConstraintSolver.__cache__ = {};
Module['btSequentialImpulseConstraintSolver'] = btSequentialImpulseConstraintSolver;

  btSequentialImpulseConstraintSolver.prototype['__destroy__'] = btSequentialImpulseConstraintSolver.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btSequentialImpulseConstraintSolver___destroy___0(self);
};
// btPoint2PointConstraint
/** @suppress {undefinedVars, duplicate} @this{Object} */function btPoint2PointConstraint(rbA, rbB, pivotInA, pivotInB) {
  if (rbA && typeof rbA === 'object') rbA = rbA.ptr;
  if (rbB && typeof rbB === 'object') rbB = rbB.ptr;
  if (pivotInA && typeof pivotInA === 'object') pivotInA = pivotInA.ptr;
  if (pivotInB && typeof pivotInB === 'object') pivotInB = pivotInB.ptr;
  if (pivotInA === undefined) { this.ptr = _btPoint2PointConstraint_btPoint2PointConstraint_2(rbA, rbB); getCache(btPoint2PointConstraint)[this.ptr] = this;return }
  if (pivotInB === undefined) { this.ptr = _btPoint2PointConstraint_btPoint2PointConstraint_3(rbA, rbB, pivotInA); getCache(btPoint2PointConstraint)[this.ptr] = this;return }
  this.ptr = _btPoint2PointConstraint_btPoint2PointConstraint_4(rbA, rbB, pivotInA, pivotInB);
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
  _btPoint2PointConstraint_setPivotA_1(self, pivotA);
};;

btPoint2PointConstraint.prototype['setPivotB'] = btPoint2PointConstraint.prototype.setPivotB = /** @suppress {undefinedVars, duplicate} @this{Object} */function(pivotB) {
  var self = this.ptr;
  if (pivotB && typeof pivotB === 'object') pivotB = pivotB.ptr;
  _btPoint2PointConstraint_setPivotB_1(self, pivotB);
};;

btPoint2PointConstraint.prototype['getPivotInA'] = btPoint2PointConstraint.prototype.getPivotInA = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btPoint2PointConstraint_getPivotInA_0(self), btVector3);
};;

btPoint2PointConstraint.prototype['getPivotInB'] = btPoint2PointConstraint.prototype.getPivotInB = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btPoint2PointConstraint_getPivotInB_0(self), btVector3);
};;

btPoint2PointConstraint.prototype['enableFeedback'] = btPoint2PointConstraint.prototype.enableFeedback = /** @suppress {undefinedVars, duplicate} @this{Object} */function(needsFeedback) {
  var self = this.ptr;
  if (needsFeedback && typeof needsFeedback === 'object') needsFeedback = needsFeedback.ptr;
  _btPoint2PointConstraint_enableFeedback_1(self, needsFeedback);
};;

btPoint2PointConstraint.prototype['getBreakingImpulseThreshold'] = btPoint2PointConstraint.prototype.getBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btPoint2PointConstraint_getBreakingImpulseThreshold_0(self);
};;

btPoint2PointConstraint.prototype['setBreakingImpulseThreshold'] = btPoint2PointConstraint.prototype.setBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(threshold) {
  var self = this.ptr;
  if (threshold && typeof threshold === 'object') threshold = threshold.ptr;
  _btPoint2PointConstraint_setBreakingImpulseThreshold_1(self, threshold);
};;

btPoint2PointConstraint.prototype['getParam'] = btPoint2PointConstraint.prototype.getParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  return _btPoint2PointConstraint_getParam_2(self, num, axis);
};;

btPoint2PointConstraint.prototype['setParam'] = btPoint2PointConstraint.prototype.setParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, value, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  _btPoint2PointConstraint_setParam_3(self, num, value, axis);
};;

  btPoint2PointConstraint.prototype['get_m_setting'] = btPoint2PointConstraint.prototype.get_m_setting = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btPoint2PointConstraint_get_m_setting_0(self), btConstraintSetting);
};
    btPoint2PointConstraint.prototype['set_m_setting'] = btPoint2PointConstraint.prototype.set_m_setting = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btPoint2PointConstraint_set_m_setting_1(self, arg0);
};
    Object.defineProperty(btPoint2PointConstraint.prototype, 'm_setting', { get: btPoint2PointConstraint.prototype.get_m_setting, set: btPoint2PointConstraint.prototype.set_m_setting });
  btPoint2PointConstraint.prototype['__destroy__'] = btPoint2PointConstraint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btPoint2PointConstraint___destroy___0(self);
};
// ccOverlapFilterCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function ccOverlapFilterCallback() {
  this.ptr = _ccOverlapFilterCallback_ccOverlapFilterCallback_0();
  getCache(ccOverlapFilterCallback)[this.ptr] = this;
};;
ccOverlapFilterCallback.prototype = Object.create(btOverlapFilterCallback.prototype);
ccOverlapFilterCallback.prototype.constructor = ccOverlapFilterCallback;
ccOverlapFilterCallback.prototype.__class__ = ccOverlapFilterCallback;
ccOverlapFilterCallback.__cache__ = {};
Module['ccOverlapFilterCallback'] = ccOverlapFilterCallback;

  ccOverlapFilterCallback.prototype['__destroy__'] = ccOverlapFilterCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _ccOverlapFilterCallback___destroy___0(self);
};
// btConvexTriangleMeshShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConvexTriangleMeshShape(meshInterface, calcAabb) {
  if (meshInterface && typeof meshInterface === 'object') meshInterface = meshInterface.ptr;
  if (calcAabb && typeof calcAabb === 'object') calcAabb = calcAabb.ptr;
  if (calcAabb === undefined) { this.ptr = _btConvexTriangleMeshShape_btConvexTriangleMeshShape_1(meshInterface); getCache(btConvexTriangleMeshShape)[this.ptr] = this;return }
  this.ptr = _btConvexTriangleMeshShape_btConvexTriangleMeshShape_2(meshInterface, calcAabb);
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
  _btConvexTriangleMeshShape_setLocalScaling_1(self, scaling);
};;

btConvexTriangleMeshShape.prototype['getLocalScaling'] = btConvexTriangleMeshShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btConvexTriangleMeshShape_getLocalScaling_0(self), btVector3);
};;

btConvexTriangleMeshShape.prototype['calculateLocalInertia'] = btConvexTriangleMeshShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btConvexTriangleMeshShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConvexTriangleMeshShape.prototype['setMargin'] = btConvexTriangleMeshShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _btConvexTriangleMeshShape_setMargin_1(self, margin);
};;

btConvexTriangleMeshShape.prototype['getMargin'] = btConvexTriangleMeshShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexTriangleMeshShape_getMargin_0(self);
};;

btConvexTriangleMeshShape.prototype['isCompound'] = btConvexTriangleMeshShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btConvexTriangleMeshShape_isCompound_0(self));
};;

btConvexTriangleMeshShape.prototype['getUserIndex'] = btConvexTriangleMeshShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexTriangleMeshShape_getUserIndex_0(self);
};;

btConvexTriangleMeshShape.prototype['setUserIndex'] = btConvexTriangleMeshShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConvexTriangleMeshShape_setUserIndex_1(self, index);
};;

btConvexTriangleMeshShape.prototype['getUserIndex2'] = btConvexTriangleMeshShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexTriangleMeshShape_getUserIndex2_0(self);
};;

btConvexTriangleMeshShape.prototype['setUserIndex2'] = btConvexTriangleMeshShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConvexTriangleMeshShape_setUserIndex2_1(self, index);
};;

btConvexTriangleMeshShape.prototype['getAabb'] = btConvexTriangleMeshShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btConvexTriangleMeshShape_getAabb_3(self, t, min, max);
};;

btConvexTriangleMeshShape.prototype['getLocalBoundingSphere'] = btConvexTriangleMeshShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConvexTriangleMeshShape_getLocalBoundingSphere_0(self);
};;

  btConvexTriangleMeshShape.prototype['__destroy__'] = btConvexTriangleMeshShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btConvexTriangleMeshShape___destroy___0(self);
};
// ccClosestRayResultCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function ccClosestRayResultCallback(from, to) {
  if (from && typeof from === 'object') from = from.ptr;
  if (to && typeof to === 'object') to = to.ptr;
  this.ptr = _ccClosestRayResultCallback_ccClosestRayResultCallback_2(from, to);
  getCache(ccClosestRayResultCallback)[this.ptr] = this;
};;
ccClosestRayResultCallback.prototype = Object.create(ClosestRayResultCallback.prototype);
ccClosestRayResultCallback.prototype.constructor = ccClosestRayResultCallback;
ccClosestRayResultCallback.prototype.__class__ = ccClosestRayResultCallback;
ccClosestRayResultCallback.__cache__ = {};
Module['ccClosestRayResultCallback'] = ccClosestRayResultCallback;

ccClosestRayResultCallback.prototype['setQueryTrigger'] = ccClosestRayResultCallback.prototype.setQueryTrigger = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _ccClosestRayResultCallback_setQueryTrigger_1(self, v);
};;

ccClosestRayResultCallback.prototype['hasHit'] = ccClosestRayResultCallback.prototype.hasHit = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_ccClosestRayResultCallback_hasHit_0(self));
};;

  ccClosestRayResultCallback.prototype['get_m_shapePart'] = ccClosestRayResultCallback.prototype.get_m_shapePart = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ccClosestRayResultCallback_get_m_shapePart_0(self);
};
    ccClosestRayResultCallback.prototype['set_m_shapePart'] = ccClosestRayResultCallback.prototype.set_m_shapePart = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_shapePart_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_shapePart', { get: ccClosestRayResultCallback.prototype.get_m_shapePart, set: ccClosestRayResultCallback.prototype.set_m_shapePart });
  ccClosestRayResultCallback.prototype['get_m_rayFromWorld'] = ccClosestRayResultCallback.prototype.get_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccClosestRayResultCallback_get_m_rayFromWorld_0(self), btVector3);
};
    ccClosestRayResultCallback.prototype['set_m_rayFromWorld'] = ccClosestRayResultCallback.prototype.set_m_rayFromWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_rayFromWorld_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_rayFromWorld', { get: ccClosestRayResultCallback.prototype.get_m_rayFromWorld, set: ccClosestRayResultCallback.prototype.set_m_rayFromWorld });
  ccClosestRayResultCallback.prototype['get_m_rayToWorld'] = ccClosestRayResultCallback.prototype.get_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccClosestRayResultCallback_get_m_rayToWorld_0(self), btVector3);
};
    ccClosestRayResultCallback.prototype['set_m_rayToWorld'] = ccClosestRayResultCallback.prototype.set_m_rayToWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_rayToWorld_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_rayToWorld', { get: ccClosestRayResultCallback.prototype.get_m_rayToWorld, set: ccClosestRayResultCallback.prototype.set_m_rayToWorld });
  ccClosestRayResultCallback.prototype['get_m_hitNormalWorld'] = ccClosestRayResultCallback.prototype.get_m_hitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccClosestRayResultCallback_get_m_hitNormalWorld_0(self), btVector3);
};
    ccClosestRayResultCallback.prototype['set_m_hitNormalWorld'] = ccClosestRayResultCallback.prototype.set_m_hitNormalWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_hitNormalWorld_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_hitNormalWorld', { get: ccClosestRayResultCallback.prototype.get_m_hitNormalWorld, set: ccClosestRayResultCallback.prototype.set_m_hitNormalWorld });
  ccClosestRayResultCallback.prototype['get_m_hitPointWorld'] = ccClosestRayResultCallback.prototype.get_m_hitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccClosestRayResultCallback_get_m_hitPointWorld_0(self), btVector3);
};
    ccClosestRayResultCallback.prototype['set_m_hitPointWorld'] = ccClosestRayResultCallback.prototype.set_m_hitPointWorld = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_hitPointWorld_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_hitPointWorld', { get: ccClosestRayResultCallback.prototype.get_m_hitPointWorld, set: ccClosestRayResultCallback.prototype.set_m_hitPointWorld });
  ccClosestRayResultCallback.prototype['get_m_collisionFilterGroup'] = ccClosestRayResultCallback.prototype.get_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ccClosestRayResultCallback_get_m_collisionFilterGroup_0(self);
};
    ccClosestRayResultCallback.prototype['set_m_collisionFilterGroup'] = ccClosestRayResultCallback.prototype.set_m_collisionFilterGroup = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_collisionFilterGroup_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_collisionFilterGroup', { get: ccClosestRayResultCallback.prototype.get_m_collisionFilterGroup, set: ccClosestRayResultCallback.prototype.set_m_collisionFilterGroup });
  ccClosestRayResultCallback.prototype['get_m_collisionFilterMask'] = ccClosestRayResultCallback.prototype.get_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ccClosestRayResultCallback_get_m_collisionFilterMask_0(self);
};
    ccClosestRayResultCallback.prototype['set_m_collisionFilterMask'] = ccClosestRayResultCallback.prototype.set_m_collisionFilterMask = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_collisionFilterMask_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_collisionFilterMask', { get: ccClosestRayResultCallback.prototype.get_m_collisionFilterMask, set: ccClosestRayResultCallback.prototype.set_m_collisionFilterMask });
  ccClosestRayResultCallback.prototype['get_m_closestHitFraction'] = ccClosestRayResultCallback.prototype.get_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _ccClosestRayResultCallback_get_m_closestHitFraction_0(self);
};
    ccClosestRayResultCallback.prototype['set_m_closestHitFraction'] = ccClosestRayResultCallback.prototype.set_m_closestHitFraction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_closestHitFraction_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_closestHitFraction', { get: ccClosestRayResultCallback.prototype.get_m_closestHitFraction, set: ccClosestRayResultCallback.prototype.set_m_closestHitFraction });
  ccClosestRayResultCallback.prototype['get_m_collisionObject'] = ccClosestRayResultCallback.prototype.get_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccClosestRayResultCallback_get_m_collisionObject_0(self), btCollisionObject);
};
    ccClosestRayResultCallback.prototype['set_m_collisionObject'] = ccClosestRayResultCallback.prototype.set_m_collisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _ccClosestRayResultCallback_set_m_collisionObject_1(self, arg0);
};
    Object.defineProperty(ccClosestRayResultCallback.prototype, 'm_collisionObject', { get: ccClosestRayResultCallback.prototype.get_m_collisionObject, set: ccClosestRayResultCallback.prototype.set_m_collisionObject });
  ccClosestRayResultCallback.prototype['__destroy__'] = ccClosestRayResultCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _ccClosestRayResultCallback___destroy___0(self);
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
  this.ptr = _btHeightfieldTerrainShape_btHeightfieldTerrainShape_9(heightStickWidth, heightStickLength, heightfieldData, heightScale, minHeight, maxHeight, upAxis, hdt, flipQuadEdges);
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
  _btHeightfieldTerrainShape_setMargin_1(self, margin);
};;

btHeightfieldTerrainShape.prototype['getMargin'] = btHeightfieldTerrainShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btHeightfieldTerrainShape_getMargin_0(self);
};;

btHeightfieldTerrainShape.prototype['setLocalScaling'] = btHeightfieldTerrainShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btHeightfieldTerrainShape_setLocalScaling_1(self, scaling);
};;

btHeightfieldTerrainShape.prototype['getLocalScaling'] = btHeightfieldTerrainShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btHeightfieldTerrainShape_getLocalScaling_0(self), btVector3);
};;

btHeightfieldTerrainShape.prototype['calculateLocalInertia'] = btHeightfieldTerrainShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btHeightfieldTerrainShape_calculateLocalInertia_2(self, mass, inertia);
};;

btHeightfieldTerrainShape.prototype['isCompound'] = btHeightfieldTerrainShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btHeightfieldTerrainShape_isCompound_0(self));
};;

btHeightfieldTerrainShape.prototype['getUserIndex'] = btHeightfieldTerrainShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btHeightfieldTerrainShape_getUserIndex_0(self);
};;

btHeightfieldTerrainShape.prototype['setUserIndex'] = btHeightfieldTerrainShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btHeightfieldTerrainShape_setUserIndex_1(self, index);
};;

btHeightfieldTerrainShape.prototype['getUserIndex2'] = btHeightfieldTerrainShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btHeightfieldTerrainShape_getUserIndex2_0(self);
};;

btHeightfieldTerrainShape.prototype['setUserIndex2'] = btHeightfieldTerrainShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btHeightfieldTerrainShape_setUserIndex2_1(self, index);
};;

btHeightfieldTerrainShape.prototype['getAabb'] = btHeightfieldTerrainShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btHeightfieldTerrainShape_getAabb_3(self, t, min, max);
};;

btHeightfieldTerrainShape.prototype['getLocalBoundingSphere'] = btHeightfieldTerrainShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btHeightfieldTerrainShape_getLocalBoundingSphere_0(self);
};;

  btHeightfieldTerrainShape.prototype['__destroy__'] = btHeightfieldTerrainShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btHeightfieldTerrainShape___destroy___0(self);
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
  _VoidPtr___destroy___0(self);
};
// btDefaultCollisionConfiguration
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDefaultCollisionConfiguration(info) {
  if (info && typeof info === 'object') info = info.ptr;
  if (info === undefined) { this.ptr = _btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0(); getCache(btDefaultCollisionConfiguration)[this.ptr] = this;return }
  this.ptr = _btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1(info);
  getCache(btDefaultCollisionConfiguration)[this.ptr] = this;
};;
btDefaultCollisionConfiguration.prototype = Object.create(WrapperObject.prototype);
btDefaultCollisionConfiguration.prototype.constructor = btDefaultCollisionConfiguration;
btDefaultCollisionConfiguration.prototype.__class__ = btDefaultCollisionConfiguration;
btDefaultCollisionConfiguration.__cache__ = {};
Module['btDefaultCollisionConfiguration'] = btDefaultCollisionConfiguration;

  btDefaultCollisionConfiguration.prototype['__destroy__'] = btDefaultCollisionConfiguration.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btDefaultCollisionConfiguration___destroy___0(self);
};
// btOverlappingPairCallback
/** @suppress {undefinedVars, duplicate} @this{Object} */function btOverlappingPairCallback() { throw "cannot construct a btOverlappingPairCallback, no constructor in IDL" }
btOverlappingPairCallback.prototype = Object.create(WrapperObject.prototype);
btOverlappingPairCallback.prototype.constructor = btOverlappingPairCallback;
btOverlappingPairCallback.prototype.__class__ = btOverlappingPairCallback;
btOverlappingPairCallback.__cache__ = {};
Module['btOverlappingPairCallback'] = btOverlappingPairCallback;

  btOverlappingPairCallback.prototype['__destroy__'] = btOverlappingPairCallback.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btOverlappingPairCallback___destroy___0(self);
};
// btTriangleMesh
/** @suppress {undefinedVars, duplicate} @this{Object} */function btTriangleMesh(use32bitIndices, use4componentVertices) {
  if (use32bitIndices && typeof use32bitIndices === 'object') use32bitIndices = use32bitIndices.ptr;
  if (use4componentVertices && typeof use4componentVertices === 'object') use4componentVertices = use4componentVertices.ptr;
  if (use32bitIndices === undefined) { this.ptr = _btTriangleMesh_btTriangleMesh_0(); getCache(btTriangleMesh)[this.ptr] = this;return }
  if (use4componentVertices === undefined) { this.ptr = _btTriangleMesh_btTriangleMesh_1(use32bitIndices); getCache(btTriangleMesh)[this.ptr] = this;return }
  this.ptr = _btTriangleMesh_btTriangleMesh_2(use32bitIndices, use4componentVertices);
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
  if (removeDuplicateVertices === undefined) { _btTriangleMesh_addTriangle_3(self, vertex0, vertex1, vertex2);  return }
  _btTriangleMesh_addTriangle_4(self, vertex0, vertex1, vertex2, removeDuplicateVertices);
};;

btTriangleMesh.prototype['addTriangleIndices'] = btTriangleMesh.prototype.addTriangleIndices = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index1, index2, index3) {
  var self = this.ptr;
  if (index1 && typeof index1 === 'object') index1 = index1.ptr;
  if (index2 && typeof index2 === 'object') index2 = index2.ptr;
  if (index3 && typeof index3 === 'object') index3 = index3.ptr;
  _btTriangleMesh_addTriangleIndices_3(self, index1, index2, index3);
};;

btTriangleMesh.prototype['getIndexedMeshArray'] = btTriangleMesh.prototype.getIndexedMeshArray = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btTriangleMesh_getIndexedMeshArray_0(self), btIndexedMeshArray);
};;

btTriangleMesh.prototype['setScaling'] = btTriangleMesh.prototype.setScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btTriangleMesh_setScaling_1(self, scaling);
};;

  btTriangleMesh.prototype['__destroy__'] = btTriangleMesh.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btTriangleMesh___destroy___0(self);
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
  _btCollisionConfiguration___destroy___0(self);
};
// btPersistentManifold
/** @suppress {undefinedVars, duplicate} @this{Object} */function btPersistentManifold() {
  this.ptr = _btPersistentManifold_btPersistentManifold_0();
  getCache(btPersistentManifold)[this.ptr] = this;
};;
btPersistentManifold.prototype = Object.create(WrapperObject.prototype);
btPersistentManifold.prototype.constructor = btPersistentManifold;
btPersistentManifold.prototype.__class__ = btPersistentManifold;
btPersistentManifold.__cache__ = {};
Module['btPersistentManifold'] = btPersistentManifold;

btPersistentManifold.prototype['getBody0'] = btPersistentManifold.prototype.getBody0 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btPersistentManifold_getBody0_0(self), btCollisionObject);
};;

btPersistentManifold.prototype['getBody1'] = btPersistentManifold.prototype.getBody1 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btPersistentManifold_getBody1_0(self), btCollisionObject);
};;

btPersistentManifold.prototype['getNumContacts'] = btPersistentManifold.prototype.getNumContacts = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btPersistentManifold_getNumContacts_0(self);
};;

btPersistentManifold.prototype['getContactPoint'] = btPersistentManifold.prototype.getContactPoint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_btPersistentManifold_getContactPoint_1(self, index), btManifoldPoint);
};;

  btPersistentManifold.prototype['__destroy__'] = btPersistentManifold.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btPersistentManifold___destroy___0(self);
};
// btBoxShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBoxShape(boxHalfExtents) {
  if (boxHalfExtents && typeof boxHalfExtents === 'object') boxHalfExtents = boxHalfExtents.ptr;
  this.ptr = _btBoxShape_btBoxShape_1(boxHalfExtents);
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
  _btBoxShape_setMargin_1(self, margin);
};;

btBoxShape.prototype['getMargin'] = btBoxShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBoxShape_getMargin_0(self);
};;

btBoxShape.prototype['setUnscaledHalfExtents'] = btBoxShape.prototype.setUnscaledHalfExtents = /** @suppress {undefinedVars, duplicate} @this{Object} */function(boxHalfExtents) {
  var self = this.ptr;
  if (boxHalfExtents && typeof boxHalfExtents === 'object') boxHalfExtents = boxHalfExtents.ptr;
  _btBoxShape_setUnscaledHalfExtents_1(self, boxHalfExtents);
};;

btBoxShape.prototype['setLocalScaling'] = btBoxShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btBoxShape_setLocalScaling_1(self, scaling);
};;

btBoxShape.prototype['getLocalScaling'] = btBoxShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btBoxShape_getLocalScaling_0(self), btVector3);
};;

btBoxShape.prototype['calculateLocalInertia'] = btBoxShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btBoxShape_calculateLocalInertia_2(self, mass, inertia);
};;

btBoxShape.prototype['isCompound'] = btBoxShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btBoxShape_isCompound_0(self));
};;

btBoxShape.prototype['getUserIndex'] = btBoxShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBoxShape_getUserIndex_0(self);
};;

btBoxShape.prototype['setUserIndex'] = btBoxShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btBoxShape_setUserIndex_1(self, index);
};;

btBoxShape.prototype['getUserIndex2'] = btBoxShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBoxShape_getUserIndex2_0(self);
};;

btBoxShape.prototype['setUserIndex2'] = btBoxShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btBoxShape_setUserIndex2_1(self, index);
};;

btBoxShape.prototype['getAabb'] = btBoxShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btBoxShape_getAabb_3(self, t, min, max);
};;

btBoxShape.prototype['getLocalBoundingSphere'] = btBoxShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBoxShape_getLocalBoundingSphere_0(self);
};;

btBoxShape.prototype['getImplicitShapeDimensions'] = btBoxShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btBoxShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btBoxShape.prototype['__destroy__'] = btBoxShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btBoxShape___destroy___0(self);
};
// btCapsuleShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCapsuleShape(radius, height) {
  if (radius && typeof radius === 'object') radius = radius.ptr;
  if (height && typeof height === 'object') height = height.ptr;
  this.ptr = _btCapsuleShape_btCapsuleShape_2(radius, height);
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
  _btCapsuleShape_setMargin_1(self, margin);
};;

btCapsuleShape.prototype['getMargin'] = btCapsuleShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCapsuleShape_getMargin_0(self);
};;

btCapsuleShape.prototype['updateProp'] = btCapsuleShape.prototype.updateProp = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r, h, upAxis) {
  var self = this.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  if (h && typeof h === 'object') h = h.ptr;
  if (upAxis && typeof upAxis === 'object') upAxis = upAxis.ptr;
  _btCapsuleShape_updateProp_3(self, r, h, upAxis);
};;

btCapsuleShape.prototype['setLocalScaling'] = btCapsuleShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btCapsuleShape_setLocalScaling_1(self, scaling);
};;

btCapsuleShape.prototype['getLocalScaling'] = btCapsuleShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCapsuleShape_getLocalScaling_0(self), btVector3);
};;

btCapsuleShape.prototype['calculateLocalInertia'] = btCapsuleShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btCapsuleShape_calculateLocalInertia_2(self, mass, inertia);
};;

btCapsuleShape.prototype['isCompound'] = btCapsuleShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btCapsuleShape_isCompound_0(self));
};;

btCapsuleShape.prototype['getUserIndex'] = btCapsuleShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCapsuleShape_getUserIndex_0(self);
};;

btCapsuleShape.prototype['setUserIndex'] = btCapsuleShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCapsuleShape_setUserIndex_1(self, index);
};;

btCapsuleShape.prototype['getUserIndex2'] = btCapsuleShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCapsuleShape_getUserIndex2_0(self);
};;

btCapsuleShape.prototype['setUserIndex2'] = btCapsuleShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCapsuleShape_setUserIndex2_1(self, index);
};;

btCapsuleShape.prototype['getAabb'] = btCapsuleShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btCapsuleShape_getAabb_3(self, t, min, max);
};;

btCapsuleShape.prototype['getLocalBoundingSphere'] = btCapsuleShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCapsuleShape_getLocalBoundingSphere_0(self);
};;

btCapsuleShape.prototype['getImplicitShapeDimensions'] = btCapsuleShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCapsuleShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btCapsuleShape.prototype['__destroy__'] = btCapsuleShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btCapsuleShape___destroy___0(self);
};
// btCompoundShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCompoundShape(enableDynamicAabbTree) {
  if (enableDynamicAabbTree && typeof enableDynamicAabbTree === 'object') enableDynamicAabbTree = enableDynamicAabbTree.ptr;
  if (enableDynamicAabbTree === undefined) { this.ptr = _btCompoundShape_btCompoundShape_0(); getCache(btCompoundShape)[this.ptr] = this;return }
  this.ptr = _btCompoundShape_btCompoundShape_1(enableDynamicAabbTree);
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
  _btCompoundShape_addChildShape_2(self, localTransform, shape);
};;

btCompoundShape.prototype['removeChildShape'] = btCompoundShape.prototype.removeChildShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(shape) {
  var self = this.ptr;
  if (shape && typeof shape === 'object') shape = shape.ptr;
  _btCompoundShape_removeChildShape_1(self, shape);
};;

btCompoundShape.prototype['removeChildShapeByIndex'] = btCompoundShape.prototype.removeChildShapeByIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(childShapeindex) {
  var self = this.ptr;
  if (childShapeindex && typeof childShapeindex === 'object') childShapeindex = childShapeindex.ptr;
  _btCompoundShape_removeChildShapeByIndex_1(self, childShapeindex);
};;

btCompoundShape.prototype['getNumChildShapes'] = btCompoundShape.prototype.getNumChildShapes = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCompoundShape_getNumChildShapes_0(self);
};;

btCompoundShape.prototype['getChildShape'] = btCompoundShape.prototype.getChildShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_btCompoundShape_getChildShape_1(self, index), btCollisionShape);
};;

btCompoundShape.prototype['updateChildTransform'] = btCompoundShape.prototype.updateChildTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(childIndex, newChildTransform, shouldRecalculateLocalAabb) {
  var self = this.ptr;
  if (childIndex && typeof childIndex === 'object') childIndex = childIndex.ptr;
  if (newChildTransform && typeof newChildTransform === 'object') newChildTransform = newChildTransform.ptr;
  if (shouldRecalculateLocalAabb && typeof shouldRecalculateLocalAabb === 'object') shouldRecalculateLocalAabb = shouldRecalculateLocalAabb.ptr;
  if (shouldRecalculateLocalAabb === undefined) { _btCompoundShape_updateChildTransform_2(self, childIndex, newChildTransform);  return }
  _btCompoundShape_updateChildTransform_3(self, childIndex, newChildTransform, shouldRecalculateLocalAabb);
};;

btCompoundShape.prototype['setMargin'] = btCompoundShape.prototype.setMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(margin) {
  var self = this.ptr;
  if (margin && typeof margin === 'object') margin = margin.ptr;
  _btCompoundShape_setMargin_1(self, margin);
};;

btCompoundShape.prototype['getMargin'] = btCompoundShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCompoundShape_getMargin_0(self);
};;

btCompoundShape.prototype['setMaterial'] = btCompoundShape.prototype.setMaterial = /** @suppress {undefinedVars, duplicate} @this{Object} */function(childShapeindex, f, r, rf, sf, m) {
  var self = this.ptr;
  if (childShapeindex && typeof childShapeindex === 'object') childShapeindex = childShapeindex.ptr;
  if (f && typeof f === 'object') f = f.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  if (rf && typeof rf === 'object') rf = rf.ptr;
  if (sf && typeof sf === 'object') sf = sf.ptr;
  if (m && typeof m === 'object') m = m.ptr;
  if (rf === undefined) { _btCompoundShape_setMaterial_3(self, childShapeindex, f, r);  return }
  if (sf === undefined) { _btCompoundShape_setMaterial_4(self, childShapeindex, f, r, rf);  return }
  if (m === undefined) { _btCompoundShape_setMaterial_5(self, childShapeindex, f, r, rf, sf);  return }
  _btCompoundShape_setMaterial_6(self, childShapeindex, f, r, rf, sf, m);
};;

btCompoundShape.prototype['setLocalScaling'] = btCompoundShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btCompoundShape_setLocalScaling_1(self, scaling);
};;

btCompoundShape.prototype['getLocalScaling'] = btCompoundShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCompoundShape_getLocalScaling_0(self), btVector3);
};;

btCompoundShape.prototype['calculateLocalInertia'] = btCompoundShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btCompoundShape_calculateLocalInertia_2(self, mass, inertia);
};;

btCompoundShape.prototype['isCompound'] = btCompoundShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btCompoundShape_isCompound_0(self));
};;

btCompoundShape.prototype['getUserIndex'] = btCompoundShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCompoundShape_getUserIndex_0(self);
};;

btCompoundShape.prototype['setUserIndex'] = btCompoundShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCompoundShape_setUserIndex_1(self, index);
};;

btCompoundShape.prototype['getUserIndex2'] = btCompoundShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCompoundShape_getUserIndex2_0(self);
};;

btCompoundShape.prototype['setUserIndex2'] = btCompoundShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCompoundShape_setUserIndex2_1(self, index);
};;

btCompoundShape.prototype['getAabb'] = btCompoundShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btCompoundShape_getAabb_3(self, t, min, max);
};;

btCompoundShape.prototype['getLocalBoundingSphere'] = btCompoundShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCompoundShape_getLocalBoundingSphere_0(self);
};;

  btCompoundShape.prototype['__destroy__'] = btCompoundShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btCompoundShape___destroy___0(self);
};
// btDefaultMotionState
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDefaultMotionState(startTrans, centerOfMassOffset) {
  if (startTrans && typeof startTrans === 'object') startTrans = startTrans.ptr;
  if (centerOfMassOffset && typeof centerOfMassOffset === 'object') centerOfMassOffset = centerOfMassOffset.ptr;
  if (startTrans === undefined) { this.ptr = _btDefaultMotionState_btDefaultMotionState_0(); getCache(btDefaultMotionState)[this.ptr] = this;return }
  if (centerOfMassOffset === undefined) { this.ptr = _btDefaultMotionState_btDefaultMotionState_1(startTrans); getCache(btDefaultMotionState)[this.ptr] = this;return }
  this.ptr = _btDefaultMotionState_btDefaultMotionState_2(startTrans, centerOfMassOffset);
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
  _btDefaultMotionState_getWorldTransform_1(self, worldTrans);
};;

btDefaultMotionState.prototype['setWorldTransform'] = btDefaultMotionState.prototype.setWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _btDefaultMotionState_setWorldTransform_1(self, worldTrans);
};;

  btDefaultMotionState.prototype['__destroy__'] = btDefaultMotionState.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btDefaultMotionState___destroy___0(self);
};
// btHingeConstraint
/** @suppress {undefinedVars, duplicate} @this{Object} */function btHingeConstraint(rbA, rbB, rbAFrame, rbBFrame, useReferenceFrameA) {
  if (rbA && typeof rbA === 'object') rbA = rbA.ptr;
  if (rbB && typeof rbB === 'object') rbB = rbB.ptr;
  if (rbAFrame && typeof rbAFrame === 'object') rbAFrame = rbAFrame.ptr;
  if (rbBFrame && typeof rbBFrame === 'object') rbBFrame = rbBFrame.ptr;
  if (useReferenceFrameA && typeof useReferenceFrameA === 'object') useReferenceFrameA = useReferenceFrameA.ptr;
  if (useReferenceFrameA === undefined) { this.ptr = _btHingeConstraint_btHingeConstraint_4(rbA, rbB, rbAFrame, rbBFrame); getCache(btHingeConstraint)[this.ptr] = this;return }
  this.ptr = _btHingeConstraint_btHingeConstraint_5(rbA, rbB, rbAFrame, rbBFrame, useReferenceFrameA);
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
  if (relaxationFactor === undefined) { _btHingeConstraint_setLimit_4(self, low, high, softness, biasFactor);  return }
  _btHingeConstraint_setLimit_5(self, low, high, softness, biasFactor, relaxationFactor);
};;

btHingeConstraint.prototype['enableAngularMotor'] = btHingeConstraint.prototype.enableAngularMotor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(enableMotor, targetVelocity, maxMotorImpulse) {
  var self = this.ptr;
  if (enableMotor && typeof enableMotor === 'object') enableMotor = enableMotor.ptr;
  if (targetVelocity && typeof targetVelocity === 'object') targetVelocity = targetVelocity.ptr;
  if (maxMotorImpulse && typeof maxMotorImpulse === 'object') maxMotorImpulse = maxMotorImpulse.ptr;
  _btHingeConstraint_enableAngularMotor_3(self, enableMotor, targetVelocity, maxMotorImpulse);
};;

btHingeConstraint.prototype['setAngularOnly'] = btHingeConstraint.prototype.setAngularOnly = /** @suppress {undefinedVars, duplicate} @this{Object} */function(angularOnly) {
  var self = this.ptr;
  if (angularOnly && typeof angularOnly === 'object') angularOnly = angularOnly.ptr;
  _btHingeConstraint_setAngularOnly_1(self, angularOnly);
};;

btHingeConstraint.prototype['enableMotor'] = btHingeConstraint.prototype.enableMotor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(enableMotor) {
  var self = this.ptr;
  if (enableMotor && typeof enableMotor === 'object') enableMotor = enableMotor.ptr;
  _btHingeConstraint_enableMotor_1(self, enableMotor);
};;

btHingeConstraint.prototype['setMaxMotorImpulse'] = btHingeConstraint.prototype.setMaxMotorImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(maxMotorImpulse) {
  var self = this.ptr;
  if (maxMotorImpulse && typeof maxMotorImpulse === 'object') maxMotorImpulse = maxMotorImpulse.ptr;
  _btHingeConstraint_setMaxMotorImpulse_1(self, maxMotorImpulse);
};;

btHingeConstraint.prototype['setMotorTarget'] = btHingeConstraint.prototype.setMotorTarget = /** @suppress {undefinedVars, duplicate} @this{Object} */function(targetAngle, dt) {
  var self = this.ptr;
  if (targetAngle && typeof targetAngle === 'object') targetAngle = targetAngle.ptr;
  if (dt && typeof dt === 'object') dt = dt.ptr;
  _btHingeConstraint_setMotorTarget_2(self, targetAngle, dt);
};;

btHingeConstraint.prototype['setFrames'] = btHingeConstraint.prototype.setFrames = /** @suppress {undefinedVars, duplicate} @this{Object} */function(frameA, frameB) {
  var self = this.ptr;
  if (frameA && typeof frameA === 'object') frameA = frameA.ptr;
  if (frameB && typeof frameB === 'object') frameB = frameB.ptr;
  _btHingeConstraint_setFrames_2(self, frameA, frameB);
};;

btHingeConstraint.prototype['setAxis'] = btHingeConstraint.prototype.setAxis = /** @suppress {undefinedVars, duplicate} @this{Object} */function(axisInA) {
  var self = this.ptr;
  if (axisInA && typeof axisInA === 'object') axisInA = axisInA.ptr;
  _btHingeConstraint_setAxis_1(self, axisInA);
};;

btHingeConstraint.prototype['setUseReferenceFrameA'] = btHingeConstraint.prototype.setUseReferenceFrameA = /** @suppress {undefinedVars, duplicate} @this{Object} */function(urfa) {
  var self = this.ptr;
  if (urfa && typeof urfa === 'object') urfa = urfa.ptr;
  _btHingeConstraint_setUseReferenceFrameA_1(self, urfa);
};;

btHingeConstraint.prototype['enableFeedback'] = btHingeConstraint.prototype.enableFeedback = /** @suppress {undefinedVars, duplicate} @this{Object} */function(needsFeedback) {
  var self = this.ptr;
  if (needsFeedback && typeof needsFeedback === 'object') needsFeedback = needsFeedback.ptr;
  _btHingeConstraint_enableFeedback_1(self, needsFeedback);
};;

btHingeConstraint.prototype['getBreakingImpulseThreshold'] = btHingeConstraint.prototype.getBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btHingeConstraint_getBreakingImpulseThreshold_0(self);
};;

btHingeConstraint.prototype['setBreakingImpulseThreshold'] = btHingeConstraint.prototype.setBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(threshold) {
  var self = this.ptr;
  if (threshold && typeof threshold === 'object') threshold = threshold.ptr;
  _btHingeConstraint_setBreakingImpulseThreshold_1(self, threshold);
};;

btHingeConstraint.prototype['getParam'] = btHingeConstraint.prototype.getParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  return _btHingeConstraint_getParam_2(self, num, axis);
};;

btHingeConstraint.prototype['setParam'] = btHingeConstraint.prototype.setParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, value, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  _btHingeConstraint_setParam_3(self, num, value, axis);
};;

  btHingeConstraint.prototype['__destroy__'] = btHingeConstraint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btHingeConstraint___destroy___0(self);
};
// btQuaternion
/** @suppress {undefinedVars, duplicate} @this{Object} */function btQuaternion(x, y, z, w) {
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  if (w && typeof w === 'object') w = w.ptr;
  this.ptr = _btQuaternion_btQuaternion_4(x, y, z, w);
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
  _btQuaternion_setValue_4(self, x, y, z, w);
};;

btQuaternion.prototype['x'] = btQuaternion.prototype.x = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btQuaternion_x_0(self);
};;

btQuaternion.prototype['y'] = btQuaternion.prototype.y = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btQuaternion_y_0(self);
};;

btQuaternion.prototype['z'] = btQuaternion.prototype.z = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btQuaternion_z_0(self);
};;

btQuaternion.prototype['w'] = btQuaternion.prototype.w = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btQuaternion_w_0(self);
};;

btQuaternion.prototype['setX'] = btQuaternion.prototype.setX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  _btQuaternion_setX_1(self, x);
};;

btQuaternion.prototype['setY'] = btQuaternion.prototype.setY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(y) {
  var self = this.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  _btQuaternion_setY_1(self, y);
};;

btQuaternion.prototype['setZ'] = btQuaternion.prototype.setZ = /** @suppress {undefinedVars, duplicate} @this{Object} */function(z) {
  var self = this.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  _btQuaternion_setZ_1(self, z);
};;

btQuaternion.prototype['setW'] = btQuaternion.prototype.setW = /** @suppress {undefinedVars, duplicate} @this{Object} */function(w) {
  var self = this.ptr;
  if (w && typeof w === 'object') w = w.ptr;
  _btQuaternion_setW_1(self, w);
};;

  btQuaternion.prototype['__destroy__'] = btQuaternion.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btQuaternion___destroy___0(self);
};
// btConeShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConeShape(radius, height) {
  if (radius && typeof radius === 'object') radius = radius.ptr;
  if (height && typeof height === 'object') height = height.ptr;
  this.ptr = _btConeShape_btConeShape_2(radius, height);
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
  _btConeShape_setRadius_1(self, radius);
};;

btConeShape.prototype['setHeight'] = btConeShape.prototype.setHeight = /** @suppress {undefinedVars, duplicate} @this{Object} */function(height) {
  var self = this.ptr;
  if (height && typeof height === 'object') height = height.ptr;
  _btConeShape_setHeight_1(self, height);
};;

btConeShape.prototype['setConeUpIndex'] = btConeShape.prototype.setConeUpIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(upIndex) {
  var self = this.ptr;
  if (upIndex && typeof upIndex === 'object') upIndex = upIndex.ptr;
  _btConeShape_setConeUpIndex_1(self, upIndex);
};;

btConeShape.prototype['setLocalScaling'] = btConeShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btConeShape_setLocalScaling_1(self, scaling);
};;

btConeShape.prototype['getLocalScaling'] = btConeShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btConeShape_getLocalScaling_0(self), btVector3);
};;

btConeShape.prototype['calculateLocalInertia'] = btConeShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btConeShape_calculateLocalInertia_2(self, mass, inertia);
};;

btConeShape.prototype['isCompound'] = btConeShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btConeShape_isCompound_0(self));
};;

btConeShape.prototype['getUserIndex'] = btConeShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConeShape_getUserIndex_0(self);
};;

btConeShape.prototype['setUserIndex'] = btConeShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConeShape_setUserIndex_1(self, index);
};;

btConeShape.prototype['getUserIndex2'] = btConeShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConeShape_getUserIndex2_0(self);
};;

btConeShape.prototype['setUserIndex2'] = btConeShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btConeShape_setUserIndex2_1(self, index);
};;

btConeShape.prototype['getAabb'] = btConeShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btConeShape_getAabb_3(self, t, min, max);
};;

btConeShape.prototype['getLocalBoundingSphere'] = btConeShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConeShape_getLocalBoundingSphere_0(self);
};;

btConeShape.prototype['getImplicitShapeDimensions'] = btConeShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btConeShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btConeShape.prototype['__destroy__'] = btConeShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btConeShape___destroy___0(self);
};
// btBU_Simplex1to4
/** @suppress {undefinedVars, duplicate} @this{Object} */function btBU_Simplex1to4() {
  this.ptr = _btBU_Simplex1to4_btBU_Simplex1to4_0();
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
  _btBU_Simplex1to4_addVertex_1(self, pt);
};;

btBU_Simplex1to4.prototype['setLocalScaling'] = btBU_Simplex1to4.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btBU_Simplex1to4_setLocalScaling_1(self, scaling);
};;

btBU_Simplex1to4.prototype['getLocalScaling'] = btBU_Simplex1to4.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btBU_Simplex1to4_getLocalScaling_0(self), btVector3);
};;

btBU_Simplex1to4.prototype['calculateLocalInertia'] = btBU_Simplex1to4.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btBU_Simplex1to4_calculateLocalInertia_2(self, mass, inertia);
};;

btBU_Simplex1to4.prototype['isCompound'] = btBU_Simplex1to4.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btBU_Simplex1to4_isCompound_0(self));
};;

btBU_Simplex1to4.prototype['getUserIndex'] = btBU_Simplex1to4.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBU_Simplex1to4_getUserIndex_0(self);
};;

btBU_Simplex1to4.prototype['setUserIndex'] = btBU_Simplex1to4.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btBU_Simplex1to4_setUserIndex_1(self, index);
};;

btBU_Simplex1to4.prototype['getUserIndex2'] = btBU_Simplex1to4.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBU_Simplex1to4_getUserIndex2_0(self);
};;

btBU_Simplex1to4.prototype['setUserIndex2'] = btBU_Simplex1to4.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btBU_Simplex1to4_setUserIndex2_1(self, index);
};;

btBU_Simplex1to4.prototype['getAabb'] = btBU_Simplex1to4.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btBU_Simplex1to4_getAabb_3(self, t, min, max);
};;

btBU_Simplex1to4.prototype['getLocalBoundingSphere'] = btBU_Simplex1to4.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btBU_Simplex1to4_getLocalBoundingSphere_0(self);
};;

  btBU_Simplex1to4.prototype['__destroy__'] = btBU_Simplex1to4.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btBU_Simplex1to4___destroy___0(self);
};
// btContactSolverInfo
/** @suppress {undefinedVars, duplicate} @this{Object} */function btContactSolverInfo() { throw "cannot construct a btContactSolverInfo, no constructor in IDL" }
btContactSolverInfo.prototype = Object.create(WrapperObject.prototype);
btContactSolverInfo.prototype.constructor = btContactSolverInfo;
btContactSolverInfo.prototype.__class__ = btContactSolverInfo;
btContactSolverInfo.__cache__ = {};
Module['btContactSolverInfo'] = btContactSolverInfo;

  btContactSolverInfo.prototype['get_m_splitImpulse'] = btContactSolverInfo.prototype.get_m_splitImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btContactSolverInfo_get_m_splitImpulse_0(self));
};
    btContactSolverInfo.prototype['set_m_splitImpulse'] = btContactSolverInfo.prototype.set_m_splitImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btContactSolverInfo_set_m_splitImpulse_1(self, arg0);
};
    Object.defineProperty(btContactSolverInfo.prototype, 'm_splitImpulse', { get: btContactSolverInfo.prototype.get_m_splitImpulse, set: btContactSolverInfo.prototype.set_m_splitImpulse });
  btContactSolverInfo.prototype['get_m_splitImpulsePenetrationThreshold'] = btContactSolverInfo.prototype.get_m_splitImpulsePenetrationThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0(self);
};
    btContactSolverInfo.prototype['set_m_splitImpulsePenetrationThreshold'] = btContactSolverInfo.prototype.set_m_splitImpulsePenetrationThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1(self, arg0);
};
    Object.defineProperty(btContactSolverInfo.prototype, 'm_splitImpulsePenetrationThreshold', { get: btContactSolverInfo.prototype.get_m_splitImpulsePenetrationThreshold, set: btContactSolverInfo.prototype.set_m_splitImpulsePenetrationThreshold });
  btContactSolverInfo.prototype['get_m_numIterations'] = btContactSolverInfo.prototype.get_m_numIterations = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btContactSolverInfo_get_m_numIterations_0(self);
};
    btContactSolverInfo.prototype['set_m_numIterations'] = btContactSolverInfo.prototype.set_m_numIterations = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btContactSolverInfo_set_m_numIterations_1(self, arg0);
};
    Object.defineProperty(btContactSolverInfo.prototype, 'm_numIterations', { get: btContactSolverInfo.prototype.get_m_numIterations, set: btContactSolverInfo.prototype.set_m_numIterations });
  btContactSolverInfo.prototype['__destroy__'] = btContactSolverInfo.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btContactSolverInfo___destroy___0(self);
};
// btStaticPlaneShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btStaticPlaneShape(planeNormal, planeConstant) {
  if (planeNormal && typeof planeNormal === 'object') planeNormal = planeNormal.ptr;
  if (planeConstant && typeof planeConstant === 'object') planeConstant = planeConstant.ptr;
  this.ptr = _btStaticPlaneShape_btStaticPlaneShape_2(planeNormal, planeConstant);
  getCache(btStaticPlaneShape)[this.ptr] = this;
};;
btStaticPlaneShape.prototype = Object.create(btConcaveShape.prototype);
btStaticPlaneShape.prototype.constructor = btStaticPlaneShape;
btStaticPlaneShape.prototype.__class__ = btStaticPlaneShape;
btStaticPlaneShape.__cache__ = {};
Module['btStaticPlaneShape'] = btStaticPlaneShape;

btStaticPlaneShape.prototype['getPlaneNormal'] = btStaticPlaneShape.prototype.getPlaneNormal = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btStaticPlaneShape_getPlaneNormal_0(self), btVector3);
};;

btStaticPlaneShape.prototype['setPlaneConstant'] = btStaticPlaneShape.prototype.setPlaneConstant = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _btStaticPlaneShape_setPlaneConstant_1(self, v);
};;

btStaticPlaneShape.prototype['setLocalScaling'] = btStaticPlaneShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btStaticPlaneShape_setLocalScaling_1(self, scaling);
};;

btStaticPlaneShape.prototype['getLocalScaling'] = btStaticPlaneShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btStaticPlaneShape_getLocalScaling_0(self), btVector3);
};;

btStaticPlaneShape.prototype['calculateLocalInertia'] = btStaticPlaneShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btStaticPlaneShape_calculateLocalInertia_2(self, mass, inertia);
};;

btStaticPlaneShape.prototype['isCompound'] = btStaticPlaneShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btStaticPlaneShape_isCompound_0(self));
};;

btStaticPlaneShape.prototype['getUserIndex'] = btStaticPlaneShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btStaticPlaneShape_getUserIndex_0(self);
};;

btStaticPlaneShape.prototype['setUserIndex'] = btStaticPlaneShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btStaticPlaneShape_setUserIndex_1(self, index);
};;

btStaticPlaneShape.prototype['getUserIndex2'] = btStaticPlaneShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btStaticPlaneShape_getUserIndex2_0(self);
};;

btStaticPlaneShape.prototype['setUserIndex2'] = btStaticPlaneShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btStaticPlaneShape_setUserIndex2_1(self, index);
};;

btStaticPlaneShape.prototype['getAabb'] = btStaticPlaneShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btStaticPlaneShape_getAabb_3(self, t, min, max);
};;

btStaticPlaneShape.prototype['getLocalBoundingSphere'] = btStaticPlaneShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btStaticPlaneShape_getLocalBoundingSphere_0(self);
};;

  btStaticPlaneShape.prototype['__destroy__'] = btStaticPlaneShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btStaticPlaneShape___destroy___0(self);
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
  _btActionInterface_updateAction_2(self, collisionWorld, deltaTimeStep);
};;

  btActionInterface.prototype['__destroy__'] = btActionInterface.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btActionInterface___destroy___0(self);
};
// btOverlappingPairCache
/** @suppress {undefinedVars, duplicate} @this{Object} */function btOverlappingPairCache() { throw "cannot construct a btOverlappingPairCache, no constructor in IDL" }
btOverlappingPairCache.prototype = Object.create(WrapperObject.prototype);
btOverlappingPairCache.prototype.constructor = btOverlappingPairCache;
btOverlappingPairCache.prototype.__class__ = btOverlappingPairCache;
btOverlappingPairCache.__cache__ = {};
Module['btOverlappingPairCache'] = btOverlappingPairCache;

btOverlappingPairCache.prototype['setInternalGhostPairCallback'] = btOverlappingPairCache.prototype.setInternalGhostPairCallback = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ghostPairCallback) {
  var self = this.ptr;
  if (ghostPairCallback && typeof ghostPairCallback === 'object') ghostPairCallback = ghostPairCallback.ptr;
  _btOverlappingPairCache_setInternalGhostPairCallback_1(self, ghostPairCallback);
};;

btOverlappingPairCache.prototype['setOverlapFilterCallback'] = btOverlappingPairCache.prototype.setOverlapFilterCallback = /** @suppress {undefinedVars, duplicate} @this{Object} */function(cb) {
  var self = this.ptr;
  if (cb && typeof cb === 'object') cb = cb.ptr;
  _btOverlappingPairCache_setOverlapFilterCallback_1(self, cb);
};;

btOverlappingPairCache.prototype['getNumOverlappingPairs'] = btOverlappingPairCache.prototype.getNumOverlappingPairs = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btOverlappingPairCache_getNumOverlappingPairs_0(self);
};;

  btOverlappingPairCache.prototype['__destroy__'] = btOverlappingPairCache.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btOverlappingPairCache___destroy___0(self);
};
// btVector3
/** @suppress {undefinedVars, duplicate} @this{Object} */function btVector3(x, y, z) {
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  if (x === undefined) { this.ptr = _btVector3_btVector3_0(); getCache(btVector3)[this.ptr] = this;return }
  if (y === undefined) { this.ptr = _btVector3_btVector3_1(x); getCache(btVector3)[this.ptr] = this;return }
  if (z === undefined) { this.ptr = _btVector3_btVector3_2(x, y); getCache(btVector3)[this.ptr] = this;return }
  this.ptr = _btVector3_btVector3_3(x, y, z);
  getCache(btVector3)[this.ptr] = this;
};;
btVector3.prototype = Object.create(WrapperObject.prototype);
btVector3.prototype.constructor = btVector3;
btVector3.prototype.__class__ = btVector3;
btVector3.__cache__ = {};
Module['btVector3'] = btVector3;

btVector3.prototype['x'] = btVector3.prototype.x = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btVector3_x_0(self);
};;

btVector3.prototype['y'] = btVector3.prototype.y = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btVector3_y_0(self);
};;

btVector3.prototype['z'] = btVector3.prototype.z = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btVector3_z_0(self);
};;

btVector3.prototype['setX'] = btVector3.prototype.setX = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  _btVector3_setX_1(self, x);
};;

btVector3.prototype['setY'] = btVector3.prototype.setY = /** @suppress {undefinedVars, duplicate} @this{Object} */function(y) {
  var self = this.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  _btVector3_setY_1(self, y);
};;

btVector3.prototype['setZ'] = btVector3.prototype.setZ = /** @suppress {undefinedVars, duplicate} @this{Object} */function(z) {
  var self = this.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  _btVector3_setZ_1(self, z);
};;

btVector3.prototype['setValue'] = btVector3.prototype.setValue = /** @suppress {undefinedVars, duplicate} @this{Object} */function(x, y, z) {
  var self = this.ptr;
  if (x && typeof x === 'object') x = x.ptr;
  if (y && typeof y === 'object') y = y.ptr;
  if (z && typeof z === 'object') z = z.ptr;
  _btVector3_setValue_3(self, x, y, z);
};;

  btVector3.prototype['__destroy__'] = btVector3.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btVector3___destroy___0(self);
};
// btSphereShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btSphereShape(radius) {
  if (radius && typeof radius === 'object') radius = radius.ptr;
  this.ptr = _btSphereShape_btSphereShape_1(radius);
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
  _btSphereShape_setMargin_1(self, margin);
};;

btSphereShape.prototype['getMargin'] = btSphereShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btSphereShape_getMargin_0(self);
};;

btSphereShape.prototype['setUnscaledRadius'] = btSphereShape.prototype.setUnscaledRadius = /** @suppress {undefinedVars, duplicate} @this{Object} */function(radius) {
  var self = this.ptr;
  if (radius && typeof radius === 'object') radius = radius.ptr;
  _btSphereShape_setUnscaledRadius_1(self, radius);
};;

btSphereShape.prototype['setLocalScaling'] = btSphereShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btSphereShape_setLocalScaling_1(self, scaling);
};;

btSphereShape.prototype['getLocalScaling'] = btSphereShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btSphereShape_getLocalScaling_0(self), btVector3);
};;

btSphereShape.prototype['calculateLocalInertia'] = btSphereShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btSphereShape_calculateLocalInertia_2(self, mass, inertia);
};;

btSphereShape.prototype['isCompound'] = btSphereShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btSphereShape_isCompound_0(self));
};;

btSphereShape.prototype['getUserIndex'] = btSphereShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btSphereShape_getUserIndex_0(self);
};;

btSphereShape.prototype['setUserIndex'] = btSphereShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btSphereShape_setUserIndex_1(self, index);
};;

btSphereShape.prototype['getUserIndex2'] = btSphereShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btSphereShape_getUserIndex2_0(self);
};;

btSphereShape.prototype['setUserIndex2'] = btSphereShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btSphereShape_setUserIndex2_1(self, index);
};;

btSphereShape.prototype['getAabb'] = btSphereShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btSphereShape_getAabb_3(self, t, min, max);
};;

btSphereShape.prototype['getLocalBoundingSphere'] = btSphereShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btSphereShape_getLocalBoundingSphere_0(self);
};;

btSphereShape.prototype['getImplicitShapeDimensions'] = btSphereShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btSphereShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btSphereShape.prototype['__destroy__'] = btSphereShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btSphereShape___destroy___0(self);
};
// btDefaultCollisionConstructionInfo
/** @suppress {undefinedVars, duplicate} @this{Object} */function btDefaultCollisionConstructionInfo() {
  this.ptr = _btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0();
  getCache(btDefaultCollisionConstructionInfo)[this.ptr] = this;
};;
btDefaultCollisionConstructionInfo.prototype = Object.create(WrapperObject.prototype);
btDefaultCollisionConstructionInfo.prototype.constructor = btDefaultCollisionConstructionInfo;
btDefaultCollisionConstructionInfo.prototype.__class__ = btDefaultCollisionConstructionInfo;
btDefaultCollisionConstructionInfo.__cache__ = {};
Module['btDefaultCollisionConstructionInfo'] = btDefaultCollisionConstructionInfo;

  btDefaultCollisionConstructionInfo.prototype['__destroy__'] = btDefaultCollisionConstructionInfo.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btDefaultCollisionConstructionInfo___destroy___0(self);
};
// btEmptyShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btEmptyShape() {
  this.ptr = _btEmptyShape_btEmptyShape_0();
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
  _btEmptyShape_setLocalScaling_1(self, scaling);
};;

btEmptyShape.prototype['getLocalScaling'] = btEmptyShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btEmptyShape_getLocalScaling_0(self), btVector3);
};;

btEmptyShape.prototype['calculateLocalInertia'] = btEmptyShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btEmptyShape_calculateLocalInertia_2(self, mass, inertia);
};;

btEmptyShape.prototype['isCompound'] = btEmptyShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btEmptyShape_isCompound_0(self));
};;

btEmptyShape.prototype['getUserIndex'] = btEmptyShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btEmptyShape_getUserIndex_0(self);
};;

btEmptyShape.prototype['setUserIndex'] = btEmptyShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btEmptyShape_setUserIndex_1(self, index);
};;

btEmptyShape.prototype['getUserIndex2'] = btEmptyShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btEmptyShape_getUserIndex2_0(self);
};;

btEmptyShape.prototype['setUserIndex2'] = btEmptyShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btEmptyShape_setUserIndex2_1(self, index);
};;

btEmptyShape.prototype['getAabb'] = btEmptyShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btEmptyShape_getAabb_3(self, t, min, max);
};;

btEmptyShape.prototype['getLocalBoundingSphere'] = btEmptyShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btEmptyShape_getLocalBoundingSphere_0(self);
};;

  btEmptyShape.prototype['__destroy__'] = btEmptyShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btEmptyShape___destroy___0(self);
};
// btConstraintSetting
/** @suppress {undefinedVars, duplicate} @this{Object} */function btConstraintSetting() {
  this.ptr = _btConstraintSetting_btConstraintSetting_0();
  getCache(btConstraintSetting)[this.ptr] = this;
};;
btConstraintSetting.prototype = Object.create(WrapperObject.prototype);
btConstraintSetting.prototype.constructor = btConstraintSetting;
btConstraintSetting.prototype.__class__ = btConstraintSetting;
btConstraintSetting.__cache__ = {};
Module['btConstraintSetting'] = btConstraintSetting;

  btConstraintSetting.prototype['get_m_tau'] = btConstraintSetting.prototype.get_m_tau = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConstraintSetting_get_m_tau_0(self);
};
    btConstraintSetting.prototype['set_m_tau'] = btConstraintSetting.prototype.set_m_tau = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btConstraintSetting_set_m_tau_1(self, arg0);
};
    Object.defineProperty(btConstraintSetting.prototype, 'm_tau', { get: btConstraintSetting.prototype.get_m_tau, set: btConstraintSetting.prototype.set_m_tau });
  btConstraintSetting.prototype['get_m_damping'] = btConstraintSetting.prototype.get_m_damping = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConstraintSetting_get_m_damping_0(self);
};
    btConstraintSetting.prototype['set_m_damping'] = btConstraintSetting.prototype.set_m_damping = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btConstraintSetting_set_m_damping_1(self, arg0);
};
    Object.defineProperty(btConstraintSetting.prototype, 'm_damping', { get: btConstraintSetting.prototype.get_m_damping, set: btConstraintSetting.prototype.set_m_damping });
  btConstraintSetting.prototype['get_m_impulseClamp'] = btConstraintSetting.prototype.get_m_impulseClamp = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btConstraintSetting_get_m_impulseClamp_0(self);
};
    btConstraintSetting.prototype['set_m_impulseClamp'] = btConstraintSetting.prototype.set_m_impulseClamp = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _btConstraintSetting_set_m_impulseClamp_1(self, arg0);
};
    Object.defineProperty(btConstraintSetting.prototype, 'm_impulseClamp', { get: btConstraintSetting.prototype.get_m_impulseClamp, set: btConstraintSetting.prototype.set_m_impulseClamp });
  btConstraintSetting.prototype['__destroy__'] = btConstraintSetting.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btConstraintSetting___destroy___0(self);
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
  return _LocalShapeInfo_get_m_shapePart_0(self);
};
    LocalShapeInfo.prototype['set_m_shapePart'] = LocalShapeInfo.prototype.set_m_shapePart = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _LocalShapeInfo_set_m_shapePart_1(self, arg0);
};
    Object.defineProperty(LocalShapeInfo.prototype, 'm_shapePart', { get: LocalShapeInfo.prototype.get_m_shapePart, set: LocalShapeInfo.prototype.set_m_shapePart });
  LocalShapeInfo.prototype['get_m_triangleIndex'] = LocalShapeInfo.prototype.get_m_triangleIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _LocalShapeInfo_get_m_triangleIndex_0(self);
};
    LocalShapeInfo.prototype['set_m_triangleIndex'] = LocalShapeInfo.prototype.set_m_triangleIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(arg0) {
  var self = this.ptr;
  if (arg0 && typeof arg0 === 'object') arg0 = arg0.ptr;
  _LocalShapeInfo_set_m_triangleIndex_1(self, arg0);
};
    Object.defineProperty(LocalShapeInfo.prototype, 'm_triangleIndex', { get: LocalShapeInfo.prototype.get_m_triangleIndex, set: LocalShapeInfo.prototype.set_m_triangleIndex });
  LocalShapeInfo.prototype['__destroy__'] = LocalShapeInfo.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _LocalShapeInfo___destroy___0(self);
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
  return _btVector3Array_size_0(self);
};;

btVector3Array.prototype['at'] = btVector3Array.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return wrapPointer(_btVector3Array_at_1(self, n), btVector3);
};;

btVector3Array.prototype['clear'] = btVector3Array.prototype.clear = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btVector3Array_clear_0(self);
};;

  btVector3Array.prototype['__destroy__'] = btVector3Array.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btVector3Array___destroy___0(self);
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
  _btConstraintSolver___destroy___0(self);
};
// btFixedConstraint
/** @suppress {undefinedVars, duplicate} @this{Object} */function btFixedConstraint(rbA, rbB, frameInA, frameInB) {
  if (rbA && typeof rbA === 'object') rbA = rbA.ptr;
  if (rbB && typeof rbB === 'object') rbB = rbB.ptr;
  if (frameInA && typeof frameInA === 'object') frameInA = frameInA.ptr;
  if (frameInB && typeof frameInB === 'object') frameInB = frameInB.ptr;
  this.ptr = _btFixedConstraint_btFixedConstraint_4(rbA, rbB, frameInA, frameInB);
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
  _btFixedConstraint_enableFeedback_1(self, needsFeedback);
};;

btFixedConstraint.prototype['getBreakingImpulseThreshold'] = btFixedConstraint.prototype.getBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btFixedConstraint_getBreakingImpulseThreshold_0(self);
};;

btFixedConstraint.prototype['setBreakingImpulseThreshold'] = btFixedConstraint.prototype.setBreakingImpulseThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(threshold) {
  var self = this.ptr;
  if (threshold && typeof threshold === 'object') threshold = threshold.ptr;
  _btFixedConstraint_setBreakingImpulseThreshold_1(self, threshold);
};;

btFixedConstraint.prototype['getParam'] = btFixedConstraint.prototype.getParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  return _btFixedConstraint_getParam_2(self, num, axis);
};;

btFixedConstraint.prototype['setParam'] = btFixedConstraint.prototype.setParam = /** @suppress {undefinedVars, duplicate} @this{Object} */function(num, value, axis) {
  var self = this.ptr;
  if (num && typeof num === 'object') num = num.ptr;
  if (value && typeof value === 'object') value = value.ptr;
  if (axis && typeof axis === 'object') axis = axis.ptr;
  _btFixedConstraint_setParam_3(self, num, value, axis);
};;

  btFixedConstraint.prototype['__destroy__'] = btFixedConstraint.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btFixedConstraint___destroy___0(self);
};
// btCollisionDispatcher
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCollisionDispatcher(conf) {
  if (conf && typeof conf === 'object') conf = conf.ptr;
  this.ptr = _btCollisionDispatcher_btCollisionDispatcher_1(conf);
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
  _btCollisionDispatcher_setDispatcherFlags_1(self, flags);
};;

btCollisionDispatcher.prototype['getNumManifolds'] = btCollisionDispatcher.prototype.getNumManifolds = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCollisionDispatcher_getNumManifolds_0(self);
};;

btCollisionDispatcher.prototype['getManifoldByIndexInternal'] = btCollisionDispatcher.prototype.getManifoldByIndexInternal = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  return wrapPointer(_btCollisionDispatcher_getManifoldByIndexInternal_1(self, index), btPersistentManifold);
};;

  btCollisionDispatcher.prototype['__destroy__'] = btCollisionDispatcher.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btCollisionDispatcher___destroy___0(self);
};
// btRigidBody
/** @suppress {undefinedVars, duplicate} @this{Object} */function btRigidBody(constructionInfo) {
  if (constructionInfo && typeof constructionInfo === 'object') constructionInfo = constructionInfo.ptr;
  this.ptr = _btRigidBody_btRigidBody_1(constructionInfo);
  getCache(btRigidBody)[this.ptr] = this;
};;
btRigidBody.prototype = Object.create(btCollisionObject.prototype);
btRigidBody.prototype.constructor = btRigidBody;
btRigidBody.prototype.__class__ = btRigidBody;
btRigidBody.__cache__ = {};
Module['btRigidBody'] = btRigidBody;

btRigidBody.prototype['getCenterOfMassTransform'] = btRigidBody.prototype.getCenterOfMassTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getCenterOfMassTransform_0(self), btTransform);
};;

btRigidBody.prototype['setCenterOfMassTransform'] = btRigidBody.prototype.setCenterOfMassTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(xform) {
  var self = this.ptr;
  if (xform && typeof xform === 'object') xform = xform.ptr;
  _btRigidBody_setCenterOfMassTransform_1(self, xform);
};;

btRigidBody.prototype['setSleepingThresholds'] = btRigidBody.prototype.setSleepingThresholds = /** @suppress {undefinedVars, duplicate} @this{Object} */function(linear, angular) {
  var self = this.ptr;
  if (linear && typeof linear === 'object') linear = linear.ptr;
  if (angular && typeof angular === 'object') angular = angular.ptr;
  _btRigidBody_setSleepingThresholds_2(self, linear, angular);
};;

btRigidBody.prototype['getLinearSleepingThreshold'] = btRigidBody.prototype.getLinearSleepingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBody_getLinearSleepingThreshold_0(self);
};;

btRigidBody.prototype['setDamping'] = btRigidBody.prototype.setDamping = /** @suppress {undefinedVars, duplicate} @this{Object} */function(lin_damping, ang_damping) {
  var self = this.ptr;
  if (lin_damping && typeof lin_damping === 'object') lin_damping = lin_damping.ptr;
  if (ang_damping && typeof ang_damping === 'object') ang_damping = ang_damping.ptr;
  _btRigidBody_setDamping_2(self, lin_damping, ang_damping);
};;

btRigidBody.prototype['setMassProps'] = btRigidBody.prototype.setMassProps = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btRigidBody_setMassProps_2(self, mass, inertia);
};;

btRigidBody.prototype['getLinearFactor'] = btRigidBody.prototype.getLinearFactor = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getLinearFactor_0(self), btVector3);
};;

btRigidBody.prototype['setLinearFactor'] = btRigidBody.prototype.setLinearFactor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(linearFactor) {
  var self = this.ptr;
  if (linearFactor && typeof linearFactor === 'object') linearFactor = linearFactor.ptr;
  _btRigidBody_setLinearFactor_1(self, linearFactor);
};;

btRigidBody.prototype['applyTorque'] = btRigidBody.prototype.applyTorque = /** @suppress {undefinedVars, duplicate} @this{Object} */function(torque) {
  var self = this.ptr;
  if (torque && typeof torque === 'object') torque = torque.ptr;
  _btRigidBody_applyTorque_1(self, torque);
};;

btRigidBody.prototype['applyForce'] = btRigidBody.prototype.applyForce = /** @suppress {undefinedVars, duplicate} @this{Object} */function(force, rel_pos) {
  var self = this.ptr;
  if (force && typeof force === 'object') force = force.ptr;
  if (rel_pos && typeof rel_pos === 'object') rel_pos = rel_pos.ptr;
  _btRigidBody_applyForce_2(self, force, rel_pos);
};;

btRigidBody.prototype['applyCentralForce'] = btRigidBody.prototype.applyCentralForce = /** @suppress {undefinedVars, duplicate} @this{Object} */function(force) {
  var self = this.ptr;
  if (force && typeof force === 'object') force = force.ptr;
  _btRigidBody_applyCentralForce_1(self, force);
};;

btRigidBody.prototype['applyTorqueImpulse'] = btRigidBody.prototype.applyTorqueImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(torque) {
  var self = this.ptr;
  if (torque && typeof torque === 'object') torque = torque.ptr;
  _btRigidBody_applyTorqueImpulse_1(self, torque);
};;

btRigidBody.prototype['applyImpulse'] = btRigidBody.prototype.applyImpulse = /** @suppress {undefinedVars, duplicate} @this{Object} */function(impulse, rel_pos) {
  var self = this.ptr;
  if (impulse && typeof impulse === 'object') impulse = impulse.ptr;
  if (rel_pos && typeof rel_pos === 'object') rel_pos = rel_pos.ptr;
  _btRigidBody_applyImpulse_2(self, impulse, rel_pos);
};;

btRigidBody.prototype['updateInertiaTensor'] = btRigidBody.prototype.updateInertiaTensor = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btRigidBody_updateInertiaTensor_0(self);
};;

btRigidBody.prototype['getLinearVelocity'] = btRigidBody.prototype.getLinearVelocity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getLinearVelocity_0(self), btVector3);
};;

btRigidBody.prototype['getAngularVelocity'] = btRigidBody.prototype.getAngularVelocity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getAngularVelocity_0(self), btVector3);
};;

btRigidBody.prototype['setLinearVelocity'] = btRigidBody.prototype.setLinearVelocity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(lin_vel) {
  var self = this.ptr;
  if (lin_vel && typeof lin_vel === 'object') lin_vel = lin_vel.ptr;
  _btRigidBody_setLinearVelocity_1(self, lin_vel);
};;

btRigidBody.prototype['setAngularVelocity'] = btRigidBody.prototype.setAngularVelocity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ang_vel) {
  var self = this.ptr;
  if (ang_vel && typeof ang_vel === 'object') ang_vel = ang_vel.ptr;
  _btRigidBody_setAngularVelocity_1(self, ang_vel);
};;

btRigidBody.prototype['getMotionState'] = btRigidBody.prototype.getMotionState = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getMotionState_0(self), btMotionState);
};;

btRigidBody.prototype['getAngularFactor'] = btRigidBody.prototype.getAngularFactor = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getAngularFactor_0(self), btVector3);
};;

btRigidBody.prototype['setAngularFactor'] = btRigidBody.prototype.setAngularFactor = /** @suppress {undefinedVars, duplicate} @this{Object} */function(angularFactor) {
  var self = this.ptr;
  if (angularFactor && typeof angularFactor === 'object') angularFactor = angularFactor.ptr;
  _btRigidBody_setAngularFactor_1(self, angularFactor);
};;

btRigidBody.prototype['getAabb'] = btRigidBody.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(aabbMin, aabbMax) {
  var self = this.ptr;
  if (aabbMin && typeof aabbMin === 'object') aabbMin = aabbMin.ptr;
  if (aabbMax && typeof aabbMax === 'object') aabbMax = aabbMax.ptr;
  _btRigidBody_getAabb_2(self, aabbMin, aabbMax);
};;

btRigidBody.prototype['setGravity'] = btRigidBody.prototype.setGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(acceleration) {
  var self = this.ptr;
  if (acceleration && typeof acceleration === 'object') acceleration = acceleration.ptr;
  _btRigidBody_setGravity_1(self, acceleration);
};;

btRigidBody.prototype['getFlags'] = btRigidBody.prototype.getFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBody_getFlags_0(self);
};;

btRigidBody.prototype['setFlags'] = btRigidBody.prototype.setFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  _btRigidBody_setFlags_1(self, flags);
};;

btRigidBody.prototype['wantsSleeping'] = btRigidBody.prototype.wantsSleeping = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btRigidBody_wantsSleeping_0(self));
};;

btRigidBody.prototype['clearForces'] = btRigidBody.prototype.clearForces = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btRigidBody_clearForces_0(self);
};;

btRigidBody.prototype['getTotalForce'] = btRigidBody.prototype.getTotalForce = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getTotalForce_0(self), btVector3);
};;

btRigidBody.prototype['getTotalTorque'] = btRigidBody.prototype.getTotalTorque = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getTotalTorque_0(self), btVector3);
};;

btRigidBody.prototype['clearState'] = btRigidBody.prototype.clearState = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btRigidBody_clearState_0(self);
};;

btRigidBody.prototype['getCollisionShape'] = btRigidBody.prototype.getCollisionShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getCollisionShape_0(self), btCollisionShape);
};;

btRigidBody.prototype['getActivationState'] = btRigidBody.prototype.getActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBody_getActivationState_0(self);
};;

btRigidBody.prototype['setActivationState'] = btRigidBody.prototype.setActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function(newState) {
  var self = this.ptr;
  if (newState && typeof newState === 'object') newState = newState.ptr;
  _btRigidBody_setActivationState_1(self, newState);
};;

btRigidBody.prototype['forceActivationState'] = btRigidBody.prototype.forceActivationState = /** @suppress {undefinedVars, duplicate} @this{Object} */function(newState) {
  var self = this.ptr;
  if (newState && typeof newState === 'object') newState = newState.ptr;
  _btRigidBody_forceActivationState_1(self, newState);
};;

btRigidBody.prototype['activate'] = btRigidBody.prototype.activate = /** @suppress {undefinedVars, duplicate} @this{Object} */function(forceActivation) {
  var self = this.ptr;
  if (forceActivation && typeof forceActivation === 'object') forceActivation = forceActivation.ptr;
  if (forceActivation === undefined) { _btRigidBody_activate_0(self);  return }
  _btRigidBody_activate_1(self, forceActivation);
};;

btRigidBody.prototype['isActive'] = btRigidBody.prototype.isActive = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btRigidBody_isActive_0(self));
};;

btRigidBody.prototype['isKinematicObject'] = btRigidBody.prototype.isKinematicObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btRigidBody_isKinematicObject_0(self));
};;

btRigidBody.prototype['isStaticObject'] = btRigidBody.prototype.isStaticObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btRigidBody_isStaticObject_0(self));
};;

btRigidBody.prototype['isStaticOrKinematicObject'] = btRigidBody.prototype.isStaticOrKinematicObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btRigidBody_isStaticOrKinematicObject_0(self));
};;

btRigidBody.prototype['setRestitution'] = btRigidBody.prototype.setRestitution = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r) {
  var self = this.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  _btRigidBody_setRestitution_1(self, r);
};;

btRigidBody.prototype['setFriction'] = btRigidBody.prototype.setFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(f) {
  var self = this.ptr;
  if (f && typeof f === 'object') f = f.ptr;
  _btRigidBody_setFriction_1(self, f);
};;

btRigidBody.prototype['setRollingFriction'] = btRigidBody.prototype.setRollingFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rf) {
  var self = this.ptr;
  if (rf && typeof rf === 'object') rf = rf.ptr;
  _btRigidBody_setRollingFriction_1(self, rf);
};;

btRigidBody.prototype['setSpinningFriction'] = btRigidBody.prototype.setSpinningFriction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(sf) {
  var self = this.ptr;
  if (sf && typeof sf === 'object') sf = sf.ptr;
  _btRigidBody_setSpinningFriction_1(self, sf);
};;

btRigidBody.prototype['getWorldTransform'] = btRigidBody.prototype.getWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btRigidBody_getWorldTransform_0(self), btTransform);
};;

btRigidBody.prototype['getCollisionFlags'] = btRigidBody.prototype.getCollisionFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBody_getCollisionFlags_0(self);
};;

btRigidBody.prototype['setCollisionFlags'] = btRigidBody.prototype.setCollisionFlags = /** @suppress {undefinedVars, duplicate} @this{Object} */function(flags) {
  var self = this.ptr;
  if (flags && typeof flags === 'object') flags = flags.ptr;
  _btRigidBody_setCollisionFlags_1(self, flags);
};;

btRigidBody.prototype['setWorldTransform'] = btRigidBody.prototype.setWorldTransform = /** @suppress {undefinedVars, duplicate} @this{Object} */function(worldTrans) {
  var self = this.ptr;
  if (worldTrans && typeof worldTrans === 'object') worldTrans = worldTrans.ptr;
  _btRigidBody_setWorldTransform_1(self, worldTrans);
};;

btRigidBody.prototype['setCollisionShape'] = btRigidBody.prototype.setCollisionShape = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionShape) {
  var self = this.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  _btRigidBody_setCollisionShape_1(self, collisionShape);
};;

btRigidBody.prototype['setCcdMotionThreshold'] = btRigidBody.prototype.setCcdMotionThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(ccdMotionThreshold) {
  var self = this.ptr;
  if (ccdMotionThreshold && typeof ccdMotionThreshold === 'object') ccdMotionThreshold = ccdMotionThreshold.ptr;
  _btRigidBody_setCcdMotionThreshold_1(self, ccdMotionThreshold);
};;

btRigidBody.prototype['setCcdSweptSphereRadius'] = btRigidBody.prototype.setCcdSweptSphereRadius = /** @suppress {undefinedVars, duplicate} @this{Object} */function(radius) {
  var self = this.ptr;
  if (radius && typeof radius === 'object') radius = radius.ptr;
  _btRigidBody_setCcdSweptSphereRadius_1(self, radius);
};;

btRigidBody.prototype['getUserIndex'] = btRigidBody.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btRigidBody_getUserIndex_0(self);
};;

btRigidBody.prototype['setUserIndex'] = btRigidBody.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btRigidBody_setUserIndex_1(self, index);
};;

btRigidBody.prototype['setUserIndex2'] = btRigidBody.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btRigidBody_setUserIndex2_1(self, index);
};;

btRigidBody.prototype['setIgnoreCollisionCheck'] = btRigidBody.prototype.setIgnoreCollisionCheck = /** @suppress {undefinedVars, duplicate} @this{Object} */function(co, ig) {
  var self = this.ptr;
  if (co && typeof co === 'object') co = co.ptr;
  if (ig && typeof ig === 'object') ig = ig.ptr;
  _btRigidBody_setIgnoreCollisionCheck_2(self, co, ig);
};;

  btRigidBody.prototype['__destroy__'] = btRigidBody.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btRigidBody___destroy___0(self);
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
  return _btIndexedMeshArray_size_0(self);
};;

btIndexedMeshArray.prototype['at'] = btIndexedMeshArray.prototype.at = /** @suppress {undefinedVars, duplicate} @this{Object} */function(n) {
  var self = this.ptr;
  if (n && typeof n === 'object') n = n.ptr;
  return wrapPointer(_btIndexedMeshArray_at_1(self, n), btIndexedMesh);
};;

  btIndexedMeshArray.prototype['__destroy__'] = btIndexedMeshArray.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btIndexedMeshArray___destroy___0(self);
};
// ccDiscreteDynamicsWorld
/** @suppress {undefinedVars, duplicate} @this{Object} */function ccDiscreteDynamicsWorld(dispatcher, pairCache, constraintSolver, collisionConfiguration) {
  if (dispatcher && typeof dispatcher === 'object') dispatcher = dispatcher.ptr;
  if (pairCache && typeof pairCache === 'object') pairCache = pairCache.ptr;
  if (constraintSolver && typeof constraintSolver === 'object') constraintSolver = constraintSolver.ptr;
  if (collisionConfiguration && typeof collisionConfiguration === 'object') collisionConfiguration = collisionConfiguration.ptr;
  this.ptr = _ccDiscreteDynamicsWorld_ccDiscreteDynamicsWorld_4(dispatcher, pairCache, constraintSolver, collisionConfiguration);
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
  _ccDiscreteDynamicsWorld_setAllowSleep_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['setDeactivationTime'] = ccDiscreteDynamicsWorld.prototype.setDeactivationTime = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _ccDiscreteDynamicsWorld_setDeactivationTime_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['setNarrowPhaseMethod'] = ccDiscreteDynamicsWorld.prototype.setNarrowPhaseMethod = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _ccDiscreteDynamicsWorld_setNarrowPhaseMethod_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['setAllowCcdPenetration'] = ccDiscreteDynamicsWorld.prototype.setAllowCcdPenetration = /** @suppress {undefinedVars, duplicate} @this{Object} */function(v) {
  var self = this.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  _ccDiscreteDynamicsWorld_setAllowCcdPenetration_1(self, v);
};;

ccDiscreteDynamicsWorld.prototype['getCcdTriggerRecorder'] = ccDiscreteDynamicsWorld.prototype.getCcdTriggerRecorder = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccDiscreteDynamicsWorld_getCcdTriggerRecorder_0(self), btIntArray);
};;

ccDiscreteDynamicsWorld.prototype['rayTest'] = ccDiscreteDynamicsWorld.prototype.rayTest = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromWorld, rayToWorld, resultCallback) {
  var self = this.ptr;
  if (rayFromWorld && typeof rayFromWorld === 'object') rayFromWorld = rayFromWorld.ptr;
  if (rayToWorld && typeof rayToWorld === 'object') rayToWorld = rayToWorld.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _ccDiscreteDynamicsWorld_rayTest_3(self, rayFromWorld, rayToWorld, resultCallback);
};;

ccDiscreteDynamicsWorld.prototype['rayTestSingle'] = ccDiscreteDynamicsWorld.prototype.rayTestSingle = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback) {
  var self = this.ptr;
  if (rayFromTrans && typeof rayFromTrans === 'object') rayFromTrans = rayFromTrans.ptr;
  if (rayToTrans && typeof rayToTrans === 'object') rayToTrans = rayToTrans.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionShape && typeof collisionShape === 'object') collisionShape = collisionShape.ptr;
  if (colObjWorldTransform && typeof colObjWorldTransform === 'object') colObjWorldTransform = colObjWorldTransform.ptr;
  if (resultCallback && typeof resultCallback === 'object') resultCallback = resultCallback.ptr;
  _ccDiscreteDynamicsWorld_rayTestSingle_6(self, rayFromTrans, rayToTrans, collisionObject, collisionShape, colObjWorldTransform, resultCallback);
};;

ccDiscreteDynamicsWorld.prototype['getPairCache'] = ccDiscreteDynamicsWorld.prototype.getPairCache = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccDiscreteDynamicsWorld_getPairCache_0(self), btOverlappingPairCache);
};;

ccDiscreteDynamicsWorld.prototype['addCollisionObject'] = ccDiscreteDynamicsWorld.prototype.addCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject, collisionFilterGroup, collisionFilterMask) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  if (collisionFilterGroup && typeof collisionFilterGroup === 'object') collisionFilterGroup = collisionFilterGroup.ptr;
  if (collisionFilterMask && typeof collisionFilterMask === 'object') collisionFilterMask = collisionFilterMask.ptr;
  if (collisionFilterGroup === undefined) { _ccDiscreteDynamicsWorld_addCollisionObject_1(self, collisionObject);  return }
  if (collisionFilterMask === undefined) { _ccDiscreteDynamicsWorld_addCollisionObject_2(self, collisionObject, collisionFilterGroup);  return }
  _ccDiscreteDynamicsWorld_addCollisionObject_3(self, collisionObject, collisionFilterGroup, collisionFilterMask);
};;

ccDiscreteDynamicsWorld.prototype['removeCollisionObject'] = ccDiscreteDynamicsWorld.prototype.removeCollisionObject = /** @suppress {undefinedVars, duplicate} @this{Object} */function(collisionObject) {
  var self = this.ptr;
  if (collisionObject && typeof collisionObject === 'object') collisionObject = collisionObject.ptr;
  _ccDiscreteDynamicsWorld_removeCollisionObject_1(self, collisionObject);
};;

ccDiscreteDynamicsWorld.prototype['setContactBreakingThreshold'] = ccDiscreteDynamicsWorld.prototype.setContactBreakingThreshold = /** @suppress {undefinedVars, duplicate} @this{Object} */function(b) {
  var self = this.ptr;
  if (b && typeof b === 'object') b = b.ptr;
  _ccDiscreteDynamicsWorld_setContactBreakingThreshold_1(self, b);
};;

ccDiscreteDynamicsWorld.prototype['setGravity'] = ccDiscreteDynamicsWorld.prototype.setGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function(gravity) {
  var self = this.ptr;
  if (gravity && typeof gravity === 'object') gravity = gravity.ptr;
  _ccDiscreteDynamicsWorld_setGravity_1(self, gravity);
};;

ccDiscreteDynamicsWorld.prototype['getGravity'] = ccDiscreteDynamicsWorld.prototype.getGravity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccDiscreteDynamicsWorld_getGravity_0(self), btVector3);
};;

ccDiscreteDynamicsWorld.prototype['addRigidBody'] = ccDiscreteDynamicsWorld.prototype.addRigidBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function(body, group, mask) {
  var self = this.ptr;
  if (body && typeof body === 'object') body = body.ptr;
  if (group && typeof group === 'object') group = group.ptr;
  if (mask && typeof mask === 'object') mask = mask.ptr;
  if (group === undefined) { _ccDiscreteDynamicsWorld_addRigidBody_1(self, body);  return }
  if (mask === undefined) { _ccDiscreteDynamicsWorld_addRigidBody_2(self, body, group);  return }
  _ccDiscreteDynamicsWorld_addRigidBody_3(self, body, group, mask);
};;

ccDiscreteDynamicsWorld.prototype['removeRigidBody'] = ccDiscreteDynamicsWorld.prototype.removeRigidBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function(body) {
  var self = this.ptr;
  if (body && typeof body === 'object') body = body.ptr;
  _ccDiscreteDynamicsWorld_removeRigidBody_1(self, body);
};;

ccDiscreteDynamicsWorld.prototype['addConstraint'] = ccDiscreteDynamicsWorld.prototype.addConstraint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(constraint, disableCollisionsBetweenLinkedBodies) {
  var self = this.ptr;
  if (constraint && typeof constraint === 'object') constraint = constraint.ptr;
  if (disableCollisionsBetweenLinkedBodies && typeof disableCollisionsBetweenLinkedBodies === 'object') disableCollisionsBetweenLinkedBodies = disableCollisionsBetweenLinkedBodies.ptr;
  if (disableCollisionsBetweenLinkedBodies === undefined) { _ccDiscreteDynamicsWorld_addConstraint_1(self, constraint);  return }
  _ccDiscreteDynamicsWorld_addConstraint_2(self, constraint, disableCollisionsBetweenLinkedBodies);
};;

ccDiscreteDynamicsWorld.prototype['removeConstraint'] = ccDiscreteDynamicsWorld.prototype.removeConstraint = /** @suppress {undefinedVars, duplicate} @this{Object} */function(constraint) {
  var self = this.ptr;
  if (constraint && typeof constraint === 'object') constraint = constraint.ptr;
  _ccDiscreteDynamicsWorld_removeConstraint_1(self, constraint);
};;

ccDiscreteDynamicsWorld.prototype['stepSimulation'] = ccDiscreteDynamicsWorld.prototype.stepSimulation = /** @suppress {undefinedVars, duplicate} @this{Object} */function(timeStep, maxSubSteps, fixedTimeStep) {
  var self = this.ptr;
  if (timeStep && typeof timeStep === 'object') timeStep = timeStep.ptr;
  if (maxSubSteps && typeof maxSubSteps === 'object') maxSubSteps = maxSubSteps.ptr;
  if (fixedTimeStep && typeof fixedTimeStep === 'object') fixedTimeStep = fixedTimeStep.ptr;
  if (maxSubSteps === undefined) { return _ccDiscreteDynamicsWorld_stepSimulation_1(self, timeStep) }
  if (fixedTimeStep === undefined) { return _ccDiscreteDynamicsWorld_stepSimulation_2(self, timeStep, maxSubSteps) }
  return _ccDiscreteDynamicsWorld_stepSimulation_3(self, timeStep, maxSubSteps, fixedTimeStep);
};;

ccDiscreteDynamicsWorld.prototype['addAction'] = ccDiscreteDynamicsWorld.prototype.addAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _ccDiscreteDynamicsWorld_addAction_1(self, action);
};;

ccDiscreteDynamicsWorld.prototype['removeAction'] = ccDiscreteDynamicsWorld.prototype.removeAction = /** @suppress {undefinedVars, duplicate} @this{Object} */function(action) {
  var self = this.ptr;
  if (action && typeof action === 'object') action = action.ptr;
  _ccDiscreteDynamicsWorld_removeAction_1(self, action);
};;

ccDiscreteDynamicsWorld.prototype['getSolverInfo'] = ccDiscreteDynamicsWorld.prototype.getSolverInfo = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccDiscreteDynamicsWorld_getSolverInfo_0(self), btContactSolverInfo);
};;

ccDiscreteDynamicsWorld.prototype['getFixedBody'] = ccDiscreteDynamicsWorld.prototype.getFixedBody = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_ccDiscreteDynamicsWorld_getFixedBody_0(self), btRigidBody);
};;

  ccDiscreteDynamicsWorld.prototype['__destroy__'] = ccDiscreteDynamicsWorld.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _ccDiscreteDynamicsWorld___destroy___0(self);
};
// btTransform
/** @suppress {undefinedVars, duplicate} @this{Object} */function btTransform(q, v) {
  if (q && typeof q === 'object') q = q.ptr;
  if (v && typeof v === 'object') v = v.ptr;
  if (q === undefined) { this.ptr = _btTransform_btTransform_0(); getCache(btTransform)[this.ptr] = this;return }
  if (v === undefined) { this.ptr = _btTransform_btTransform_1(q); getCache(btTransform)[this.ptr] = this;return }
  this.ptr = _btTransform_btTransform_2(q, v);
  getCache(btTransform)[this.ptr] = this;
};;
btTransform.prototype = Object.create(WrapperObject.prototype);
btTransform.prototype.constructor = btTransform;
btTransform.prototype.__class__ = btTransform;
btTransform.__cache__ = {};
Module['btTransform'] = btTransform;

btTransform.prototype['setIdentity'] = btTransform.prototype.setIdentity = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btTransform_setIdentity_0(self);
};;

btTransform.prototype['setOrigin'] = btTransform.prototype.setOrigin = /** @suppress {undefinedVars, duplicate} @this{Object} */function(origin) {
  var self = this.ptr;
  if (origin && typeof origin === 'object') origin = origin.ptr;
  _btTransform_setOrigin_1(self, origin);
};;

btTransform.prototype['setRotation'] = btTransform.prototype.setRotation = /** @suppress {undefinedVars, duplicate} @this{Object} */function(rotation) {
  var self = this.ptr;
  if (rotation && typeof rotation === 'object') rotation = rotation.ptr;
  _btTransform_setRotation_1(self, rotation);
};;

btTransform.prototype['getOrigin'] = btTransform.prototype.getOrigin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btTransform_getOrigin_0(self), btVector3);
};;

btTransform.prototype['getRotation'] = btTransform.prototype.getRotation = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btTransform_getRotation_0(self), btQuaternion);
};;

btTransform.prototype['getBasis'] = btTransform.prototype.getBasis = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btTransform_getBasis_0(self), btMatrix3x3);
};;

btTransform.prototype['inverse'] = btTransform.prototype.inverse = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btTransform_inverse_0(self), btTransform);
};;

btTransform.prototype['op_mul'] = btTransform.prototype.op_mul = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  return wrapPointer(_btTransform_op_mul_1(self, t), btTransform);
};;

  btTransform.prototype['__destroy__'] = btTransform.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btTransform___destroy___0(self);
};
// btCylinderShape
/** @suppress {undefinedVars, duplicate} @this{Object} */function btCylinderShape(halfExtents) {
  if (halfExtents && typeof halfExtents === 'object') halfExtents = halfExtents.ptr;
  this.ptr = _btCylinderShape_btCylinderShape_1(halfExtents);
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
  _btCylinderShape_setMargin_1(self, margin);
};;

btCylinderShape.prototype['getMargin'] = btCylinderShape.prototype.getMargin = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCylinderShape_getMargin_0(self);
};;

btCylinderShape.prototype['updateProp'] = btCylinderShape.prototype.updateProp = /** @suppress {undefinedVars, duplicate} @this{Object} */function(r, h, upAxis) {
  var self = this.ptr;
  if (r && typeof r === 'object') r = r.ptr;
  if (h && typeof h === 'object') h = h.ptr;
  if (upAxis && typeof upAxis === 'object') upAxis = upAxis.ptr;
  _btCylinderShape_updateProp_3(self, r, h, upAxis);
};;

btCylinderShape.prototype['setLocalScaling'] = btCylinderShape.prototype.setLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function(scaling) {
  var self = this.ptr;
  if (scaling && typeof scaling === 'object') scaling = scaling.ptr;
  _btCylinderShape_setLocalScaling_1(self, scaling);
};;

btCylinderShape.prototype['getLocalScaling'] = btCylinderShape.prototype.getLocalScaling = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCylinderShape_getLocalScaling_0(self), btVector3);
};;

btCylinderShape.prototype['calculateLocalInertia'] = btCylinderShape.prototype.calculateLocalInertia = /** @suppress {undefinedVars, duplicate} @this{Object} */function(mass, inertia) {
  var self = this.ptr;
  if (mass && typeof mass === 'object') mass = mass.ptr;
  if (inertia && typeof inertia === 'object') inertia = inertia.ptr;
  _btCylinderShape_calculateLocalInertia_2(self, mass, inertia);
};;

btCylinderShape.prototype['isCompound'] = btCylinderShape.prototype.isCompound = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return !!(_btCylinderShape_isCompound_0(self));
};;

btCylinderShape.prototype['getUserIndex'] = btCylinderShape.prototype.getUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCylinderShape_getUserIndex_0(self);
};;

btCylinderShape.prototype['setUserIndex'] = btCylinderShape.prototype.setUserIndex = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCylinderShape_setUserIndex_1(self, index);
};;

btCylinderShape.prototype['getUserIndex2'] = btCylinderShape.prototype.getUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCylinderShape_getUserIndex2_0(self);
};;

btCylinderShape.prototype['setUserIndex2'] = btCylinderShape.prototype.setUserIndex2 = /** @suppress {undefinedVars, duplicate} @this{Object} */function(index) {
  var self = this.ptr;
  if (index && typeof index === 'object') index = index.ptr;
  _btCylinderShape_setUserIndex2_1(self, index);
};;

btCylinderShape.prototype['getAabb'] = btCylinderShape.prototype.getAabb = /** @suppress {undefinedVars, duplicate} @this{Object} */function(t, min, max) {
  var self = this.ptr;
  if (t && typeof t === 'object') t = t.ptr;
  if (min && typeof min === 'object') min = min.ptr;
  if (max && typeof max === 'object') max = max.ptr;
  _btCylinderShape_getAabb_3(self, t, min, max);
};;

btCylinderShape.prototype['getLocalBoundingSphere'] = btCylinderShape.prototype.getLocalBoundingSphere = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return _btCylinderShape_getLocalBoundingSphere_0(self);
};;

btCylinderShape.prototype['getImplicitShapeDimensions'] = btCylinderShape.prototype.getImplicitShapeDimensions = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  return wrapPointer(_btCylinderShape_getImplicitShapeDimensions_0(self), btVector3);
};;

  btCylinderShape.prototype['__destroy__'] = btCylinderShape.prototype.__destroy__ = /** @suppress {undefinedVars, duplicate} @this{Object} */function() {
  var self = this.ptr;
  _btCylinderShape___destroy___0(self);
};
(function() {
  function setupEnums() {
    

    // btConstraintParams

    Module['BT_CONSTRAINT_ERP'] = _btConstraintParamsBT_CONSTRAINT_ERP();

    Module['BT_CONSTRAINT_STOP_ERP'] = _btConstraintParamsBT_CONSTRAINT_STOP_ERP();

    Module['BT_CONSTRAINT_CFM'] = _btConstraintParamsBT_CONSTRAINT_CFM();

    Module['BT_CONSTRAINT_STOP_CFM'] = _btConstraintParamsBT_CONSTRAINT_STOP_CFM();

    

    // PHY_ScalarType

    Module['PHY_FLOAT'] = _PHY_ScalarTypePHY_FLOAT();

    Module['PHY_DOUBLE'] = _PHY_ScalarTypePHY_DOUBLE();

    Module['PHY_INTEGER'] = _PHY_ScalarTypePHY_INTEGER();

    Module['PHY_SHORT'] = _PHY_ScalarTypePHY_SHORT();

    Module['PHY_FIXEDPOINT88'] = _PHY_ScalarTypePHY_FIXEDPOINT88();

    Module['PHY_UCHAR'] = _PHY_ScalarTypePHY_UCHAR();

  }
  if (runtimeInitialized) setupEnums();
  else addOnPreMain(setupEnums);
})();

this['Ammo'] = Module; /* With or without a closure, the proper usage is Ammo.* */


  return Ammo.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = Ammo;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return Ammo; });
    else if (typeof exports === 'object')
      exports["Ammo"] = Ammo;
    