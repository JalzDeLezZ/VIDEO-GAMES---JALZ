import React from 'react'
import styled from "styled-components";
const CardsByPagination = (props) => {
    const {pAPartOfTotalCards, pBLoading, pCardsPerPage, pTotalCards, pMPaginate} = props;
    const aNumberPage = [];

    for (let i = 1; i < Math.ceil(pTotalCards / pCardsPerPage); i++) {
      aNumberPage.push(i)
    }

    console.log(pAPartOfTotalCards)

  return (
    <>
      {
        pBLoading?<span>LOADING</span>:null
      }
      {console.log(pBLoading)}
      <MyDiv>
        {
          pAPartOfTotalCards && pAPartOfTotalCards.map((pI) => {
            return (
              <MyFigure key={pI.i}>
                {`${pI.i+1}.${pI.name}`}
                <img src={pI.image} alt="" />
                {
                  pI.genres.map((e) => {
                    return (
                      <MySpan key={e.id}>{e.name}</MySpan>
                    )
                  })
                }
              </MyFigure>
            )
          })
        }
      </MyDiv>
      <DivButons style={{marginTop: "4px"}}>
          {
            aNumberPage.map(pI => (
              
            <div key={pI} type="button" onClick={() => pMPaginate(pI)}>
              {pI}</div>                        
              
            ))
          }  
      </DivButons>
    </>
  )
}

export default CardsByPagination

const MySpan = styled.span`
  margin-right: 3px;
`

const DivButons = styled.div`
  display: flex;
  justify-content: space-around;
`

const MyFigure = styled.figure`
width: auto; 
  img{
    width: 200px;
    height: 160px;
  }
`
const MyDiv = styled.div`
  text-align: center;
  place-items: center; 
  display: flex;
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
