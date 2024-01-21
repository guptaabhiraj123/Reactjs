import React from 'react'

function VariableUpdate() {
    let data ='raj'
    function updateData(){
        data ='ram'
        alert(data)
    }
    console.log('renderComponent')
  return (
    <>
       <h1>{data}</h1>
       <button onClick={updateData}>Click</button>
    </>
  )
}

export default VariableUpdate