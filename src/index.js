

const express = require('express');
const apiRouter = require('./routes/api');
const app = express();

require('./db');

app.set('port', 3000);
app.use(express.json());

app.use('/api', apiRouter);
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});