import React from 'react'

function Childomponent({increment}) {
    console.log('child rendered')
  return (
    <>
    <h1>Childomponent</h1>
    <button onClick={increment}>increment</button>
    
    </>
  )
}

export default Childomponent