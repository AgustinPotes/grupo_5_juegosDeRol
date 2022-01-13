'use strict';

module.exports = (sequelize, DataTypes) => {
    const ShoppingCartProduct = sequelize.define('ShoppingCartProduct', {
        shopping_cart_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
    }, {
        tableName: 'Shopping Cart Products',
        timestamps: false
    });
    return ShoppingCartProduct;
};
