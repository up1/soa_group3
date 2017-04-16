DROP TABLE IF EXISTS `field`;

CREATE TABLE `field` (
  `field_id` int(11) NOT NULL AUTO_INCREMENT,
  `field_name` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tel` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price_range` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `location` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `website` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `detail` varchar(400) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(400) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `stime` int(11) DEFAULT '0',
  `etime` int(11) DEFAULT '24',
  `username` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`field_id`)
);


DROP TABLE IF EXISTS `field_extend`;

CREATE TABLE `field_extend` (
  `ex_id` int(11) NOT NULL AUTO_INCREMENT,
  `field_id` int(11) DEFAULT NULL,
  `fieldex_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `rent` int(11) DEFAULT NULL,
  `image` varchar(400) CHARACTER SET  utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `size` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `floor` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Natural Grass',
  PRIMARY KEY (`ex_id`)
);

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