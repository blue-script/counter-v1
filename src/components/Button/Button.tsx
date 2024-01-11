import React from 'react'
import {S} from './Button_Styles'

type ButtonPropsType = {
  title: string
  func: () => void
  disabled?: boolean
}
const Button: React.FC<ButtonPropsType> = ({
                                             title,
                                             func,
                                             disabled = false,
                                           }) => {
  const onClickHandler = () => func()

  return (
    <S.Button disabled={disabled} onClick={onClickHandler}>
      {title}
    </S.Button>
  )
}

export default Button

