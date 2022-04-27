/****************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * Goal.jsx
 * - Componente que simula la pastilla
 *   de pac-man y sirve como meta en el
 *   laberinto
 *****************************************/

import React from 'react'

const Goal = () => {
  return (
    <div className={'wall goal'}>
      <div className="pill"></div>
    </div>
  )
}

export default Goal
