'use strict';


module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: DataTypes.STRING(20),
    }, {
        tableName: 'product_categories',
        timestamps: false
    });

    ProductCategory.associate = function(models) {
        ProductCategory.hasMany(models.Product, {
            as: "productos_cat",
            foreignKey: "category_id_Fk"
        });
    }

    return ProductCategory;
};
