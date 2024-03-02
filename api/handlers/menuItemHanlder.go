package handlers

import (
	"cheifs/api/repository"
	"cheifs/api/types"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// func GetMenuItems(c *gin.Context) {
// 	c.IndentedJSON(http.StatusOK, items)
// }

func PostMenuItems(c *gin.Context) {
	businessId := c.Param("bid")
	bid, err := strconv.Atoi(businessId)
	if err != nil {
		// Handle error if the string is not a valid integer
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid Business Id"})
		return
	}

	var newMenuItem types.MenuItem

	if err := c.BindJSON(&newMenuItem); err != nil {
		return
	}

	newMenuItem.BusinessID = bid

	createdItem := repository.CreateMenuItem(bid, newMenuItem)

	c.IndentedJSON(http.StatusCreated, createdItem)
}

func GetItemByBusinessId(c *gin.Context) {
	businessId := c.Param("bid")
	bid, err := strconv.Atoi(businessId)

	if err != nil {
		// Handle error if the string is not a valid integer
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid Business Id"})
		return
	}

	foundItems := repository.GetMenuItems(bid)

	if len(foundItems) == 0 {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "No items not found"})
		return
	}

	c.IndentedJSON(http.StatusOK, foundItems)
}

func DeleteMenuItem(c *gin.Context) {
	businessId := c.Param("bid")
	bid, err := strconv.Atoi(businessId)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid Business Id"})
		return
	}

	itemId := c.Param("itemId")
	iid, err := strconv.Atoi(itemId)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid Item Id"})
		return
	}

	deletedId := repository.DeleteMenuItem(bid, iid)

	c.IndentedJSON(http.StatusOK, deletedId)
}

func UpdateMenuItem(c *gin.Context) {
	var currItem types.MenuItem

	if err := c.BindJSON(&currItem); err != nil {
		return
	}

	updatedItem := repository.UpdateMenuItem(currItem)

	c.IndentedJSON(http.StatusOK, updatedItem)
}

func GetMenuItemById(c *gin.Context) {
	businessId := c.Param("bid")
	bid, err := strconv.Atoi(businessId)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid Business Id"})
		return
	}

	itemId := c.Param("itemId")
	iid, err := strconv.Atoi(itemId)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid Item Id"})
		return
	}

	retVal := repository.GetMenuItemById(bid, iid)

	c.IndentedJSON(http.StatusOK, retVal)
}
