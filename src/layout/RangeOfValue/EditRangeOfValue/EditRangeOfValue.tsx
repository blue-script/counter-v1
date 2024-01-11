import styled from 'styled-components';
import {EnteringValue} from '../EnteringValue/EnteringValue';

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
  return <EditRangeOfValueStyled>
    <EnteringValue title='maxValue' value={props.rangeValues.maxValue} isCorrectValues={isCorrectMaxScoreValues}/>
    <EnteringValue title='minValue' value={props.rangeValues.minValue} isCorrectValues={isCorrectStartScoreValues}/>
  </EditRangeOfValueStyled>
}

// Style------------------------------------------------
const EditRangeOfValueStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 520px;
  height: 220px;
  color: #72e4fc;
  border-radius: 14px;
  border: 5px solid #72e4fc;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
`