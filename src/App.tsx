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
  const maxValueFromLocalStorage = localStorage.getItem('maxScore');
  const minValueFromLocalStorage = localStorage.getItem('startScore');
  const [maxMinValue, setMaxMinValue] = useState<maxMinValueType>({
    maxScore: maxValueFromLocalStorage ? JSON.parse(maxValueFromLocalStorage) : 5,
    startScore: minValueFromLocalStorage ? JSON.parse(minValueFromLocalStorage) :0
  })


  const [correctValues, setCorrectValues] = useState(true)

  const setValue = () => {
    localStorage.setItem('maxScore', JSON.stringify(maxMinValue.maxScore))
    localStorage.setItem('startScore', JSON.stringify(maxMinValue.startScore))
  }

  if (maxMinValue.maxScore < 1 && maxMinValue.startScore < 0 && maxMinValue.maxScore <= maxMinValue.startScore) {
    setCorrectValues(false)
  }

  return (
    <Background>
      <RangeOfValue maxMinValue={maxMinValue} setMaxMinValue={setMaxMinValue} setValue={setValue}/>
      <Counter maxMinValue={maxMinValue} correctValues={correctValues}/>
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