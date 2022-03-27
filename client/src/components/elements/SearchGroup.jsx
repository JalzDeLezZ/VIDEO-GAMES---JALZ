import React, {useState} from 'react'
import {getVideoGameByName} from '../../redux/action'
import {useDispatch} from 'react-redux'
import styled from "styled-components";

const SearchGroup = () => {

  const [crntSearch, setSearch] = useState('');

  const dispatch = useDispatch();
  
  const mOnChangeInput = (e) => {
    setSearch(e.target.value);console.log(e.target.value)
  }

  
  const mOnClickButton = async (e) => {
    dispatch(getVideoGameByName(crntSearch));
  }

  return (
    <MyFigure className= "header-input-container">
        <span className="search-icon"/>
        <input 
          type="text" 
          placeholder="Search Video Game By Name" 
          onChange={mOnChangeInput}
          className="header-input"
          value={crntSearch}
        />
        <button 
          onClick={mOnClickButton} 
          className="second-icon"/>
    </MyFigure>
  )
}

export default SearchGroup


const MyFigure = styled.figure`
    width: 79%;
    border-radius: 100px;
    border: 1px solid #dfe1e5;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      box-shadow: 0 1px 6px 0 #ffffff47;
      border-color: #dfe1e500;
    }
    .search-icon {
      background-image: url("https://i.ibb.co/1XPF0Vs/earth-globe-with-continents-maps.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    
      margin-left: 15px;
      filter: invert(100%);
      width: 18px;
      height: 18px;
    }
    .header-input{
      border-radius: 10%;
      width: 100%;
      border: none;
      outline: none;
      height: 40px;
      padding: 0 16px;
      background: transparent;
      color: white;
      &::placeholder{
        color: rgba(255, 255, 255, 0.568); font-weight: bold; }
      
    }
    .second-icon {
      background-image: url("https://i.ibb.co/5Rxd8d1/loupe.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin-right: 15px;
      background-color: transparent;
      outline: none;
      border: none;
      width: 18px;
      height: 18px;
      filter: invert(100%);
      cursor: pointer;
    }
`