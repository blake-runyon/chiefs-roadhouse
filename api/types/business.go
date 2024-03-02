package types

// type Business struct {
// 	ID      int    `json:"id"`
// 	Name    string `json:"name"`
// 	Phone   string `json:"phone"`
// 	Email   string `json:"email"`
// 	Slug    string `json:"slug"`
// 	Address struct {
// 		Street  string `json:"street"`
// 		City    string `json:"city"`
// 		State   string `json:"state"`
// 		Zipcode string `json:"zipcode"`
// 	} `json:"address"`
// 	Owner struct {
// 		Name           string `json:"name"`
// 		Phone          string `json:"phone"`
// 		Email          string `json:"email"`
// 		MailingAddress struct {
// 			Street  string `json:"street"`
// 			City    string `json:"city"`
// 			State   string `json:"state"`
// 			Zipcode string `json:"zipcode"`
// 		} `json:"mailingAddress"`
// 	} `json:"owner"`
// }

type Business struct {
	ID                         int    `json:"id" db:"id"`
	Name                       string `json:"name" db:"name"`
	Phone                      string `json:"phone" db:"phone"`
	Email                      string `json:"email" db:"email"`
	Slug                       string `json:"slug" db:"slug"`
	AddressStreet              string `json:"address_street" db:"address_street"`
	AddressCity                string `json:"address_city" db:"address_city"`
	AddressState               string `json:"address_state" db:"address_state"`
	AddressZipcode             string `json:"address_zipcode" db:"address_zipcode"`
	OwnerName                  string `json:"owner_name" db:"owner_name"`
	OwnerPhone                 string `json:"owner_phone" db:"owner_phone"`
	OwnerEmail                 string `json:"owner_email" db:"owner_email"`
	OwnerMailingAddressStreet  string `json:"owner_mailingaddress_street" db:"owner_mailingaddress_street"`
	OwnerMailingAddressCity    string `json:"owner_mailingaddress_city" db:"owner_mailingaddress_city"`
	OwnerMailingAddressState   string `json:"owner_mailingaddress_state" db:"owner_mailingaddress_state"`
	OwnerMailingAddressZipcode string `json:"owner_mailingaddress_zipcode" db:"owner_mailingaddress_zipcode"`
}
