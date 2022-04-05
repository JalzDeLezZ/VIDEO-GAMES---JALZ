const { Router } = require('express');

// Importar todos los routers;
const VideoGames = require('./path/pathVidegames')
const Genres = require('./path/pathGenres')
const VideoGame = require('./path/pathVideoGame')

const router = Router();

// ROUTER ROOT
router.get('/', (req, res) =>{ 
    res.send("INICIOOO")
});

//ROUTER VIDEOGAMES
router.use('/videogames',VideoGames);

//ROUTER GENRES
router.use('/genres',Genres);

//ROUTER VIDEOGAME
router.use('/videogame',VideoGame);

module.exports = router;
