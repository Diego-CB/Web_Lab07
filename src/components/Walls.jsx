import React from "react"

const wallConverter = (type) => {
    if (type === '+') return 'corner'
    if (type === '|') return 'vertical'
    if (type === '-') return 'horizontal'
    if (type === 'p') return 'player'
    if (type === 'g') return 'goal'
    if (type === ' ') return 'empty'
}

const Walls = ({ type }) => {

    const stringType = wallConverter(type)

    if (stringType === 'corner') {
        return (
            // Validar que tipo de esquina es
            <div className={'wall ' + stringType}>{type}</div>
        )
    }

    return (
        <div className={'wall ' + stringType}>{type}</div> 
    )
}

export default Walls