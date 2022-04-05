import React from 'react'
import styled from 'styled-components'

const ButtonAdd = () => {
  return (
    <MyButton>
      +
    </MyButton>
  )
}

export default ButtonAdd

const MyButton = styled.button`
    background-color: #61DAFA;
    box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 36px;
    position: absolute;
    /* bottom: 24px; */
    right: calc(0% + 12%);
    font-weight: bold;
    color: #FAFAFA;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    width: 34px;
  
    transform: rotate(0);
    transition: .3s ease;
    z-index: 1;
    &:hover {
    transform: rotate(224deg);
  }
`