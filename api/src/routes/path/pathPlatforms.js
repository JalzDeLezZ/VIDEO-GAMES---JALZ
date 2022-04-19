const router = require('express').Router();
const { Platforms } = require('../../db')
const {getApiPlatforms, getDbPlatforms} = require('../controllers/CtrlPlatforms.js');

router.get('/', async (req, res) => {
    try {
        const allPlatforms = await getDbPlatforms();
        if (allPlatforms.length > 0) {
            res.send(allPlatforms);
        } else {
            const allPlatformsApi = await getApiPlatforms();
            allPlatformsApi.forEach(async (pI) => {
                await Platforms.create(pI);
            });
            res.send(allPlatformsApi);
        }
    } catch (error) {console.error(error); res.status(500).send(error);}
});

module.exports = router;