/* ***************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * Loading.jsx
 * - Gif animado que se muestra mientras
 *   carga el API del laberinto
 **************************************** */

import React from 'react'

import pacmanGif from '../Images/loading.gif'
import '../styles/loading.css'

// Component
const Loading = () => (
  <div className="loading">
    <h1>Cargnado</h1>
    <img src={pacmanGif} alt="Loading GiF" />
  </div>
)

export default Loading
