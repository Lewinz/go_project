package db

import (
	"database/sql"
	"fmt"

	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/spf13/viper"
)

// DbConnect datasouce connect
var DbConnect *sql.DB

// dbConfig is database connect param
type dbConfig struct {
	UserName string
	Password string
	IP       string
	Port     string
	Database string
	Charset  string
}

// Instance init datasouce config
func Instance() (err error) {
	dsn := getDBConfig()

	fmt.Println("dsn adress:" + dsn)
	DbConnect, err = sql.Open(getDBDriver(), dsn)

	if err != nil {
		fmt.Printf("sql.Open func append faild:%v", err)
		return err
	}

	// 尝试连接数据库，效验dsn是否正确
	err = DbConnect.Ping()
	if err != nil {
		fmt.Printf("sql.Ping func append faild:%v", err)
		return err
	}

	return nil
}

func getDBConfig() string {
	username := viper.GetString("database.username")
	password := viper.GetString("database.password")
	IP := viper.GetString("database.IP")
	port := viper.GetString("database.port")
	name := viper.GetString("database.name")
	charset := viper.GetString("database.charset")

	return username + ":" + password + "@tcp(" + IP + ":" + port + ")/" + name + "?charset=" + charset + "&parseTime=True"
}

func getDBDriver() string {
	return viper.GetString("database.type")
}
