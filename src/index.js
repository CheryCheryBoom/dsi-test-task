import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/App.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import getStore from "./redux/create";
import * as serviceWorker from './serviceWorker';
import Spinner from "./containers/Spinner";

const store = getStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<Spinner/>}>
        <App/>
      </React.Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
