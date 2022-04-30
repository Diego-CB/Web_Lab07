/* ***************************************
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologias Web
 * Autor: Diego Cordova - 20212
 *
 * Header.jsx
 * - Header reusable del sitio Web
 **************************************** */

import React from 'react'
import PropTypes from 'prop-types'

import '../styles/header.css'
import logo from '../Images/logo.png'

// Component
const Header = ({ title, level }) => (
  <header>
    <img src={logo} alt="logo pac-man" />
    <h1>{title}</h1>
    <h3>{level}</h3>
  </header>
)

// Props Validation
Header.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.string,
}

Header.defaultProps = {
  level: ' ',
}

export default Header
