DROP TABLE IF EXISTS field;

CREATE TABLE field
(
    field_id int(11) NOT NULL AUTO_INCREMENT,
    field_image BLOB,
    field_name varchar(45) NOT NULL,
    field_type varchar(45) NOT NULL,
    field_country varchar(100) NOT NULL,
    field_price int(100) NOT NULL,
    PRIMARY KEY (field_id)
);