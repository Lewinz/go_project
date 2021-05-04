package user

import (
	"go_project/components/config"
	"go_project/components/db"
	"testing"
)

func TestValidUser(t *testing.T) {
	config.InitViperConfig("../")
	db.Instance()
	db.DbConnect.LogMode(true)
	type args struct {
		username string
		password string
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{
			name: "TestValidUser",
			args: args{
				"zxl",
				"123456",
			},
			want: true,
		},
		{
			name: "TestValidUser",
			args: args{
				"zxl",
				"000000",
			},
			want: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := ValidUser(tt.args.username, tt.args.password); got != tt.want {
				t.Errorf("ValidUser() = %v, want %v", got, tt.want)
			}
		})
	}
}
