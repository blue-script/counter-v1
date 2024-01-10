import {initialState as initialStateRangeOfValue} from './range-of-value-reducer';

export type ChangeValueCounterACType = {
  type: "counter/changeValue"
  payload: number
}

const initialState: number = initialStateRangeOfValue.minValue

export const counterReducer = (state: number = initialState, action: ChangeValueCounterACType): number => {
  switch (action.type) {
    case "counter/changeValue":
      return action.payload + 1
    default:
      return state
  }
}

export const changeValueCounterAC = (payload: number): ChangeValueCounterACType => ({type: 'counter/changeValue', payload})