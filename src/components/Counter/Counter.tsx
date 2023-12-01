import React, { useState } from 'react'
import DisplayScore from '../DisplayScore/DisplayScore'
import EditScore from '../EditScore/EditScore'

const Counter = () => {
	const [score, setScore] = useState<number>(0)

	const incScoreHandler = () => {
		setScore(score + 1)
	}

	const resetScoreHandler = () => {
		setScore(0)
	}
	return (
		<>
			<DisplayScore score={score} />
			<EditScore
				score={score}
				incScoreHandler={incScoreHandler}
				resetScoreHandler={resetScoreHandler}
			/>
		</>
	)
}

export default Counter