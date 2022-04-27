/****************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * Game.jsx
 * - Pagina de juego, en ella se engloban
 *   los componentes usados en el gameplay
 *****************************************/

import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header.jsx'
import Loading from '../components/Loading.jsx'
import GameMap from '../components/GameMap.jsx'

import '../styles/game.css'

const getTitle = (title) => {
  if (title === 1) return 'Facil'
  if (title === 2) return 'Normal'
  if (title === 3) return 'Dificil'
}

const Game = ({ level, map }) => {
  const [win, setWin] = React.useState(false)
  const gameState = win ? 'game-winned' : 'in-game'
  const headerTitle = win ? 'Has Ganado!!' : 'Juego'

  return (
    <div className = 'content'>
      <Header
        title={headerTitle}
        level={getTitle(level)}
      />
      <div className={'main-content ' + gameState}>
        {win
          ? <div className='finish'><a href=''>Jugar otra vez</a></div>
          : ''
        }
        {map.length
          ? <GameMap initMap={map} setWin={setWin}/>
          : <Loading/>
        }
      </div>
    </div>
  )
}

// Props validation
Game.propTypes = {
  level: PropTypes.number,
  map: PropTypes.object
}

export default Game
