'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: DataTypes.STRING(50),
        last_name: DataTypes.STRING(50),
        user_alias: DataTypes.STRING(50),
        email: DataTypes.STRING(50),
        pass: DataTypes.STRING(50),
        avatar: DataTypes.INTEGER
    }, {
        tableName: 'Users',
        timestamps: false
    });

    User.associate = (models) => {

        User.belongsTo(models.Permission, {
            as: "permissions",
            through: "user_permission",
            foreignKey: "user_id",
            otherKey: "permission_id",
            timestamps: false
        });
    }

    return User;
};
