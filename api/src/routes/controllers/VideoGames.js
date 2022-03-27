const {VideoGames, Genres} = require('../../db')
const axios = require('axios'); //npm i axios
const {KEY_API} = process.env;
exports.listAllVideoGames = async (req, res) => {
    try {
        //tengo 20 -> quiero 100
        let aContainer = []
        for (let vPage = 1; vPage < 6; vPage++) {
            const dataApi = await axios.get(`https://api.rawg.io/api/games?key=${KEY_API}&page=${vPage}`);
            const x = await dataApi.data.results;
            aContainer = [...aContainer, ...x];
        }
        const formatApi =  aContainer.map((pI, i) => {
            return{
                i: i,
                id: pI.id,
                name: pI.name,
                image: pI.background_image,
                description: pI.description_raw,
                rating: pI.rating,
                releaseDate: pI.released,
                plataform: pI.parent_platforms.map(pII => {
                    return pII.platform.name;
                }),
                genres: pI.genres.map(pIII => {
                    return {
                    id: pIII.id,
                    name: pIII.name,
                    };
                }),
            }
        });
        res.status(200).json(formatApi)

    }catch (error) {
        // console.log(error);
        res.status(500).send(error);
    }
}
/* 
const formatApi = await dataApi.data.results.map((pI, i) => {
            return{
                i: i,
                id: pI.id,
                name: pI.name,
                image: pI.background_image,
                description: pI.description_raw,
                rating: pI.rating,
                releaseDate: pI.released,
                plataform: pI.parent_platforms.map(pII => {
                    return pII.platform.name;
                }),
                genres: pI.genres.map(pIII => {
                    return {
                    id: pIII.id,
                    name: pIII.name,
                    };
                }),
            }
        });
*/