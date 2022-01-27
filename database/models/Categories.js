'use strict';


module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: DataTypes.STRING(50)
    }, {
        tableName: 'Category',
        timestamps: false
    });

    Categories.associate = (models) => {

        Categories.belongsToMany(models.Product, {
            as: "productss",
            through: "product_categories",
            foreignKey: "categories_id",
            otherKey: "product_id",
            timestamps: false
        });
    }

    return Categories;
};