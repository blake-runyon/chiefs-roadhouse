DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM business
        WHERE name = 'Chiefs Roadhouse'
    ) THEN
        INSERT INTO business (name, phone, email, slug, address_street, address_city, address_state, address_zipcode, owner_name, owner_phone, owner_email, owner_mailingAddress_street, owner_mailingAddress_city, owner_mailingAddress_state, owner_mailingAddress_zipcode)
		VALUES (
		    'Chiefs Roadhouse',
		    '304-752-0505',
		    'contact@chiefs.com',
		    'chiefs',
		    '123 main st',
		    'Logan',
		    'WV',
		    '25770',
		    'Julie',
		    '333-333-3333',
		    'juliewhite@gmail.com',
		    'PO Box 144',
		    'Lenore',
		    'WV',
		    '25676'
		);
    ELSE
        RAISE NOTICE 'Data exists in the table.';
    END IF;
END $$;
