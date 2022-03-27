import React from 'react'
import './styles/Home.scss'
import Header from '../components/home/Header'
import Body from '../components/home/Body' 
function Home() {
  return (
    <div className='pHome'>
      <Header />
      <Body />
    </div>
  )
}

export default Home