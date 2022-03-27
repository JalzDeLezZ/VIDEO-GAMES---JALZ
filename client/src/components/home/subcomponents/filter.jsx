import React, { useState } from 'react'
import SelectGroup from '../../elements/SelectGroup';
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import RButtonGroup from '../../elements/RButtonGroup';
const Filter = () => {
  const dispatch = useDispatch();

  const [sRadioBtn , setSRadioBtn] = useState(null)

  const mOnClickRbtOrder = (e) =>{
    const {value} = e.target; console.log(value);
    setSRadioBtn(value); //console.log("RBT",sRadioBtn) 
    // dispatch(filtGeneral(sSelect, value))
  }

  return (
    <MyDiv>
      <h3>FILTERS</h3>
      <div style={{display: ""}}> 
        <SelectGroup
          pLabel = "GENRE"
          pAoptions= {["All", "Action", "Adventure", "RPG", "Simulation", "Strategy"]}
        />
        <SelectGroup
          pLabel = "DATA"
          pAoptions= {["All", "API", "DATA BASE"]}
        />
        <SelectGroup
          pLabel = "ORDEN"
          pAoptions= {["ALPHABETIC", "RATING"]}
        />
        <MySection>
          <RButtonGroup 
            pName="order" 
            pId="iAsc" 
            pLabel="Ord. Asc" 
            pValue="ASC" 
            pMOnClickRbt={mOnClickRbtOrder}
          />
          
          <RButtonGroup 
            pName="order"  
            pId="iDsc"
            pLabel="Ord. Dsc" 
            pValue="DSC"
            pMOnClickRbt={mOnClickRbtOrder}
          />
        </MySection>
      </div>
    </MyDiv>
  )
}

export default Filter

const MyDiv = styled.div`
  background-color: #000000be;
  color: white;
  text-align: center;
  padding: 10px;
  h3, h4{
    margin: 0;
    padding: 0;
  }
`
const MySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 28px 0px;
`
