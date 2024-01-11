import {rangeValues} from './range-values-reducer';

export type ChangeValueACType = {
  type: 'counter/changeValue'
  payload: number
}

const initialState: number = rangeValues.minValue

export const valueReducer = (state: number = initialState, action: ChangeValueACType): number => {
  switch (action.type) {
    case 'counter/changeValue':
      return action.payload
    default:
      return state
  }
}

export const changeValueAC = (payload: number): ChangeValueACType => ({type: 'counter/changeValue', payload})