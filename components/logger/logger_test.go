package logger

import (
	"go_project/components/config"
	"testing"
)

func TestInitLoggerConfig(t *testing.T) {
	config.InitTestConfig()
	InitLoggerConfig()

	Debug("hahahahahahah")
}
