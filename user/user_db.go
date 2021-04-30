package user

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/lewin/project/db"
	"github.com/lewin/project/util"
)

func QueryUser(c *gin.Context) {
	userId, err := strconv.Atoi(c.Query("userId"))

	if err != nil {
		util.Failed(c, "strconv.Atoi", err)
		return
	}

	querySql := "select * from use_table where user_id = ?"

	smrt, err := db.DbConnect.Prepare(querySql)

	var user User

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}
	defer smrt.Close()

	err = smrt.QueryRow(userId).Scan(&user.UserId, &user.Name, &user.Age, &user.Adress, &user.CreateDate)

	if err != nil {
		util.Failed(c, "QueryRow", err)
		return
	}

	c.JSON(http.StatusOK, user)
}

func InsertUser(c *gin.Context) {
	var user User

	err := c.BindJSON(user)

	if err != nil {
		util.Failed(c, "build struct err", err)
		return
	}

	insertSql := "insert into use_table (user_id,name,age,adress,create_time) values (?,?,?,?,?)"

	smrt, err := db.DbConnect.Prepare(insertSql)

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}

	defer smrt.Close()

	sqlResult, err := smrt.Exec(user.UserId, user.Name, user.Age, user.Adress, user.CreateDate)

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

func UpdateUser(c *gin.Context) {
	var user User

	err := c.BindJSON(user)

	if err != nil {
		util.Failed(c, "build struct err", err)
		return
	}

	updateSql := "update use_table set name = ?,age = ?,adress = ?,create_time = ? where user_id = ?"

	smrt, err := db.DbConnect.Prepare(updateSql)

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}

	sqlResult, err := smrt.Exec(user.Name, user.Age, user.Adress, user.CreateDate, user.UserId)

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

func DeleteUser(c *gin.Context) {
	userId, err := strconv.Atoi(c.Query("userId"))

	if err != nil {
		util.Failed(c, "strconv.Atoi", err)
		return
	}

	deleteSql := "delete from use_table where user_id = ?"

	smrt, err := db.DbConnect.Prepare(deleteSql)

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}

	sqlResult, err := smrt.Exec(userId)

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
