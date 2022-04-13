import React from "react"

import Walls from "./Walls.jsx"
import '../styles/map.css'

const GameMap = ({ initMap, setWin }) => {

    const [gameMap, setMap] = React.useState(initMap)

    return (
        <div className='game-map'>
            {gameMap.map((row, index) => 
                <div className="game-row" key={index}>
                    {row.map((char, index) => 
                        <Walls 
                            setWin={setWin}
                            type={char} 
                            key={index}
                            setMap={setMap}
                            map={gameMap}
                        /> 
                    )}
                </div>
            )}
        </div>
    )
}

export default GameMap