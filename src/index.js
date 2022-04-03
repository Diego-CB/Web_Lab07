// React imports
import React from 'react'
import { createRoot } from 'react-dom/client'

// Component imports
import Header from './components/Header.jsx'

// App
const App = () =>  {
    return (
        <React.Fragment>
            <Header title="Hola Reac"/>
        </React.Fragment>
    )
}

// Render
const getRoot = () => document.getElementById('root')
createRoot(getRoot()).render(<App/>)
