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

        /*Category.associate = (models) => {

            Category.belongsToMany(models.Product, {
            as: "productss",
            through: models.Product,
            foreignKey: "Category_id",
            timestamps: false
        });
    }*/

    /*Category.associate = models => {

        Category.belongsToMany(models.Product, {
        
        through: models.Product,
        foreignKey: "Category_id",
        timestamps: false
    });
}*/

    return Category;
};