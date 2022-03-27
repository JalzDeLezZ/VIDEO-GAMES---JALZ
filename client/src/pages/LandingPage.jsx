import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/LandingPage.scss' 

const LandingPage = () => {

  const toNavigation = useNavigate()

  const [currentLoading, setLoading] = useState(false)
  const mLoading = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toNavigation('/home')
    }, 2000)
  }
  return (
    <div className='pLandingPage'>
        <h1>HELLO WORLD</h1> 
        <button className='myButton' onClick={mLoading}>
          Home
        </button>
        {
        currentLoading ?
        <figure className='loading'>
          <img src="https://i.ibb.co/Yb822Ny/gif-Loading.gif" alt="gif-Loading" border="0"/>
        </figure>
        : null
        }
    </div>
  )
}

export default LandingPage