import styled from 'styled-components';
import {EnteringValue} from '../EnteringValue/EnteringValue';

type EditRangeOfValuePropsType = {
  rangeOfValues: {
    maxScore: number
    startScore: number
  }
  isSetValueHandler: (value: boolean) => void
  setRangeOfValues: (maxScore: number, startScore: number) => void
}
export const EditRangeOfValue: React.FC<EditRangeOfValuePropsType> = (props) => {
  const setValue = (max: number = props.rangeOfValues.maxScore, start: number = props.rangeOfValues.startScore) => {
    props.isSetValueHandler(false)
    props.setRangeOfValues(max, start)
  }
  const isCorrectMaxScoreValues = props.rangeOfValues.maxScore <= props.rangeOfValues.startScore
    ? false
    : props.rangeOfValues.maxScore >= 1
  const isCorrectStartScoreValues = props.rangeOfValues.maxScore <= props.rangeOfValues.startScore
    ? false
    : props.rangeOfValues.startScore >= 0
  return <EditRangeOfValueStyled>
    <EnteringValue title='max value:' value={props.rangeOfValues.maxScore} setValue={setValue}
                   isCorrectValues={isCorrectMaxScoreValues}/>
    <EnteringValue title='start value:' value={props.rangeOfValues.startScore} setValue={setValue}
                   isCorrectValues={isCorrectStartScoreValues}/>
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