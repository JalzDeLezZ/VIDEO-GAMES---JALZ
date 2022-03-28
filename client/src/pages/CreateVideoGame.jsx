import React, { useState } from 'react'
import { MyForm } from '../components/form/Elements'
import { InputGroup } from '../components/form/InputGroup'
import './styles/CreateVideoGame.scss'

import { regular_expretion } from '../assets/helpers/validation'

const CreateVideoGame = () => {

  const [oStates, setOstates] = useState(
    {
      n_name : { current_data: '', is_valid: null },
      n_other : { current_data: '', is_valid: null },
    }
  )

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