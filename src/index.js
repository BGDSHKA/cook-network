import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store'
import { BrowserRouter, HashRouter } from "react-router-dom"
import { Provider } from 'react-redux';


  ReactDOM.render(
    <React.StrictMode>
      {/* Для Github Pages сменили BrowserRouter с basename={process.env.PUBLIC_URL} -> HashRouter чтобы получить anchors, а не прямые ссылки (они не открываются правильно в GP)*/}
      <HashRouter >
        <Provider store={store}>
          <App state={store.getState()} 
            dispatch={store.dispatch.bind(store)} />
        </Provider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
