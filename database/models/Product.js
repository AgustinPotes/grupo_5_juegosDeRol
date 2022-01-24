'use strict';


module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.STRING(50),
        price: DataTypes.DECIMAL,
        img: DataTypes.INTEGER,
        descripcion: DataTypes.STRING(200),
        category_id_Fk: DataTypes.INTEGER,
        product_status_id_Fk: DataTypes.INTEGER
    }, {
        tableName: 'products',
        timestamps: false
    });

    return Product;
};
