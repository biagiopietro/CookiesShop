-- MySQL dump 10.13  Distrib 5.7.29, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: cookies_shop
-- ------------------------------------------------------
-- Server version	5.7.29-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cookie_recipes`
--

DROP TABLE IF EXISTS `cookie_recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cookie_recipes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `cookie_id` bigint(20) unsigned NOT NULL,
  `ingredient_id` bigint(20) unsigned NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cookie_recipes_cookie_id_foreign` (`cookie_id`),
  KEY `cookie_recipes_ingredient_id_foreign` (`ingredient_id`),
  CONSTRAINT `cookie_recipes_cookie_id_foreign` FOREIGN KEY (`cookie_id`) REFERENCES `cookies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `cookie_recipes_ingredient_id_foreign` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookie_recipes`
--

LOCK TABLES `cookie_recipes` WRITE;
/*!40000 ALTER TABLE `cookie_recipes` DISABLE KEYS */;
INSERT INTO `cookie_recipes` VALUES (1,1,11,0,NULL,NULL),(2,1,1,0,NULL,NULL),(3,1,31,0,NULL,NULL),(4,1,81,0,NULL,NULL),(5,1,41,0,NULL,NULL),(6,1,51,0,NULL,NULL),(7,11,81,0,NULL,NULL),(8,11,51,0,NULL,NULL),(9,11,41,0,NULL,NULL),(10,11,11,0,NULL,NULL),(11,11,31,0,NULL,NULL),(12,11,21,0,NULL,NULL),(13,11,61,0,NULL,NULL),(14,11,71,0,NULL,NULL),(15,21,181,0,NULL,NULL),(16,21,31,0,NULL,NULL),(17,21,81,0,NULL,NULL),(18,21,41,0,NULL,NULL),(19,21,51,0,NULL,NULL),(20,21,171,0,NULL,NULL),(21,21,191,0,NULL,NULL),(22,21,1,0,NULL,NULL),(23,31,1,0,NULL,NULL),(24,31,11,0,NULL,NULL),(25,31,201,0,NULL,NULL),(26,31,81,0,NULL,NULL),(27,41,1,0,NULL,NULL),(28,41,11,0,NULL,NULL),(29,41,211,0,NULL,NULL),(30,41,51,0,NULL,NULL),(31,41,41,0,NULL,NULL),(32,41,31,0,NULL,NULL),(33,41,81,0,NULL,NULL),(34,51,81,0,NULL,NULL),(35,51,11,0,NULL,NULL),(36,51,191,0,NULL,NULL),(37,51,41,0,NULL,NULL),(38,51,171,0,NULL,NULL),(39,51,51,0,NULL,NULL),(40,51,181,0,NULL,NULL),(41,51,61,0,NULL,NULL),(42,51,31,0,NULL,NULL),(43,61,1,0,NULL,NULL),(44,61,11,0,NULL,NULL),(45,61,31,0,NULL,NULL),(46,61,101,0,NULL,NULL),(47,61,61,0,NULL,NULL),(48,61,51,0,NULL,NULL),(49,71,1,0,NULL,NULL),(50,71,11,0,NULL,NULL),(51,71,31,0,NULL,NULL),(52,71,61,0,NULL,NULL),(53,71,81,0,NULL,NULL),(54,71,41,0,NULL,NULL),(55,71,51,0,NULL,NULL),(56,71,171,0,NULL,NULL),(57,91,81,0,NULL,NULL),(58,91,51,0,NULL,NULL),(59,91,171,0,NULL,NULL),(60,91,1,0,NULL,NULL),(61,91,11,0,NULL,NULL),(62,91,31,0,NULL,NULL),(63,91,231,0,NULL,NULL),(64,101,1,0,NULL,NULL),(65,101,31,0,NULL,NULL),(66,101,81,0,NULL,NULL),(67,101,11,0,NULL,NULL),(68,101,61,0,NULL,NULL),(69,111,1,0,NULL,NULL),(70,111,11,0,NULL,NULL),(71,111,61,0,NULL,NULL),(72,111,81,0,NULL,NULL),(73,111,241,0,NULL,NULL),(74,111,251,0,NULL,NULL),(75,121,11,0,NULL,NULL),(76,121,271,0,NULL,NULL),(77,121,31,0,NULL,NULL),(78,121,261,0,NULL,NULL),(79,121,81,0,NULL,NULL),(80,121,51,0,NULL,NULL),(81,121,41,0,NULL,NULL),(82,131,71,0,NULL,NULL),(83,131,11,0,NULL,NULL),(84,131,31,0,NULL,NULL),(85,131,181,0,NULL,NULL),(86,131,61,0,NULL,NULL),(87,131,81,0,NULL,NULL),(88,141,281,0,NULL,NULL),(89,141,11,0,NULL,NULL),(90,141,51,0,NULL,NULL),(91,141,291,0,NULL,NULL),(92,141,301,0,NULL,NULL),(93,141,241,0,NULL,NULL),(94,141,81,0,NULL,NULL),(95,141,41,0,NULL,NULL),(96,141,1,0,NULL,NULL),(97,141,31,0,NULL,NULL),(98,141,61,0,NULL,NULL),(99,151,311,0,NULL,NULL),(100,151,1,0,NULL,NULL),(101,151,31,0,NULL,NULL),(102,151,61,0,NULL,NULL),(103,151,81,0,NULL,NULL),(104,151,51,0,NULL,NULL),(105,161,21,0,NULL,NULL),(106,161,61,0,NULL,NULL),(107,161,51,0,NULL,NULL),(108,161,31,0,NULL,NULL),(109,161,71,0,NULL,NULL),(110,171,31,0,NULL,NULL),(111,171,1,0,NULL,NULL),(112,171,11,0,NULL,NULL),(113,171,61,0,NULL,NULL),(114,171,81,0,NULL,NULL),(115,181,81,0,NULL,NULL),(116,181,1,0,NULL,NULL),(117,181,71,0,NULL,NULL),(118,181,81,0,NULL,NULL),(119,181,11,0,NULL,NULL),(120,181,31,0,NULL,NULL),(121,181,61,0,NULL,NULL),(122,191,1,0,NULL,NULL),(123,191,31,0,NULL,NULL),(124,191,61,0,NULL,NULL),(125,191,11,0,NULL,NULL),(126,191,321,0,NULL,NULL),(127,191,81,0,NULL,NULL),(128,191,51,0,NULL,NULL),(129,191,41,0,NULL,NULL),(130,201,1,0,NULL,NULL),(131,201,11,0,NULL,NULL),(132,201,31,0,NULL,NULL),(133,201,81,0,NULL,NULL),(134,201,41,0,NULL,NULL),(135,201,191,0,NULL,NULL),(136,201,171,0,NULL,NULL),(137,201,51,0,NULL,NULL),(138,201,331,0,NULL,NULL),(139,211,1,0,NULL,NULL),(140,211,231,0,NULL,NULL),(141,211,81,0,NULL,NULL),(142,211,31,0,NULL,NULL),(143,211,61,0,NULL,NULL),(144,221,11,0,NULL,NULL),(145,221,341,0,NULL,NULL),(146,221,71,0,NULL,NULL),(147,221,351,0,NULL,NULL),(148,221,31,0,NULL,NULL),(149,221,291,0,NULL,NULL),(150,221,81,0,NULL,NULL),(151,221,171,0,NULL,NULL),(152,221,41,0,NULL,NULL),(153,231,31,0,NULL,NULL),(154,231,11,0,NULL,NULL),(155,231,51,0,NULL,NULL),(156,231,1,0,NULL,NULL),(157,231,61,0,NULL,NULL),(158,241,81,0,NULL,NULL),(159,241,51,0,NULL,NULL),(160,241,41,0,NULL,NULL),(161,241,11,0,NULL,NULL),(162,241,1,0,NULL,NULL),(163,241,31,0,NULL,NULL),(164,241,361,0,NULL,NULL),(165,241,371,0,NULL,NULL),(166,251,381,0,NULL,NULL),(167,251,391,0,NULL,NULL),(168,251,401,0,NULL,NULL);
/*!40000 ALTER TABLE `cookie_recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookies`
--

DROP TABLE IF EXISTS `cookies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cookies` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `weight` double NOT NULL DEFAULT '0',
  `calories` double NOT NULL DEFAULT '0',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cookies_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=252 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookies`
--

LOCK TABLES `cookies` WRITE;
/*!40000 ALTER TABLE `cookies` DISABLE KEYS */;
INSERT INTO `cookies` VALUES (1,'Snickerdoodles',5.5,120,0,NULL,NULL),(11,'Chocolate Chip',10,347,0,NULL,NULL),(21,'Gingersnaps',4.8,105,0,NULL,NULL),(31,'Shortbread',7.8,111,0,NULL,NULL),(41,'Peanut Butter',13.6,252,0,NULL,NULL),(51,'Gingerbread Whoopie Pies',17.5,423,0,NULL,NULL),(61,'Chewy Strawberry Sugar',14,86,0,NULL,NULL),(71,'Oatmeal Raisin',8.8,218,0,NULL,NULL),(81,'Biscotti',7.8,138,0,NULL,NULL),(91,'Butter Snow Flakes',6.1,105,0,NULL,NULL),(101,'Spritz',8.4,144,0,NULL,NULL),(111,'Candy Cane Snowball',8.7,127,0,NULL,NULL),(121,'Mincemeat II',12.7,315,0,NULL,NULL),(131,'Zebra',10.7,214,0,NULL,NULL),(141,'Orange Date Pinwheel',4.3,114,0,NULL,NULL),(151,'Benne Wafers',6,106,0,NULL,NULL),(161,'Chocolate-Dipped Coconut Macaroons',9.9,133,0,NULL,NULL),(171,'Fortune',2.6,53,0,NULL,NULL),(181,'Chocolate Crinkle',4.8,98,0,NULL,NULL),(191,'Coconut Icebox',5,118,0,NULL,NULL),(201,'Chewy White Chocolate Chip Gingerbread',11.1,231,0,NULL,NULL),(211,'Walnut Tassies',10.4,159,0,NULL,NULL),(221,'Chocolate Lebkuchen',3.3,135,0,NULL,NULL),(231,'French Macarons',6.4,125,0,NULL,NULL),(241,'White Chocolate Macadamia Cranberry Dreams',10.2,202,0,NULL,NULL),(251,'Vegan Unicorn',10.2,202,0,NULL,NULL);
/*!40000 ALTER TABLE `cookies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingredients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `is_veggie` tinyint(1) NOT NULL DEFAULT '0',
  `is_vegan` tinyint(1) NOT NULL DEFAULT '0',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ingredients_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=402 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,'butter',1,0,0,NULL,NULL),(11,'sugar',1,1,0,NULL,NULL),(21,'milk',1,0,0,NULL,NULL),(31,'egg',0,0,0,NULL,NULL),(41,'baking soda',1,1,0,NULL,NULL),(51,'salt',1,1,0,NULL,NULL),(61,'vanilla',1,1,0,NULL,NULL),(71,'chocolate',1,1,0,NULL,NULL),(81,'flour',1,1,0,NULL,NULL),(91,'banana',1,1,0,NULL,NULL),(101,'strawberry',1,1,0,NULL,NULL),(111,'speak',0,0,0,NULL,NULL),(121,'bacon',0,0,0,NULL,NULL),(131,'caraway seeds',1,1,0,NULL,NULL),(141,'onion',1,1,0,NULL,NULL),(151,'cumin',1,1,0,NULL,NULL),(161,'candied fruit',1,1,0,NULL,NULL),(171,'cinnamon',1,1,0,NULL,NULL),(181,'vegetable oil',1,1,0,NULL,NULL),(191,'ginger',1,1,0,NULL,NULL),(201,'cornstarch',1,1,0,NULL,NULL),(211,'peanut butter',1,1,0,NULL,NULL),(221,'anise',1,1,0,NULL,NULL),(231,'cream cheese',1,0,0,NULL,NULL),(241,'pecans',1,1,0,NULL,NULL),(251,'peppermint',1,1,0,NULL,NULL),(261,'mincemeat',0,0,0,NULL,NULL),(271,'shortening',0,0,0,NULL,NULL),(281,'dates',1,1,0,NULL,NULL),(291,'orange juice',1,1,0,NULL,NULL),(301,'orange zest',1,1,0,NULL,NULL),(311,'sesame seeds',1,1,0,NULL,NULL),(321,'coconut',1,1,0,NULL,NULL),(331,'nutmeg',1,1,0,NULL,NULL),(341,'honey',1,0,0,NULL,NULL),(351,'candied mixed fruit',1,1,0,NULL,NULL),(361,'macadamia nuts',1,1,0,NULL,NULL),(371,'cranberries',1,1,0,NULL,NULL),(381,'coconut flour',1,1,0,NULL,NULL),(391,'cashew butter',1,1,0,NULL,NULL),(401,'maple syrup',1,1,0,NULL,NULL);
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2020_02_28_150644_create_cookies_table',1),(2,'2020_02_28_151101_create_ingredients_table',1),(3,'2020_02_28_152003_create_cookie_recipes_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-12 11:29:52
