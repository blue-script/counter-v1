import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import './App.css'
import {Counter} from './layout/Counter/Counter'
import {RangeOfValue} from './layout/RangeOfValue/RangeOfValue';

type maxMinValueType = {
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

  const [editRangeOfValue, setEditRangeOfValue] = useState(false)

  const setValue = (maxValue: number, startValue: number) => {
    setMaxMinValue({
      maxScore: maxValue,
      startScore: startValue
    })
    localStorage.setItem('maxScore', JSON.stringify(maxValue))
    localStorage.setItem('startScore', JSON.stringify(startValue))
  }

  return (
    <Background>
      <RangeOfValue maxMinValue={maxMinValue} setValue={setValue}/>
      <Counter maxMinValue={maxMinValue}/>
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