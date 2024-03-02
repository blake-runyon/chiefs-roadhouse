package main

import (
	"cheifs/api/db"
	"cheifs/api/routes"
)

func main() {
	db.Connect()
	routes.Run()
}
