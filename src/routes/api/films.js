const router = require('express').Router();
const controller = require('../../controllers/films');


router.get('/', controller.getFilms);

router.post('/', controller.createFilm);

router.put('/:filmId', controller.editFilm);

router.delete('/:filmId', controller.deleteFilm);


module.exports = router;