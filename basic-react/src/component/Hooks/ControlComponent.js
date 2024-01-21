import React, { useState } from 'react'

function ControlComponent() {
    const[InputValue,SetInputValue] =useState()
    const handleChange =(event)=>{
        SetInputValue(event.target.value)
        console.log(InputValue)
    }
  return (
    <>
    <h1>Control Component</h1>
    <input type='text'  value={InputValue} onChange={handleChange}></input>
    <h2>current value :{InputValue}</h2>
    </>
  )
}

export default ControlComponent