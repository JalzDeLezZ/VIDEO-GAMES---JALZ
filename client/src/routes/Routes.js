import React from 'react';

import {Routes, Route } from 'react-router-dom';

//Components
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import CreateVideoGame from '../pages/CreateVideoGame';

function App() {
  return (
    <Routes>
      <Route exact path='/detailvg:identity' element={<LandingPage/>}/>
      <Route exact path='/createvg' element={<CreateVideoGame/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/' element={<LandingPage/>}/>
    </Routes>
  );
}

export default App;
