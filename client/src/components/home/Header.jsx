import React from 'react'
import SearchGroup from '../elements/SearchGroup'
import './CompHome.scss'

const Header = () => {
  return (
    <header className='ComponentHead'>
      <img src="https://i.ibb.co/PMLv36J/LOG2.png" alt="LOG2" border="0"/> 
      <SearchGroup/>
    </header>
  )
}

export default Header

