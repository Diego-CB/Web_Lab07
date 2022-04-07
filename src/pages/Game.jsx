import React from 'react'
import Header from '../components/Header.jsx'
import Loading from '../components/Loading.jsx'
import GameMap from '../components/GameMap.jsx'

const getTitle = (title) => {
	if (title == 1) return 'Facil'
	if (title == 2) return 'Normal'
	if (title == 3) return 'Dificil'
}

const Game = ({ level, map, isSelecting }) => {

    return (
        <div className = 'content'>
			<Header 
				title='Juego'
				level={getTitle(level)}
			/>
			<div className='main-content'>
				{map.length ? <GameMap initMap={map}/> : <Loading/>}
			</div> 
		</div>
    )
}

export default Game