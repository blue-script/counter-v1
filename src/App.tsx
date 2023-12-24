import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import './App.css'
import {Counter} from './layout/Counter/Counter'
import {RangeOfValue} from './layout/RangeOfValue/RangeOfValue';

export type maxMinValueType = {
  maxScore: number,
  startScore: number
}

function App() {
  const [maxMinValue, setMaxMinValue] = useState<maxMinValueType>({
    maxScore: JSON.parse?.(localStorage.getItem('maxScore') as string) || 5,
    startScore: JSON.parse?.(localStorage.getItem('startScore') as string) || 0,
  })

  const [score, setScore] = useState<number>(maxMinValue.startScore)

  const [isSetValue, setIsSetValue] = useState(true)
  const [isCorrectValues, setIsCorrectValues] = useState(true)

  const isSetValueHandler = (value: boolean) => {
    setIsSetValue(value)
  }

  useEffect(() => {
    if (maxMinValue.maxScore < 1 || maxMinValue.startScore < 0 || maxMinValue.maxScore <= maxMinValue.startScore) {
      setIsCorrectValues(false)
    } else {
      setIsCorrectValues(true)
    }
  }, [maxMinValue])

  const setMaxMinValueHandler = (maxScore: number, startScore: number) => {
    setMaxMinValue({maxScore, startScore})
    localStorage.setItem('maxScore', JSON.stringify(maxScore))
    localStorage.setItem('startScore', JSON.stringify(startScore))
    setScoreHandler(startScore)
  }

  const setScoreHandler = (num: number) => {
    setScore(num)
  }
  return (
    <Background>
      <RangeOfValue maxMinValue={maxMinValue} setMaxMinValue={setMaxMinValueHandler}
                    isSetValueHandler={isSetValueHandler} isCorrectValues={isCorrectValues}/>
      <Counter score={score} setScoreHandler={setScoreHandler} maxMinValue={maxMinValue} isSetValue={isSetValue}
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