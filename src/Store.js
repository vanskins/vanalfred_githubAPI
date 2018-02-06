import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, createLogger());
const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log('store change', store.getState());
})

export default store;