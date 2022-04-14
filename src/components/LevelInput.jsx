/****************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 * 
 * LevelInput.jsx
 * - Componente que se encarga de la 
 *   conexion con el servidor del juego
 *   y seleccion de nivel
 *****************************************/

import React from "react"

const handlePuzzle = (width, height, setLevel) => {    
    fetch(`https://maze.juanelcaballo.club/?type=json&w=${width}&h=${height}`)
    .then(response => response.json())
    .then(result => {
        setLevel(result)
    })
    .catch(error => {
        console.error(error)
        alert('Error de conexion, intente mas tarde')
    })
}

const getSize = (value) => {
    if (value == 1) return [2, 2]
    if (value == 2) return [3, 2] 
    if (value == 3) return [4, 4] 
}

const LevelInput = ({title, setSelect, setMap, value, setLevel}) => {
    return (
        <div className = 'adminInput'>
            <input 
                onChange ={() => {
                    setSelect(true)
                    const dimensions = getSize(value)
                    handlePuzzle(dimensions[0], dimensions[1], setMap)
                    setLevel(value)
                }}
                type="checkbox"
            />
            <label>{title}</label>
        </div>	
    )
}

export default LevelInput