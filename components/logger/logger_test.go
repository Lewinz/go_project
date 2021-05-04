package logger

import (
	"go_project/components/config"
	"testing"
)

func TestInitLoggerConfig(t *testing.T) {
	config.InitViperConfig("../../")
	InitLoggerConfig()

	Debug("hahahahahahah")
}
