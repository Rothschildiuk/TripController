CREATE TABLE `contacts`
(
  `id`       INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `forename` VARCHAR(255)     NOT NULL,
  `surname`  VARCHAR(255)     NOT NULL,
  `phone`    VARCHAR(255)     NOT NULL,
  `address`  VARCHAR(255)     NOT NULL,
  `comment`  VARCHAR(255)     NOT NULL,
  PRIMARY KEY (`id`)
);


