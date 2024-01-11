import styled, {css} from 'styled-components';
import {ChangeEvent} from 'react';
import {useDispatch} from 'react-redux';
import {Dispatch} from 'redux';
import {editMaxValueAC, editMinValueAC} from '../../../state/range-values-reducer';

type EnteringValuePropsType = {
  title: 'maxValue' | 'minValue'
  value: number
  isCorrectValues: boolean
}
export const EnteringValue: React.FC<EnteringValuePropsType> = (props) => {
  const dispatch = useDispatch<Dispatch>()
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.title === 'maxValue'
      ? dispatch(editMaxValueAC(e.currentTarget.valueAsNumber))
      : dispatch(editMinValueAC(e.currentTarget.valueAsNumber))
  }
  return <EnteringValueStyled $value={props.value} $iscorrectvalues={props.isCorrectValues.toString()}>
    <p>{props.title}</p>
    <input type='number' value={props.value} onChange={onChangeHandler}/>
  </EnteringValueStyled>
}


// Style------------------------------------------------
type EnteringValueStyledProps = { $iscorrectvalues: string, $value: number }
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

  ${props => props.$iscorrectvalues === 'false' && css<EnteringValueStyledProps>`
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