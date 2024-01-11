import {combineReducers, legacy_createStore} from 'redux';
import {rangeValuesReducer} from './range-values-reducer';
import {valueReducer} from './value-reducer';
import {valueStatesReducer} from './value-states-reducer';

export type AppRootStateType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
  value: valueReducer,
  rangeValues: rangeValuesReducer,
  valueStates: valueStatesReducer
})

export const store = legacy_createStore(RootReducer)