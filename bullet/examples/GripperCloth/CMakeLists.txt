# HelloWorld is a minimal sample creating, stepping and deleting a Bullet dynamics world
set(PROJECT App_GripperCloth)

INCLUDE_DIRECTORIES(
${BULLET_PHYSICS_SOURCE_DIR}/src
${BULLET_PHYSICS_SOURCE_DIR}/btgui
${BULLET_PHYSICS_SOURCE_DIR}/examples
${BULLET_PHYSICS_SOURCE_DIR}/examples/ThirdPartyLibs/glad
)

ADD_DEFINITIONS(-DB3_USE_STANDALONE_EXAMPLE)

LINK_DIRECTORIES( 
 ${BULLET_PHYSICS_SOURCE_DIR}/src/BulletDynamics 
 ${BULLET_PHYSICS_SOURCE_DIR}/src/BulletCollision 
 ${BULLET_PHYSICS_SOURCE_DIR}/src/LinearMath
 ${BULLET_PHYSICS_SOURCE_DIR}/examples
 ${BULLET_PHYSICS_SOURCE_DIR}/examples/OpenGLWindow
 ${BULLET_PHYSICS_SOURCE_DIR}/examples/ExampleBrowser
 ${BULLET_PHYSICS_SOURCE_DIR}/src/Bullet3Common
 ${BULLET_PHYSICS_SOURCE_DIR}/src/BulletSoftBody
)

LINK_LIBRARIES(BulletDynamics BulletCollision LinearMath BulletSoftBody Bullet3Common 
OpenGLWindow ExampleBrowser)

#some code to support OpenGL and Glew cross platform
IF (WIN32)
        INCLUDE_DIRECTORIES(
             ${BULLET_PHYSICS_SOURCE_DIR}/btgui/OpenGLWindow/GlewWindows
        )
        ADD_DEFINITIONS(-DGLEW_STATIC)
	LINK_LIBRARIES( ${OPENGL_gl_LIBRARY} ${OPENGL_glu_LIBRARY} )
ELSE(WIN32)
        IF(APPLE)
                find_library(COCOA NAMES Cocoa)
                MESSAGE(${COCOA})
                link_libraries(${COCOA} ${OPENGL_gl_LIBRARY} ${OPENGL_glu_LIBRARY})

        ELSE(APPLE)
                INCLUDE_DIRECTORIES(
                        ${BULLET_PHYSICS_SOURCE_DIR}/btgui/OpenGLWindow/GlewWindows
                )
                ADD_DEFINITIONS("-DGLEW_INIT_OPENGL11_FUNCTIONS=1")
                ADD_DEFINITIONS("-DGLEW_STATIC")
                ADD_DEFINITIONS("-DGLEW_DYNAMIC_LOAD_ALL_GLX_FUNCTIONS=1")

                LINK_LIBRARIES(  pthread ${DL} )
        ENDIF(APPLE)
ENDIF(WIN32)

#note this is important if bullet3 is built with default double script
ADD_DEFINITIONS("-DBT_USE_DOUBLE_PRECISION=1")

SET(PROJECT_GUI_SRCS
        App_GripperCloth.cpp
		main_opengl_single_example.cpp
        ${BULLET_PHYSICS_SOURCE_DIR}/build/bullet.rc
)

ADD_EXECUTABLE(${PROJECT}
                ${PROJECT_GUI_SRCS})


IF (INTERNAL_ADD_POSTFIX_EXECUTABLE_NAMES)
                        SET_TARGET_PROPERTIES(${PROJECT} PROPERTIES  DEBUG_POSTFIX "_Debug")
                        SET_TARGET_PROPERTIES(${PROJECT} PROPERTIES  MINSIZEREL_POSTFIX "_MinsizeRel")
                        SET_TARGET_PROPERTIES(${PROJECT} PROPERTIES  RELWITHDEBINFO_POSTFIX "_RelWithDebugInfo")
ENDIF(INTERNAL_ADD_POSTFIX_EXECUTABLE_NAMES)
