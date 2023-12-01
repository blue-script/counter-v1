import React from 'react'
import styled from 'styled-components'
import './App.css'
import Button from './components/Button/Button'
import Counter from './components/Counter/Counter'

function App() {
	return (
		<Background>
			<Container>
				<Counter />
			</Container>
		</Background>
	)
}

export default App

const Background = styled.div`
	height: 100vh;
	background-color: #2a2c36;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Container = styled.div`
	border: 5px solid #72e4fc;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 30px;
	gap: 30px;
`