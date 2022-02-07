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
            type: DataTypes.BLOB
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
    

 /*   Product.associate = (models) => {

        Product.belongsTo(models.Status, {
            as: "status",
            foreignKey: "Status_id",
            timestamps: false
        });
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "Category_id",
            timestamps: false
        });
    }
*/
    return Product;
};