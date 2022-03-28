import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from "styled-components";
import { MyLabel, MyInputGroup,MyInput,ErrorLegend } from './Elements';

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

export {InputGroup}
