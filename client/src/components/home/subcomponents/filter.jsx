import React, {  useEffect, useRef, useState } from 'react'
import SelectGroup from '../../elements/SelectGroup';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import RButtonGroup from '../../elements/RButtonGroup';
import { OrderFilterAscDsc, FilterByDataAndGenre, OrderFilter, filterByGenre, getListGenres, getAllVideoGames} from '../../../redux/action';

const Filter = () => {
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  

  const rForm = useRef();
  ////******DISPATCH & SELECTOR//******
  const xDispatch_action = useDispatch();
  useEffect(() => {
    xDispatch_action(getListGenres('ALL'))
  },[xDispatch_action]);
  const reducer_genres = useSelector( state => state.aListGenres)
  //*******ARRAY GENRES//********
  let aGenres = reducer_genres.map(pI => pI.name);
  aGenres.unshift('ALL');//aGenres = ['All', ...aGenres]

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [typeData, setTypeData] = useState('ALL');
  const [filterGenre, setFilterGenre] = useState('ALL');
  const mOnChangeGenreSlc = (e) => {
    const {value} = e.target;
    setFilterGenre(value);
    xDispatch_action(FilterByDataAndGenre(typeData, value))
  }

  const mOnChangeSelectData = (e) => {
    const {value} = e.target;
    setTypeData(value);
    // xDispatch_action(getAllVideoGames(value));
    xDispatch_action(FilterByDataAndGenre(value, filterGenre));
  }

  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [typeOrder, setTipeOrder] = useState('NONE');
  const [filterAscDsc, setFilterAscDsc] = useState('NONE');

  const mTypeOrder = (e)=> {
    const {value} = e.target;
    setTipeOrder(value);
    xDispatch_action(OrderFilterAscDsc(value, filterAscDsc))
  }

  const mOrderAscDsc = (e)=> {
    const {value} = e.target;
    setFilterAscDsc(value);
    xDispatch_action(OrderFilterAscDsc(typeOrder, value))
  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  return (
    <MyDiv>
      <h3>FILTERS</h3>
 
      <form ref={rForm} style={{display: ""}}> 
        <SelectGroup
          pLabel = "GENRE"
          pName = "n_genre"
          pAoptions= {aGenres}
          pMReloadReducer = {mOnChangeGenreSlc}
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
/* 
  if (value === 'All' || value === 'NONE') {
    console.log(rForm)
    rForm.current.reset();
  } 
    

*/