/********************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * index.js
 * - Se encarga de renderizar los componentes,
 *   ademas de empezar con el proyecto
 *********************************************/

// React imports
import React from 'react'
import { createRoot } from 'react-dom/client'

// Component imports
import SelectPage from './pages/SelectPage.jsx'
import Game from './pages/Game.jsx'
import './styles/master.css'
import icon from './Images/logo.png'

const changeIcon = () => {
  const linkIcon = document.getElementById('favicon')
  linkIcon.href = icon
}

// App
const App = () => {
  changeIcon()
  const [isSelecting, setSelect] = React.useState(false)
  const [level, setLevel] = React.useState(0)
  const [map, setMap] = React.useState({})

  if (isSelecting) {
    return (
      <Game
        level={level}
        map={map}
        isSelecting={isSelecting}
      />
    )
  }

  return (
    <SelectPage
      setMap={setMap}
      setSelect={setSelect}
      setLevel={setLevel}
    />
  )
}

// Render
const getRoot = () => document.getElementById('root')
createRoot(getRoot()).render(<App/>)
