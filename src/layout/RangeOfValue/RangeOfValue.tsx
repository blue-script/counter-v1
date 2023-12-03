import React from 'react';
import styled from 'styled-components';
import {EditRangeOfValue} from './EditRangeOfValue/EditRangeOfValue';
import {SetRangeOfValue} from './SetRangeOfValue/SetRangeOfValue';

type RangeOfValueType = {
  maxValue: number
  startValue: number
  setValue: (maxValue: number, startValue: number) => void
}

export const RangeOfValue: React.FC<RangeOfValueType> = ({
                                                           maxValue,
                                                           startValue,
                                                           setValue,
                                                         }) => {
  return <EditRangeOfValueStyled>
    <EditRangeOfValue maxValue={maxValue} startValue={startValue}/>
    <SetRangeOfValue setValue={setValue}/>
  </EditRangeOfValueStyled>
}

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


