import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from '../redux/modules/reducer';

export default function getStore() {
  let enhancers = [];
  let middleware = [];
  //Convenient logger for dev version to check redux store's status
  middleware.push(createLogger());

  enhancers.push(applyMiddleware(...middleware));

  return createStore(reducer(), undefined, compose(...enhancers));
}
