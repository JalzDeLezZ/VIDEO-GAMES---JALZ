import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getListGenres } from '../../redux/action';
import { MyLabel, MyInputGroup,MyInput,ErrorLegend, MyTextArea , MySelect, ReturnedContainer, ContainerDetail  } from './Elements';

/* ****************************************************************** */
/* **************************INPUT GROUP*********************** */
/* ****************************************************************** */
const InputGroup = (props) => {

    const {pType, pLabel, pPlaceholder, pName, pErrorLegend, pRegexp, pOState, pOSetState , pMin ,pMax} = props

    const mOnChange = (event) => {
        const {value,name} = event.target;
        pOSetState(
            {...pOState, 
                [name]: {current_data: value, is_valid: null}}
            );
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
    const {pName,pLabel,pPlaceHolder, pState, pSetState} = props 
    const mOnChange = (event) => {
        const {name ,value} = event.target;
        pSetState(
            {...pState,
                [name]: value}
        );
    }
    return (
        <div>
            <MyLabel
                htmlFor={"i"+pName}  
            >{pLabel}</MyLabel>
            <MyTextArea
                id={"i"+pName}
                name={pName}
                placeholder={pPlaceHolder}
                value={pState[pName]}
                onChange={mOnChange}
            />
        </div>
    )
}
/* ****************************************************************** */
/* **************************INPUT SEARCH*********************** */
/* ****************************************************************** */
const InnSearch = ({pPlaceHolder, pLabel, pAState, pASetState}) => {

    //*******************************RENDER***************************/
    const xDispatch = useDispatch();
    const reducer_aListGenres = useSelector( state => state.aListGenres)
    useEffect(() => {
        xDispatch(getListGenres())
        console.log(reducer_aListGenres)
    },[xDispatch]);  
      
    //**********************SEARCH INPUT***************************/
    const [sInn, setSInn] = useState('');
    const [crntAGenres, setAGenres] = useState([]);
    const mAddVideoGame = () => {
        let vMatch = crntAGenres.find(e => e === sInn );
        if (!vMatch) {
            let oInn = reducer_aListGenres.filter(e => e.name === sInn)
            setAGenres([...crntAGenres, sInn]);
            pASetState([...pAState, oInn[0].id]);
        }
        else{
            alert('Genre already added')
        }
    }
    
    const mDeleteOne = (p) => { 
        let oMatch = crntAGenres.filter(e => e !== p);
        setAGenres(oMatch);
    }
  return (
      <ContainerDetail>
            <MyLabel htmlFor="iInnGenres">{pLabel}</MyLabel>
            <div className="inputSearch">
                <input
                    list="iDataList" 
                    id="iInnGenres" 
                    className="123" 
                    type="search" 
                    value={sInn} 
                    onChange={(e) => setSInn(e.target.value)}
                    onBlur={() => {console.log(crntAGenres, "POST: ", pAState)}}
                    placeholder={pPlaceHolder}
                />
                <datalist id="iDataList">
                    {
                        reducer_aListGenres.map((pI) => {
                            return <option key={pI.id} value={pI.name}>{pI.name}</option>
                        })
                    }
                </datalist>
                <button type="button" onClick={mAddVideoGame}>ADD</button>
            </div>
            <ReturnedContainer>
                {
                    crntAGenres?.map((pI, i) => {
                        return ( 
                        <article key={i}>
                            <p >{pI}
                                <button
                                    type='button' 
                                    onClick={() => {mDeleteOne(pI)}}
                                >X</button>
                            </p>
                        </article>)
                    })
                }
            </ReturnedContainer>
      </ContainerDetail>
  )
}
/* ****************************************************************** */
/* ************************** SELECT ADD *********************** */
/* ****************************************************************** */


const AddSelect = (props) => {
    const {pName, pLabel, pAPlatforms, pAState, pASetState} = props

    const mOnClickSelect = (e) => {
        const {value} = e.target;
        let vMatch = pAState.find(e => e === value);
        if (!vMatch) {
            pASetState([...pAState, value]);
        }
        else{
            alert("Platform already added")
        }
    }
    
    const mDeletePlatform = (p) => {
        let oMatch = pAState.filter(e => e !== p);
        pASetState(oMatch);
    }
    return (
        <div>
            <MyLabel 
                htmlFor={"i"+pName}  
            >{pLabel}</MyLabel>

            <MySelect
                id={"i"+pName}
                name={pName}
                onChange={mOnClickSelect}
                >
                {
                    pAPlatforms.map((pI) => {
                        return <option key={pI.id} value={pI.name}
                        >{pI.name}</option>
                        }
                    )
                }
            </MySelect>
            <ReturnedContainer>
                {
                    pAState?.map((pI, i) => {
                        return ( 
                        <article key={i}>
                            <p>{pI} </p>
                            <button 
                                onClick={() => mDeletePlatform(pI)}
                            >X</button>
                        </article>)
                    })
                }
            </ReturnedContainer>
        </div>  
    )
}

export {InputGroup, DetailGroup, InnSearch, AddSelect}
