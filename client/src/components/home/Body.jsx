import React from 'react'
import './CompHome.scss'
import BodyContent from './subcomponents/ContainerTargets'
import Filter from './subcomponents/filter'

const Body = () => {
  return (
    <main className='compBody-Home'>
      <section>
        <Filter/>
        <BodyContent/>
      </section>
    </main>
  )
}

export default Body
