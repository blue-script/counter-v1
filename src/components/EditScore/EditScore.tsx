import styled from 'styled-components'
import Button from '../Button/Button'

type EditScorePropsType = {
	score: number
	incScoreHandler: () => void
	resetScoreHandler: () => void
}

const EditScore: React.FC<EditScorePropsType> = ({
	score,
	incScoreHandler,
	resetScoreHandler,
}) => {
	const disabledForReset = Boolean(score < 1)
	const disabledForInc = Boolean(score > 4)

	return (
		<EditScoreStyled>
			<Button disabled={disabledForInc} title='inc' func={incScoreHandler} />
			<Button
				disabled={disabledForReset}
				title='reset'
				func={resetScoreHandler}
			/>
		</EditScoreStyled>
	)
}

export default EditScore

const EditScoreStyled = styled.div`
	width: 520px;
	height: 160px;
	border: 5px solid #72e4fc;
	border-radius: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 50px;
`