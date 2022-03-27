const axios = require('axios');

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';  

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