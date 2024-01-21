import React, { useCallback, useState } from 'react'
import Childomponent from './Childomponent'

function UseCallback() {
    const [count ,setCount] =useState(0)
    console.log('Parent Re-Render')

    //Example to
    const [count1,setCount1] = useState(0)
     
    const IncrementCount =useCallback(()=>{
        setCount1((PrevCount)=>PrevCount+1)
        console.log('usecall back hook')
    },[])
  return (
    <>
    <h1>UseCallback</h1>
    <h2>count:{count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment count</button>
    <br></br>
    <h2>count1:{count1}</h2>
    <Childomponent increment ={IncrementCount}/>

    </>
  )
}

export default UseCallback