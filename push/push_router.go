package push

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// PushStatic server push
func PushStatic(c *gin.Context) {
	if pusher := c.Writer.Pusher(); pusher != nil {
		// 使用pusher.Push做服务推送
		if err := pusher.Push("/static/jquery-3.6.0.js", nil); err != nil {
			log.Printf("Failed to push: %v", err)
		}
	}
	c.HTML(http.StatusOK, "index.tmpl", gin.H{
		"title": "Main website",
	})
}
