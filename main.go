package main

import (
	"context"
	"fmt"
	"go_project/components/config"
	"go_project/components/db"
	"go_project/filter"
	"go_project/policy"
	"go_project/push"
	"log"
	"net/http"
	"os"
	"os/signal"
	"time"

	_ "github.com/jinzhu/gorm/dialects/mysql"

	"github.com/gin-gonic/gin"
)

// InitConfig is init some config
func InitConfig() {
	// 以当前文件为基准计算配置文件位置
	config.InitViperConfig(".")
	// 初始化mysql配置
	err := db.Instance()

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

	// 获取token
	engine.GET("/createToken", filter.CreateToken)

	// 服务器推送
	engine.GET("/push", push.PushStatic)

	// token认证
	userGroup := engine.Group("policy", filter.AuthCheck)
	{
		userGroup.POST("/queryPolicy", policy.QueryPolicy)
	}

	// userGroup.GET("/queryUser", user.QueryUser)

	// userGroup.POST("/insertUser", user.InsertUser)

	// userGroup.PUT("/updateUser", user.UpdateUser)

	// userGroup.DELETE("/deleteUser", user.DeleteUser)

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
