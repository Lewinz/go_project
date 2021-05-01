package util

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Failed comm failed function
func Failed(c *gin.Context, errMessage string, err error) {
	fmt.Printf("db %v faild :%v\n", errMessage, err)
	c.JSON(http.StatusInternalServerError, gin.H{"message": "http invoke happened error"})
}
