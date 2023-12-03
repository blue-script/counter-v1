import styled from 'styled-components';
import Button from '../../../components/Button/Button';

export const SetRangeOfValue = () => {
  return <SetRangeOfValueStyled>
    <Button title='set' disabled={false} func={()=>{}}/>
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