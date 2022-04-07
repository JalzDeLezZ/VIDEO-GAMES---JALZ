import React from 'react';

import {Routes, Route } from 'react-router-dom';

//Components
import LandingPage from '../pages/LandingPage';
import Home from '../pages/Home';
import CreateVideoGame from '../pages/CreateVideoGame';
import DetailVideoGame from '../pages/DetailVideoGame';
import BurgerButton from '../components/elements/BurgerButton';

function App() {
  return (
    <>
      <BurgerButton/>
      <Routes>
        <Route exact path='/detailvg/:identifier' element={<DetailVideoGame/>}/>
        <Route exact path='/createvg' element={<CreateVideoGame/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/' element={<LandingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
