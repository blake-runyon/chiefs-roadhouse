package db

import (

	// "database/sql"
	"log"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var DB *sqlx.DB

func Connect() {
	// const (
	// 	host     = "localhost"
	// 	port     = 32768
	// 	user     = "postgres"
	// 	password = "password"
	// 	dbname   = "chiefs"
	// )
	db, err := sqlx.Connect("postgres", "user=postgres dbname=chiefs sslmode=disable password=password host=localhost port=32768")
	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	DB = db

	// rows, err := db.Queryx(`SELECT * FROM business b`)
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// table_rec := []types.Business{}
	// // err = db.Select(&table_rec, "SELECT * FROM business")
	// // if err != nil {
	// // 	log.Fatal(err)
	// // }
	// // for rows.Next() {
	// // 	// loads the current row into the struct
	// // 	rows.StructScan(&table_rec)
	// // 	// fmt.Printf("%+v\n", table_rec)
	// // }

	// err = sqlx.StructScan(rows, &table_rec)
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// println(table_rec[0].Name)

	// defer db.Close()

	// Test the connection to the database
	// if err := db.Ping(); err != nil {
	// 	log.Fatal(err)
	// } else {
	// 	log.Println("Successfully Connected")
	// }
	// chiefs := biz[0]

	// print(chiefs.Name)

}
