package policy

import (
	"testing"

	"github.com/gin-gonic/gin"
)

func TestQueryPolicy(t *testing.T) {
	type args struct {
		c *gin.Context
	}
	tests := []struct {
		name string
		args args
	}{
		// TODO: Add test cases.
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			QueryPolicy(tt.args.c)
		})
	}
}
