import {  
    GET_ALL_VIDEOGAMES,
    GET_LIST_GENRES
} from "./action";

const initialState = {
    allVideoGames: [],
    customVideoGames: [],
    aListGenres: []
};

const rootReducer = (state = initialState, action) => {

    const {type, payload} = action;

    switch(type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                allVideoGames: payload,
                customVideoGames: payload
            };
        case GET_LIST_GENRES:
            return {
                ...state,
                aListGenres: payload
            }
        default: return {...state}
    };
};
export default rootReducer;