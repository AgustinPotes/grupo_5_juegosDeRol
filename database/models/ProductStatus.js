'use strict';


module.exports = (sequelize, DataTypes) => {
    const ProductStatus = sequelize.define('ProductStatus', {
        product_status_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status_name: DataTypes.STRING(50),
    }, {
        tableName: 'Product Status',
        timestamps: false
    });
    return ProductStatus;
};
