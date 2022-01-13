'use strict';


module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: DataTypes.STRING(50),
    }, {
        tableName: 'Product Categories',
        timestamps: false
    });
    return ProductCategory;
};
