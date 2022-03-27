const { Router } = require('express');

// Importar todos los routers;
const VideoGames = require('./pathVidegames')
// const Genres = require('./pathGenres')
// const VideoGame = require('./pathVideoGame')

const router = Router();

// ROUTER ROOT
router.get('/', (req, res) =>{ 
    res.send("INICIOOO")
});

//ROUTER VIDEOGAME
router.use('/videogames',VideoGames);
/* 
//ROUTER GENRES
router.use('/genres',Genres);

//ROUTER VIDEOGAME
router.use('/videogame',VideoGame); */

module.exports = router;