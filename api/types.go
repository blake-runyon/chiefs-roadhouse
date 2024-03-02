package main

type MenuItem struct {
	ID          int     `json:"id" db:"id"`
	Name        string  `json:"name" db:"name"`
	Price       float64 `json:"price" db:"price"`
	Description string  `json:"description" db:"description"`
	Avaliable   bool    `json:"avaliable" db:"available"`
	BusinessID  int     `json:"businessId" db:"business_id"`
}
