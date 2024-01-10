export const initialState = {
  maxScore: JSON.parse?.(localStorage.getItem('maxScore') as string) || 5,
  startScore: JSON.parse?.(localStorage.getItem('startScore') as string) || 0,
}

const rangeOfValueReducer = (state: any, action: any) => {
  switch (action.type) {


    default:
      return state
  }
}
export default rangeOfValueReducer