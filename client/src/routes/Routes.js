import React from 'react';

import {Routes, Route } from 'react-router-dom';

//Components
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';

function App() {
  return (
    <Routes>
      <Route exact path='/detailvg:identity' element={<LandingPage/>}/>
      <Route exact path='/createvg' element={<LandingPage/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/' element={<LandingPage/>}/>
    </Routes>
  );
}

export default App;
