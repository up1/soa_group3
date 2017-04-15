DROP TABLE IF EXISTS RESERVATION;

CREATE TABLE RESERVATION
(

    reservation_id int(11) NOT NULL AUTO_INCREMENT,
    reservation_user varchar(100) NOT NULL,
    reservation_field_id int(11) NOT NULL,
    reservation_ex_id int(11) NOT NULL,
    reservation_time int(11) NOT NULL,
    reservation_date DATE NOT NULL,
    reservation_status varchar(100) NOT NULL DEFAULT 'pending',
    PRIMARY KEY (`reservation_time`,`reservation_date`,`reservation_field_id`,`reservation_ex_id`),
    UNIQUE KEY `reserv_id_UNIQUE` (`reservation_id`)
);