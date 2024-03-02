package repository

import (
	"cheifs/api/db"
	"cheifs/api/types"
	"log"

	"github.com/jmoiron/sqlx"
)

func GetMenuItems(bid int) []types.MenuItem {
	items := []types.MenuItem{}
	rows, err := db.DB.Queryx("SELECT * FROM menu_item m WHERE m.business_id=$1", bid)
	if err != nil {
		log.Fatal(err)
	}

	err = sqlx.StructScan(rows, &items)
	if err != nil {
		log.Fatal(err)
	}

	return items
}

func CreateMenuItem(bid int, newItem types.MenuItem) types.MenuItem {
	_, err := db.DB.NamedExec(`
		INSERT INTO menu_item (name, price, description, available, business_id)
					  VALUES (:name, :price, :description, :available, :business_id)
	`, newItem)

	if err != nil {
		log.Fatal(err)
	}

	return newItem
}

func DeleteMenuItem(bid int, itemId int) int {
	_, err := db.DB.NamedExec(`
		DELETE FROM menu_item
		WHERE id=:itemId AND business_id=:bid
	`, map[string]interface{}{
		"itemId": itemId,
		"bid":    bid,
	})

	if err != nil {
		log.Fatal(err)
	}

	return itemId
}

func UpdateMenuItem(currentItem types.MenuItem) types.MenuItem {
	_, err := db.DB.NamedExec(`
	UPDATE menu_item
	SET name=:name, price=:price, description=:description, available=:available
	WHERE id=:id AND business_id=:business_id;
	`, currentItem)

	if err != nil {
		log.Fatal(err)
	}

	return currentItem
}

func GetMenuItemById(bid int, iid int) types.MenuItem {
	item := types.MenuItem{}

	err := db.DB.Get(&item, "SELECT * FROM menu_item m WHERE m.business_id=$1 AND m.id=$2 LIMIT 1", bid, iid)

	if err != nil {
		log.Fatal(err)
	}

	return item
}
