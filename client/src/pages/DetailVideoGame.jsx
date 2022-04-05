import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './styles/DetailVideoGame.scss'
import { getDetailVideoGameById } from '../redux/action';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const DetailVideoGame = () => {
  
  const {identifier} = useParams();
  const xDispatch = useDispatch()
  useEffect( () => {
      xDispatch(getDetailVideoGameById(identifier))
  },[xDispatch,identifier])
  const reducer_videgame = useSelector(state => state.oVideoGame)
  console.log(reducer_videgame)

  return (
    <MyDiv pImg = {reducer_videgame.image}>
      <section>
        <h1>{reducer_videgame.name}</h1>
        <p>{reducer_videgame.rating}</p>
        <ol>
          {
            reducer_videgame.genres?.map((pI,index) => {
              return <li key={index}>{pI.name}</li>
            })
          }
        </ol>
        <ul>
          {
            reducer_videgame.plataform?.map((pI,index) => {
              return <li key={index}>{pI}</li>
            })
          }
        </ul>
        <details>{reducer_videgame.description}</details>
        {/* {JSON.stringify(reducer_videgame)} */}
      </section>
      <Link to= "/home">
        <div className='container-button'>
        <span className='back'>←</span>
        </div>
      </Link>
    </MyDiv>
  )
}

export default DetailVideoGame

const MyDiv = styled.div`
    width: auto;
    min-height: 100vh;
    overflow: hidden;
    /* background-image: url("../../assets/img/Home.jpg"); */
    background-image: url(${props => props.pImg});
    background-size: cover;/* contain */
    background-repeat: no-repeat;
    background-position: center;
    display: flex; 
    align-items: center;
    flex-direction: column;
    color: white;
    font-weight: bold;
    .container-button{
        width: 90px;
        height: 70px;
        background-color: black;
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        clip-path: polygon(100% 0, 0% 100%, 100% 100%);
        .back{
            color: white;
            font-size: 2rem; 
            margin-left: 44px;
            margin-top: 27px;
        }
    }
`