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
npm install sass

*/
/* STYLES
npm install --save styled-components
npm i less 
*/

/* 
https://github.com/remix-run/react-router/tree/main/docs
*/