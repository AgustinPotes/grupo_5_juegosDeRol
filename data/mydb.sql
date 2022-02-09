-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2022 at 12:03 AM
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

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'rolBoardGame'),
(2, 'cardsGame'),
(3, 'accesories');

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
  `StatusId` int(11) DEFAULT NULL,
  `CategoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `image`, `descrip`, `StatusId`, `CategoryId`) VALUES
(3, 'Un Juego de Prueba', '999', 'image-1644333669631.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias nobis illum sequi rerum, error eligendi', NULL, NULL),
(5, 'Otro Juego de Prueba', '10000', 'image-1644337415491.jpg', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias nobis illum sequi rerum, error eligendi, at possimus placeat eaque sit, tenetur vitae distinctio corporis iste laborum sapiente har', NULL, NULL),
(8, 'Pruebadecategorias', '123', 'image-1644408538359.jpg', 'PruebadecategoriasPruebadecategoriasPruebadecategoriasPruebadecategorias', NULL, NULL),
(11, 'Un', '1', 'image-1644420800128.jpg', 'Un', NULL, NULL),
(28, '123', '222', 'image-1644438143589.jpg', '123', 1, 2),
(29, 'qweq22', '12000', 'image-1644444519239.png', 'eqwq22', 1, 1),
(30, 'juego piola', '322', 'image-1644444831510.png', 're piola', 1, 3),
(31, 'juego piola', '322', 'image-1644445265732.png', 're piola', 1, 3),
(32, 'laruletadedh', '40000', 'image-1644447407283.png', 'muerte', NULL, NULL),
(33, 'anashe', '1333333333', 'image-1644447573386.png', 'elmomo', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'Novelties'),
(2, 'Offers'),
(3, 'General');

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
(6, 'unaprueba', 'unaprueba', 'unaprueba', 'unaprueba@hotgirl.com', '$2a$10$JtuU/Z4n7nbaQkTet.7o1O1XM2mSGHo9JOhMAy', 'avatar-1644287277728.jpg'),
(7, 'el', 'mas', 'capito', '321@123.com', '$2a$10$4z/m0u0gV66pmT4zOS1hM.F1FpcRtif5qT6G1nwaBlSJG4Pw1Y40G', 'avatar-1644287776423.jpg'),
(8, 'www', 'wwww', 'ww', 'w@asd.com', '$2a$10$ApwzazvrF.FLFVhUxPmIsext0/D6n1gxzPbZR6AQZ3vTVC0OsTyh.', '[object Object]'),
(9, 'elchiki', 'piton', 'elchi', 'elchi@yahoo.hotmail.com', '$2a$10$YS9rZmwy4wOoWiH2O66mpuiYkRLwsXZLpHEn0QC2VYQzJGxwhMKNO', 'avatar-1644291647828.jpg'),
(10, 'qweq', 'weqw', 'eqwe', 'qwe@0.com', '$2a$10$oJtqYZbMTnp4BTCl5ILObe3/7xXL5jmd6He5OyrzakH9GNVl2xr56', '0'),
(11, 'Pepito', 'Juan', 'pepito123', '123@pepito.com', '$2a$10$KGFZrLXPCJCN1KwxEksT2uD5POebAx/FtH7g9J3vC1iPm2kyeJCQC', '0'),
(12, 'aasd', 'asd', 'asd', 'asd@hola.com', '$2a$10$YcG.iNhTJOb2Eql3cqc44.fU4dpba3XY3G2wKjL5dD8Qg6i/faqnO', '0'),
(13, '111', '111', '111', '11@11.com', '$2a$10$AEx9mXyHn1/5nxSOmc8XfuMo49ZXtTBq6LfLjWpwdPN0SB1um9M7q', 'default.jpg'),
(14, 'Unu', 'Suario', 'Más', 'unusuario@vergmail.com', '$2a$10$lEo6RwJ5r1cDtjxJyWt1NuSSZlqFy9vDKtLErlOEWND8EdjjVRaR2', 'false'),
(15, 'aaa', 'aaa', 'aaa', 'aguspotter@gmail.com', '$2a$10$d36nCRUJJ6HZC25HeA6ewOkLlFtnVCGdiPH54i1IfIKkn2GDNncO2', 'default-avatar.png'),
(16, 'olaola', 'olaola', 'olaola', 'olaola@hotmail.com', '$2a$10$nxeZFg4ZqEzb1sdX0HStHOIkMdX4xGEQRo9kIF26AjYb8MkzYw9Ju', NULL),
(17, 'Bruno', 'Braconi', 'brbr22', 'brunorbraconi@hotmail.com', '$2a$10$l5rfyt9pIzRoEf41pVJvoeAiktxyT9tYwPqDzM17m5ku5lb6UIfCO', NULL);

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
  ADD KEY `fk_Products_Status` (`StatusId`),
  ADD KEY `fk_Product_Category1` (`CategoryId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_Product_Category1` FOREIGN KEY (`CategoryId`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Products_Status` FOREIGN KEY (`StatusId`) REFERENCES `status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
