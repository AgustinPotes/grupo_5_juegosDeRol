'use strict';

//modelos 
// peliculas.js MAL 
// Pelicula.js BIEN
// Tipos de datos:
// String(X) = VARCHAR(X)

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: DataTypes.STRING(50),
        last_name: DataTypes.STRING(50),
        user_alias: DataTypes.STRING(50),
        email: DataTypes.STRING(50),
        password: DataTypes.STRING(50),
        user_type: DataTypes.INTEGER,
    }, {
        tableName: 'Users',
        timestamps: false
    });
    return User;
};
