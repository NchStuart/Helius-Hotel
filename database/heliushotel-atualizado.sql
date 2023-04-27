-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: heliushotel
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acomodacao`
--

DROP TABLE IF EXISTS `acomodacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acomodacao` (
  `id_acomodacao` int NOT NULL AUTO_INCREMENT,
  `id_acomodacao_tipo` int NOT NULL,
  `nome` varchar(45) NOT NULL,
  `descricao` longtext NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id_acomodacao`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acomodacao`
--

LOCK TABLES `acomodacao` WRITE;
/*!40000 ALTER TABLE `acomodacao` DISABLE KEYS */;
INSERT INTO `acomodacao` VALUES (1,1,'quarto-simples','Nossos quartos simples oferecem a melhor opção custo/benefício se você pretende aliar bem estar e economia.',100,1),(2,2,'quarto-premium','Quartos premium com todas as comodidades essenciais para o seu conforto. Todos os nossos apartamentos luxo são de frente e proporcionam aos nossos hóspedes uma vista maravilhosa, além de um espaço reservado especialmente para aqueles que vem a trabalho e precisam utilizar seu notebook.',200,1),(3,3,'quarto-bangalô','Nossos quartos Bangalô são exatamente como o nome já diz: muito mais conforto e requinte para nossos hóspedes. Alguns de nossos quartos bangalô são equipados com sauna.',300,1);
/*!40000 ALTER TABLE `acomodacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `acomodacao_tipo`
--

DROP TABLE IF EXISTS `acomodacao_tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `acomodacao_tipo` (
  `id_acomodacao_tipo` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `acomodacao_id_acomodacao` int unsigned NOT NULL,
  PRIMARY KEY (`id_acomodacao_tipo`),
  UNIQUE KEY `acomodacao_id_acomodacao_UNIQUE` (`acomodacao_id_acomodacao`),
  KEY `fk_acomodacao_tipo_acomodacao1_idx` (`acomodacao_id_acomodacao`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acomodacao_tipo`
--

LOCK TABLES `acomodacao_tipo` WRITE;
/*!40000 ALTER TABLE `acomodacao_tipo` DISABLE KEYS */;
INSERT INTO `acomodacao_tipo` VALUES (1,'simples',1),(2,'premium',2),(3,'bangalo',3);
/*!40000 ALTER TABLE `acomodacao_tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avaliacao`
--

DROP TABLE IF EXISTS `avaliacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacao` (
  `id_avaliacao` int NOT NULL AUTO_INCREMENT,
  `usuarios_id_usuario` int NOT NULL,
  `acomodacao_id_acomodacao` int NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `comentario` varchar(255) NOT NULL,
  `data` date NOT NULL,
  `estrelas` tinyint unsigned NOT NULL,
  `status` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id_avaliacao`),
  UNIQUE KEY `id_avaliacoes_UNIQUE` (`id_avaliacao`),
  KEY `fk_avaliacoes_acomodacao1_idx` (`acomodacao_id_acomodacao`),
  KEY `fk_usuario_id_usuario` (`usuarios_id_usuario`),
  CONSTRAINT `fk_usuario_id_acomodacao` FOREIGN KEY (`acomodacao_id_acomodacao`) REFERENCES `acomodacao` (`id_acomodacao`),
  CONSTRAINT `fk_usuario_id_usuario` FOREIGN KEY (`usuarios_id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacao`
--

LOCK TABLES `avaliacao` WRITE;
/*!40000 ALTER TABLE `avaliacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumos`
--

DROP TABLE IF EXISTS `consumos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumos` (
  `id_consumo` int NOT NULL AUTO_INCREMENT,
  `pdv` tinyint NOT NULL,
  `id_produto` int NOT NULL,
  `id_reserva` int NOT NULL,
  PRIMARY KEY (`id_consumo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumos`
--

LOCK TABLES `consumos` WRITE;
/*!40000 ALTER TABLE `consumos` DISABLE KEYS */;
/*!40000 ALTER TABLE `consumos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consumos_has_reservas`
--

DROP TABLE IF EXISTS `consumos_has_reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `consumos_has_reservas` (
  `consumos_id_consumo` int NOT NULL,
  `reservas_id_reserva` int NOT NULL,
  `reservas_usuarios_id_usuario` int NOT NULL,
  PRIMARY KEY (`consumos_id_consumo`,`reservas_id_reserva`,`reservas_usuarios_id_usuario`),
  KEY `fk_consumos_has_reservas_reservas1_idx` (`reservas_id_reserva`,`reservas_usuarios_id_usuario`),
  KEY `fk_consumos_has_reservas_consumos1_idx` (`consumos_id_consumo`),
  CONSTRAINT `fk_consumos_has_reservas_consumos1` FOREIGN KEY (`consumos_id_consumo`) REFERENCES `consumos` (`id_consumo`),
  CONSTRAINT `fk_consumos_has_reservas_reservas1` FOREIGN KEY (`reservas_id_reserva`, `reservas_usuarios_id_usuario`) REFERENCES `reservas` (`id_reserva`, `usuarios_id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consumos_has_reservas`
--

LOCK TABLES `consumos_has_reservas` WRITE;
/*!40000 ALTER TABLE `consumos_has_reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `consumos_has_reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id_produto` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos_has_consumos`
--

DROP TABLE IF EXISTS `produtos_has_consumos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos_has_consumos` (
  `produtos_id_produto` int NOT NULL,
  `consumos_id_consumo` int NOT NULL,
  PRIMARY KEY (`produtos_id_produto`,`consumos_id_consumo`),
  KEY `fk_produtos_has_consumos_consumos1_idx` (`consumos_id_consumo`),
  KEY `fk_produtos_has_consumos_produtos1_idx` (`produtos_id_produto`),
  CONSTRAINT `fk_produtos_has_consumos_consumos1` FOREIGN KEY (`consumos_id_consumo`) REFERENCES `consumos` (`id_consumo`),
  CONSTRAINT `fk_produtos_has_consumos_produtos1` FOREIGN KEY (`produtos_id_produto`) REFERENCES `produtos` (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos_has_consumos`
--

LOCK TABLES `produtos_has_consumos` WRITE;
/*!40000 ALTER TABLE `produtos_has_consumos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos_has_consumos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `reservascol` varchar(45) NOT NULL,
  `checkin` datetime NOT NULL,
  `checkout` datetime NOT NULL,
  `id_acomodacao` int NOT NULL,
  `informacoes` varchar(255) NOT NULL,
  `quantidade_pessoas` int NOT NULL,
  `id_servicos` int NOT NULL,
  `id_consumo` int NOT NULL,
  `usuarios_id_usuario` int NOT NULL,
  PRIMARY KEY (`id_reserva`,`usuarios_id_usuario`),
  KEY `fk_reservas_usuarios_idx` (`usuarios_id_usuario`),
  CONSTRAINT `fk_reservas_usuarios` FOREIGN KEY (`usuarios_id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas_has_servicos`
--

DROP TABLE IF EXISTS `reservas_has_servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas_has_servicos` (
  `reservas_id_reserva` int NOT NULL,
  `reservas_usuarios_id_usuario` int NOT NULL,
  `servicos_id_servico` int NOT NULL,
  PRIMARY KEY (`reservas_id_reserva`,`reservas_usuarios_id_usuario`,`servicos_id_servico`),
  KEY `fk_reservas_has_servicos_servicos1_idx` (`servicos_id_servico`),
  KEY `fk_reservas_has_servicos_reservas1_idx` (`reservas_id_reserva`,`reservas_usuarios_id_usuario`),
  CONSTRAINT `fk_reservas_has_servicos_reservas1` FOREIGN KEY (`reservas_id_reserva`, `reservas_usuarios_id_usuario`) REFERENCES `reservas` (`id_reserva`, `usuarios_id_usuario`),
  CONSTRAINT `fk_reservas_has_servicos_servicos1` FOREIGN KEY (`servicos_id_servico`) REFERENCES `servicos` (`id_servico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas_has_servicos`
--

LOCK TABLES `reservas_has_servicos` WRITE;
/*!40000 ALTER TABLE `reservas_has_servicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas_has_servicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicos`
--

DROP TABLE IF EXISTS `servicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicos` (
  `id_servico` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  PRIMARY KEY (`id_servico`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicos`
--

LOCK TABLES `servicos` WRITE;
/*!40000 ALTER TABLE `servicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(255) NOT NULL,
  `nome_completo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nivel` int NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `id_reserva` int NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `idusuarios_UNIQUE` (`id_usuario`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nome_usuario_UNIQUE` (`nome_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (4,'fgdfgdfg','dfgdfgdfg','glaussviana@gmail.com','$2b$10$0/QaBRIcQJJkkDV6sR6PKu2Se989XiaSiEgDrrDXHqsOuSMgJ4O1K',0,'213123123',0,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-27 15:20:34
