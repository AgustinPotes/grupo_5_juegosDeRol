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

    Product.associate = (models) => {

        Product.belongsTo(models.Status, {
            as: "status",
            through: "product_status",
            foreignKey: "product_id",
            otherKey: "status_id",
            timestamps: false
        });
        Product.belongsTo(models.Categories, {
            as: "categories",
            through: "product_categories",
            foreignKey: "product_id",
            otherKey: "categories_id",
            timestamps: false
        });
    }

    return Product;
};