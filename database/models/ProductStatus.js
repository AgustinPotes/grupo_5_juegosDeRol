'use strict';


module.exports = (sequelize, DataTypes) => {
    const ProductStatus = sequelize.define('ProductStatus', {
        product_status_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status_name: DataTypes.STRING(20),
    }, {
        tableName: 'product_status',
        timestamps: false
    });

    ProductStatus.associate = function(models) {
        ProductStatus.hasMany(models.Product, {
            as: "productos_stat",
            foreignKey: "product_status_id_Fk"
        });
    }

    return ProductStatus;
};
