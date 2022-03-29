const router = require('express').Router();
const VideoGame = require('../controllers/CtrlVideoGame');

router.post('/', VideoGame.videoGamesXGenres);

module.exports = router;