'use strict';


module.exports = (sequelize, DataTypes) => {
    const Permission = sequelize.define('Permission', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        permission_name: DataTypes.STRING(50)
    }, {
        tableName: 'Permissions',
        timestamps: false
    });

   /* Permission.associate = (models) => {

        Permission.belongsToMany(models.User, {
            as: "users",
            through: "user_permission",
            foreignKey: "permission_id",
            otherKey: "user_id",
            timestamps: false
        }); 
    }*/

    return Permission;
};