/****************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 * 
 * Walls.jsx
 * - Se encarga de traducir la informacion
 *   recibida del API del laberinto a 
 *   componentes de React con los que el
 *   usuario puede interactuar
 *****************************************/

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
            winned={setWin}
            setMap={setMap}
            map={map}
        />
    )

    return <div className={'wall ' + stringType}></div> 
}

export default Walls