const { Film } = require('../db');

const getFilms = async (req, res) => {
    try {
        const films = await Film.findAll();
        return res.json({ message: films })
    } catch (error) {
        return res.json({ error })
    }
}

const createFilm = async (req, res) => {
    const newFilm = await Film.create({ ...req.body });
    return res.json({ message: newFilm });
}

const editFilm = async (req, res) => {
    await Film.update(req.body, {
        where: { id: req.params.filmId }
    });
    return res.json({ message: `El film con id ${req.params.filmId} ha sido modificado` })
}

const deleteFilm = async (req, res) => {
    try {

        await Film.destroy({
            where: { id: req.params.filmId }
        });

        return res.json({ message: `la pelicula ${req.params.filmId} ha sido eliminada` })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getFilms,
    deleteFilm,
    createFilm,
    editFilm
}