/* ***************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * SelectPage.jsx
 * - Pagina de seleccion de nivel
 **************************************** */

import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header.jsx'
import LevelInput from '../components/LevelInput.jsx'
import '../styles/select.css'

const getTextualLevel = (index) => {
  if (index === 1) return 'Facil'
  if (index === 2) return 'Normal'
  if (index === 3) return 'Dificil'
  return undefined
}

// Component
const SelectPage = ({ setSelect, setLevel, setMap }) => (
  <div className="content">
    <Header title="Seleccion de nivel" />
    <div className="main-content">
      <form>
        {[...Array(3).keys()].map((n) => (
          <LevelInput
            setMap={setMap}
            setSelect={setSelect}
            setLevel={setLevel}
            value={n + 1}
            title={getTextualLevel(n + 1)}
            key={n}
          />
        ))}
      </form>
    </div>
  </div>
)

// Props Validation
SelectPage.propTypes = {
  setSelect: PropTypes.func.isRequired,
  setLevel: PropTypes.func.isRequired,
  setMap: PropTypes.func.isRequired,
}

export default SelectPage
