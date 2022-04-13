import React from 'react'
import pacmanSprite from '../Images/sprite.gif'

import '../styles/player.css'

const keyListener = (setDirection) => {
    window.addEventListener("keydown", (event) => {
        changeDirection(event.key, setDirection)
    })
}

const changeDirection = (key, setDirection) => {
    if (key === 'ArrowRight') return setDirection(0)
    if (key === 'ArrowUp') return setDirection(1)
    if (key === 'ArrowLeft') return setDirection(2)
    if (key === 'ArrowDown') return setDirection(3)
}

const Player = ({ setMap, actual }) => {

    const [direction, setDirection] = React.useState(0)
    keyListener(setDirection)

    return (
        <div className={'wall player'}>
            <img src={pacmanSprite} alt="player" />
        </div>
    )
}

export default Player