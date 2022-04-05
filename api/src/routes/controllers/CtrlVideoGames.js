const {VideoGames, Genres, Op , fn, where, col} = require('../../db')
const axios = require('axios'); //npm i axios
const {KEY_API} = process.env;
exports.listAllVideoGames = async (req, res) => {
    const {name, qry} = req.query;

    if (name) {
        try {
            const videoGames = await VideoGames.findAll({
                include: {
                    model: Genres, 
                }, 
                limit: 15,
                where : 
                    where(
                        fn('LOWER', col('name')),
                        {
                            [Op.like]: fn('LOWER', `${name}%`)
                        }
                    )
                //  {name: {[Op.like]: `%${name}%`}} 
            });
            const {data} = await axios.get(
            `https://api.rawg.io/api/games?search=${name}&key=${KEY_API}`
            );
            
            const formatApi =  data.results.map((pI, i) => {
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

            let allData = [...videoGames,  ...formatApi ];

            if (allData.length > 15) {
                fraction = allData.slice(0, 15);
                return res.status(200).json(fraction);
            }

            res.json( allData ? allData : 'No se encontraron videojuegos' );
        } catch (error) {
            res.send(error)
        }
        
    }
    else{
        
        try {
            let allDBVideoGames = await VideoGames.findAll({
                include: { model: Genres }
            });
    
            let dataFormatOfDB = allDBVideoGames.map(pI => {
                pI = pI.toJSON();
                return {
                    id: pI.id,
                    image: pI.image,
                    name: pI.name,
                    description: pI.description,
                    releaseDate: pI.release_date,
                    rating: pI.rating,
                    plataform: pI.platforms,
                    genres: pI.Genres.map(g => {
                        return {
                            id: g.id,
                            name: g.name
                        }
                    })
                }
            });
            if (qry === "DATA BASE") {
                console.log("=>>>>>>>>>>>>>>","DATA BASE");
                return res.json(dataFormatOfDB);
            }
            let aContainer = []
            for (let vPage = 1; vPage < 6; vPage++) {
                const {data} = await axios.get(`https://api.rawg.io/api/games?key=${KEY_API}&page=${vPage}`);
                const results = await data.results;
                aContainer = [...aContainer, ...results]; //destructuring array
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
            if (qry === "API") {
                console.log("=>>>>>>>>>>>>>>","API");                
                return res.status(200).json(formatApi);
            }
            
            if (qry === "ALL" || !qry === false  || qry === "undefined") {
                return res.status(200).json([...dataFormatOfDB, ...formatApi]);
            }

        }catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}
