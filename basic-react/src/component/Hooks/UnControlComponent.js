import React, { useRef } from 'react'

function UnControlComponent() {
    let inputRef =useRef(null)
    let inputRef2 =useRef(null)

    function submitform(e){
        e.preventDefault()
        console.log('first input value :',inputRef.current.value)
        console.log('second input value :',inputRef2.current.value)

        let input3 =document.getElementById("input3").value;
        console.log("input value",input3)
    }
  return (
    <>
    <h1>UnControlComponent</h1>
    <form onSubmit={submitform}>
        <input type='text' ref={inputRef}></input>
        <input type='text' ref={inputRef2}></input>
        <input type='text' id='input3'></input>
        <button>submit</button>
    </form >

    </>
  )
}

export default UnControlComponent