import React,{useRef} from 'react'

function UseRef() {
    let inputRef =useRef(null)
    function controlInput(){
        inputRef.current.value ="abhiraj"
        inputRef.current.focus()
        inputRef.current.style.color ='red'
        inputRef.current.style.backgroundcolor = 'blue'
    }
  return (
    <>
    <h1>useRef</h1>
    <input type='text' ref={inputRef}></input>
    <button onClick={controlInput}>handle input </button>

    </>
  )
}

export default UseRef