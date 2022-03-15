CREATE TABLE IF NOT EXISTS users
(
    user_id SERIAL PRIMARY KEY,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date,
    "updatedAt" date
);

INSERT INTO users (name, email)
VALUES ('Derek', 'derek@rp.com'), ('Aaron','aaron@rp.com'),('Omar','omar@rp.com'),('German','german@rp.com');

 CREATE TABLE IF NOT EXISTS movies
(
    movie_id SERIAL PRIMARY KEY,
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    description character varying COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date,
    "updatedAt" date
);

INSERT INTO movies (name, description) VALUES ('Another Day to Die', 'James Bond Movie'), ('Occtopussy','Was very provactive');

CREATE TABLE IF NOT EXISTS ratings
(
    rating_id SERIAL PRIMARY KEY,
    user_id SERIAL NOT NULL,
    movie_id SERIAL NOT NULL,
    rating SERIAL NOT NULL,
    comment character varying(500) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    CONSTRAINT "Movies_movieID_fkey" FOREIGN KEY (movie_id)
        REFERENCES movies (movie_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "Users_userID_fkey" FOREIGN KEY (user_id)
        REFERENCES users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

INSERT INTO ratings (user_id, movie_id, rating, comment) VALUES (1,3,5,'was not that great, but not bad either'), (2,2,7,'Was very provactive');