import React, {  useEffect, useRef, useState } from 'react'
import SelectGroup from '../../elements/SelectGroup';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import RButtonGroup from '../../elements/RButtonGroup';
import { OrderFilterAscDsc, OrderFilter, filterByGenre, getListGenres, getAllVideoGames} from '../../../redux/action';

const Filter = () => {

  //DISPATCH & SELECTOR
  const xDispatch_action = useDispatch();
  useEffect(() => {
    xDispatch_action(getListGenres('ALL'))
  },[xDispatch_action]);
  const reducer_genres = useSelector( state => state.aListGenres)
  
  //ARRAY GENRES
  let aGenres = reducer_genres.map(pI => pI.name);
  aGenres.unshift('All');//aGenres = ['All', ...aGenres]
  const x = useRef();

  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  //FILTRO SELECT X' VALUE => DISPATCH
  const mOnChangeSelect = (e) => {
    const {value} = e.target; console.log(value);
    if (value === 'All' || value === 'NONE') {
      console.log(x)
      x.current.reset();
    }
    xDispatch_action(filterByGenre(value))
  }

  //FILTER RADIO BUTTONS X' VALUE => DISPATCH
  const mOnChangeSelectData = (e) => {
    const {value} = e.target;  console.log(value);
    xDispatch_action(getAllVideoGames(value));
  }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [typeOrder, setTipeOrder] = useState('NONE');
  const [filterAscDsc, setFilterAscDsc] = useState('NONE');
  const mTypeOrder = (e)=> {
    const {value} = e.target; //console.log(value);
    setTipeOrder(value);
    xDispatch_action(OrderFilterAscDsc(value, filterAscDsc))
  }
  const mOrderAscDsc = (e)=> {
    const {value} = e.target; // console.log(value);
    setFilterAscDsc(value);
    xDispatch_action(OrderFilterAscDsc(typeOrder, value))
  }
  return (
    <MyDiv>
      <h3>FILTERS</h3>
 
      <form ref={x} style={{display: ""}}> 
        <SelectGroup
          pLabel = "GENRE"
          pName = "n_genre"
          pAoptions= {aGenres}
          pMReloadReducer = {mOnChangeSelect}
        />
        
        <SelectGroup
          pLabel = "DATA"
          pName = "n_data"
          pAoptions= {["ALL", "API", "DATA BASE"]}
          pMReloadReducer = {mOnChangeSelectData}
        />

        <SelectGroup
          pLabel = "ORDEN"
          pName = "n_order"
          pAoptions= {["NONE","ALPHABETIC", "RATING"]}
          pMReloadReducer = {mTypeOrder}
        />

        <MySection>
          <RButtonGroup 
            pName="order"
            pId="iAsc" 
            pLabel="Ord. Asc" 
            pValue="ASC" 
            pMOnClickRbt={mOrderAscDsc}
          />
          
          <RButtonGroup
            pName="order"  
            pId="iDsc"
            pLabel="Ord. Dsc" 
            pValue="DSC"
            pMOnClickRbt={mOrderAscDsc}
          />
        </MySection>
      </form> 
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
