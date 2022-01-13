'use strict';


module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        tittle: DataTypes.STRING(50),
        price: DataTypes.DECIMAL,
        category_id: DataTypes.INTEGER,
        publisher_id: DataTypes.INTEGER,
        img: DataTypes.INTEGER, 
        age_restriction: DataTypes.STRING(50),
        players: DataTypes.STRING(50),
        playtime: DataTypes.STRING(50),
        dimension: DataTypes.STRING(50),
        material: DataTypes.STRING(50),
    }, {
        tableName: 'Products',
        timestamps: false
    });
    return Product;
};
