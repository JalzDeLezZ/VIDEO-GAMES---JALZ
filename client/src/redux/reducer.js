import {  
    GET_ALL_VIDEOGAMES 
} from "./action";

const initialState = {
    allVideoGames: [],
    customVideoGames: [],
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
        default: return {...state}
    };
};
export default rootReducer;