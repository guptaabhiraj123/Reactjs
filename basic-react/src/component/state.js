// import React, { useState } from 'react'

// function State() {
//     const[data,setData]= useState ('raj')
//     function updateData(){
//       setData('ram')
//     }
//     console.log('render component')
//   return (
//     <>
//     <h1>{data}</h1>
//     <button onClick={updateData}>click</button>
//     </>
//   )
// }

// export default State

import React,{useState} from 'react'

function State() {
  const [count,  Setcount] = useState(0)
  function abc(){
   
    Setcount(prevCount=>prevCount+1) //0+1
    Setcount(prevCount=>prevCount+1)// 1+1
  }
  function d(){
    Setcount(count+4)
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={abc}>+</button>
    <button onClick={d}>-</button>
    </>
  )
}

export default State