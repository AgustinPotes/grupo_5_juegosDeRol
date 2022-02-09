'use strict';


module.exports = (sequelize, DataTypes) => { 
    
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(30)
        },
        price: {
            type: DataTypes.DECIMAL
        },
        image: { 
            type: DataTypes.STRING(80)
        },
        descrip: {
            type: DataTypes.STRING(200)
        }
    };
    let config = {
        tableName: "Product",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);
    

    /*Product.associate = (models) => {

        Product.belongsTo(models.Status, {
            as: "status",
            foreignKey: "Status_id",
        });
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "Category_id",
        });
    }*/



    /*Product.associate = models => {

        Product.belongsTo(models.Status, {
        });
        Product.belongsTo(models.Category, {
        });
    }*/

    return Product;
};