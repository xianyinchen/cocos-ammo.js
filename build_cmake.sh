#!/bin/bash

local=$(cd "$(dirname "$0")"; pwd)
cd $local

export PATH='/Users/kevin/emsdk/upstream/emscripten':$PATH
export EMSCRIPTEN='/Users/kevin/emsdk/upstream/emscripten'
export PYTHON='/Users/kevin/emsdk/python/3.9.2_64bit/bin/python3.9'

rm -rf ./temp
emcmake cmake -DCMAKE_BUILD_TYPE=Debug -S ./ -B ./temp -DBUILD_DEMOS=OFF -DBUILD_EXTRAS=OFF -DBUILD_CPU_DEMOS=OFF -DUSE_GLUT=OFF -DCMAKE_BUILD_TYPE=Release
cd ./temp && emmake make
cd $local

# 生成绑定代码
#$PYTHON $EMSCRIPTEN/tools/webidl_binder.py ./ammo.release.idl ammo_glue

# 编译 JS
# $(CXX) $(LINK_OPTS) -I$(VERSION) $< -o build/$(VERSION)_$(BUILD).js -s WASM=0 -fno-rtti

# 配置编译参数
EMCC_OPTS=(
  -s WASM=1
  -s NO_DYNAMIC_EXECUTION=1
  -s IGNORE_CLOSURE_COMPILER_ERRORS=1
  -s BINARYEN_IGNORE_IMPLICIT_TRAPS=1
  -s ALLOW_MEMORY_GROWTH=1
  -s MODULARIZE=1
  -s EXPORT_NAME="Ammo"
  -s NO_FILESYSTEM=1
  -s EXPORT_BINDINGS=1
  -s RESERVED_FUNCTION_POINTERS=20
  -s NO_EXIT_RUNTIME=1
  -s NO_FILESYSTEM=1
  -s EXPORTED_RUNTIME_METHODS=["addFunction"]
  -s ENVIRONMENT=web,worker
  -s ERROR_ON_UNDEFINED_SYMBOLS=0
  --memory-init-file 0
  -fno-rtti
  # debug
  -s ASSERTIONS=2
  -s DEMANGLE_SUPPORT=1  
  -g3
  -gsource-map
  --llvm-lto 1
  --closure 1
  )

# 编译 WASM
emcc $local/ammo_stub.cpp $local/temp/bullet/src/BulletSoftBody/libBulletSoftBody.a $local/temp/bullet/src/BulletDynamics/libBulletDynamics.a $local/temp/bullet/src/BulletCollision/libBulletCollision.a $local/temp/bullet/src/LinearMath/libLinearMath.a -I $local/ -I $local/bullet/src/ --post-js $local/ammo_glue.js ${EMCC_OPTS[@]} -s WASM=1 -o ammo.js

# 生成 ts 描述文件 (node > 14.0.0)
#node --experimental-specifier-resolution=node --harmony ./webidl2ts/dist/index.js -f ./box2d-$VERSION.idl -n Box2D -o box2d.d.ts
