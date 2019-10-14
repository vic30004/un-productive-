







CREATE DATABASE unproductive;
USE unproductive;


`INSERT INTO favorites_books (author_name, book_name, background_image, date_published, user_name)`


CREATE TABLE books
(
	author_name VARCHAR(50) NOT NULL,
	book_name 
	author VARCHAR(25) NOT NULL,
    rating INT(10) NOT NULL,
	PRIMARY KEY (book_name)
);

`INSERT INTO favorites_games (game_name, background_image, released_date, genre, user_name)`

CREATE TABLE games
(
	game_name VARCHAR(50) NOT NULL,
	background_image VARCHAR(25) NOT NULL,
    release_date INT NOT NULL,
    genre VARCHAR(25) Not Null,
    user_name VARCHAR(25)
	PRIMARY KEY (game_name)
);
