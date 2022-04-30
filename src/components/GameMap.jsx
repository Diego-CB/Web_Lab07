/* ***************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 * GameMap.jsx
 *
 * - Componente Que engloba la parte
 *   del laberinto en pantalla
 **************************************** */

import React from 'react'
import PropTypes from 'prop-types'

import Walls from './Walls.jsx'
import '../styles/map.css'

// Component
const GameMap = ({ initMap, setWin }) => {
  const [gameMap, setMap] = React.useState(initMap)
  const columnKeys = [...Array(gameMap.length).keys()]
  const rowKeys = [...gameMap[0].keys()]

  return (
    <div className="game-map">
      {gameMap.map((row, i) => (
        <div className="game-row" key={columnKeys[i]}>
          {row.map((char, j) => (
            <Walls
              setWin={setWin}
              type={char}
              key={columnKeys[i] + rowKeys[j]}
              setMap={setMap}
              map={gameMap}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

// Props validation
GameMap.propTypes = {
  initMap: PropTypes.arrayOf(Array).isRequired,
  setWin: PropTypes.func.isRequired,
}

export default GameMap
