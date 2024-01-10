import {initialState as initialStateRangeOfValue} from './range-of-value-reducer';

const initialState: number = initialStateRangeOfValue.startScore

const counterReducer = (state: number = initialState, action: any) => {
  switch (action.type) {
    case "counter/increase":
      return state + 1
    case "counter/decrease":
      return state - 1
    default:
      return state
  }
}

export default counterReducer