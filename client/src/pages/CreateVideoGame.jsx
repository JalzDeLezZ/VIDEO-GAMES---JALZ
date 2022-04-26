import React, { useRef, useState } from 'react'
import { ContainerSubmit, ErrorMessage, MyButton, MyForm, SuccessfullyMessage } from '../components/form/Elements'
import { DetailGroup, InputGroup, InnSearch, AddSelect } from '../components/form/InputGroup'
import './styles/CreateVideoGame.scss'
import PLATFORMS from '../assets/helpers/Platforms.json'
import { regular_expretion } from '../assets/helpers/validation'
import { useDispatch } from 'react-redux'
import { postVideoGamesXGenres } from '../redux/action'
import { Link, useNavigate } from 'react-router-dom';

const CreateVideoGame = () => {
  const xDispatch = useDispatch();
  const xNavigate = useNavigate();
  let tForm = useRef(null);
  const oInitialState = {
    n_name : { current_data: '', is_valid: null },
    n_desc : "",
    n_date : { current_data: '', is_valid: null },
    n_rating : { current_data: '', is_valid: null }
  }

  const [oStates, setOstates] = useState(
    oInitialState
  )

  const [crntPlatforms, setPlatforms] = useState([]);
  const [crntGenres, setGenres] = useState([]);
  const [crntShowGenres, setShowGenres] = useState([]);
  const [crntFormValidation , setFormValidation] = useState(null);

  const mOnSubmit = async (event) => {
    event.preventDefault();
    console.log('Submit', oStates);
      if (oStates.n_name.is_valid   === "false" ||
          oStates.n_date.is_valid   === "false" ||
          oStates.n_rating.is_valid === "false" ||
          oStates.n_desc.length <= 4 ||
          crntPlatforms.length <= 0
        ) {
          setFormValidation(false)
      }
      else {
        let oPost = {
          "name": oStates.n_name.current_data,
          "image": "https://i.ibb.co/X2bcwRM/mario.jpg",
          "description": oStates.n_desc,
          "release_date": oStates.n_date.current_data, 
          "rating": oStates.n_rating.current_data,
          "aPlatform": crntPlatforms,
          "aGenres": crntGenres
        }
        console.log(oPost);
        await xDispatch(postVideoGamesXGenres(oPost));
        
        setOstates(oInitialState);
        setPlatforms([]);
        setGenres([]);
        setShowGenres([]);
        setFormValidation(true);
        alert('Successfully');
        xNavigate('/home');
      }
  }

  return (
    <div className='page-createVideoGame'>
      <Link to= "/home">
        <div className='container-button'>
        <span className='back'>←</span>
        </div>
      </Link>
      <MyForm onSubmit={mOnSubmit} ref={tForm}>
        
        <InputGroup
            pOState = {oStates}
            pOSetState = {setOstates}
            pType="text"
            pLabel= "Name (*)"
            pPlaceholder = "Enter the name of the game"
            pName="n_name"
            pErrorLegend="Only letters (aA-zZ) and numbers (0-9) are accepted"
            pRegexp={regular_expretion.name}
        />
        
        <DetailGroup
          pLabel= "Other (*)" 
          pPlaceHolder= "Enter other details"
          pName= 'n_desc'
          pState= {oStates}
          pSetState= {setOstates}
        />

        <InputGroup
            pOState = {oStates}
            pOSetState = {setOstates}
            pType="date"
            pLabel= "Date"
            pPlaceholder = "Enter the name of the game"
            pName="n_date"
            pErrorLegend="Only acepte this format DD/MM/YYYY"
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
            pAState={crntGenres}
            pASetState={setGenres}
            pCrntShowGenres= {crntShowGenres}
            pSetShowGenres= {setShowGenres}
        />
        
        <AddSelect
            pName = {'n_platforms'}
            pLabel = "Platform (*)"
            pAPlatforms = {PLATFORMS}
            pAState = {crntPlatforms}
            pASetState = {setPlatforms}
        />

        <ContainerSubmit>
            {
              crntFormValidation === false && 
              <ErrorMessage>
                <span>⚠️</span>´
                <p>
                  <b>Error: </b>Por favor rellena el formulario correctamente.
                </p>
              </ErrorMessage>
            }
            {
              crntFormValidation && 
              <SuccessfullyMessage>
                Formulario Enviado Exitosamente!
              </SuccessfullyMessage>
            }
            <MyButton 
              type="submit"
              // disabled={true}
            >SEND ►►►</MyButton>
        </ContainerSubmit>

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

==================================================
const [crntImg , setImg] = useState('https://i.ibb.co/X2bcwRM/mario.jpg');
const mOnFileChange = (event) => {
  const { files } = event.target;
  const reader = new FileReader();
  reader.readAsDataURL(files[0]);
  reader.onload = (e) => {
    setImg(e.target.result);
  }
  console.log(files[0]);
}

<Temp>
  <img src={crntImg} alt='img'/>
  <input 
    type="file" 
    accept='image/*'
    onChange={mOnFileChange}
  />
</Temp>
const Temp = styled.div`
  background-color: #f5f5f5;
  img{
    width: 200px;
    height: 200px;
  }
`
*/