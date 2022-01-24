'use strict';


module.exports = (sequelize, DataTypes) => {
    const ProductStatus = sequelize.define('ProductStatus', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: DataTypes.STRING(20),
        status_id: DataTypes.STRING(20)
    }, {
        tableName: 'product_status',
        timestamps: false
    });

    ProductStatus.associate = function(models) {
        ProductStatus.hasMany(models.Product, {
            as: "productos",
            foreignKey: "product_id"
        });
    }

    return ProductStatus;
};
