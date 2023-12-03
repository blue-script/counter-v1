import React, {useState} from 'react'
import styled from 'styled-components'
import './App.css'
import {Counter} from './layout/Counter/Counter'
import {RangeOfValue} from './layout/RangeOfValue/RangeOfValue';

function App() {
  const [maxValue, setMaxValue] = useState<number>(0)
  const [startValue, setStartValue] = useState<number>(0)

  const setValue = (maxValue: number, startValue: number) => {
    setMaxValue(maxValue)
    setStartValue(startValue)
  }

  return (
    <Background>
      <RangeOfValue maxValue={maxValue}
                    startValue={startValue}
                    setValue={setValue} />
      <Counter maxScore={maxValue} startScore={startValue}/>
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