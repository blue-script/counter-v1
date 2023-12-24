import styled, {css} from 'styled-components';
import {ChangeEvent} from 'react';

type EnteringValuePropsType = {
  title: string
  value: number
  setValue: (max: number | undefined, start: number | undefined) => void
  isCorrectValues: boolean
}
export const EnteringValue: React.FC<EnteringValuePropsType> = (props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.title === 'max value:'
      ? props.setValue(e.currentTarget.valueAsNumber, undefined)
      : props.setValue(undefined, e.currentTarget.valueAsNumber)

  }
  return <EnteringValueStyled $value={props.value} $iscorrectvalues={props.isCorrectValues.toString()}>
    <p>{props.title}</p>
    <input type='number' value={props.value} onChange={onChangeHandler}/>
  </EnteringValueStyled>
}


// Style------------------------------------------------
type EnteringValueStyledProps = {$iscorrectvalues: string, $value: number}
const EnteringValueStyled = styled.div<EnteringValueStyledProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;

  p {
    margin: 0;
    font-size: 36px;
    text-decoration: none;
  }

  input {
    border: 4px solid #72e4fc;
    border-radius: 5px;
    line-height: 38px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    max-width: 200px;
  }
  ${props=> props.$iscorrectvalues ==='false' && css<EnteringValueStyledProps>`
    input {
      border: 4px solid red;
      border-radius: 5px;
      line-height: 38px;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
      max-width: 200px;
      background-color: #dc9e9e;
    }
  `}
`