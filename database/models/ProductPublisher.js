'use strict';


module.exports = (sequelize, DataTypes) => {
    const ProductPublisher = sequelize.define('ProductPublisher', {
        publisher_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        publisher_name: DataTypes.STRING(50),
    }, {
        tableName: 'Product Publishers',
        timestamps: false
    });
    return ProductPublisher;
};
