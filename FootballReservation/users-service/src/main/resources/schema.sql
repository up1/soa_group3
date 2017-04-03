DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS
(

    user_id int(11) NOT NULL AUTO_INCREMENT,
    user_fullname varchar(100) NOT NULL,
    user_email varchar(100) NOT NULL,
    user_address varchar(200) NOT NULL,
    user_picture varchar(100) NOT NULL,
    username varchar(100) NOT NULL UNIQUE,
    password varchar(100) NOT NULL,
    role enum('user','manager','admin') NOT NULL,
    PRIMARY KEY (user_id)
);