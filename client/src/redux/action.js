const axios = require('axios');

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';  
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';  
export const GET_VIDEOGAMES_BY_ID = 'GET_VIDEOGAMES_BY_ID';  
export const GET_LIST_GENRES = 'GET_LIST_GENRES';  

export const ORDER_FILTER_ASC_DSC = 'ORDER_FILTER_ASC_DSC';  

export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';  
export const ORDER_FILTER = 'ORDER_FILTER';  

export const getAllVideoGames =  (pQuery) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/videogames?qry=${pQuery}`);
      dispatch({
        type: GET_ALL_VIDEOGAMES,
        payload: data
      })
    } catch (error) { console.error(error);}
  };
}

export const getVideoGameByName =  (pName) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/videogames?name=${pName}`);
      dispatch({
        type: GET_VIDEOGAMES_BY_NAME,
        payload: data
      })
    } catch (error) { console.error(error);}
  };
}

export const getDetailVideoGameById =  (pId) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`http://localhost:3001/videogame/${pId}`);
      dispatch({
        type: GET_VIDEOGAMES_BY_ID,
        payload: data
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

export const postVideoGamesXGenres = (dataForm) => {
  return async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:3001/videogame`, dataForm);
      return response;
    } catch (error) { console.error(error);}
  }
}

export const OrderFilterAscDsc = (pDad, pSoon) => {
  return {
    type: ORDER_FILTER_ASC_DSC,
    pDad,
    pSoon
  }
}










//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export const filterByGenre = (filter_genre) => {
  return {
    type: FILTER_BY_GENRE,
    filter_genre
  }
}

export const OrderFilter = (value_order) => {
  return {
    type: ORDER_FILTER,
    value_order
  }
}