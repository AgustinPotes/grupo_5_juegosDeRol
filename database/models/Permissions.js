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

    return Permission;
};