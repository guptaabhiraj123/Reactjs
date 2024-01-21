import React from 'react'

function Click() {
    let name = 'Abhi'
    function hello(a){
        name=a
        alert(name)
    }
  return (
    <>
    <h1>hello{name}</h1>
    <button onClick={hello}>Update</button>
    <button onClick={()=>hello('raj')}>click me</button>
    </>
  )
}

export default Click