import React from 'react'
import styled from 'styled-components'

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
		<ButtonStyled disabled={disabled} onClick={onClickHandler}>
			{title}
		</ButtonStyled>
	)
}

export default Button


// Style ---------------------------------------------------------
const ButtonStyled = styled.button`
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