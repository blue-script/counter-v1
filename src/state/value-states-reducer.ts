export type ValueStatesType = {
  isSetValues: boolean
  isCorrectValues: boolean
}

const initialState = {
  isSetValues: true,
  isCorrectValues: true
}

export const valueStatesReducer = (state: ValueStatesType = initialState, action: {type: 'valueStates/isSet' | 'valueStates/isCorrect'}):ValueStatesType => {
  switch (action.type) {
    case 'valueStates/isSet':
      return state
    case 'valueStates/isCorrect':
      return state
    default:
  return state
  }
}
