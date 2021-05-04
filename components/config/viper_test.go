package config

import (
	"fmt"
	"testing"

	"github.com/spf13/viper"
)

func TestInitViperConfig(t *testing.T) {
	InitViperConfig("../../")

	serverPort := viper.GetString("server.port")
	fmt.Println("load config success serverPort:", serverPort)
}
