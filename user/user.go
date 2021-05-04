package user

import (
	"fmt"
	"go_project/components/db"
)

// User system person
type User struct {
	ID        int64  `json:"id"`        // 主键
	UserName  string `json:"userName"`  // 用户名
	Password  string `json:"password"`  // 密码
	Email     string `json:"email"`     // 邮箱
	CreatedAt string `json:"createAt"`  // 创建时间
	UpdatedAt string `json:"updatedAt"` // 创建时间
}

func (user User) isEmpty() bool {
	if user.UserName == "" || user.Password == "" {
		return true
	}
	return false
}

// ValidUser valid usernem & password exist
func ValidUser(username string, password string) bool {
	if username == "" || password == "" {
		return false
	}

	var user User

	db.DbConnect.Where("user_name = ? AND password = ?", username, password).Limit(1).Find(&user)

	if user.isEmpty() {
		fmt.Println("db can't found result")
		return false
	}
	return true
}
