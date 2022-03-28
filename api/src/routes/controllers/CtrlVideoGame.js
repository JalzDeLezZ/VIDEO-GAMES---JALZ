const { VideoGames, Op, conn} = require('../../db')

exports.videoGamesXGenres = async(req, res) => {
    try {
        const { name, description, release_date, rating, aPlatform, aGenres} = req.body;

        if(!name|| !description || !aPlatform.length>0) return res.status(404).send("Fill in all the fields"); 
    
        const oMaxId = await VideoGames.findAll({
            where: {
                id: {
                    [Op.eq]: conn.literal(`(SELECT MAX(id) FROM "VideoGames")`),
                },
            }
        });
        let nextId = oMaxId[0]? oMaxId[0].id + 1 : 9000000;
    
        console.log("=>>>>>>>>>>>>>>",nextId, "XX");
        
        await VideoGames.create({
            id: nextId,
            name: name,
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
