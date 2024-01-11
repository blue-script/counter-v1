import React from 'react';
import {EditRangeOfValue} from './EditRangeOfValue/EditRangeOfValue';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {isSetAC, ValueStatesType} from '../../state/value-states-reducer';
import {RangeValuesType} from '../../state/range-values-reducer';
import {Dispatch} from 'redux';
import {changeValueAC} from '../../state/value-reducer';
import {S} from './RangeOfValue_Styles';

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

  return <S.EditRangeOfValue>
    <EditRangeOfValue rangeValues={rangeValues}/>
    <S.Button>
      <Button title='set' disabled={!valueStates.isCorrectValues} func={setValueHandler}/>
    </S.Button>
  </S.EditRangeOfValue>
}