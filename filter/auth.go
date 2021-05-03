package filter

import (
	"go_project/db"
	"go_project/user"
	"go_project/util"
	"log"
	"net/http"
	"strings"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
)

// MyClaims is token
type MyClaims struct {
	Username string `json:"username"`
	jwt.StandardClaims
}

// TokenExpireDuration token exprire time
const TokenExpireDuration = time.Hour * 2

// MySecret token Secret
var MySecret = []byte("zxl")

// AuthCheck check
func AuthCheck(c *gin.Context) {
	tokenStr, err := c.Cookie("go_project")

	log.Println("tokenStr-", tokenStr)

	if err != nil || len(tokenStr) == 0 {
		log.Println("token-", c.GetHeader("Authorization"))
		tokenStr = strings.TrimPrefix(c.GetHeader("Authorization"), "Bearer ")
	}

	if len(tokenStr) == 0 {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	token, err := jwt.ParseWithClaims(tokenStr, &MyClaims{}, func(token *jwt.Token) (i interface{}, err error) {
		return MySecret, nil
	})

	log.Println("token ParseWithClaims-", token)

	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
		return
	}

	if _, ok := token.Claims.(*MyClaims); ok && token.Valid { // 校验token
		c.Next()
	} else {
		c.AbortWithStatus(http.StatusUnauthorized)
	}
}

// CreateToken create jwt token by username password
func CreateToken(c *gin.Context) {
	var user user.User

	c.ShouldBind(&user)

	checkSQL := "select * from user where user_name=? and password =?"

	smrt, err := db.DbConnect.Prepare(checkSQL)

	if err != nil {
		util.Failed(c, "Prepare", err)
		return
	}

	defer smrt.Close()

	rows, err := smrt.Query(user.UserName, user.Password)

	if err != nil {
		util.Failed(c, "query", err)
		return
	}

	if rows.Next() {
		claims := MyClaims{
			user.UserName,
			jwt.StandardClaims{
				ExpiresAt: time.Now().Add(TokenExpireDuration).Unix(),
				Issuer:    "go_project",
			},
		}

		token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

		result, _ := token.SignedString(MySecret)

		log.Println("token-", result)

		c.SetCookie("go_project", result, 20000, "/", "", false, true)
		c.JSON(http.StatusOK, gin.H{
			"token": result,
		})
	}
}
