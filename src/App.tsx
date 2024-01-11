import React from 'react'
import styled from 'styled-components'
import './App.css'
import {Counter} from './layout/Counter/Counter'
import {RangeOfValue} from './layout/RangeOfValue/RangeOfValue';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {RangeValuesType} from './state/range-values-reducer';
import {isCorrectAC} from './state/value-states-reducer';
import {Dispatch} from 'redux';

function App() {
  const rangeValues = useSelector<AppRootStateType, RangeValuesType>(state => state.rangeValues)
  const dispatch = useDispatch<Dispatch>()

  // useEffect(() => {
  //   if (rangeValues.maxValue < 1 || rangeValues.minValue < 0 || rangeValues.maxValue <= rangeValues.minValue) {
  //     dispatch(isCorrectAC(false))
  //   } else {
  //     dispatch(isCorrectAC(true))
  //   }
  // }, [rangeValues])

  if (rangeValues.maxValue < 1 || rangeValues.minValue < 0 || rangeValues.maxValue <= rangeValues.minValue) {
    dispatch(isCorrectAC(false))
  } else {
    dispatch(isCorrectAC(true))
  }

  return (
    <Background>
      <RangeOfValue/>
      <Counter/>
    </Background>
  )
}

export default App

const Background = styled.div`
  height: 100vh;
  background-color: #2a2c36;
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
`