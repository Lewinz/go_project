package main

import (
	"context"
	"fmt"
	"go_project/db"
	"go_project/push"
	"go_project/user"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	"github.com/gin-gonic/gin"
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

// // MyLogger is Custom logger()
// func MyLogger() gin.HandlerFunc {
// 	return func(c *gin.Context) {
// 		loggerFile, _ := os.Create("run.log")
// 		gin.DefaultWriter = io.MultiWriter(loggerFile)

// 		c.Next()

// 		status := c.Writer.Status()

// 		fmt.Fprintf(io.MultiWriter(loggerFile), "[GIN] %v | %v",
// 			c.Request.URL.Path,
// 			status)
// 	}
// }

func main() {
	InitConfig()
	//engine := gin.Default()

	engine := gin.Default()

	//engine.Use(MyLogger(), gin.Recovery())

	engine.LoadHTMLGlob("templates/*")

	engine.Static("/static", "./static")

	engine.NoRoute(func(c *gin.Context) {
		c.JSON(404, gin.H{"code": "PAGE_NOT_FOUND", "message": "Page not found"})
	})

	userGroup := engine.Group("user")

	// 服务器推送
	userGroup.GET("/push", push.PushStatic)

	userGroup.GET("/queryUser", user.QueryUser)

	userGroup.POST("/insertUser", user.InsertUser)

	userGroup.PUT("/updateUser", user.UpdateUser)

	userGroup.DELETE("/deleteUser", user.DeleteUser)

	srv := &http.Server{
		Addr:    ":8081",
		Handler: engine,
	}

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("listen : %s\n", err)
		}
	}()

	quit := make(chan os.Signal)
	signal.Notify(quit, os.Interrupt)
	<-quit

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		log.Fatal("Server Shutdown:", err)
	}
	log.Println("Server exiting")
}
