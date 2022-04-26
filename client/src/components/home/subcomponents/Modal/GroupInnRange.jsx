import styled, { css } from "styled-components";

export const GroupInnRange = (props) =>{
    const {pType,pLabel,pClassName, pOValues, pOSetOvalues, pRegExp, pMax,pMin, pOValidation, pOSetOValidation, pErrorLegend}= props
    
    const mOnChange = (e) => {
        const {name, value} = e.target;
        // console.log(name, value)
        pOSetOvalues({
            ...pOValues,
            [name]: value
        })
    };

    const mValidate = (e) => {
        const {value,name} = e.target;
        if(pRegExp.test(value)){ //console.log('INN Correct')
            pOSetOValidation({
                ...pOValidation,
                [name]: true
            })
        } else { //console.log('INN Incorrect')
            pOSetOValidation({
                ...pOValidation,
                [name]: false
            })
        }
        // pOSetOValidation({
        //     ...pOValidation,
        //     [name]: (value >0 && value <=5) ? true 
        //     : false
        // })
    };
    
    return (
        <div>
            
            <MyLabel 
                htmlFor={'i'+pClassName} 
                className={`${pOValidation[pClassName] === false && 'invalid'}`}
            >{`${pLabel} ( ${pOValues[pClassName]} )`}
            </MyLabel>

            <input
                type={pType}  
                id={'i'+pClassName} 
                value={pOValues[pClassName]}
                onChange={mOnChange}
                onBlur={mValidate}
                onClick={mValidate}
                name= {pClassName}
                min= {pMin}
                max= {pMax}
            /> 
            <ErrorLegend
                pIsValid={pOValidation[pClassName]}
            >{pErrorLegend}</ErrorLegend>

        </div>
    )
}
const MyLabel = styled.label`
    &.invalid{
        color: red;
    }
`
const ErrorLegend = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: red;
    display: none;
    
    ${props => props.pIsValid === true && css`
        display: none;
    `}
    ${props => props.pIsValid === false && css`
        display: block;
    `}
`