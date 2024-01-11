import styled, {css} from 'styled-components';


const Counter = styled.div`
  border: 5px solid #72e4fc;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 30px;
`
const EditScore = styled.div`
  width: 520px;
  height: 160px;
  border: 5px solid #72e4fc;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`
type DisplayScoreProps = {
  $value: number
  $maxvalue: number
  $iscorrectvalues: string
  $issetvalue: string
}
const DisplayScore = styled.div<DisplayScoreProps>`
  width: 520px;
  height: 220px;
  color: #72e4fc;
  border-radius: 14px;
  border: 5px solid #72e4fc;
  margin: 0 auto;
  text-align: center;
  line-height: 220px;
  font-size: 100px;
  font-weight: bold;
  ${props =>
          props.$value >= props.$maxvalue &&
          css<DisplayScoreProps>`
            color: red;
          `}
  ${props =>
          props.$issetvalue === 'false' &&
          css<DisplayScoreProps>`
            font-size: 30px;
          `}
  ${props =>
          props.$iscorrectvalues === 'false' &&
          css<DisplayScoreProps>`
            color: red;
          `}
`

export const S = {
  Counter,
  EditScore,
  DisplayScore,
}