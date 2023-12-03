import styled from 'styled-components';
import {ChangeEvent, useState} from 'react';

type EnteringValuePropsType = {
  title: string
}
export const EnteringValue: React.FC<EnteringValuePropsType> = ({title}) => {
  const [value, setValue] = useState(0)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.valueAsNumber)
  }
  return <EnteringValueStyled>
    <p>{title}</p>
    <input type="number" value={value} onChange={onChangeHandler}/>
  </EnteringValueStyled>
}

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