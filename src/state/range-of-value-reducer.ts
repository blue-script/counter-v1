import {IncreaseACType} from './counter-reducer';

export type  EditMaxValueACType = {
  type: 'range/editMaxValue',
  payload: number
}
export type  EditMinValueACType = {
  type: 'range/editMinValue',
  payload: number
}

type InitialStateType = {
  maxValue: number
  minValue: number
}
export const initialState: InitialStateType = {
  maxValue: JSON.parse?.(localStorage.getItem('maxScore') as string) || 5,
  minValue: JSON.parse?.(localStorage.getItem('startScore') as string) || 0,
}

export const rangeOfValueReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case 'range/editMaxValue':
      return state
    case 'range/editMinValue':
      return state
    default:
      return state
  }
}

export const editMaxValueAC = (payload: number): EditMaxValueACType => ({type: 'range/editMaxValue', payload})
export const editMinValueAC = (payload: number): EditMinValueACType => ({type: 'range/editMinValue', payload})
