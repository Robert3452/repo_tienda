const scope = (sequelize, type) => {
    return sequelize.define('scope', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        token: { type: type.STRING },
        role: { type: type.STRING },

    });
}
const permission = (sequelize, type) => sequelize.define('permission', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    permission: { type: type.STRING },
});
module.exports = {
    scope,
    permission
}
