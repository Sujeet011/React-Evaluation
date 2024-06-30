// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});

export default rootReducer;
