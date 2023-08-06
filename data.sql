CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    customer_name TEXT NOT NULL,
    travel_startdate DATE NOT NULL,
    travel_enddate DATE NOT NULL,
    startpoint TEXT NOT NULL,
    endpoint TEXT NOT NULL,
    pax INT NOT NULL,
    amount INT NOT NULL,
    gas_fee INT NOT NULL,
    driver_fee INT NOT NULL,
    maintenance_fee INT NOT NULL
);