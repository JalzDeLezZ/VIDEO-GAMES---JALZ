const router = require('express').Router();
const VideoGame = require('../controllers/CtrlVideoGame');

router.post('/', VideoGame.videoGamesXGenres);
router.get('/:idPais', VideoGame.getVideoGameById);

module.exports = router;