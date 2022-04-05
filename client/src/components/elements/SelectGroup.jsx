import React, {useState} from 'react'
import styled from "styled-components";

const SelectGroup = (props) => {
  
  const {pLabel, pAoptions, pMReloadReducer} = props;

  
  return (
    <MyDiv className='GroupSelect'>
        <h4>{pLabel}</h4>
        <select
          id=""
          name=""
          onChange={ pMReloadReducer }
          // onBlur={() => {console.log(crntSelect)}}
        >
            {
                pAoptions.map((item, index) => {
                    return <option 
                             key={index} 
                             value={item}
                            >{item}</option>
                })
            }
        </select>
    </MyDiv>
  )
}
export default SelectGroup


const MyDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    margin-top: 12px;
    select{
      width: 60%;
      margin: 0 9px;
      outline: none;
      border: none;
      text-align: center;
    } 
`