const axios = require('axios'); //npm i axios
const { Platforms } = require('../../db')
const {KEY_API} = process.env;

const getApiPlatforms = async (req, res) => {
    try {  
        const {data} = await axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${KEY_API}`)
        const allFormatData = data.results.map(pI => {
            return {
                id: pI.id,
                name: pI.name,
            }
        });        
        return allFormatData;
    }
    catch (error) {console.error(error); res.status(500).send(error);}
}

const getDbPlatforms = async () => {
    const allRecipesDb = await Platforms.findAll();
    return allRecipesDb;
}

module.exports = {
    getApiPlatforms,
    getDbPlatforms
}