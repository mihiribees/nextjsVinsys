"use client"

import ErrorComponents from "./components/ErrorComponents"


const error = ({ error, reset }) => {
  return (
   <ErrorComponents error={error} reset={reset}/>
  )
}

export default error