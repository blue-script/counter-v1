import React, {useState} from 'react';
import styled from 'styled-components';
import {EditRangeOfValue} from './EditRangeOfValue/EditRangeOfValue';
import Button from '../../components/Button/Button';

type RangeOfValueType = {
  maxMinValue: {
    maxScore: number
    startScore: number
  }
  isSetValueHandler: (value: boolean) => void
  setMaxMinValue: (maxScore: number, startScore: number) => void
  isCorrectValues: boolean
}

export const RangeOfValue: React.FC<RangeOfValueType> = (props) => {
  const setValueHandler = () => {
    props.isSetValueHandler(true)
    props.setMaxMinValue(props.maxMinValue.maxScore, props.maxMinValue.startScore)
  }

  return <EditRangeOfValueStyled>
    <EditRangeOfValue maxMinValue={props.maxMinValue}
                      isSetValueHandler={props.isSetValueHandler}
                      setMaxMinValue={props.setMaxMinValue}
    />
    <ButtonStyled>
      <Button title='set' disabled={!props.isCorrectValues} func={setValueHandler}/>
    </ButtonStyled>
  </EditRangeOfValueStyled>
}


// Style--------------------------------------------
const EditRangeOfValueStyled = styled.div`
  border: 5px solid #72e4fc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 30px;
`

const ButtonStyled = styled.div`
  width: 520px;
  height: 160px;
  border: 5px solid #72e4fc;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
