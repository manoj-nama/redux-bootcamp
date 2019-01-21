import { createStore, combineReducers, applyMiddleware } from 'redux';

import productsReducer from './reducers/products.reducer';
import userReducer from './reducers/user.reducer';

import { fnMiddleware, arrayMiddleware, logger } from './middlewares'

const reducers = combineReducers({
  users: userReducer,
  products: productsReducer
});

const middlewares = applyMiddleware(fnMiddleware, arrayMiddleware, logger);

const store = createStore(reducers, middlewares);

export default store;