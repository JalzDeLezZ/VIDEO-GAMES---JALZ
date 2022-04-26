import React, { useEffect, useState } from 'react'
import GroupInput from './GroupInput';
import { useDispatch, useSelector } from 'react-redux';
import {getDetailVideoGameById, GetPlatforms, getListGenres, UpdateVideoGame, getAllVideoGames} from '../../../../redux/action';
import styled from 'styled-components';
import { DetailGroup } from './DetailGroup';
import { GroupInnRange } from './GroupInnRange';
import { SelectByGenres, SelectGroup } from './SelectGroup';
import './Form.scss';

const Form = ({pMHideModal, pId}) => {
 
  const recuder_vg = useSelector(state => state.oVideoGame);
  const reducer_platforms = useSelector(state => state.aPlatforms);
  const reducer_genres = useSelector(state => state.aListGenres);
  
  const xDispatch = useDispatch();
  useEffect(() => {
    xDispatch(getDetailVideoGameById(pId))
    xDispatch(GetPlatforms())
    xDispatch(getListGenres())
  }, [xDispatch, pId])
  
  const [crntOValues, setOvalues] = useState({
    c_name: '',
    c_description: '',
    c_release_date: '',
    c_rating : '',
    c_platforms: [],
    c_genres: [],
  });

  const [oValidation, setOValidation] = useState({
    c_name: null,
    c_description: null,
    c_release_date: null,
    c_rating: null,
    c_platforms: null,
    c_genres: null,
  });

  const mReload = () => {
    if(recuder_vg.hasOwnProperty('id')){
      setOvalues({
        c_name: recuder_vg.name,
        c_description: recuder_vg.description,
        c_release_date: recuder_vg.releaseDate,
        c_rating: recuder_vg.rating,
        c_platforms: recuder_vg.plataform,
        c_genres: recuder_vg.genres,
      })
    }
  }

  useEffect(() => {
    mReload();
  }, [recuder_vg])

  const mSubmit = (event) => {
    event.preventDefault();
    console.log('Submit', crntOValues);

    const oPut = {
      "name": crntOValues.c_name,
      "image": "https://i.ibb.co/X2bcwRM/mario.jpg",
      "description": crntOValues.c_description,
      "release_date": crntOValues.c_release_date,
      "rating": crntOValues.c_rating,
      "aPlatform": crntOValues.c_platforms,
      "aGenres": crntOValues.c_genres.map(item => item.id),
    }
    console.log(oPut);
    xDispatch(UpdateVideoGame(pId, oPut))
    .then(() => {
      xDispatch(getAllVideoGames())
      .then(() => {
        pMHideModal();
      })
    })
  }

  const mDeletePlatform = (pPlatform) => {
    const newPlatforms = crntOValues.c_platforms.filter(pI => pI !== pPlatform);
    setOvalues({
      ...crntOValues,
      c_platforms: newPlatforms
    })
  }
  const mDeleteGenres = (pIdGenres) => {
    const newGenres = crntOValues.c_genres.filter(pII => pII.id !== pIdGenres);
    setOvalues({
      ...crntOValues,
      c_genres: newGenres
    })
  }

  return (
    <form onSubmit={mSubmit} >
      <GroupInput 
        pType = "text"
        pLabel= "Video Game Name"
        pPlaceHolder = "Enter Video Game Name"
        pClassName= "c_name"
        pOValues= {crntOValues}
        pOSetOvalues= {setOvalues}

        pRegExp = {/^[a-zA-Z0-9 ]{3,}$/m}
        pOValidation ={oValidation}
        pOSetOValidation ={setOValidation}
        pErrorLegend = "Only letters (aA-zZ) and numbers (0-9) are accepted"
      />

      <DetailGroup
        pName="c_description"
        pLabel="Video Game Description"
        pPlaceHolder="Enter Video Game Description"
        pOValues={crntOValues}
        pOSetOvalues={setOvalues}
      />

      <GroupInput 
        pType = "date"
        pLabel= "Release Date"
        pClassName= "c_release_date"
        pOValues= {crntOValues}
        pOSetOvalues= {setOvalues}

        pRegExp = {/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/m}
        pOValidation ={oValidation}
        pOSetOValidation ={setOValidation}
        pErrorLegend = "Format: DD-MM-YYYY"
      /> 

      <GroupInnRange
        pType = "range"
        pLabel= "Rating"
        pClassName= "c_rating"
        pOValues= {crntOValues}
        pOSetOvalues= {setOvalues}

        pRegExp = {/^[1-9]{1}$/m}
        pOValidation ={oValidation}
        pOSetOValidation ={setOValidation}
        pErrorLegend = "Only numbers (1-9) are accepted"
        pMax = {9}
        pMin = {0}
      />
      <SelectGroup
        pName = {'c_platforms'}
        pLabel= "Platforms (*)"
        pAOptions= {reducer_platforms}
        pAState= {crntOValues}
        pASetState= {setOvalues}
      />
      <SelectByGenres
        pName = {'c_genres'}
        pLabel= "Genres"
        pAOptions= {reducer_genres}
        pAState= {crntOValues}
        pASetState= {setOvalues}
      />
      
      <ol>
        <h3>Platforms</h3>
        {
          crntOValues.c_platforms?.map((pI, index) => {
            return (
              <li key={index}>
                {pI}
                <button 
                  onClick={() => mDeletePlatform(pI)}
                  type='button'
                >X</button>
              </li>
            )
          })
        }
      </ol>

      <ul>
        <h3>Genres</h3>
        {
          crntOValues.c_genres?.map( (pIII) => {
            return (
              <li key={pIII.id}>
                {pIII.name} 
                <button
                  type='button'
                  onClick={() => mDeleteGenres(pIII.id)}
                  >X</button>
              </li>
            )
          }
        )}
      </ul>

      <div>
        <MyButtonCancel
          type='button'
          onClick={pMHideModal}
        > CANCEL </MyButtonCancel>

        <MyButtonModify
          type='submit'
        > SAVE </MyButtonModify>
      </div>

    </form>
  )
}

export default Form

const MyButtonCancel = styled.button`
  width: 120px;
  border: none;
  color: #fff;
  background-image: linear-gradient(30deg, #ff0000, #f7824c);
  border-radius: 20px;
  background-size: 100% auto;
  font-family: inherit;
  font-size: 17px;
  padding: 0.6em 1.5em;

  &:hover {
  background-position: right center;
  background-size: 200% auto;
  -webkit-animation: pulse 2s infinite;
  animation: pulse512 1.5s infinite;
  }

  @keyframes pulse512 {
    0% {
      box-shadow: 0 0 0 0 #da300566;
    }

    70% {
      box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
    }

    100% {
      box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
    }
  }
`

const MyButtonModify = styled.button`
  border: none;
  width: 120px;
  color: #fff;
  background-image: linear-gradient(30deg, #0400ff, #4ce3f7);
  border-radius: 20px;
  background-size: 100% auto;
  font-family: inherit;
  font-size: 17px;
  padding: 0.6em 1.5em;

  &:hover {
  background-position: right center;
  background-size: 200% auto;
  -webkit-animation: pulse 2s infinite;
  animation: pulse512 1.5s infinite;
  }

  @keyframes pulse512 {
    0% {
      box-shadow: 0 0 0 0 #05bada66;
    }

    70% {
      box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
    }

    100% {
      box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
    }
  }

`