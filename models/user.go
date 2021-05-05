package models

import "time"

// User system person
type User struct {
	ID        int64     `json:"id"`        // 主键
	UserName  string    `json:"userName"`  // 用户名
	Password  string    `json:"password"`  // 密码
	Email     string    `json:"email"`     // 邮箱
	CreatedAt time.Time `json:"createAt"`  // 创建时间
	UpdatedAt time.Time `json:"updatedAt"` // 创建时间
}
