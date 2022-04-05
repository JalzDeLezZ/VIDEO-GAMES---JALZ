import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { getAllVideoGames } from '../../../redux/action';
import ButtonAdd from '../../elements/ButtonAdd';
import { Link } from 'react-router-dom'

import CardsByPagination from './CardsByPagination';

const BodyContent = () => {
  const [crntBLoading, setBLoading] = useState(true);
  const xDispatch = useDispatch(); 

  useEffect(() => {
    xDispatch(getAllVideoGames())
    .then(() => { 
      setBLoading(false) 
    }); 

  },[xDispatch])

  const Reducer_VideoGame = useSelector(state => state.customVideoGames);
  const [crntPage, setPage] = useState(1);
  let vTargetsPerPage = 15;
  const vIndexOfLastPage = crntPage * vTargetsPerPage;
  const vIndexOfFirstPage = vIndexOfLastPage - vTargetsPerPage;
  const vPartCurrentPage =  (Reducer_VideoGame.length > 15) ? Reducer_VideoGame.slice(vIndexOfFirstPage, vIndexOfLastPage)
  : Reducer_VideoGame;

  const mIterantPaginate = (pNumberClick) => setPage(pNumberClick)
  
  return (
    <MyDiv>
        <Link to='/createvg'><ButtonAdd>X</ButtonAdd></Link>
      
        <CardsByPagination
          pAPartOfTotalCards = {vPartCurrentPage}
          pBLoading = {crntBLoading}

          pCardsPerPage = {vTargetsPerPage}
          pTotalCards = {Reducer_VideoGame.length}
          pMPaginate = {mIterantPaginate}
        />
    </MyDiv>
  )
}

export default BodyContent

const MyDiv = styled.div`
    color: white;
    margin: 7px auto;
    background-color: #000000c8;
    padding: 9px;
`