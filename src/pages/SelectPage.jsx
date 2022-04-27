/****************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * SelectPage.jsx
 * - Pagina de seleccion de nivel
 *****************************************/

import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header.jsx'
import LevelInput from '../components/LevelInput.jsx'

import '../styles/select.css'

const SelectPage = ({ setSelect, setLevel, setMap }) => {
  return (
    <div className = 'content'>
      <Header title='Seleccion de nivel'/>
      <div className='main-content'>
        <form >
          <LevelInput setMap={setMap} setSelect={setSelect} setLevel={setLevel} value={1} title='Facil'/>
          <LevelInput setMap={setMap} setSelect={setSelect} setLevel={setLevel} value={2} title='Normal'/>
          <LevelInput setMap={setMap} setSelect={setSelect} setLevel={setLevel} value={3} title='Dificil'/>
        </form>
      </div>
    </div>
  )
}

// Props Validation
SelectPage.propTypes = {
  setSelect: PropTypes.func,
  setLevel: PropTypes.func,
  setMap: PropTypes.func
}

export default SelectPage
