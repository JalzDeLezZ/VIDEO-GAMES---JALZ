const router = require('express').Router();
const VideoGame = require('../controllers/CtrlVideoGame');

router.post('/', VideoGame.videoGamesXGenres);
router.get('/:idPais', VideoGame.getVideoGameById);
router.delete('/:idVG', VideoGame.deleteVideoGameById);
router.put('/:identityVG', VideoGame.updateVideoGameByIdentity);

module.exports = router;