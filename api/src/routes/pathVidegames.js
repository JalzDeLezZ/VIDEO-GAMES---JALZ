const router = require('express').Router();
const VideoGames = require('./controllers/VideoGames');


router.get('/', VideoGames.listAllVideoGames);

module.exports = router;
