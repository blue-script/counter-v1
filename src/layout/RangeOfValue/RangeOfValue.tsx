import React, {useState} from 'react';
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
  const [maxEditValue, setMaxEditValue] = useState<number>(maxValue)
  const [maxStartEditValue, setStartEditValue] = useState<number>(startValue)
  const setValueHandler = () => {
    setValue(maxEditValue, maxStartEditValue)
  }
  return <EditRangeOfValueStyled>
    <EditRangeOfValue maxValue={maxEditValue}
                      startValue={maxStartEditValue}
                      setMaxEditValue={setMaxEditValue}
                      setStartEditValue={setStartEditValue}
    />
    <SetRangeOfValue setValue={setValueHandler}/>
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


