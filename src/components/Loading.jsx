import React from "react"

import pacmanGif from '../Images/loading.gif'
import '../styles/loading.css'

const Loading = () => {
    return (
        <div className='loading' >
            <h1>Cargnado</h1>
            <img src={pacmanGif} alt="Loading GiF"/>
        </div>
    )
}

export default Loading