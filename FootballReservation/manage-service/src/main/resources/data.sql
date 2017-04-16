
INSERT INTO `field` VALUES
(1,N'SamPaoSan Football','081-732-7343','3,000 - 3,500','98/1 M.13 Soi.Kubon Ramintra road ','sampaosan@hotmail.com',NULL,'Test123','path to image',9,24,'man'),
(2,N'KaoSan Football','081-918-2677','2,000 - 2,600','Suansiam Soi 16 Bangkok 10320','aphone2501@yahoo.com',NULL,NULL,'path to image',9,24,'man1'),
(3,N'TungTraKai Football','02-513-3425','1,200 - 1,300','Soi Ladprao 18 Ladprao road Bangkok 10900',NULL,NULL,NULL,'path to image',9,24,'man2'),
(4,N'CrisFrod Football','089-910-8519','	800 - 1,000','12/15 Kranparpreak RD Bangkok',NULL,NULL,NULL,'path to image',9,24,'man3'),
(5,'Golden Football Club','080-585-6655','600 - 1,500','54 M.2 ShimPree Bangkok 10170',NULL,NULL,NULL,'path to image',9,24,'man4'),
(6,'B.C. Ladchaprueak Football','086-311-6371','900 ','9/9 M.10 Soi Radchapreak 30/1 Radchapreak Rd Bangkok 10170',NULL,NULL,NULL,'path to image',9,24,'man5'),
(7,'50 Football','081-711-6251','1,000 - 1,200','622/50 Soi 50 Sukumvid Rd Bangkok 10110',NULL,NULL,NULL,'path to image',9,24,'man6'),
(8,'BIFA)','086-999-0894','600 - 990','NO 81 Soi Vipawadee-rungsid 50 Vipawadee-rungsid Rd Bangkok',NULL,NULL,NULL,'path to image',9,24,'man7'),
(9,'Sanamyai Football','Ann 081-993-9918, Viriya 089-821-8050','500 - 700','33/14 M.2 Soi Wadsumleag Kranjanapised Rd Nonburi 11400 ',NULL,NULL,NULL,'path to image',9,24,'man8'),
(10,'The kick 48','085-917-7058','350 - 1,300','เ Soi Predkrasem 48 or soi jarrun 13 Radchaprueak Rd Parseejaruean','tanita2517@yahoo.com','www.thekick48.com',NULL,'path to image',9,24,'man9'),
(11,'DragonStreet Football','081-916-1120','400 - 1,300','Soi Mangkorn Taeparuk Road KM. 8.5 Samudprakarn',NULL,NULL,NULL,'path to image',9,24,'man0'),
(12,'SportCenter','02-948-3783','300 - 4,000','Ladprao 101 Ladprao Road Bangkok',' phasakan@truemail.co.th',NULL,NULL,'path to image',9,24,'admin'),
(13,'สนามฟุตบอลสำเภาแสน','081-732-7343','	3,000 - 3,500','98/1 ม.13 ซ.คู้บอน ถ.รามอินทรา แขวง/เขต คันนายาว ','sampaosan@hotmail.com',NULL,'Test123','path to image',9,24,'man34');

INSERT INTO `field_extend` VALUES
(1,1,'test112',500,'img','35x50 m','Natural grass'),
(2,1,'test2',700,'img','35x50 m','Natural grass'),
(3,1,'test3',800,'img','35x50 m','Natural grass'),
(4,1,'test4',1000,'img','105x75 m','Plastic grass'),
(5,1,'test5',1500,'img','105x75 m','Natural grass'),
(6,2,'TEEE',400,'img','600x500 m','Cement floor'),
(7,3,'test5',1500,'img','105x75 m','Plastic grass'),
(8,4,'TEST',400,'img','105x75 m','Plastic grass'),
(9,5,'TEST',400,'img','105x75 m','Plastic grass'),
(10,6,'TEST',400,'img','105x75 m','Plastic grass'),
(11,7, 'TEST',400,'img','105x75 m','Natural grass'),
(12,8,'TEST',400,'img','105x75 m','Natural grass'),
(13,9,'TEST',400,'img','105x75 m','Natural grass'),
(14,10,'TEST',400,'img','105x75 m','Natural grass'),
(15,11,'TEST',400,'img','105x75 m','Plastic grass'),
(16,12,'TEST',400,'img','105x75 m','Resin floor'),
(17,1,'RE',111,'img','100x200 m','Resin floor');

INSERT INTO RESERVATION
(reservation_user, reservation_field_id, reservation_ex_id, reservation_time, reservation_date)
VALUES
('TestUser',1,1,1,'2017-03-12'),
('TestUser',1,1,2,'2017-03-12'),
('TestUser',1,1,3,'2017-03-12'),
('TestUser',1,1,4,'2017-03-12'),
('TestUser',1,1,5,'2017-03-12'),
('user',1,1,1,'2017-03-30'),
('user',1,1,2,'2017-03-30'),
('user',1,1,3,'2017-03-30'),
('user',1,1,4,'2017-03-30'),
('user',1,1,5,'2017-03-30'),
('watt',1,1,1,'2017-04-12'),
('watt',1,1,2,'2017-04-12'),
('watt',1,1,3,'2017-04-12'),
('watt',1,1,4,'2017-04-12'),
('watt',1,1,5,'2017-04-12'),
('name',1,1,1,'2017-05-12'),
('name',1,1,2,'2017-05-12'),
('name',1,1,3,'2017-05-12'),
('name',1,1,4,'2017-05-12'),
('name',1,1,5,'2017-05-12');