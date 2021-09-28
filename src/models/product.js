const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db')
class Product extends Model { }
class Variation extends Model { }

Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
}, {
    sequelize,
    modelName: "product"

})

Variation.init({
    metaKey: DataTypes.STRING,
    metaValue: DataTypes.STRING
}, {
    sequelize,
    modelName: "variation"
})


module.exports = {
    Product,
    Variation
}