import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
const Card = (props) => {
  const {pImage,pName,pId,pAGenres} = props;

  return (
    <MySection>
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