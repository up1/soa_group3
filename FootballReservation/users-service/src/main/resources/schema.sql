DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS
(

    user_id int(11) NOT NULL AUTO_INCREMENT,
    user_fname varchar(100) NOT NULL,
    user_lname varchar(100) NOT NULL,
    user_email varchar(100) NOT NULL,
    password varchar(100) NOT NULL,
    role enum('user','manager','admin') DEFAULT 'user',
    PRIMARY KEY (user_id)
);