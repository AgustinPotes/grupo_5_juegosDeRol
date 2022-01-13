'use strict';


module.exports = (sequelize, DataTypes) => {
    const ShoppingCartOrder = sequelize.define('ShoppingCartOrder', {
        shopping_cart_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: DataTypes.INTEGER,
        order_date: DataTypes.DATE,
        total_price: DataTypes.DECIMAL,
        total_items: DataTypes.INTEGER,
    }, {
        tableName: 'Shopping Cart Orders',
        timestamps: false
    });
    return ShoppingCartOrder;
};
