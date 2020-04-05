import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../redux/modules/reducer';

export default function getStore() {
  let enhancers = [];
  let middleware = [];

  if (process.env.__DEVTOOLS__) {
    middleware.push(createLogger());
  }

  enhancers.push(applyMiddleware(...middleware));

  return createStore(reducer(), undefined, compose(...enhancers));
}
