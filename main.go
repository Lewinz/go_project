package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/lewin/project/db"
	"github.com/lewin/project/user"
)

// InitConfig is init some config
func InitConfig() {
	// 初始化mysql配置
	err := db.DbInit()

	if err != nil {
		fmt.Printf("init db faild %v \n", err)
		return
	}
}

func main() {
	InitConfig()

	engine := gin.New()

	engine.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"code": "PAGE_NOT_FOUND", "message": "Page not found"})
	})

	userGroup := engine.Group("user")

	userGroup.GET("/queryUser", user.QueryUser)

	userGroup.PUT("/updateUser", user.UpdateUser)

	userGroup.POST("/insertUser", user.InsertUser)

	userGroup.DELETE("/deleteUser", user.DeleteUser)

	srv := &http.Server{
		Addr:    ":8081",
		Handler: engine,
	}

	gin.SetMode(gin.ReleaseMode)
	if err := srv.ListenAndServe(); err != nil {
		fmt.Printf("Failed to listen and serve %v", err)
		os.Exit(1)
	}
}
