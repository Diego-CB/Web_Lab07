import React from "react"

import Walls from "./Walls.jsx"
import '../styles/map.css'

const GameMap = ({initMap}) => {

    const [gameMap, setMap] = React.useState(initMap)

    return (
        <div className="game-map">
            {gameMap.map((row, index) => 
                <div className="game-row" key={index}>
                    {row.map((char, index) => 
                        <Walls type={char} key={index}> </Walls>
                    )}
                </div>
            )}
        </div>
    )
}

export default GameMap