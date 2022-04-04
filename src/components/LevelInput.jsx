import React from "react"

const handlePuzzle = (size, setLevel) => {    
    fetch(`https://maze.juanelcaballo.club/?type=json&w=${size}&h=${size}`)
    .then(response => response.json())
    .then(result => {
        setLevel(result)
        console.log('mapa', result)
        console.log('tipo', typeof(result))
    })
}

const getSize = (value) => {
    if (value == 1) return 2
    if (value == 2) return 4 
    if (value == 2) return 7 
}

const LevelInput = ({title, setSelect, setMap, value, setLevel}) => {
    return (
        <div className = 'adminInput'>
            <input 
                onChange ={() => {
                    setSelect(true)
                    handlePuzzle(getSize(value), setMap)
                    setLevel(value)
                }}
                type="checkbox"
            />
            <label>{title}</label>
        </div>	
    )
}

export default LevelInput