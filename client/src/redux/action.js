const axios = require('axios');

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';  
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';  
export const GET_VIDEOGAMES_BY_ID = 'GET_VIDEOGAMES_BY_ID';  
export const GET_LIST_GENRES = 'GET_LIST_GENRES';  

export const ORDER_FILTER_ASC_DSC = 'ORDER_FILTER_ASC_DSC';  
export const FILTER_BY_DATA_AND_GENRE = 'FILTER_BY_DATA_AND_GENRE';  
 

export const getAllVideoGames =  (pQuery) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`http://18.207.107.246:3001/videogames?qry=${pQuery}`);
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
      const {data} = await axios.get(`http://18.207.107.246:3001/videogames?name=${pName}`);
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
      const {data} = await axios.get(`http://18.207.107.246:3001/videogame/${pId}`);
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
      const {data} = await axios.get(`http://18.207.107.246:3001/genres`);
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
      const response = await axios.post(`http://18.207.107.246:3001/videogame`, dataForm);
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

export const FilterByDataAndGenre = (p1dataType, p2Genre) => {
  return {
    type: FILTER_BY_DATA_AND_GENRE,
    p1dataType,
    p2Genre
  }
}


 