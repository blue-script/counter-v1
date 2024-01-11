import {EnteringValue} from '../EnteringValue/EnteringValue';
import {S} from './EditRangeOfValue_Styles';

type EditRangeOfValuePropsType = {
  rangeValues: {
    maxValue: number
    minValue: number
  }
}
export const EditRangeOfValue: React.FC<EditRangeOfValuePropsType> = (props) => {

  const isCorrectMaxScoreValues = props.rangeValues.maxValue <= props.rangeValues.minValue
    ? false
    : props.rangeValues.maxValue >= 1
  const isCorrectStartScoreValues = props.rangeValues.maxValue <= props.rangeValues.minValue
    ? false
    : props.rangeValues.minValue >= 0
  return <S.EditRangeOfValue>
    <EnteringValue title='maxValue' value={props.rangeValues.maxValue} isCorrectValues={isCorrectMaxScoreValues}/>
    <EnteringValue title='minValue' value={props.rangeValues.minValue} isCorrectValues={isCorrectStartScoreValues}/>
  </S.EditRangeOfValue>
}