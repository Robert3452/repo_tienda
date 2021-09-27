
const ShoppingCartModel = (sequelize, type) =>
    sequelize.define('shoppingCart', {
        total: type.FLOAT,
        totalIgv: type.FLOAT,
        igv: type.FLOAT
    })

const ShoppingCartDetailModel = (sequelize, type) =>
    sequelize.define('shoppingCartDetail', {
        productName: type.STRING,
        price: type.FLOAT,
        quantity: type.INTEGER
    })

module.exports = {
    ShoppingCartModel,
    ShoppingCartDetailModel
}