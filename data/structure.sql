CREATE DATABASE IF NOT EXISTS LaGuaridaDelDragonDB;

USE LaGuaridaDelDragonDB;

--
-- Table structure for table 'Products'
--

CREATE TABLE IF NOT EXISTS Products (
id SMALLINT(6) UNSIGNED AUTO_INCREMENT,
title VARCHAR(50) NOT NULL,
price BIGINT NOT NULL,
imagen VARBINARY(1) NOT NULL,
descripcion VARCHAR(200) NOT NULL,
PRIMARY KEY (id),
);

--Tabla pivot de Products y Statuss

CREATE TABLE IF NOT EXISTS product_status ( 
id SMALLINT(6) UNSIGNED AUTO_INCREMENT,
product_id SMALLINT(6) UNSIGNED NOT NULL,
status_id SMALLINT(6) UNSIGNED NOT NULL,
PRIMARY KEY (id)
FOREIGN KEY (product_id) REFERENCES Products(id),
FOREIGN KEY (status_id) REFERENCES Statuss(id)
);

--Tabla de Status (lleva doble s porque es palabra reservada)

CREATE TABLE IF NOT EXISTS Statuss ( 
id SMALLINT(6) UNSIGNED AUTO_INCREMENT,
status_name VARCHAR(50) NOT NULL,
PRIMARY KEY (id),
);




--Tabla pivot de Products y Categories

CREATE TABLE IF NOT EXISTS product_categories ( 
id SMALLINT(6) UNSIGNED AUTO_INCREMENT,
product_id SMALLINT(6) UNSIGNED NOT NULL,
categories_id SMALLINT(6) UNSIGNED NOT NULL,
PRIMARY KEY (id)
FOREIGN KEY (product_id) REFERENCES Products(id),
FOREIGN KEY (categories_id) REFERENCES Categories(id)
);

--Tabla de Categories

CREATE TABLE IF NOT EXISTS Categories ( 
id SMALLINT(6) UNSIGNED AUTO_INCREMENT,
category_name VARCHAR(50) NOT NULL,
PRIMARY KEY (id),
);





--Tabla principal de Usuarios

CREATE TABLE IF NOT EXISTS Users ( 
id SMALLINT(6) UNSIGNED AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
user_alias VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
pass VARCHAR(50) NOT NULL,
avatar VARBINARY(1) NOT NULL,
PRIMARY KEY (id),
);

--Tabla pivot de Users y Permissions

CREATE TABLE IF NOT EXISTS user_permission ( 
id SMALLINT(6) UNSIGNED AUTO_INCREMENT,
user_id SMALLINT(6) UNSIGNED NOT NULL,
permission_id SMALLINT(6) UNSIGNED NOT NULL,
PRIMARY KEY (id)
FOREIGN KEY (user_id) REFERENCES Users(id),
FOREIGN KEY (permission_id) REFERENCES Permissionss(id)
);

--Tabla de Permissionss (doble s por palabra reservada)

CREATE TABLE IF NOT EXISTS Permissionss ( 
id SMALLINT(6) UNSIGNED AUTO_INCREMENT,
permission_name VARCHAR(50) NOT NULL,
PRIMARY KEY (id),
);



--CREATE TABLE IF NOT EXISTS shopping_cart_ORDERS ( 
--shopping_cart_id INT UNSIGNED AUTO_INCREMENT,
--order_date DATETIME NOT NULL,
--total_price BIGINT NOT NULL,
--total_items INT NOT NULL,
--user_id INT UNSIGNED NOT NULL,
--PRIMARY KEY (shopping_cart_id),
--FOREIGN KEY (user_id) REFERENCES users(user_id)
--);

--CREATE TABLE IF NOT EXISTS shopping_cart_products ( 
--price BIGINT NOT NULL,
--shopping_cart_id INT UNSIGNED NOT NULL,
--product_id INT UNSIGNED NOT NULL,
--FOREIGN KEY (shopping_cart_id) REFERENCES shopping_cart_ORDERS(shopping_cart_id),
--FOREIGN KEY (product_id) REFERENCES products(product_id)
--);

--DROP TABLE users;
--DROP TABLE user_types;
--DROP TABLE product_categories;
--DROP TABLE product_publishers;
--DROP TABLE products;
--DROP TABLE product_status;
--DROP TABLE shopping_cart_ORDERS;
--DROP TABLE shopping_cart_products;