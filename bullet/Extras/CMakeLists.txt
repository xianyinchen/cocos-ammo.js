SUBDIRS( InverseDynamics BulletRobotics obj2sdf Serialize ConvexDecomposition HACD GIMPACTUtils )

SUBDIRS( glui CUDA CDTestFramework )


#Maya Dynamica plugin is moved to http://dynamica.googlecode.com

#IF (USE_GLUT AND GLUT_FOUND)
#	SUBDIRS (glui)
#ENDIF ()
