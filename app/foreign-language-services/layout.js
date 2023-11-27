import React from 'react'
import FLSHeader from './components/FLSHeader'

const layout = ({children}) => {
  return (
    <>
    <FLSHeader/>
    {children}
    </>
  )
}

export default layout