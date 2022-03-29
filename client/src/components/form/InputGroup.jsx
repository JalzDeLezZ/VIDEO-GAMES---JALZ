import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from "styled-components";
import { getListGenres } from '../../redux/action';
import { MyLabel, MyInputGroup,MyInput,ErrorLegend, MyTextArea } from './Elements';

/* ****************************************************************** */
/* **************************INPUT GROUP*********************** */
/* ****************************************************************** */
const InputGroup = (props) => {

    const {pMSecondPass, pType, pLabel, pPlaceholder, pName, pErrorLegend, pRegexp, pOState, pOSetState , pMin ,pMax} = props

    const mOnChange = (event) => {
        const {value,name} = event.target;
        console.log("qqqqq>>>>>>>",name)
        pOSetState(
            {...pOState, 
                [name]: {current_data: value, is_valid: null}}
            );
        console.log(pOState);
    }

    const mValitation = (event) => {
        const {value,name} = event.target;
        if (pRegexp) {
            if (pRegexp.test(pOState[pName].current_data)) {
                console.log('INN Correct')
                pOSetState(
                    {...pOState, 
                    [name]: {current_data: value, is_valid: 'true'}}
                );
            } else {
                console.log('INN Incorrect')
                pOSetState(
                    {...pOState, 
                    [name]: {current_data: value, is_valid: 'false'}}
                );
            }
        }
        if (pMSecondPass) {
            pMSecondPass();
        }
    } 
  return (
    <div>
        <MyLabel 
            htmlFor={pName} 
            pValidation={pOState[pName].is_valid}
        >{pLabel}</MyLabel>

        <MyInputGroup>
            <MyInput
            id={pName}
            name={pName}
            type={pType} 
            placeholder={pPlaceholder} 
            value={pOState[pName].current_data}
            onChange={mOnChange}
            onKeyUp={mValitation}
            onBlur={mValitation}
            pValidation={pOState[pName].is_valid}
            min = {pMin}
            max = {pMax}
            />
            {
                pOState[pName].is_valid === null ? null
                :pOState[pName].is_valid === 'true' ? <span>✅</span>
                :<span>❌</span>
            }
        </MyInputGroup>
        <ErrorLegend 
            pValidation={pOState[pName].is_valid}
        >{pErrorLegend}</ErrorLegend>

    </div>
  )
}
/* ****************************************************************** */
/* **************************DETAIL GROUP*********************** */
/* ****************************************************************** */

const DetailGroup = (props) => {
    const {pName,pLabel,pPlaceHolder} = props
    return (
        <div>
            <MyLabel 
                htmlFor={pName}  
            >{pLabel}</MyLabel>

            <MyTextArea 
                id={pName}
                placeholder={pPlaceHolder}
            />

        </div>  
    )
}
/* ****************************************************************** */
/* **************************INPUT SEARCH*********************** */
/* ****************************************************************** */
const InnSearch = ({pPlaceHolder, pLabel, pAState, pASetState}) => {

    const xDispatch = useDispatch();
    const reducer_aListGenres = useSelector( state => state.aListGenres)
 
    const [sInn, setSInn] = useState('');   
    const [crntAVideoGames, setAVideoGames] = useState([]);
    
    const mOnChange = (e) => {
        setSInn(e.target.value) // console.log(e.target.value)
    }

    useEffect(() => {
        xDispatch(getListGenres())
    },[xDispatch]); 

     

  return (
      <div>
            <label htmlFor="iInnGenres">{pLabel}</label>
            <div className="inputSearch">
                <input 
                    list="iDataList" 
                    id="iInnGenres" 
                    className="123" 
                    type="search" 
                    value={sInn} 
                    onChange={mOnChange}
                    placeholder={pPlaceHolder}
                />
                <datalist id="iDataList">
                    {
                        reducer_aListGenres.map((pI) => {
                            return <option key={pI.id} value={pI.name}>{pI.name}</option>
                        })
                    }
                </datalist>
                <button type="button" >ADD</button>
            </div> 
      </div>
  )
}
/* ****************************************************************** */
/* **************************INPUT SEARCH*********************** */
/* ****************************************************************** */

export {InputGroup, DetailGroup, InnSearch}
