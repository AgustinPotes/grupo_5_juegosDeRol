CREATE DATABASE juegosderolDB;

USE juegosderolDB;

CREATE TABLE IF NOT EXISTS users ( 
user_id INT UNSIGNED AUTO_INCREMENT,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
user_alias VARCHAR(50) NOT NULL,
email VARCHAR(50) NOT NULL,
passwordL VARCHAR(50) NOT NULL,
user_type_id INT UNSIGNED NOT NULL,
PRIMARY KEY (user_id),
FOREIGN KEY (user_type_id) REFERENCES user_types (user_type_id)
);

CREATE TABLE IF NOT EXISTS user_types ( 
user_type_id INT UNSIGNED AUTO_INCREMENT,
user_type VARCHAR(50) NOT NULL,
PRIMARY KEY (user_type_id)
);

CREATE TABLE IF NOT EXISTS product_categories ( 
category_id INT UNSIGNED AUTO_INCREMENT,
category_name VARCHAR(50) NOT NULL,
PRIMARY KEY (category_id)
);

CREATE TABLE IF NOT EXISTS product_publishers ( 
publisher_id INT UNSIGNED AUTO_INCREMENT,
publisher_name VARCHAR(50) NOT NULL,
PRIMARY KEY (publisher_id)
);

CREATE TABLE IF NOT EXISTS products ( 
product_id INT UNSIGNED AUTO_INCREMENT,
title VARCHAR(50) NOT NULL,
price BIGINT NOT NULL,
image VARBINARY(1) NOT NULL,
age_restriction VARCHAR(50) NOT NULL,
number_of_player VARCHAR(50) NOT NULL,
playtime VARCHAR(50) NOT NULL,
dimension VARCHAR(50) NOT NULL,
material VARCHAR(50) NOT NULL,
category_id INT UNSIGNED NOT NULL,
publisher_id INT UNSIGNED NOT NULL,
PRIMARY KEY (product_id),
FOREIGN KEY (category_id) REFERENCES product_categories(category_id),
FOREIGN KEY (publisher_id) REFERENCES product_publishers(publisher_id)
);

CREATE TABLE IF NOT EXISTS shopping_cart_ORDERS ( 
shopping_cart_id INT UNSIGNED AUTO_INCREMENT,
order_date DATETIME NOT NULL,
total_price BIGINT NOT NULL,
total_items INT NOT NULL,
user_id INT UNSIGNED NOT NULL,
PRIMARY KEY (shopping_cart_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS shopping_cart_products ( 
price BIGINT NOT NULL,
shopping_cart_id INT UNSIGNED NOT NULL,
product_id INT UNSIGNED NOT NULL,
FOREIGN KEY (shopping_cart_id) REFERENCES shopping_cart_ORDERS(shopping_cart_id),
FOREIGN KEY (product_id) REFERENCES products(product_id)
);


DROP TABLE users;
DROP TABLE user_types;
DROP TABLE product_categories;
DROP TABLE product_publishers;
DROP TABLE products;
DROP TABLE shopping_cart_ORDERS;
DROP TABLE shopping_cart_products;

  