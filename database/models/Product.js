'use strict';


module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.STRING(50),
        price: DataTypes.DECIMAL,
        imagen: DataTypes.INTEGER,
        descripcion: DataTypes.STRING(200)
    }, {
        tableName: 'Products',
        timestamps: false
    });

    Product.associate = function(models) {
        Product.belonsTo(models.Status, {
            as: "products",
            through: "product_status",
            foreignKey: "product_id",
            otherKey: "status_id",
            timestamps: false
        });
    }

    return Product;
};
