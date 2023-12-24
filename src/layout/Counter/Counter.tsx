import React, {useState} from 'react'
import styled, {css} from 'styled-components';
import Button from '../../components/Button/Button';

type CounterType = {
  maxMinValue: {
    maxScore: number
    startScore: number
  }
  isSetValue: boolean
  isCorrectValues: boolean
}

export const Counter: React.FC<CounterType> = (props) => {
  const [score, setScore] = useState<number>(props.maxMinValue.startScore)
  const incScoreHandler = () => setScore(score + 1)
  const resetScoreHandler = () => setScore(props.maxMinValue.startScore)
  const disabledForReset = Boolean(score <= props.maxMinValue.startScore)
  const disabledForInc = Boolean(score >= props.maxMinValue.maxScore)

  return (
    <CounterStyled>
      <DisplayScoreStyled score={score} maxScore={props.maxMinValue.maxScore} isCorrectValues={props.isCorrectValues} isSetValue={props.isSetValue}>
        {
          props.isSetValue
          ? score
          : props.isCorrectValues
            ? 'enter values and press "set"'
            : 'Incorrect value!'
        }
      </DisplayScoreStyled>
      <EditScoreStyled>
        <Button disabled={disabledForInc} title="inc" func={incScoreHandler}/>
        <Button
          disabled={disabledForReset}
          title="reset"
          func={resetScoreHandler}
        />
      </EditScoreStyled>
    </CounterStyled>
  )
}


// Style-----------------------------------------------------------------
const CounterStyled = styled.div`
  border: 5px solid #72e4fc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 30px;
`

const EditScoreStyled = styled.div`
  width: 520px;
  height: 160px;
  border: 5px solid #72e4fc;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

type DisplayScoreStyledProps = {
  score:number
  maxScore: number
  isCorrectValues: boolean
  isSetValue: boolean
}
const DisplayScoreStyled = styled.div<DisplayScoreStyledProps>`
  width: 520px;
  height: 220px;
  color: #72e4fc;
  border-radius: 14px;
  border: 5px solid #72e4fc;
  margin: 0 auto;
  text-align: center;
  line-height: 220px;
  font-size: 100px;
  font-weight: bold;
  ${props =>
          props.score >= props.maxScore &&
          css<DisplayScoreStyledProps>`
            color: red;
          `}
  ${props =>
          !props.isSetValue &&
          css<DisplayScoreStyledProps>`
            font-size: 30px;
          `}
  ${props =>
          !props.isCorrectValues &&
          css<DisplayScoreStyledProps>`
            color: red;
          `}
`