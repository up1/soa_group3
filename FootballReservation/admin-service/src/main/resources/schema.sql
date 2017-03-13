DROP TABLE IF EXISTS MEMBER;

CREATE TABLE MEMBER
(
    user_id int(7) NOT NULL AUTO_INCREMENT,
    user_firstname varchar(100) NOT NULL,
    user_lastname varchar(100) NOT NULL,
    user_address varchar(255) NOT NULL,
    user_email varchar(50) NOT NULL,
    user_role varchar(50) NOT NULL DEFAULT 'Member',
    PRIMARY KEY (user_id)
);
