import styled from 'styled-components';
import {ChangeEvent} from 'react';

type EnteringValuePropsType = {
  title: string
  value: number
  func: (value: number) => void
}
export const EnteringValue: React.FC<EnteringValuePropsType> = (props) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.func(e.currentTarget.valueAsNumber)
  }
  return <EnteringValueStyled>
    <p>{props.title}</p>
    <input type='number' value={props.value} onChange={onChangeHandler}/>
  </EnteringValueStyled>
}


// Style------------------------------------------------
const EnteringValueStyled = styled.div`
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
`