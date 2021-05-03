package user

import (
	"fmt"
	"go_project/db"
)

// User system person
type User struct {
	UserID     int64  `json:"userID"`     // 主键
	UserName   string `json:"userName"`   // 用户名
	Password   int64  `json:"password"`   // 密码
	Email      string `json:"email"`      // 邮箱
	CreateDate string `json:"createDate"` // 创建时间
}

// ValidUser valid usernem & password exist
func ValidUser(username string, password string) bool {

	querySQL := "select * from user where user_id = ? and password = ?"

	smrt, err := db.DbConnect.Prepare(querySQL)

	if err != nil {
		fmt.Println("func happend err:", err)
		return false
	}
	defer smrt.Close()

	rows, err := smrt.Query(username, password)

	if err != nil {
		fmt.Println("func happend err:", err)
		return false
	}
	defer rows.Close()

	if !rows.Next() {
		return false
	}

	return true
}
