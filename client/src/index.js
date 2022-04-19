import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './routes/Routes';
import STORE from './redux/store';

ReactDOM.render(

  <Provider store={STORE}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>

  ,document.getElementById('root')
);

/*
npm install react-redux
npm i react-router-dom
npm i redux-thunk
npm install --save redux-devtools-extension
npm i axios

/* STYLES
npm install --save styled-components
npm install sass
npm i less
*/
// de repente  les ayude para facilitar las istalaciones de las depencendias del frontend y algunas estructuras  de ellos
/* 
https://github.com/remix-run/react-router/tree/main/docs
*/