const ProductModel = (sequelize, type) =>
    sequelize.define('product', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        description: type.STRING,
        image: type.STRING

    })

const VariationModel = (sequelize, type) =>
    sequelize.define('variation', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        metaKey: type.STRING,
        metaValue: type.STRING
    })


module.exports = {
    ProductModel,
    VariationModel
}