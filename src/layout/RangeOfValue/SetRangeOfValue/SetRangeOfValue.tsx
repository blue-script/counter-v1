import styled from 'styled-components';
import Button from '../../../components/Button/Button';

type SetRangeOfValuePropsType = {
  setValue: (maxValue: number, startValue: number) => void
}
export const SetRangeOfValue: React.FC<SetRangeOfValuePropsType> = ({setValue}) => {
  const onClickHandler = () => setValue
  return <SetRangeOfValueStyled>
    <Button title='set' disabled={false} func={onClickHandler}/>
  </SetRangeOfValueStyled>
}

const SetRangeOfValueStyled = styled.div`
  width: 520px;
  height: 160px;
  border: 5px solid #72e4fc;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`