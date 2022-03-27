import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { getVideoGameByName } from '../../../redux/action';

import CardsByPagination from './CardsByPagination';



const BodyContent = () => {

  const xDispatch = useDispatch();
  useEffect(() => {
    xDispatch(getVideoGameByName());
  },[xDispatch]);
  const Reducer_VideoGame = useSelector(state => state.customVideoGames);

  const [crntPage, setPage] = useState(1);
  let vTargetsPerPage = 15;
  const vIndexOfLastPage = crntPage * vTargetsPerPage;
  const vIndexOfFirstPage = vIndexOfLastPage - vTargetsPerPage;
  const vPartCurrentPage = Reducer_VideoGame.slice(vIndexOfFirstPage, vIndexOfLastPage);

  const mIterantPaginate = (pNumberClick) => setPage(pNumberClick)
  
  let vBolean = (Reducer_VideoGame.length>0)?false:true
  return (
    <MyDiv>
        <CardsByPagination
          pAPartOfTotalCards = {vPartCurrentPage}
          pBLoading = {vBolean}

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
    width: 75vw;
    height: 50vh;
    padding: 9px;
`


