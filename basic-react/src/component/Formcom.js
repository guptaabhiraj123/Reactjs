import React, { useState } from 'react'

function Formcom() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  function Getdata(e){
    e.preventDefault()
    console.log(name,email,password)
  }
  return (
    <>
      <center>
        <div>
          <form onSubmit={Getdata}>
            <br></br>
            <label htmlFor=''>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input><br></br>
            <label htmlFor=''>Email</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
            <label htmlFor=''>Pssword</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
            <button className='btn btn-info'>submit</button>
          </form>
          </div>
      </center>
    
    </>
  )
}

export default Formcom