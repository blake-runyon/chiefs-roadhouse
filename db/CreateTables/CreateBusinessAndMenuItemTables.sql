CREATE TABLE business (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    address_street VARCHAR(255) NOT NULL,
    address_city VARCHAR(100) NOT NULL,
    address_state VARCHAR(50) NOT NULL,
    address_zipcode VARCHAR(20) NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    owner_phone VARCHAR(20) NOT NULL,
    owner_email VARCHAR(255) NOT NULL,
    owner_mailingAddress_street VARCHAR(255) NOT NULL,
    owner_mailingAddress_city VARCHAR(100) NOT NULL,
    owner_mailingAddress_state VARCHAR(50) NOT NULL,
    owner_mailingAddress_zipcode VARCHAR(20) NOT NULL
);

CREATE TABLE menu_item (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    description TEXT,
    available BOOLEAN NOT NULL,
    business_id INTEGER NOT NULL,
    FOREIGN KEY (business_id) REFERENCES business(id)
);