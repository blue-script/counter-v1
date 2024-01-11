import styled, {css} from 'styled-components';

type EnteringValueProps = { $iscorrectvalues: string, $value: number }
const EnteringValue = styled.div<EnteringValueProps>`
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

  ${props => props.$iscorrectvalues === 'false' && css<EnteringValueProps>`
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

export const S = {
  EnteringValue
}