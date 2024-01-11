import {ChangeEvent} from 'react';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {editMaxValueAC, editMinValueAC} from '../../../state/range-values-reducer';
import {S} from './EnteringValue_Styles';

type EnteringValuePropsType = {
  title: 'maxValue' | 'minValue'
  value: number
  isCorrectValues: boolean
}
export const EnteringValue: React.FC<EnteringValuePropsType> = (props) => {
  const dispatch = useDispatch<Dispatch>()
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (props.title === 'maxValue') {
      dispatch(editMaxValueAC(e.currentTarget.valueAsNumber))
    } else {
      dispatch(editMinValueAC(e.currentTarget.valueAsNumber))
    }
  }
  return <S.EnteringValue $value={props.value} $iscorrectvalues={props.isCorrectValues.toString()}>
    <p>{props.title}</p>
    <input type='number' value={props.value} onChange={onChangeHandler}/>
  </S.EnteringValue>
}