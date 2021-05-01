package db

import "testing"

func TestDbInit(t *testing.T) {
	tests := []struct {
		name    string
		wantErr bool
	}{}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if err := DbInit(); (err != nil) != tt.wantErr {
				t.Errorf("DbInit() error = %v, wantErr %v", err, tt.wantErr)
			}
		})
	}
}
