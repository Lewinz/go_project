package policy

import (
	"go_project/components/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

// PolicyBase policy base
type PolicyBase struct {
	ID         int    `json:"id"`
	PolicyNo   string `json:"policyNo"`
	InsureName string `json:"insureName"`
	CreatedAt  string `json:"createAt"`
	UpdatedAt  string `json:"updatedAt"`
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
	var policy PolicyBase

	db.DbConnect.Where("policy_no = ?", policyNo).Limit(1).Find(&policy)

	c.JSON(http.StatusOK, gin.H{
		"result": policy,
	})
}
