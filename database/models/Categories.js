'use strict';


module.exports = (sequelize, DataTypes) => {
    let alias = "Category";
        let cols = {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING(30)
            },
        };
        let config = {
            tableName: "Category",
            timestamps: false
        };
    
        const Category = sequelize.define(alias, cols, config);

    /*Categories.associate = (models) => {

        Categories.belongsToMany(models.Product, {
            as: "productss",
            through: "product_categories",
            foreignKey: "categories_id",
            otherKey: "product_id",
            timestamps: false
        });
    }*/

    return Category;
};