import {  
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAMES_BY_NAME,
    GET_VIDEOGAMES_BY_ID,
    GET_LIST_GENRES,

    ORDER_FILTER_ASC_DSC,
    FILTER_BY_DATA_AND_GENRE,

    DELETE_VG_BY_ID,
    GET_PLATFORMS,
    UPDATE_VIDEO_GAME
} from "./action";

const initialState = {
    allVideoGames: [],
    customVideoGames: [],
    aListGenres: [],
    oVideoGame: {},
    aPlatforms: []
};

let aTemp = [];

const rootReducer = (state = initialState, action) => {
    const {allVideoGames, customVideoGames} = state;
    const {type, payload, pDad, pSoon, p1dataType, p2Genre} = action;

    switch(type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideoGames: payload,
                customVideoGames: payload
            };
        case GET_VIDEOGAMES_BY_NAME:
            return {
                ...state,
                allVideoGames: payload,
                customVideoGames: payload
            }
        case GET_VIDEOGAMES_BY_ID:
            return {
                ...state,
                oVideoGame: payload
            }
        case GET_LIST_GENRES:
            return {
                ...state,
                aListGenres: payload
            }
        
        case ORDER_FILTER_ASC_DSC: console.log(pDad, pSoon);

            if(pDad === 'ALPHABETIC'){
                if(pSoon === 'ASC'){
                    aTemp = customVideoGames.sort((a, b) => {
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        return 0;
                    });
                }
                else if(pSoon === 'DSC'){
                    console.log("ESTAMOS EN: ",'DSC');
                    aTemp = customVideoGames.sort((a, b) => {
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                        return 0;
                    });
                }
                else{
                    aTemp = customVideoGames;
                }
                return {
                    ...state,
                    customVideoGames: [...aTemp]
                }
            }
            else if (pDad === 'RATING'){
                if(pSoon === 'ASC'){
                    aTemp = customVideoGames.sort((a, b) => {
                        return a.rating-b.rating;
                    });
                }
                else if(pSoon === 'DSC'){
                    aTemp = customVideoGames.sort((a, b) => {
                        return b.rating-a.rating;
                    });
                }
                else{
                    aTemp = customVideoGames;
                }
                return {
                    ...state,
                    customVideoGames: [...aTemp]
                }
            }
            else{
                return {
                    ...state,
                    customVideoGames: allVideoGames
                }
            }
        case FILTER_BY_DATA_AND_GENRE:
            
            const aVideoGameByDataType = 
                p1dataType === 'DATA BASE' ? allVideoGames.filter(pI => {
                        return pI.id >= 9000000})
                : p1dataType === 'API' ? allVideoGames.filter(pI => {
                    return pI.id < 9000000}) 
                : allVideoGames;
            
            if (p2Genre === 'ALL') {
                return {
                    ...state,
                    customVideoGames: aVideoGameByDataType
                }
            }
            else{
                const aFilterByGenre = aVideoGameByDataType.filter(pI => {
                    console.log(pI.genres);
                    if (pI.genres){
                        for( const pII of pI.genres) {
                            if(pII.name === p2Genre) {
                                return pI;
                            }
                        }
                    }
                    else{
                        return null;
                    }
                });
                return {
                    ...state,
                    customVideoGames: [...aFilterByGenre]
                }
            }
        case DELETE_VG_BY_ID:
            const aVideoGameByID = allVideoGames.filter(pI => {
                return pI.id !== payload;
            });
            console.log("<>><>>><",aVideoGameByID);
            return {
                ...state,
                allVideoGames: [...aVideoGameByID],
                customVideoGames: [...aVideoGameByID]
            }
        case GET_PLATFORMS:
            return {
                ...state,
                aPlatforms: payload
            }
        case UPDATE_VIDEO_GAME:
            return {
                ...state,
                oVideoGame: payload
            }
        default: return {...state}
    };
};
export default rootReducer;