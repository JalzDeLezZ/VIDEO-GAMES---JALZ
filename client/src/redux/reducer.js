import {  
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAMES_BY_NAME,
    GET_VIDEOGAMES_BY_ID,
    GET_LIST_GENRES,

    ORDER_FILTER_ASC_DSC,

    FILTER_BY_GENRE,
    ORDER_FILTER
} from "./action";

const initialState = {
    allVideoGames: [],
    customVideoGames: [],
    aListGenres: [],
    oVideoGame: {}
};

let aTemp = [];

const rootReducer = (state = initialState, action) => {
    const {allVideoGames, customVideoGames} = state;
    const {type, payload, filter_genre, value_order, pDad, pSoon} = action;

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
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        case FILTER_BY_GENRE: 
            const aVideoGameFilter = filter_genre === 'All' ? allVideoGames
            : allVideoGames.filter(pI => {
               for( const pII of pI.genres) {
                   if(pII.name === filter_genre) {
                       return pI;
                   }
               }
            });
            return {
                ...state,
                customVideoGames: aVideoGameFilter
            }
        case ORDER_FILTER:
            console.log("ORDER_FILTER",value_order);
            switch (value_order) { 
                case "ASC":
                aTemp = customVideoGames.sort( ( a , b ) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    return 0
                });
                return {
                    ...state,
                    customVideoGames: [...aTemp]
                }

                case "DSC": 
                    aTemp= customVideoGames.sort( ( a , b ) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                        return 0
                    });
                    return { 
                        ...state,
                        customVideoGames: [...aTemp]
                    }
                
                default: return {...state}
            }
            
        default: return {...state}
    };
};
export default rootReducer;