package user

// User system person
type User struct {
	UserID     int64  `json:"userID"`     // 主键
	Name       string `json:"name"`       // 姓名
	Age        int64  `json:"age"`        // 年龄
	Adress     string `json:"adress"`     // 地址
	CreateDate string `json:"createDate"` // 创建时间
}
