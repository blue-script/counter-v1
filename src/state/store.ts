import {combineReducers} from 'redux';
import counterReducer from './counter-reducer';

const RootReducer = combineReducers({
    score: counterReducer,
  })