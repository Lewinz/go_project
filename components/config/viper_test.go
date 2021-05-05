package config

import (
	"fmt"
	"testing"

	"github.com/spf13/viper"
)

func TestInitViperConfig(t *testing.T) {
	InitTestConfig()
	port := viper.GetString("server.port")
	fmt.Println("test server port:", port)
}
