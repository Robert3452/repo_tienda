const express = require('express');
const apiRouter = require('./routes/api');
const app = express();

const { sequelize } = require('./db');
require('./models/product');
require('./models/order');
require('./models/scopes');
require('./models/shoppingCart');
require('./models/user');
require('./models/order');

app.set('port', 3000);
app.use(express.json());

app.use('/api', apiRouter);
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    sequelize.sync({ force: true })
        .then(() => {
            console.log(`Tablas sincronizadas`)
        });

});