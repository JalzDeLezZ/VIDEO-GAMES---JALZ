import React, {useState} from 'react'
import {getVideoGameByName} from '../../redux/action'
import {useDispatch} from 'react-redux'
import styled from "styled-components";

const SearchGroup = () => {

  const xDispatch = useDispatch();
  
  const [crntSearch, setSearch] = useState('');
  
  const mOnClickButton = async (e) => {
    xDispatch(getVideoGameByName(crntSearch));
    console.log(crntSearch);
  }

  return (
    <MyForm className= "header-input-container">
        <span className="search-icon"/>
        <input 
          type="search" 
          placeholder="Search Video Game By Name" 
          onChange={(e) => {setSearch(e.target.value)}}
          className="header-input"
          value={crntSearch}
        />
        <button 
          onClick={mOnClickButton} 
          className="second-icon"/>
    </MyForm>
  )
}

export default SearchGroup


const MyForm = styled.form`
    width: 100%; 
    border: #dfe1e500;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0 0 0 / 80%);
    &:hover {
      box-shadow: 0 1px 6px 0 #ffffff;
      border: 2px solid #dfe1e5;
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
      font-weight: bold;
      &::placeholder{
        color: rgba(255, 255, 255, 0.719); font-weight: bold; }
      
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