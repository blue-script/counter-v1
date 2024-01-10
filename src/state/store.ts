import {createStore, combineReducers} from 'redux';
import {counterReducer} from './counter-reducer';
import {rangeOfValueReducer} from './range-of-value-reducer';

export type AppRootStateType = ReturnType <typeof RootReducer>

const RootReducer = combineReducers({
    score: counterReducer,
    rangeOfValue: rangeOfValueReducer,
  })

export const store = createStore(RootReducer)