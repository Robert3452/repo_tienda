const router = require('express').Router();
const apiFilms = require('./api/films');

router.use('/films', apiFilms);

module.exports = router;