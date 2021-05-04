package main

import (
	"context"
	"fmt"
	"go_project/components/config"
	"go_project/components/db"
	"go_project/components/logger"
	"go_project/filter"
	"go_project/policy"
	"go_project/push"
	"net/http"
	"os"
	"os/signal"
	"time"

	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/spf13/viper"
	"go.uber.org/zap"

	"github.com/gin-gonic/gin"
)

// InitConfig is init some config
func InitConfig() {
	// 以当前文件为基准计算配置文件位置
	config.InitViperConfig(".")
	// 初始化日志
	logger.InitLoggerConfig()
	// 初始化mysql配置
	err := db.Instance()

	if err != nil {
		fmt.Printf("init db faild %v \n", err)
		return
	}

}

func main() {
	InitConfig()
	//engine := gin.Default()

	engine := gin.New()

	engine.Use(logger.GinLogger(), logger.GinRecovery(true))

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

	port := viper.GetString("server.port")

	srv := &http.Server{
		Addr:    ":" + port,
		Handler: engine,
	}

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			logger.Debug("Server listen:", zap.Error(err))
			return
		}
		logger.Debug("server listen port:", zap.String("port", port))
	}()

	quit := make(chan os.Signal)
	signal.Notify(quit, os.Interrupt)
	<-quit

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		logger.Debug("Server Shutdown:", zap.Error(err))
	}
	logger.Debug("Server exiting")
}
