const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db')

class Scope extends Model { };

Scope.init({
    token: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },

}, {
    sequelize,
    modelName: "scope"
})


class Permission extends Model {};

Permission.init({
    permission: { type: DataTypes.STRING },

},{
    sequelize,
    modelName: "permission"
});

Permission.belongsTo(Scope);
Scope.hasMany(Permission);

module.exports = {
    Permission,
    Scope
}
