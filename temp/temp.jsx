import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BurgerButton = () => {
    const [open, setOpen] = useState(false);

    const mReloadOpen = () => {
        setOpen(!open);
    }

  return (
    <MyHeader pOpen={open}>
        <StyledBurger pOpen={open} onClick={mReloadOpen}>
            <span></span>
            <span></span>
            <span></span>
        </StyledBurger>
        <RightNav pOpen={open}>
            <li><Link to='/' onClick={mReloadOpen}>Landing Page</Link></li>
            <li><Link to='/home' onClick={mReloadOpen}>Home</Link></li>
            <li><Link to='/createvg' onClick={mReloadOpen}>Create Video Game</Link></li>
        </RightNav>
    </MyHeader>
  )
}

export default BurgerButton

//---------------------------------------------------------------------------
//-----------------------------STYLED COMPONENTS-----------------------------
//---------------------------------------------------------------------------

const MyHeader = styled.header`
    position: fixed;
    z-index: 3;
    width: ${({pOpen}) => (!pOpen) ? '93px' : '100%'};
    height: ${({pOpen}) => (!pOpen) ? '93px' : '100%'};
    background-color: black;
    clip-path: polygon(0 0, 0 100%, 100% 0);
    /* (!pOpen) ? 'polygon(0 0, 0 100%, 100% 0);' : 'polygon(0 0, 100% 0, 100% 100%, 30% 100%);'} */
`
//===============================================================

const RightNav = styled.ul`
    /* position: block;
    display: flex; 
    flex-flow: row nowrap; */
    list-style: none;
    li{
    text-decoration : none;
    padding: 10px 20px;
    a{
        text-decoration: none;
        color: white;
        font-weight: bold;
    }
    };
    .active{
        background-color: #aaa;
    };
     

    @media (max-width: 400px){
        transform: ${({ pOpen }) => pOpen ? 'translateX(0)' : 'translateX(100%)'};
        flex-flow: column nowrap; 
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 1;
        li{
          color: white;
        }
    }
`
//===============================================================
const StyledBurger = styled.section`
    
    width: 2rem;
    height: 2rem;
    margin: 10px;
    position: absolute;
    z-index: 2;
    background-color: black;
    @media (max-width:768px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;    
    }
    span{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({pOpen}) => pOpen ? '#bdbdbd' : '#f9f5ea'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1){
            transform: ${({pOpen}) => pOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2){
            transform: ${({pOpen}) => pOpen ? 'traslate(100%)' : 'traslateX(0)'};
            opacity: ${({pOpen}) => pOpen ? 0 : 1};
        }
        &:nth-child(3){
            transform: ${({pOpen}) => pOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`