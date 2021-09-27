const UserModel = (sequelize, type) =>
    sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        lastname: type.STRING,
        email: type.STRING,
        password: type.STRING,
        avatar: type.STRING,
    })

module.exports = {
    UserModel
}