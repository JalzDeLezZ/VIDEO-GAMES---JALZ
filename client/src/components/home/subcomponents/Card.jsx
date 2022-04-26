import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
import './StyleCard.scss';
import { ActDeleteVG } from '../../../redux/action';
import { useDispatch } from 'react-redux';
import Modal from './Modal';

const Card = (props) => {
  const {pImage,pName,pId,pAGenres} = props;
  const xDispatch = useDispatch();

  const [crntModal , setModal] = useState(false);
  const mShowModal = () => {
    setModal(true);
  }
  const mHideModal = () => {
    setModal(false);
  }

  const mRemove = () => {
    console.log('remove', pId);
    xDispatch(ActDeleteVG(pId));
  }
  const mModify = () => {
    console.log('modify', pId);
    mShowModal();
  }

  return (

    <MySection>
      {
        crntModal && <Modal pIdentity={pId} mHideModal={mHideModal}/>
      }
      {
        pId>=9000000 ? 
          <button
            className='button fire Remove'
            onClick={mRemove}
          ></button> : null
      }
      {
        pId>=9000000 ?
          <button 
            className='button ice Modify'
            onClick={mModify}
          ></button>: null
      }
          
      <MyFigure className="card-figure">
          <Link to={`/detailvg/${pId}`}>
            <h5>{pId}. {pName}</h5>
            <div>
              <img src={pImage} alt={pName}/>
            </div>
          </Link>
          <article>
            {
              pAGenres?.map((e) => {
                return (
                  <MySpan key={e.id}>{e.name}</MySpan>
                )
              })
            }
          </article>
      </MyFigure>
    </MySection>
  )
}

export default Card

const MySection = styled.section`
width: auto;
background-color: #ffffff18;
border-radius: 0px 36% 0% 36%;
position: relative;
  /* .Card-RM{
    position: absolute;
    .Remove{
      cursor: pointer;
      background-color: #ff0000;
    }
    .Modify{
      cursor: pointer;
      background-color: blue;
    }
  } */

  img{
    width: 200px;
    height: 160px;
  }
  article{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

const MySpan = styled.span`
  margin: 6px;
`

const MyFigure = styled.figure`
  width: auto;
  a{
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
  div{
    overflow: hidden;
    width: 200px;
    height: 100px;
    img{
      width: 200px;
      height: auto;
    }
  }
`