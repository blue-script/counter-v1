import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import './App.css'
import {Counter} from './layout/Counter/Counter'
import {RangeOfValue} from './layout/RangeOfValue/RangeOfValue';

export type RangeOfValuesType = {
  maxValue: number,
  minValue: number,
}

function App() {
  const [rangeOfValues, setMaxMinValue] = useState<RangeOfValuesType>({
    maxValue: JSON.parse?.(localStorage.getItem('maxScore') as string) || 5,
    minValue: JSON.parse?.(localStorage.getItem('startScore') as string) || 0,
  })

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
      <Counter score={score}
               setScoreHandler={setScoreHandler}
               maxMinValue={rangeOfValues}
               isSetValue={isSetValue}
               isCorrectValues={isCorrectValues}/>
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