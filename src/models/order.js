const { Model, DataTypes } = require('sequelize');
const { Product } = require('./product')
const User  = require('./user')
const { sequelize } = require('../db')


class Order extends Model { };
class OrderDetail extends Model { };

Order.init({
    total: DataTypes.FLOAT,
    status: DataTypes.STRING,
    totalIgv: DataTypes.FLOAT,
    igv: DataTypes.FLOAT
}, {
    sequelize,
    modelName: "order"
})

OrderDetail.init({
    productName: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'orderdetail'
})


Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);
OrderDetail.belongsTo(Product);
Order.belongsTo(User);

module.exports = {
    Order,
    OrderDetail
}