CREATE TABLE holidays (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE working_weekends (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    description TEXT
);

CREATE TABLE working_hours (
    year INT,
    month INT,
    hours INT,
    PRIMARY KEY (year, month)
);