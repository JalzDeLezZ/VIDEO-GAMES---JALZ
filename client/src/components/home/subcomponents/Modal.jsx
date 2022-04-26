import React, { useState } from 'react'
import styled from 'styled-components'
import Form from './Modal/Form';

const Modal = ({mHideModal, pIdentity}) => {
  
  // const [crntFlag, setFlag] = useState(true);

  return (
    <MyDiv onClick={mHideModal}>
      <MySection onClick={e => e.stopPropagation()}>
        <Form
          pMHideModal={mHideModal}
          pId={pIdentity}
        />
      </MySection>
    </MyDiv>
  ) 
}

export default Modal

const MyDiv = styled.div`
  background-color: rgb(0 0 0 / 90%);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MySection = styled.section`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 60%;
  height: 90%;
  border-radius: 0px 36% 0% 36%;
  position: relative;
`