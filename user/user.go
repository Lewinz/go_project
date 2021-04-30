package user

import "time"

type User struct {
	UserId     int       `json:"-"` // 主键
	Name       string    `json:"-"` // 姓名
	Age        int       `json:"-"` // 年龄
	Adress     string    `json:"-"` // 地址
	CreateDate time.Time `json:"-"` // 创建时间
}
