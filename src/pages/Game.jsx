import React from 'react'
import Header from '../components/Header.jsx'

import '../styles/game.css'

const getTitle = (title) => {
	if (title == 1) return 'Facil'
	if (title == 2) return 'Normal'
	if (title == 3) return 'Dificil'
}

const Game = ({level, map}) => {
    return (
        <div className = 'content'>
			<Header 
				title='Juego'
				level={getTitle(level)}
			/>
			<div className='main-content'>
				<h1>juego xd</h1>
			</div>
		</div>
    )
}

export default Game