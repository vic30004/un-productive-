CREATE DATABASE unproductive_db;
​
​
USE unproductive_db;
​
CREATE TABLE favorites_books
(
	id int NOT NULL AUTO_INCREMENT,
	author_name varchar(255) NOT NULL,
    book_name varchar(255) NOT NULL,
    picture varchar(255) NOT NULL,
    date_published varchar(50) NOT NULL,
    user_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
​
CREATE TABLE favorites_games
(
	id int NOT NULL AUTO_INCREMENT,
	game_name varchar(255) NOT NULL,
    background_image varchar(255) NOT NULL,
	released_date  varchar(50) NOT NULL,
    rating int  NOT NULL,
	user_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);








CREATE DATABASE unproductive;
USE unproductive;


CREATE TABLE books
(
	author_name VARCHAR(50) NOT NULL,
	book_name VARCHAR (225) NOT NULL,
	background_image VARCHAR(225) NOT NULL,
    date_published INT(25) NOT NULL,
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
