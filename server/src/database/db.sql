CREATE TABLE rooms (
    id SERIAL PRIMARY KEY, name VARCHAR(20) NOT NULL, users TEXT[] NOT NULL
);

INSERT INTO rooms (name, users) VALUES ('Team 1', '{}');
INSERT INTO rooms (name, users) VALUES ('Team 2', '{}');
INSERT INTO rooms (name, users) VALUES ('Team 3', '{}');
INSERT INTO rooms (name, users) VALUES ('Team 4', '{}');
INSERT INTO rooms (name, users) VALUES ('Team 5', '{}');