import {EditMaxValueACType, EditMinValueACType} from './range-values-reducer';

export type ValueStatesType = {
  isSetValues: boolean
  isCorrectValues: boolean
}

const initialState = {
  isSetValues: true,
  isCorrectValues: true
}

export const valueStatesReducer = (state: ValueStatesType = initialState, action: ActionType):ValueStatesType => {
  switch (action.type) {
    case 'valueStates/isSet':
      return {...state, isSetValues: action.payload}
    case 'valueStates/isCorrect':
      return {...state, isCorrectValues: action.payload}
    case 'range/editMaxValue':
      return {...state, isSetValues: false}
    case 'range/editMinValue':
      return {...state, isSetValues: false}
    default:
  return state
  }
}

type IsSetACType = {
  type: 'valueStates/isSet'
  payload: boolean
}
type IsCorrectACType = {
  type: 'valueStates/isCorrect'
  payload: boolean
}


type ActionType = IsSetACType | IsCorrectACType | EditMaxValueACType | EditMinValueACType
export const isSetAC = (payload: boolean): IsSetACType=> ({type: 'valueStates/isSet', payload})
export const isCorrectAC = (payload: boolean): IsCorrectACType=> ({type: 'valueStates/isCorrect', payload})


