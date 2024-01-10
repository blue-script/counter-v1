import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import './App.css'
import {Counter} from './layout/Counter/Counter'
import {RangeOfValue} from './layout/RangeOfValue/RangeOfValue';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import CounterContainer from './layout/Counter/CounterContainer';

export type RangeOfValuesType = {
  maxValue: number,
  minValue: number,
}

function App() {
  const state = useSelector(state => state)
  const rangeOfValues = state.rangeOfValue

  // const [rangeOfValues, setMaxMinValue] = useState<RangeOfValuesType>({
  //   maxValue: JSON.parse?.(localStorage.getItem('maxScore') as string) || 5,
  //   minValue: JSON.parse?.(localStorage.getItem('startScore') as string) || 0,
  // })

  const [score, setScore] = useState<number>(rangeOfValues.startScore)

  const [isSetValue, setIsSetValue] = useState(true)
  const [isCorrectValues, setIsCorrectValues] = useState(true)

  const isSetValueHandler = (value: boolean) => {
    setIsSetValue(value)
  }

  useEffect(() => {
    if (rangeOfValues.maxScore < 1 || rangeOfValues.startScore < 0 || rangeOfValues.maxScore <= rangeOfValues.startScore) {
      setIsCorrectValues(false)
    } else {
      setIsCorrectValues(true)
    }
  }, [rangeOfValues])

  const setRangeOfValuesHandler = (maxScore: number, startScore: number) => {
    setMaxMinValue({maxScore, startScore})
    setScoreHandler(startScore)
  }

  const setScoreHandler = (num: number) => {
    setScore(num)
  }
  return (
    <Background>
      <RangeOfValue rangeOfValues={rangeOfValues}
                    setRangeOfValues={setRangeOfValuesHandler}
                    isSetValueHandler={isSetValueHandler}
                    isCorrectValues={isCorrectValues}/>
      <CounterContainer/>
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