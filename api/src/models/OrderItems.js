const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('OrderItems', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
           }
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'OrderDetails',
              key: 'id'
            }
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'Product',
              key: 'id'
            }
          },
        }, {
          timestamps: false,
          freezeTableName: true
        });
}