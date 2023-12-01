import React from 'react'
import styled, { css } from 'styled-components'

const DisplayScore: React.FC<{ score: number }> = ({ score }) => {
	return <DisplayScoreStyled score={score}>{score}</DisplayScoreStyled>
}

export default DisplayScore

type DisplayScoreStyledProps = { score: number }

const DisplayScoreStyled = styled.div<DisplayScoreStyledProps>`
	width: 520px;
	height: 220px;
	background-color: #72e4fc;
	border-radius: 14px;
	margin: 0 auto;
	text-align: center;
	line-height: 220px;
	font-size: 100px;
	font-weight: bold;
	${props =>
		props.score > 4 &&
		css<DisplayScoreStyledProps>`
			color: red;
		`}
`