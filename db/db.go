package db

import "database/sql"

var DbConnect *sql.DB

func DbInit() (err error) {
	dsn := "root:123456@tcp(47.117.136.250:3306)/go?charset=utf8mb4&parseTime=True"

	DbConnect, err = sql.Open("mysql", dsn)

	if err != nil {
		return err
	}

	// 尝试连接数据库，效验dsn是否正确
	err = DbConnect.Ping()
	if err != nil {
		return err
	}

	return nil
}
