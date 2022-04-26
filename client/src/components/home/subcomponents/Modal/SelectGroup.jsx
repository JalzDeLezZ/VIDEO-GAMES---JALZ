import React from 'react'
import styled from "styled-components";

const SelectGroup = (props) => {
  
  const {pName,pLabel,pAOptions,pAState,pASetState} = props;

  const mAddSlc = (e) => {
    const {value} = e.target;
    let vMatch = pAState[pName].find(e => e === value);
    // if (!vMatch) { pASetState([...pAState, value]) }
    if (!vMatch) { 
      pASetState({
        ...pAState, 
        [pName]:[...pAState[pName], value]
      }) 
    }
    else{ alert("Platform already added") }
  }

  return (
    <section>
        <label htmlFor={'i'+pName}>{pLabel}</label>
        <select
          id={'i'+pName}
          name={pName}
          onChange={ mAddSlc }
          onBlur={() => {console.log(pAState)}}
        >
            {
                pAOptions.map( pI => {
                  return (
                    <option 
                      key={pI.id} 
                      value={pI.name}
                    >{pI.name}</option>
                  )
                })
            }
        </select>
    </section>
  )
}

const SelectByGenres = (props) => {
  const {pName,pLabel,pAOptions,pAState,pASetState} = props;
  const mAddSlc = (e) => {
    const {value} = e.target;
    let vMatch = pAState[pName].find(e => e.name === value);
    if (!vMatch) {
      const oSearch = pAOptions.find(e => e.name === value);
      pASetState({
        ...pAState, 
        [pName]:[...pAState[pName], {id:oSearch.id, name:oSearch.name}]
      })
    }
    else{ alert("Platform already added") }
  }

  return (
    <section>
        <label htmlFor={'i'+pName}>{pLabel}</label>
        <select
          id={'i'+pName}
          name={pName}
          onChange={ mAddSlc }
        >
            {
                pAOptions.map( (pI) => {
                  return (
                    <option 
                      key={pI.id} 
                      value={pI.value}
                    >{pI.name}</option>
                  )
                })
            }
        </select>
    </section>
  )
}

export {
  SelectGroup,
  SelectByGenres
}