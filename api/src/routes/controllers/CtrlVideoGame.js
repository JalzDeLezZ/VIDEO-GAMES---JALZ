const axios = require('axios');
const { VideoGames, Genres, Op, conn} = require('../../db')
const {KEY_API} = process.env;

exports.videoGamesXGenres = async(req, res) => {
    try {
        const { name, image, description, release_date, rating, aPlatform, aGenres} = req.body;

        if(!name|| !description || !aPlatform.length>0) return res.status(404).send("Fill in all the fields"); 
    
        const oMaxId = await VideoGames.findAll({
            where: {
                id: {
                    [Op.eq]: conn.literal(`(SELECT MAX(id) FROM "VideoGames")`),
                },
            }
        });
        let nextId = oMaxId[0]? oMaxId[0].id + 1 : 9000000;
            
        // console.log("=>>>>>>>>>>>>>>",nextId, "XX");
            
        await VideoGames.create({
            id: nextId,
            name: name,
            image: image,
            description: description, 
            release_date: release_date, 
            rating: rating,
            platforms: aPlatform.map(pI => {
                            return pI;
                        }),
        });
        
        const oVideoGame = await VideoGames.findOne({where : {name : name}})
        const oMiddle = await oVideoGame.addGenres(aGenres)
        
        return res.json({"Video Game created": oMiddle});

    } catch (error) { console.log(error); res.send(error) }
}

exports.getVideoGameById = async(req, res) => {    
    try {
        let {idPais} = req.params;
         
        let oVideoGameDB = await VideoGames.findByPk(idPais, {
            include: Genres
        });
        if (!!oVideoGameDB) {
            
            const oDBFormat =  {
                id: oVideoGameDB.id,
                name: oVideoGameDB.name,
                image: oVideoGameDB.image,
                description: oVideoGameDB.description,
                rating: oVideoGameDB.rating,
                releaseDate: oVideoGameDB.released_date,
                plataform: oVideoGameDB.platforms,
                genres: oVideoGameDB.Genres.map(pIV => {
                    return {
                        id: pIV.id,
                        name: pIV.name,
                    };
                })
            };

            res.json(oDBFormat);}
        else {
            console.log("No se encontro el video game en la base de datos");
            const {data} = await axios.get(`https://api.rawg.io/api/games/${idPais}?key=${KEY_API}`)
            
            const oApiFormat =  {
                    id: data.id,
                    name: data.name,
                    image: data.background_image,
                    description: data.description_raw,
                    rating: data.rating,
                    releaseDate: data.released,
                    plataform: data.parent_platforms.map(pII => {
                        return pII.platform.name;
                    }),
                    genres: data.genres.map(pIII => {
                        return {
                        id: pIII.id,
                        name: pIII.name,
                        };
                    }), 
                };

            res.json( oApiFormat )
        }

    } catch (e) {
        res.status(404)
            .json({ 
                Message: "VideoGame not found", Details :e.message
            })
        }
}














/*await axios.get(`https://api.rawg.io/api/games/${idPais}?key=${KEY_API}`)
    .then((response) => {
        (result) = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.background_image,
            description: response.data.description_raw,
            rating: response.data.rating,
            releaseDate: response.data.released,
            plataform: response.data.parent_platforms.map(element => {
            return element.platform.name;
            }),
            genres: response.data.genres.map(element => {
            return {
                id: element.id,
                name: element.name,
            };
            }),
        };
        return result;
    })
    .then((result) => res.status(200).send(result)) */