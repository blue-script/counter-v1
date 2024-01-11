import React from 'react';
import styled from 'styled-components';
import {EditRangeOfValue} from './EditRangeOfValue/EditRangeOfValue';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {isSetAC, ValueStatesType} from '../../state/value-states-reducer';
import {RangeValuesType} from '../../state/range-values-reducer';
import {Dispatch} from 'redux';
import {changeValueAC} from '../../state/value-reducer';

export const RangeOfValue: React.FC = () => {
  const rangeValues = useSelector<AppRootStateType, RangeValuesType>(state => state.rangeValues)
  const valueStates = useSelector<AppRootStateType, ValueStatesType>(state => state.valueStates)
  const dispatch = useDispatch<Dispatch>()
  const setValueHandler = () => {
    dispatch(isSetAC(true))
    dispatch(changeValueAC(rangeValues.minValue))
    localStorage.setItem('maxValue', JSON.stringify(rangeValues.maxValue))
    localStorage.setItem('minValue', JSON.stringify(rangeValues.minValue))
  }

  return <EditRangeOfValueStyled>
    <EditRangeOfValue rangeValues={rangeValues}/>
    <ButtonStyled>
      <Button title='set' disabled={!valueStates.isCorrectValues} func={setValueHandler}/>
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