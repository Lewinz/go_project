package policy

import (
	"go_project/db"
	"go_project/util"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Policy policy base
type Policy struct {
	PolicyNo   string `json:"policyNo"`
	InsureName string `json:"insureName"`
	CreateDate string `json:"createDate"`
}

// QueryPolicy select policy info
func QueryPolicy(c *gin.Context) {
	policyNo, _ := c.GetQuery("policyNo")

	querySQL := "select * from policy_base where policy_no = ?"

	smrt, err := db.DbConnect.Prepare(querySQL)

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}

	defer smrt.Close()

	rows, err := smrt.Query(policyNo)
	if err != nil {
		util.Failed(c, "QueryRow", err)
		return
	}

	var policyList []Policy

	for rows.Next() {
		var policyBase Policy

		err := rows.Scan(&policyBase.PolicyNo, &policyBase.InsureName, &policyBase.CreateDate)

		if err != nil {
			util.Failed(c, "QueryRow", err)
			return
		}
		policyList = append(policyList, policyBase)
	}

	c.JSON(http.StatusOK, gin.H{
		"result": policyList,
	})
}
