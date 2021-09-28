const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db')
const User = require('./user');
const { Product } = require('./product');
class ShoppingCart extends Model { };
class ShoppingCartDetail extends Model { };

ShoppingCart.init(
    {
        total: DataTypes.FLOAT,
        totalIgv: DataTypes.FLOAT,
        igv: DataTypes.FLOAT
    },
    {
        sequelize,
        modelName: "shoppingcart"
    }
);
ShoppingCartDetail.init({
    productName: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
}, {
    sequelize,
    modelName: "shoppingcartdetail"

})
ShoppingCart.hasMany(ShoppingCartDetail);
ShoppingCartDetail.belongsTo(Product);
ShoppingCartDetail.belongsTo(ShoppingCart);
ShoppingCart.belongsTo(User);

module.exports = {
    ShoppingCart,
    ShoppingCartDetail
}