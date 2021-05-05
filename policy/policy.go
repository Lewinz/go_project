package policy

import (
	"fmt"
	"go_project/components/db"
	"go_project/components/logger"
	"go_project/util"
	"net/http"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// PolicyBase policy base
type PolicyBase struct {
	ID         int    `json:"id"`
	PolicyNo   string `json:"policyNo"`
	InsureName string `json:"insureName"`

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

func (policy PolicyBase) isEmpty() bool {
	if policy.PolicyNo == "" {
		return true
	}
	return false
}

// QueryPolicy select policy info
func QueryPolicy(c *gin.Context) {
	policyNo, _ := c.GetQuery("policyNo")

	var policyList []PolicyBase

	db.DbConnect.Model(&PolicyBase{}).Where("policy_no = ?", policyNo).Find(&policyList)

	c.JSON(http.StatusOK, gin.H{
		"result": policyList,
	})
}

// CreatePolicy create
func CreatePolicy(c *gin.Context) {
	var policyBase PolicyBase

	c.ShouldBind(&policyBase)

	result := db.DbConnect.Create(&policyBase)
	if result.RowsAffected > 0 {
		c.JSON(http.StatusOK, gin.H{
			"result": policyBase.ID,
		})
	} else {
		logger.Debug("insert policyBase err:", zap.String("err", fmt.Sprintln(result.Error)))
		util.Failed(c, "insert err", result.Error)
	}
}

// UpdatePolicy update
func UpdatePolicy(c *gin.Context) {
	var policyBase PolicyBase

	c.ShouldBind(&policyBase)

	result := db.DbConnect.Model(PolicyBase{}).Where("policy_no = ?", policyBase.PolicyNo).Updates(policyBase)

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
	var policyBase PolicyBase

	c.ShouldBind(&policyBase)

	result := db.DbConnect.Delete(&PolicyBase{ID: policyBase.ID})

	if result.RowsAffected > 0 {
		c.JSON(http.StatusOK, gin.H{
			"result": "removed no:" + strconv.Itoa(policyBase.ID),
		})
	} else {
		logger.Debug("removed policyBase err:", zap.String("err", fmt.Sprintln(result.Error)))
		util.Failed(c, "removed err", result.Error)
	}
}
