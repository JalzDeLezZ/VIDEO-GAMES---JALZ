const axios = require('axios');

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';  
export const GET_LIST_GENRES = 'GET_LIST_GENRES';  

export const getVideoGameByName =  () => {
  return async (dispatch) => {
    try {
      const jsonResponse = await axios.get(`http://127.0.0.1:3001/videogames`);
      dispatch({
        type: GET_ALL_VIDEOGAMES,
        payload: jsonResponse.data
      })
    } catch (error) { console.error(error);}
  };
}

export const getListGenres =  () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/genres`);
      dispatch({
        type: 'GET_LIST_GENRES',
        payload: data
      })
    } catch (error) { console.error(error);}
  }
}
