DROP TABLE IF EXISTS RESERV;

CREATE TABLE RESERV
(

    reserv_id int(11) NOT NULL AUTO_INCREMENT,
    reserv_user varchar(100) NOT NULL,
    reserv_field_id int(11) NOT NULL,
    reserv_ex_id int(11) NOT NULL,
    reserv_time int(11) NOT NULL,
    reserv_date varchar(100) NOT NULL,
    reserv_status varchar(100) NOT NULL,
    PRIMARY KEY (reserv_id)
);