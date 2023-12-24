import styled from 'styled-components';
import {EnteringValue} from '../EnteringValue/EnteringValue';

type EditRangeOfValuePropsType = {
  maxMinValue: {
    maxScore: number
    startScore: number
  }
  setValue: (value: number) => void
  setMaxMinValue: (maxScore: number, startScore: number) => void
}
export const EditRangeOfValue: React.FC<EditRangeOfValuePropsType> = (props) => {
  const setValue = (max: number = props.maxMinValue.maxScore, start: number = props.maxMinValue.startScore) => {
    props.setMaxMinValue(max, start)
  }
  return <EditRangeOfValueStyled>
    <EnteringValue title="max value:" value={props.maxValue} func={props.setMaxMinValue}/>
    <EnteringValue title="start value:" value={props.startValue} func={props.setMaxMinValue}/>
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