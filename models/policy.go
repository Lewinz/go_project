package models

import "time"

// PolicyBase policy base
type PolicyBase struct {
	ID         int    `json:"id"`
	PolicyNo   string `json:"policyNo"`
	InsureName string `json:"insureName"`
	extend     PolicyExtend

	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

// PolicyExtend policybase extend struct
type PolicyExtend struct {
	ID         int64     `json:"id"`
	ExtendName string    `json:"extendName"`
	CreatedAt  time.Time `json:"createdAt"`
	UpdatedAt  time.Time `json:"updatedAt"`
}
