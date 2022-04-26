import React,{useState} from 'react'
import Modal from './Modal'

const ListTodos = () => {

  const [modal, setModal] = useState(false);

  const handleShowModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  return  (
    <div>
      <div>
        { modal && <Modal closeModal={handleCloseModal}/>}
        <div className='row'>
            <h1>MY TODOS</h1>
        </div>
        <div>
          <button
            onClick={handleShowModal}
          > ◄◄◄ NEW TODO ◄◄◄ </button>
        </div>
      </div>
    </div>
  )
}

export default ListTodos