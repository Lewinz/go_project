package user

import (
	"fmt"
	"go_project/db"
	"go_project/util"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// QueryUser query user
func QueryUser(c *gin.Context) {
	userID, err := strconv.Atoi(c.Query("userId"))

	if err != nil {
		util.Failed(c, "strconv.Atoi", err)
		return
	}

	querySQL := "select * from use_table where user_id = ?"

	smrt, err := db.DbConnect.Prepare(querySQL)

	var user User

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}
	defer smrt.Close()

	err = smrt.QueryRow(userID).Scan(&user.UserID, &user.Name, &user.Age, &user.Adress, &user.CreateDate)

	if err != nil {
		util.Failed(c, "QueryRow", err)
		return
	}

	c.JSON(http.StatusOK, user)
}

// InsertUser is insert user table
func InsertUser(c *gin.Context) {
	var user User = User{}

	if err := c.BindJSON(&user); err != nil {
		util.Failed(c, "build struct err", err)
		return
	}

	fmt.Printf("user:-- %v", user)

	insertSQL := "insert into use_table (name,age,adress,create_time) values (?,?,?,?)"

	smrt, err := db.DbConnect.Prepare(insertSQL)

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}

	defer smrt.Close()

	sqlResult, err := smrt.Exec(user.Name, user.Age, user.Adress, user.CreateDate)

	if err != nil {
		util.Failed(c, "smrt.Exec", err)
		return
	}

	theID, err := sqlResult.LastInsertId()

	if err != nil {
		util.Failed(c, "getLastInsertId", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{"result": theID})
}

// UpdateUser is modify user table
func UpdateUser(c *gin.Context) {
	var user User

	err := c.BindJSON(&user)

	if err != nil {
		util.Failed(c, "build struct err", err)
		return
	}

	updateSQL := "update use_table set name = ?,age = ?,adress = ?,create_time = ? where user_id = ?"

	smrt, err := db.DbConnect.Prepare(updateSQL)

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}

	sqlResult, err := smrt.Exec(user.Name, user.Age, user.Adress, user.CreateDate, user.UserID)

	if err != nil {
		util.Failed(c, "smrt.Exec", err)
		return
	}

	n, err := sqlResult.RowsAffected()

	if err != nil {
		util.Failed(c, "RowsAffected", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{"result": n})
}

// DeleteUser is remove user table
func DeleteUser(c *gin.Context) {
	userID, err := strconv.Atoi(c.Query("userId"))

	if err != nil {
		util.Failed(c, "strconv.Atoi", err)
		return
	}

	deleteSQL := "delete from use_table where user_id = ?"

	smrt, err := db.DbConnect.Prepare(deleteSQL)

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}

	sqlResult, err := smrt.Exec(userID)

	if err != nil {
		util.Failed(c, "Exec", err)
		return
	}

	n, err := sqlResult.RowsAffected()

	if err != nil {
		util.Failed(c, "RowsAffected", err)
		return
	}

	c.JSON(http.StatusOK, gin.H{"result": n})
}
