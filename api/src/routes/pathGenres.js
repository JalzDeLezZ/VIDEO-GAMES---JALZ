const router = require('express').Router();
const CtrlGenres = require('./controllers/CtrlGenres');

router.get('/', CtrlGenres.allListGenres);

module.exports = router;
