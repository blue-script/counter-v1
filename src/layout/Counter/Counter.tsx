import {Dispatch} from 'redux'
import styled, {css} from 'styled-components';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {RangeValuesType} from '../../state/range-values-reducer';
import {changeValueAC} from '../../state/value-reducer';
import {ValueStatesType} from '../../state/value-states-reducer';
import { S } from './Counter_Styles';

export const Counter: React.FC = () => {
  const value = useSelector<AppRootStateType, number>(state=>state.value)
  const rangeValues = useSelector<AppRootStateType, RangeValuesType>(state=>state.rangeValues)
  const valueStates = useSelector<AppRootStateType, ValueStatesType>(state=> state.valueStates)
  const dispatch = useDispatch<Dispatch>()
  const increaseValueHandler = () => {
    dispatch(changeValueAC(value + 1))
  }
  const resetScoreHandler = () => dispatch(changeValueAC(rangeValues.minValue))
  const disabledReset = Boolean(value <= rangeValues.minValue)
  const disabledInc = Boolean(value >= rangeValues.maxValue)

  return (
    <S.Counter>
      <S.DisplayScore $value={value} $maxvalue={rangeValues.maxValue} $iscorrectvalues={valueStates.isCorrectValues.toString()} $issetvalue={valueStates.isSetValues.toString()}>
        {
          valueStates.isSetValues
          ? value
          : valueStates.isCorrectValues
            ? 'enter values and press "set"'
            : 'Incorrect value!'
        }
      </S.DisplayScore>
      <S.EditScore>
        <Button disabled={disabledInc || !valueStates.isSetValues} title="inc" func={increaseValueHandler}/>
        <Button
          disabled={disabledReset || !valueStates.isSetValues}
          title="reset"
          func={resetScoreHandler}
        />
      </S.EditScore>
    </S.Counter>
  )
}
