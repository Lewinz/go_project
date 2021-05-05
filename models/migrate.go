package models

import (
	"go_project/components/db"
	"log"
)

// AutoMigrate auto migrate database
func AutoMigrate() {
	err := db.DbConnect.Set("gorm:table_options", "CHARSET=utf8").AutoMigrate(
		&User{},
		&PolicyBase{},
	).Error

	if err != nil {
		log.Panic(err.Error())
	}
}
