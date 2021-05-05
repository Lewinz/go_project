package policy

import (
	"fmt"
	"go_project/components/db"
	"go_project/components/logger"
	"go_project/models"
	"go_project/util"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// QueryPolicy select policy info
func QueryPolicy(c *gin.Context) {
	policyNo, _ := c.GetQuery("policyNo")

	var baseList []models.PolicyBase

	db.DbConnect.Model(&models.PolicyBase{}).Where("policy_no = ?", policyNo).Find(&baseList)

	c.JSON(http.StatusOK, gin.H{
		"result": baseList,
	})
}

// CreatePolicy create
func CreatePolicy(c *gin.Context) {
	var base models.PolicyBase

	c.ShouldBind(&base)

	result := db.DbConnect.Create(&base)
	if result.RowsAffected > 0 {
		c.JSON(http.StatusOK, gin.H{
			"result": base.ID,
		})
	} else {
		logger.Debug("insert policyBase err:", zap.String("err", fmt.Sprintln(result.Error)))
		util.Failed(c, "insert err", result.Error)
	}
}

// UpdatePolicy update
func UpdatePolicy(c *gin.Context) {
	var base models.PolicyBase

	c.ShouldBind(&base)

	result := db.DbConnect.Model(models.PolicyBase{}).Where("policy_no = ?", base.PolicyNo).Updates(base)

	if result.RowsAffected > 0 {
		c.JSON(http.StatusOK, gin.H{
			"result": result.RowsAffected,
		})
	} else {
		logger.Debug("update policyBase err:", zap.String("err", fmt.Sprintln(result.Error)))
		util.Failed(c, "update err", result.Error)
	}
}

// DeletePolicy delete
func DeletePolicy(c *gin.Context) {
	var base models.PolicyBase

	c.ShouldBind(&base)

	result := db.DbConnect.Delete(models.PolicyBase{ID: base.ID})

	if result.RowsAffected > 0 {
		c.JSON(http.StatusOK, gin.H{
			"result": "removed no:" + strconv.Itoa(base.ID),
		})
	} else {
		logger.Debug("removed policyBase err:", zap.String("err", fmt.Sprintln(result.Error)))
		util.Failed(c, "removed err", result.Error)
	}
}
