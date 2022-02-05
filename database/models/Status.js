'use strict';


module.exports = (sequelize, DataTypes) => {
    
        let alias = "Status";
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
            tableName: "Status",
            timestamps: false
        };
    
        const Status = sequelize.define(alias, cols, config);

    /*Status.associate = (models) => {

        Status.belongsToMany(models.Product, {
            as: "products",
            foreignKey: "Status_id",
            timestamps: false
        });
    }*/

    return Status;
};