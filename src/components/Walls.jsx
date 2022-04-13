import React from "react"
import Player from "./Player.jsx"
import Goal from "./Goal.jsx"

const wallConverter = (type) => {
    if (type === '+') return 'corner'
    if (type === '|') return 'vertical'
    if (type === '-') return 'horizontal'
    if (type === 'p') return 'player'
    if (type === 'g') return 'goal'
    if (type === ' ') return 'empty'
}

const Walls = ({ type, setMap, map, setWin }) => {

    const stringType = wallConverter(type)

    if (stringType == 'goal') return <Goal/>
    if (stringType == 'player') return (
        <Player 
            setWin={setWin}
            setMap={setMap}
            map={map}
        />
    )

    return <div className={'wall ' + stringType}></div> 
}

export default Walls