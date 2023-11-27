import React from 'react'
import DigilearnHeader from './components/DigilearnHeader'

const DigiLearnLayout = ({ children }) => {
    return (
        <>
            <DigilearnHeader />
            {children}
        </>

    )
}

export default DigiLearnLayout