package db

import (
	"fmt"
	"go_project/components/config"
	"testing"

	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func TestDbInit(t *testing.T) {
	tests := []struct {
		name    string
		wantErr bool
	}{}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := Instance(); (err != nil) != tt.wantErr {
				t.Errorf("DbInit() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}

func Test_getDBConfig(t *testing.T) {
	config.InitViperConfig("../../")
	dbStr := getDBConfig()
	fmt.Println("dbStr--", dbStr)

	fmt.Println("driver--", getDBDriver())
}
