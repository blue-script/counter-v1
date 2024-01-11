export type  EditMaxValueACType = {
  type: 'range/editMaxValue',
  payload: number
}
export type  EditMinValueACType = {
  type: 'range/editMinValue',
  payload: number
}
type ActionType = EditMaxValueACType | EditMinValueACType

export type RangeValuesType = {
  maxValue: number
  minValue: number
}

// как через useEffect ??
export const rangeValues: RangeValuesType = {
  maxValue: JSON.parse?.(localStorage.getItem('maxValue') as string) || 5,
  minValue: JSON.parse?.(localStorage.getItem('minValue') as string) || 0,
}

export const rangeValuesReducer = (state: RangeValuesType = rangeValues, action: ActionType): RangeValuesType => {
  switch (action.type) {
    case 'range/editMaxValue':
      return {...state, maxValue: action.payload}
    case 'range/editMinValue':
      return {...state, minValue: action.payload}
    default:
      return state
  }
}

export const editMaxValueAC = (payload: number): EditMaxValueACType => ({type: 'range/editMaxValue', payload})
export const editMinValueAC = (payload: number): EditMinValueACType => ({type: 'range/editMinValue', payload})
