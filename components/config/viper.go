package config

import (
	"fmt"

	"github.com/spf13/viper"
)

// InitViperConfig load yml config and read it.
func InitViperConfig(configPath string) {
	viper.SetConfigType("yaml")
	viper.SetConfigName("config")
	viper.AddConfigPath(configPath)
	err := viper.ReadInConfig()
	if err != nil {
		fmt.Println("viper load config faild", err)
	}
}
