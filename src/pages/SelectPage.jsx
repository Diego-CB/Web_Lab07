import React from 'react'
import Header from '../components/Header.jsx'
import LevelInput from '../components/LevelInput.jsx'

import '../styles/select.css'

const SelectPage = ({setSelect, setLevel, setMap}) => {

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

export default SelectPage