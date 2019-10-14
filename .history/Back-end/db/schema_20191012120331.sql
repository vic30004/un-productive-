

CREATE DATABASE unproductive;
USE unproductive;

CREATE TABLE books
(
	book_name VARCHAR(50) NOT NULL,
	author VARCHAR(25) NOT NULL,
    rating INT(10) NOT NULL,
	PRIMARY KEY (book_name)
);

CREATE TABLE games
(
	game_name VARCHAR(50) NOT NULL,
	background_image VARCHAR(25) NOT NULL,
    release_date INT NOT NULL,
    genre VARCHAR(25) Not Null,
    user_name VARCHAR(25)
	PRIMARY KEY (game_name)
);
