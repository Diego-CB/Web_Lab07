// React imports
import React from 'react'
import { createRoot } from 'react-dom/client'

// Component imports
import SelectPage from './pages/SelectPage.jsx'
import Game from './pages/Game.jsx'
import './styles/master.css'

// App
const App = () =>  {

    const [isSelecting, setSelect] = React.useState(false)
    const [level, setLevel] = React.useState(0)
    const [map, setMap] = React.useState({})
    

    return (
        <React.Fragment>
            {
                isSelecting ?  
                    <Game level={level} map={map}/>:
                    <SelectPage setMap={setMap} setSelect={setSelect} setLevel={setLevel}/>
            }
        </React.Fragment>
    )
}

// Render
const getRoot = () => document.getElementById('root')
createRoot(getRoot()).render(<App/>)
