import React, { useState } from 'react'

function HiddenandShowToggle() {
    const[status,setStatus]=useState(true)
  return (
    <>
    
    <h1>HiddenandShowToggle</h1>
    {
        status?<h1>Hello Gwl</h1>:null
    }
    <button className='btn btn-danger' onClick={()=>setStatus(false)}>Hide</button><br></br>
    <button className='btn btn-info'onClick={()=>setStatus(true)}>show</button><br></br>
    <button className='btn btn-success'onClick={()=>setStatus(!status)}>Toggle</button>
    </>
  )
}

export default HiddenandShowToggle