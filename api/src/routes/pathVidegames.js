const router = require('express').Router();
const VideoGame = require('./controllers/CtrlVideoGame');


router.get('/', VideoGame.videoGamesXGenres);

module.exports = router;
