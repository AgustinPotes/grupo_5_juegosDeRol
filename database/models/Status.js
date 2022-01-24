'use strict';


module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status_name: DataTypes.STRING(50)
    }, {
        tableName: 'Stat',
        timestamps: false
    });

    Status.associate = function(models) {
        Status.hasMany(models.Product, {
            as: "status",
            through: "product_status",
            foreignKey: "status_id",
            otherKey: "product_id",
            timestamps: false
        });
    }

    return Status;
};