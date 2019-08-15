DROP TABLE IF EXISTS actors;

CREATE TABLE actors(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    age INT,
    "name of Oscars" INT
);

INSERT INTO actors (name, age, "name of Oscars") VALUES ('Leonardo DiCaprio', '44', '1');
INSERT INTO actors (name, age, "name of Oscars") VALUES ('Jennifer Lawrence', '25', '1');
INSERT INTO actors (name, age, "name of Oscars") VALUES ('Samuel L. Jackson', '67', '1');
INSERT INTO actors (name, age, "name of Oscars") VALUES ('Meryl Streep', '57', '0');
INSERT INTO actors (name, age, "name of Oscars") VALUES ('John Cho', '78', '0');
