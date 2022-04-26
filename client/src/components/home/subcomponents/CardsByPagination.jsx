import React from 'react'
import styled from "styled-components";
import Card from './Card' 
const CardsByPagination = (props) => {
    const {pAPartOfTotalCards, pBLoading, pCardsPerPage, pTotalCards, pMPaginate} = props;
    const aNumberPage = [];

    for (let i = 1; i < Math.ceil(pTotalCards / pCardsPerPage); i++) {
      aNumberPage.push(i)
    }
    
  return (
    <>
      {
        pBLoading?<h3>LOADING</h3>:null
      }
      { !pBLoading &&
        <div>

        <MyDiv>
          {
            (pAPartOfTotalCards.length > 0) ? pAPartOfTotalCards.map((pI,i) => {
              return (
                <Card
                  key={i}
                  pImage={pI.image}
                  pName={pI.name}
                  pId={pI.id}
                  pAGenres = {pI.genres}
                />
              )
            })
            : (!pBLoading) && <h1>No Hay Data</h1> 
          }
        </MyDiv>

        <DivButons style={{marginTop: "4px"}}>
          {
            aNumberPage.map(pI => (
              
            <button key={pI} type="button" onClick={() => pMPaginate(pI)}>
              {pI}</button>                        
              
            ))
          }  
        </DivButons>

        </div>      
      }
    </>
  )
}

export default CardsByPagination



const DivButons = styled.div`
  display: flex;
  justify-content: space-around;
  button{
    background-color: transparent;
    color: white;
    font-weight: bold;
    outline: none;
    border: none;
    border-bottom: 2px solid white;
    cursor: pointer;
  }
`

const MyDiv = styled.div`
  text-align: center;
  place-items: center; 
  display: grid; 
  grid-auto-flow: column;//dense
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  place-items: center;
  overflow-x: auto;

  &&::-webkit-scrollbar-track
  {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
    border-radius: 10px;
    background-color: #ffffffd4;
  }
  &&::-webkit-scrollbar
  { 
    height: 9px;
  }
  &&::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); */
    background-color: #00d9ff71;
  }
`
 