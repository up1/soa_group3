CREATE DATABASE  IF NOT EXISTS `field_service` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `field_service`;

SET NAMES utf8;

DROP TABLE IF EXISTS `field`;

CREATE TABLE `field` (
  `field_id` int(11) NOT NULL AUTO_INCREMENT,
  `field_name` varchar(300) DEFAULT NULL,
  `tel` varchar(200) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `location` varchar(500) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  `detail` varchar(400) DEFAULT NULL,
  `imgurl` varchar(200) DEFAULT NULL,
  `stime` int(11) DEFAULT '0',
  `etime` int(11) DEFAULT '24',
  `username` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`field_id`)
);


DROP TABLE IF EXISTS `field_extend`;

CREATE TABLE `field_extend` (
  `ex_id` int(11) NOT NULL AUTO_INCREMENT,
  `field_id` int(11) DEFAULT NULL,
  `fieldex_name` varchar(45) DEFAULT NULL,
  `rent` int(11) DEFAULT NULL,
  `img` varchar(400) DEFAULT NULL,
  `size` varchar(45) DEFAULT NULL,
  `floor` varchar(45) DEFAULT 'หญ้าจริง',
  PRIMARY KEY (`ex_id`)
);

