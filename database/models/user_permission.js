'use strict';


module.exports = (sequelize, DataTypes) => {
    const UserPermission = sequelize.define('UserPermission', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: DataTypes.STRING(20),
        permission_id: DataTypes.STRING(20)
    }, {
        tableName: 'user_permission',
        timestamps: false
    });

    ProductStatus.associate = function(models) {
        ProductStatus.hasMany(models.Product, {
            as: "productos_stat",
            foreignKey: "product_status_id_Fk"
        });
    }

    return UserPermission;
};