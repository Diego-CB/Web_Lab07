import React from 'react'
import Header from '../components/Header.jsx'
import Loading from '../components/Loading.jsx'
import GameMap from '../components/GameMap.jsx'

const getTitle = (title) => {
	if (title == 1) return 'Facil'
	if (title == 2) return 'Normal'
	if (title == 3) return 'Dificil'
}

const Game = ({ level, map }) => {

	const [win, setWin] = React.useState(false)
	const gameState = win ? 'winned' : 'in-game'

    return (
        <div className = 'content'>
			<Header 
				title='Juego'
				level={getTitle(level)}
			/>
			<div className={'main-content ' + gameState}>
				{map.length 
					? 
					<GameMap initMap={map} setWin={setWin}/> 
					: <Loading/>}
			</div> 
		</div>
    )
}

export default Game