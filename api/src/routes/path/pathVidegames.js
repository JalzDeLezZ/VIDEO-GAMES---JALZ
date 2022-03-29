const router = require('express').Router();
const VideoGame = require('../controllers/CtrlVideoGames.js');


router.get('/', VideoGame.listAllVideoGames);

module.exports = router;
