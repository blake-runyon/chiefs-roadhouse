package routes

import (
	"cheifs/api/handlers"

	"github.com/gin-gonic/gin"
)

func addMenuItemRoutes(rg *gin.RouterGroup) {
	menuItems := rg.Group("/menuItems")

	// menuItems.GET("/", handlers.GetMenuItems)
	menuItems.POST("/:bid", handlers.PostMenuItems)
	menuItems.GET("/:bid", handlers.GetItemByBusinessId)
	menuItems.DELETE("/:bid/:itemId", handlers.DeleteMenuItem)
	menuItems.PUT("/:bid", handlers.UpdateMenuItem)
	menuItems.GET("/:bid/:itemId", handlers.GetMenuItemById)
}
