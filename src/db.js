const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tienda_go', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});



module.exports = {
    sequelize
}