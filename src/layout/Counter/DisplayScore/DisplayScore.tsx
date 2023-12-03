import React from 'react'
import styled, { css } from 'styled-components'

type DisplayScoreType = {
	score: number
	maxScore: number
}
const DisplayScore: React.FC<DisplayScoreType> = ({ score, maxScore }) => {
	return <DisplayScoreStyled score={score} maxScore={maxScore}>{score}</DisplayScoreStyled>
}
export default DisplayScore

type DisplayScoreStyledProps = { score: number, maxScore:number }

const DisplayScoreStyled = styled.div<DisplayScoreStyledProps>`
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
		props.score >= props.maxScore &&
		css<DisplayScoreStyledProps>`
			color: red;
		`}
`