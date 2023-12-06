import React, { useState } from 'react'
import DisplayScore from './DisplayScore/DisplayScore'
import EditScore from './EditScore/EditScore'
import styled from 'styled-components';

type CounterType = {
	maxScore: number
	startScore: number
}

export const Counter: React.FC<CounterType> = ({maxScore, startScore}) => {
	const [score, setScore] = useState<number>(startScore)

	const incScoreHandler = () => {
		setScore(score + 1)
	}

	const resetScoreHandler = () => {
		setScore(0)
	}
	return (
		<CounterStyled>
			<DisplayScore score={score} maxScore={maxScore}/>
			<EditScore
				score={score}
				maxScore={maxScore}
				incScoreHandler={incScoreHandler}
				resetScoreHandler={resetScoreHandler}
			/>
		</CounterStyled>
	)
}

const CounterStyled = styled.div`
	border: 5px solid #72e4fc;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	gap: 30px;
`