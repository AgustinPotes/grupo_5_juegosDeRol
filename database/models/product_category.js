'use strict';


module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        product_id: DataTypes.STRING(20),
        categories_id: DataTypes.STRING(20)
    }, {
        tableName: 'product_category',
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
