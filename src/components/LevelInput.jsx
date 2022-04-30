/* ***************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * LevelInput.jsx
 * - Componente que se encarga de la
 *   conexion con el servidor del juego
 *   y seleccion de nivel
 **************************************** */

import React from 'react'
import PropTypes from 'prop-types'

const handlePuzzle = (width, height, setLevel) => {
  fetch(`https://maze.juanelcaballo.club/?type=json&w=${width}&h=${height}`)
    .then(response => response.json())
    .then(result => {
      setLevel(result)
    })
    .catch(error => console.warn('Error de conexion, intente mas tarde\n', error))
}

const getSize = (value) => {
  if (value === 1) return [2, 2]
  if (value === 2) return [3, 2]
  if (value === 3) return [4, 4]
  return undefined
}

// Component
const LevelInput = ({
  title,
  setSelect,
  setMap,
  value,
  setLevel,
}) => (
  <div className="adminInput">
    <input
      onChange={() => {
        setSelect(true)
        const dimensions = getSize(value)
        handlePuzzle(dimensions[0], dimensions[1], setMap)
        setLevel(value)
      }}
      type="checkbox"
    />
    <h3>{title}</h3>
  </div>
)

// Props Validation
LevelInput.propTypes = {
  title: PropTypes.string.isRequired,
  setSelect: PropTypes.func.isRequired,
  setMap: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  setLevel: PropTypes.func.isRequired,
}

export default LevelInput
