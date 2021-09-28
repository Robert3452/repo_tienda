const { Model, DataTypes } = require('sequelize');
const { Scope } = require('./scopes')
const { sequelize } = require('../db');

class User extends Model { };
User.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,

}, {
    sequelize,
    modelName: "user"
})

User.belongsTo(Scope);
module.exports = User