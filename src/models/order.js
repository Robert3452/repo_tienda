
const OrderModel = (sequelize, type) =>
    sequelize.define('order', {
        total: type.FLOAT,
        status: type.STRING,
        totalIgv: type.FLOAT,
        igv: type.FLOAT
    })

const OrderDetailModel = (sequelize, type) =>
    sequelize.define('orderDetail', {
        productName: type.STRING,
        price: type.FLOAT,
        quantity: type.INTEGER
    })

module.exports = {
    OrderModel,
    OrderDetailModel
}