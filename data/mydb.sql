<<<<<<< HEAD
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2022 at 05:12 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--
CREATE DATABASE IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `mydb`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(80) NOT NULL,
  `descrip` varchar(200) NOT NULL,
  `Status_id` int(11) DEFAULT NULL,
  `Category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `image`, `descrip`, `Status_id`, `Category_id`) VALUES
(1, 'GOT', '111', 'image-1644277692474.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias nobis illum sequi rerum, error eligendi', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `user_alias` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `avatar` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `user_alias`, `email`, `pass`, `avatar`) VALUES
(1, '123', '123', '123', '123@sss.com', '$2a$12$aWcuTIIx8DWgA3k4VVEa2O/OfR4zw7lKg8WrFU', 'avatar-1644277416930.jpg'),
(2, '1234', '1234', '1234', '1234@sss.com', '$2a$12$ryd4SmksEvvePzGenIsjF.iWRaqyOul3Wyk2/8', 'avatar-1644277660420.jpg'),
(3, 'elpu', 'tito', '123', '12345@kaka.com', '$2a$12$MHG4hu3PO5KA1dFO2rdV0e6lrTQUt4B3e4tXf1', 'avatar-1644279971056.jpg'),
(4, '111', '111', '111', '111@1.com', '$2a$12$GR9s32E/6apGOoSkIcBXweYLxLSs9D4/asKHt7', 'avatar-1644281988430.jpg'),
(5, 'Elena', 'No', 'ElenaNo', 'elenano@123.com', 'elenano', NULL),
(6, 'unaprueba', 'unaprueba', 'unaprueba', 'unaprueba@hotgirl.com', '$2a$10$JtuU/Z4n7nbaQkTet.7o1O1XM2mSGHo9JOhMAy', 'avatar-1644287277728.jpg'),
(7, 'el', 'mas', 'capito', '321@123.com', '$2a$10$4z/m0u0gV66pmT4zOS1hM.F1FpcRtif5qT6G1nwaBlSJG4Pw1Y40G', 'avatar-1644287776423.jpg'),
(8, 'www', 'wwww', 'ww', 'w@asd.com', '$2a$10$ApwzazvrF.FLFVhUxPmIsext0/D6n1gxzPbZR6AQZ3vTVC0OsTyh.', '[object Object]'),
(9, 'elchiki', 'piton', 'elchi', 'elchi@yahoo.hotmail.com', '$2a$10$YS9rZmwy4wOoWiH2O66mpuiYkRLwsXZLpHEn0QC2VYQzJGxwhMKNO', 'avatar-1644291647828.jpg'),
(10, 'qweq', 'weqw', 'eqwe', 'qwe@0.com', '$2a$10$oJtqYZbMTnp4BTCl5ILObe3/7xXL5jmd6He5OyrzakH9GNVl2xr56', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Products_Status` (`Status_id`),
  ADD KEY `fk_Product_Category1` (`Category_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_Product_Category1` FOREIGN KEY (`Category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Products_Status` FOREIGN KEY (`Status_id`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
=======
-- MySQL Script generated by MySQL Workbench
-- Sun Feb  6 23:35:26 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Status`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Status` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(30) NOT NULL,
  `price` DECIMAL NOT NULL,
  `image` VARCHAR(80) NOT NULL,
  `descrip` VARCHAR(200) NOT NULL,
  `Status_id` INT NOT NULL,
  `Category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Products_Status`
    FOREIGN KEY (`Status_id`)
    REFERENCES `mydb`.`Status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Product_Category1`
    FOREIGN KEY (`Category_id`)
    REFERENCES `mydb`.`Category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `user_alias` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `pass` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(80) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
>>>>>>> 832c90b0fafc662a9baa93a7bf8e30f35912859d
