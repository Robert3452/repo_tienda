const { Sequelize } = require('sequelize');
const FilmModel = require('./models/film');
const { VariationModel, ProductModel } = require('./models/product');
const { ShoppingCartDetailModel, ShoppingCartModel } = require('./models/shoppingCart');
const { OrderDetailModel, OrderModel } = require('./models/order');
const { scope, permission } = require('./models/scopes');
const { UserModel } = require('./models/user');

const sequelize = new Sequelize('tienda_go', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

FilmModel(sequelize, Sequelize);

const Scope = scope(sequelize, Sequelize);
const Permission = permission(sequelize, Sequelize);
Permission.belongsTo(Scope);
Scope.hasMany(Permission);

const VariationProduct = VariationModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
Product.hasMany(VariationProduct);
VariationProduct.belongsTo(Product);
const User = UserModel(sequelize, Sequelize);
User.belongsTo(Scope);

const ShoppingCart = ShoppingCartModel(sequelize, Sequelize);
const ShoppingCartDetail = ShoppingCartDetailModel(sequelize, Sequelize);
ShoppingCart.hasMany(ShoppingCartDetail);
ShoppingCartDetail.belongsTo(Product);
ShoppingCartDetail.belongsTo(ShoppingCart);
ShoppingCart.belongsTo(User);

const Order = OrderModel(sequelize, Sequelize);
const OrderDetail = OrderDetailModel(sequelize, Sequelize);
Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);
OrderDetail.belongsTo(Product);
Order.belongsTo(User);




sequelize.sync({ force: true })
    .then(() => {
        console.log(`Tablas sincronizadas`)
    })

module.exports = {
    sequelize
}