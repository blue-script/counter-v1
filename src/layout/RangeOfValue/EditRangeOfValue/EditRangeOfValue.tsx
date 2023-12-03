import styled from 'styled-components';
import {EnteringValue} from '../../../components/EnteringValue/EnteringValue';

export const EditRangeOfValue = () => {
  return <EditRangeOfValueStyled>
    <EnteringValue title='max value:'/>
    <EnteringValue title='start value:'/>
  </EditRangeOfValueStyled>
}

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