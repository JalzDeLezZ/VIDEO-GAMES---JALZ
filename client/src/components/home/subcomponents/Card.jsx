import React from 'react'

const Card = () => {
  return (
    <MyDiv>
        <figure className="card-figure">
            <img src={pImagen} alt={pNombre}/>
            <h6>{pId}</h6>
        </figure>
    </MyDiv>
  )
}

export default Card

const MyDiv = styled.div`
width: auto; 
  img{
    width: 200px;
    height: 160px;
  }
`