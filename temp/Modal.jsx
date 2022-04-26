import React, {useEffect, useRef} from 'react'
import { ModalWrapper } from './StyleComponent'

const Modal = ( {closeModal} ) => {
  let rForm /* = useRef(null) */

  useEffect(() => {
    document.addEventListener('click', closeTodoModal);
    return () => {
      document.removeEventListener('click', closeTodoModal);
    }
  }, []);

  const closeTodoModal = (e) => {
    if (rForm && !rForm.contains(e.target)) {
      closeModal();
    }
  }

  return (
    <ModalWrapper>
        {/* <form ref={rForm}> */}
        <form ref={(node) => (rForm = node)}>
            <h4>Modify VideoGame</h4>
            <div className='form-group'>
                <input
                    type='text'
                    name='todo'
                    placeholder='Enter new Todo'
                />
            </div>

            <button
              type='button'
            > Save </button>

            <button
                onClick={closeTodoModal}
                style={{cursor: 'pointer' }}
            > Cancel </button>

        </form>
    </ModalWrapper>
  )
}

export default Modal