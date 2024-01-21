import React, { useContext } from 'react'
import { myContext } from './UseContext'

function Child2() {
 const result =useContext(myContext)
  return (
    <>
      <h1>child2{result}</h1>

    </>
  )
}

export default Child2