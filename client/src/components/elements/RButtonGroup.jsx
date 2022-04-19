import React from 'react'
import styled from "styled-components";
const RButtonGroup = (props) => {
    const {pId, pLabel,pValue ,pName, pMOnClickRbt} = props   
    return (
        <ContChecks>
            <Label htmlFor={pId}>{pLabel}</Label>
            <input
                type="radio" id={pId}
                onClick={pMOnClickRbt}
                value={pValue}
                name={pName}
            />
        </ContChecks>
    )
}

export default RButtonGroup;

const ContChecks = styled.div`
    margin: 0 7px;
    display: flex;
    align-items: center;
    label{
        margin-right: 7px;
    }
`

const Label = styled.label`
    color: white;
    font-weight: bold;
` 
