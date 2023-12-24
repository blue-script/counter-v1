import styled from 'styled-components';
import {EnteringValue} from '../EnteringValue/EnteringValue';

type EditRangeOfValuePropsType = {
  maxMinValue: {
    maxScore: number
    startScore: number
  }
  isSetValueHandler: (value: boolean) => void
  setMaxMinValue: (maxScore: number, startScore: number) => void
}
export const EditRangeOfValue: React.FC<EditRangeOfValuePropsType> = (props) => {
  const setValue = (max: number = props.maxMinValue.maxScore, start: number = props.maxMinValue.startScore) => {
    props.isSetValueHandler(false)
    props.setMaxMinValue(max, start)
  }
  const isCorrectMaxScoreValues = props.maxMinValue.maxScore <= props.maxMinValue.startScore
    ? false
    : props.maxMinValue.maxScore >= 1
  const isCorrectStartScoreValues = props.maxMinValue.maxScore <= props.maxMinValue.startScore
    ? false
    : props.maxMinValue.startScore >= 0
  return <EditRangeOfValueStyled>
    <EnteringValue title='max value:' value={props.maxMinValue.maxScore} setValue={setValue}
                   isCorrectValues={isCorrectMaxScoreValues}/>
    <EnteringValue title='start value:' value={props.maxMinValue.startScore} setValue={setValue}
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