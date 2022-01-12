import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './web/components/Home';
import store from './app/Store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Home />
        {/* <App /> */}
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  

