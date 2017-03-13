DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS
(

    id long(11) NOT NULL AUTO_INCREMENT,
    username varchar(100) NOT NULL,
    fullname varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    profile_picture varchar(100) NOT NULL,
    user_type varchar(100) NOT NULL,
    PRIMARY KEY (id)
);