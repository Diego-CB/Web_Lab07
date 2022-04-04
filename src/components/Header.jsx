import React from 'react'
import '../styles/header.css'
import logo from '../Images/logo.png'

const Header = ({title, level}) => {

    const actualLevel = (level == null) ? ' ': level
    
    return (
        <header>
            <img src={logo} alt="logo pac-man"/>
            <h1>{title}</h1>
            <h3>{actualLevel}</h3>
        </header>
    )
}

export default Header