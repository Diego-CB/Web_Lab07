/****************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * Header.jsx
 * - Header reusable del sitio Web
 *****************************************/

import React from 'react'
import PropTypes from 'prop-types'

import '../styles/header.css'
import logo from '../Images/logo.png'

const Header = ({ title, level }) => {
  const actualLevel = (level == null) ? ' ' : level

  return (
    <header>
      <img src={logo} alt="logo pac-man"/>
      <h1>{title}</h1>
      <h3>{actualLevel}</h3>
    </header>
  )
}

// Props Validation
Header.propTypes = {
  title: PropTypes.string,
  level: PropTypes.string
}

export default Header
