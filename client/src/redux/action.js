const axios = require('axios');

export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES';  
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';  
export const GET_VIDEOGAMES_BY_ID = 'GET_VIDEOGAMES_BY_ID';  
export const GET_LIST_GENRES = 'GET_LIST_GENRES';  

export const ORDER_FILTER_ASC_DSC = 'ORDER_FILTER_ASC_DSC';  
export const FILTER_BY_DATA_AND_GENRE = 'FILTER_BY_DATA_AND_GENRE';  

export const DELETE_VG_BY_ID = 'DELETE_VG_BY_ID';  
export const RELOAD_DATA = 'RELOAD_DATA';  
export const GET_PLATFORMS = 'GET_PLATFORMS';  
export const UPDATE_VIDEO_GAME = 'UPDATE_VIDEO_GAME';  
 

export const getAllVideoGames =  (pQuery) => {
  return async (dispatch) => {
    try {
      // const {data} = await axios.get(`http://127.0.0.1:3001/videogames?qry=${pQuery}`);
      const {data} = await axios.get(`http://127.0.0.1:3001/videogames`);
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
      const {data} = await axios.get(`http://127.0.0.1:3001/videogames?name=${pName}`);
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
      const {data} = await axios.get(`http://127.0.0.1:3001/videogame/${pId}`);
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
      const {data} = await axios.get(`http://127.0.0.1:3001/genres`);
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

export const FilterByDataAndGenre = (p1dataType, p2Genre) => {
  return {
    type: FILTER_BY_DATA_AND_GENRE,
    p1dataType,
    p2Genre
  }
}


export const ActDeleteVG = (pIdentity) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(`http://127.0.0.1:3001/videogame/${pIdentity}`);
      
      dispatch({
        type: DELETE_VG_BY_ID,
        payload: data["Video Game deleted"].id
      })
    } catch (error) { console.error(error);}
  }
} 

export const GetPlatforms = () => {

  return async (dispatch) => {
    try {
      const {data} = await axios.get(`http://127.0.0.1:3001/platforms`)
      dispatch({
        type: GET_PLATFORMS,
        payload: data
      })
    } catch (error) { console.error(error);}
  }
}

export const UpdateVideoGame = (pIdentity, pDataForm) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.put(`http://127.0.0.1:3001/videogame/${pIdentity}`, pDataForm);
      dispatch({
        type: UPDATE_VIDEO_GAME,
        payload: data
      })
    } catch (error) { console.error(error);}
  }
}
  // const URL = `http://127.0.0.1:3001/platforms`

  // try {
  //   const {data} = await axios.get(URL);

  //   return({
  //     type: GET_PLATFORMS,
  //     payload: data
  //   })
  // }
    
  // catch (error) { console.error(error);}

