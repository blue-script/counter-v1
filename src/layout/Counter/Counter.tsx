import React, {useState} from 'react'
import styled, {css} from 'styled-components';
import Button from '../../components/Button/Button';
import {MyPostsType} from './CounterContainer';

// type CounterType = {
//   score: number
//   setValueHandler: (num: number) => void
//   maxMinValue: {
//     maxScore: number
//     startScore: number
//   }
//   isSetValue: boolean
//   isCorrectValues: boolean
// }

export const Counter: React.FC<MyPostsType> = ({score, rangeOfValue, setValueHandler, ...rest}) => {
  const incScoreHandler = () => setValueHandler(score + 1)
  const resetScoreHandler = () => setValueHandler(rangeOfValue.minValue)
  const disabledForReset = Boolean(props.score <= props.maxMinValue.startScore)
  const disabledForInc = Boolean(props.score >= props.maxMinValue.maxScore)

  return (
    <CounterStyled>
      <DisplayScoreStyled $score={props.score} $maxscore={props.maxMinValue.maxScore} $iscorrectvalues={props.isCorrectValues.toString()} $issetvalue={props.isSetValue.toString()}>
        {
          props.isSetValue
          ? props.score
          : props.isCorrectValues
            ? 'enter values and press "set"'
            : 'Incorrect value!'
        }
      </DisplayScoreStyled>
      <EditScoreStyled>
        <Button disabled={disabledForInc || !props.isSetValue} title="inc" func={incScoreHandler}/>
        <Button
          disabled={disabledForReset || !props.isSetValue}
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
  $score:number
  $maxscore: number
  $iscorrectvalues: string
  $issetvalue: string
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
          props.$score >= props.$maxscore &&
          css<DisplayScoreStyledProps>`
            color: red;
          `}
  ${props =>
          props.$issetvalue === 'false' &&
          css<DisplayScoreStyledProps>`
            font-size: 30px;
          `}
  ${props =>
          props.$iscorrectvalues === 'false' &&
          css<DisplayScoreStyledProps>`
            color: red;
          `}
`