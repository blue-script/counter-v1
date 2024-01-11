import {Dispatch} from 'redux'
import styled, {css} from 'styled-components';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../state/store';
import {RangeValuesType} from '../../state/range-values-reducer';
import {changeValueAC} from '../../state/value-reducer';
import {ValueStatesType} from '../../state/value-states-reducer';

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
    <CounterStyled>
      <DisplayScoreStyled $value={value} $maxvalue={rangeValues.maxValue} $iscorrectvalues={valueStates.isCorrectValues.toString()} $issetvalue={valueStates.isSetValues.toString()}>
        {
          valueStates.isSetValues
          ? value
          : valueStates.isCorrectValues
            ? 'enter values and press "set"'
            : 'Incorrect value!'
        }
      </DisplayScoreStyled>
      <EditScoreStyled>
        <Button disabled={disabledInc || !valueStates.isSetValues} title="inc" func={increaseValueHandler}/>
        <Button
          disabled={disabledReset || !valueStates.isSetValues}
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

// ????????????????????????????????????????
type DisplayScoreStyledProps = {
  $value:number
  $maxvalue: number
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
          props.$value >= props.$maxvalue &&
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