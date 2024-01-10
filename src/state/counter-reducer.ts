import {initialState as initialStateRangeOfValue} from './range-of-value-reducer';

export type IncreaseACType = {
  type: "counter/increase"
}
export type DecreaseACType = {
  type: "counter/decrease"
}
type ActionsType = IncreaseACType | DecreaseACType

const initialState: number = initialStateRangeOfValue.minValue

export const counterReducer = (state: number = initialState, action: ActionsType): number => {
  switch (action.type) {
    case "counter/increase":
      return state + 1
    case "counter/decrease":
      return state - 1
    default:
      return state
  }
}

export const increaseAC = (): IncreaseACType => ({type: 'counter/increase'})
export const decreaseAC = (): DecreaseACType => ({type: 'counter/decrease'})