import styled from 'styled-components';

const Button = styled.button`
  font-size: 60px;
  font-weight: bold;
  background-color: #72e4fc;
  border-radius: 10px;
  padding: 0 40px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    color: black;
    opacity: 0.5;
  }
`

export const S = {
  Button
}