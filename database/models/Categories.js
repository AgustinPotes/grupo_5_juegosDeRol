'use strict';


module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: DataTypes.STRING(50)
    }, {
        tableName: 'Category',
        timestamps: false
    });

    return Categories;
};