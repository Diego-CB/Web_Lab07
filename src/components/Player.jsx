import React from 'react'
import pacmanSprite from '../Images/sprite.gif'

import '../styles/player.css'


// Funciones
const changeDirection = (key) => {
    if (['ArrowRight', 'd'].includes(key)) return 'faceRight'
    if (['ArrowUp'   , 'w'].includes(key)) return 'faceUp'
    if (['ArrowLeft' , 'a'].includes(key)) return 'faceLeft'
    if (['ArrowDown' , 's'].includes(key)) return 'faceDown'
    return 0
}

const getNewLocation = (location, direction) => {
    if (direction == 'faceRight') return [location[0], location[1] + 1]
    if (direction == 'faceLeft')  return [location[0], location[1] - 1]
    if (direction == 'faceUp')    return [location[0] - 1, location[1]]
    if (direction == 'faceDown')  return [location[0] + 1, location[1]]
}

const validateLocation = (map, location) => {
    if ([' ', 'g'].includes(map[location[0]][location[1]])) return true
    return false
}

const movePLayer = (actual, newLocation, map) => {
    const temp_arr = []
    temp_arr.push(...map)
    temp_arr[actual[0]][actual[1]] = ' '
    temp_arr[newLocation[0]][newLocation[1]] = 'p'
    return temp_arr
}

const getLocation = (gameMap, char) => {
    const row = gameMap.filter(row => row.includes(char))
    if (row.length == 0) return false

    const index_a = gameMap.indexOf(row[0])
    const index_b = row[0].indexOf(char)
    return [index_a, index_b]   
}

const handleMoves = (map, direction) => {
    const location = getLocation(map, 'p')
    const newLocation = getNewLocation(location, direction)

    if (!validateLocation(map, newLocation)) return [location, location]
    return [location, newLocation]
}

const checkWin = (map) => {
    const a = getLocation(map, 'g')
    if (getLocation(map, 'g') === false) return true
    return false
}

const winnedMap = (map) => {
    const temp_map = []
    temp_map.push(...map)
    temp_map[temp_map.length - 2][temp_map[0].length - 2]  = ' '  
    temp_map[1][1]  = 'p'  
    return temp_map
}

let handleKeyPress

// Componente
const Player = ({ map, setMap, winned }) => {

    const [virtualMap, setVMap] = React.useState(map)
    const [direction, setDirection] = React.useState('faceRight')
    const [moved, setMoved] = React.useState(false)
    const [win, setWin] = React.useState(false)

    
    handleKeyPress = (event) => {
        const newDir = changeDirection(event.key)
        if (newDir === 0) return
        setMoved(true)
        setDirection(newDir)
    }
    
    React.useEffect(() => {
        if (!moved) return
        const locations = handleMoves(virtualMap, direction)
        const newMap = movePLayer(locations[0], locations[1], map)
        setVMap(newMap)
        setMoved(false)

        if(!checkWin(virtualMap)) return
        setMap(winnedMap(map))
        setWin(true)
        winned(true)
    }, [moved])

    const position = win ? [
        virtualMap.length - 2,
        virtualMap[0].length - 2
    ]: getLocation(virtualMap, 'p')

    const offsetY = 64.8 * (position[0] - 1)
    const offsetX = 64.8 * (position[1] - 1)
    const isWinned = win ? ' winned' : ''

    return (
        <div
            style={{
                top:  `${offsetY}px`,
                left: `${offsetX}px`,
            }} 
            className='wall player'
        >
            <img className={direction + isWinned} src={pacmanSprite} alt="player" />
        </div>
    )
}

// Event Listener para movimientos del jugador
window.addEventListener("keydown", (event) => {
    handleKeyPress(event)
})

export default Player