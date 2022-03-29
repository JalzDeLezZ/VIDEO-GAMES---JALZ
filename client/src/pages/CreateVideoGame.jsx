import React, { useState } from 'react'
import { MyForm } from '../components/form/Elements'
import { DetailGroup, InputGroup, InnSearch } from '../components/form/InputGroup'
import './styles/CreateVideoGame.scss'

import { regular_expretion } from '../assets/helpers/validation'

const CreateVideoGame = () => {

  const [oStates, setOstates] = useState(
    {
      n_name : { current_data: '', is_valid: null },
      n_date : { current_data: '', is_valid: null },
      n_rating : { current_data: '', is_valid: null },
    }
  )
  
  const [crntAVideoGames, setAVideoGames] = useState([]);

  return (
    <div className='page-createVideoGame'> 
      <MyForm>

        <InputGroup
            pOState = {oStates}
            pOSetState = {setOstates}
            pType="text"
            pLabel= "Name"
            pPlaceholder = "Enter the name of the game"
            pName="n_name"
            pErrorLegend="Only letters (aA-zZ) and numbers (0-9) are accepted"
            pRegexp={regular_expretion.name}
        />

        <DetailGroup
          pLabel= "Other" 
          pPlaceHolder= "Enter other details"
          pName= 'iDetail'
        />

        <InputGroup
            pOState = {oStates}
            pOSetState = {setOstates}
            pType="date"
            pLabel= "Date"
            pPlaceholder = "Enter the name of the game"
            pName="n_date"
            pErrorLegend="Only letters (aA-zZ) and numbers (0-9) are accepted"
            pRegexp={regular_expretion.date}
        />
        <InputGroup
            pOState = {oStates}
            pOSetState = {setOstates}
            pType="number"
            pLabel= "Rating"
            pPlaceholder = "Enter the name of the game"
            pName="n_rating"
            pErrorLegend="Only letters (aA-zZ) and numbers (0-9) are accepted"
            pRegexp={regular_expretion.rating}
        />
        <InnSearch
            pPlaceHolder = "Search Genre of the game"
            pLabel = "Genres"
            pAState={crntAVideoGames}
            pASetState={setAVideoGames}
        />
      </MyForm>
    </div>
  )
}
export default CreateVideoGame
/* 
{
    "name": "nameOnexaaXx3",
    "description": "descriptionnnn 2",
    "release_date": "2000-12-12", 
    "rating": "5",
    "aPlatform": ["PlayStation","Xbox","Nintendo","PC"],
    "aGenres": [4,51,3]
}
*/