package config

import (
	"fmt"

	"github.com/spf13/viper"
)

// InitTestConfig load yml config and read it.
func InitTestConfig() {
	viper.SetConfigType("yaml")
	viper.SetConfigName("config")
	viper.AddConfigPath("../../")
	err := viper.ReadInConfig()
	if err != nil {
		fmt.Println("viper load config faild", err)
	}
}
