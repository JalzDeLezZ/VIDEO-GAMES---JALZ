const axios = require('axios'); //npm i axios
const {KEY_API} = process.env;
const { Genres} = require('../../db')

exports.allListGenres = async (req, res) => {
    try { 
        let allDBGenres = await Genres.findAll();
        
        if (allDBGenres.length > 0) {
            // console.log(allDBGenres);
            res.send(allDBGenres);   
        } else {
            const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${KEY_API}`)
            const allFormatData = data.results.map(pI => {
                return {
                    id: pI.id,
                    name: pI.name,
                }
            });

            allFormatData.forEach(async (pII) => {
                await Genres.create(pII)
            });

            // console.log(allFormatData);
            res.send(allFormatData);
        }
    }
    catch (error) {console.error(error); res.status(500).send(error);}
}
