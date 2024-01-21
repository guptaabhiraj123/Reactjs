import React, { useState } from 'react'
import Home from './component/Home'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
import { Form, Route, Routes } from 'react-router-dom'
import About from './component/About'
import Ourteam from './component/Ourteam'
import Brands from './component/Brands'
import VariableUpdate from './component/VariableUpdate'
import State from './component/state';
import Props from './component/Props'
import HiddenandShowToggle from './component/HiddenandShowToggle'
import Formcom from './component/Formcom'
import B from './component/B'
import PageNotFound from './component/PageNotFound'
import Click from './component/Click'
import User from './component/User'
import CState from './component/CState'
import Render from './component/Lifecyclemethod/Render'
import ComponentDidMount from './component/Lifecyclemethod/ComponentDidMount'
import UseEffectAPI from './component/Hooks/UseEffectAPI'
import NextedList from './component/Hooks/NextedList'

import StudentList from './component/Hooks/StudentList'
import Bootstrap from './component/Bootstrap'
import Reuse from './component/Hooks/Reuse'
import SendDataChild from './component/Hooks/SendDataChild'
import UseMemo from './component/Hooks/UseMemo'
import UseRef from './component/Hooks/UseRef'
import ForwardRef from './component/Hooks/ForwardRef'
import Display from './component/curd/Display'
import USER from './component/curd/USER'
import ControlComponent from './component/Hooks/ControlComponent'
import UnControlComponent from './component/Hooks/UnControlComponent'
import UseCallback from './component/Hooks/UseCallback'
import UseReducer from './component/Hooks/UseReducer'
import A from './component/Hooks/context/A'
import UseContext from './component/Hooks/context/UseContext'




function App() {
  // const [title, setTitle] = useState('ram')
  let name ='sonam'

  // const user = [
  //   {
  //     name: "anil", email: "ram@gmail.com", phone: 34455
  //   },
  //   {
  //     name: "anil", email: "ram@gmail.com", phone: 34455
  //   },
  //   {
  //     name: "anil", email: "ram@gmail.com", phone: 34455
  //   }
  // ]

  // function parent(data){
  //   alert(data.name)
  // }
  // let inputRef = UseRef()
  // function updateInput(){
  //   inputRef.current.value ='1000'
  //   inputRef.current.style.color ='red'
  // }
  return (
    <>

      {/* <Header /> */}
      
  
      {/* <User/> */}
      {/* <CState/> */}
      {/* <Render/> */}
      {/* <ComponentDidMount/> */}
      {/* <UseEffectAPI/> */}
      {/* <StudentList/> */}
      {/* <NextedList/> */}
      {/* <Bootstrap/> */}
      {/* <Reuse /> */}
      {/* {
        user.map((item, i) =>
        <Reuse data={item}/>
          //<h1>{item.name}</h1>

        )
      } */}
  {/* <A/> */}
  {/* <UseContext/> */}

      {/* <USER/> */}
      {/* <Display/> */}
      {/* <ControlComponent/> */}
      {/* <UnControlComponent/> */}
      {/* <UseCallback/> */}
      {/* <UseReducer/> */}


      {/* <SendDataChild data={name}/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      {/* <ForwardRef ref ={inputRef}/>
      <button onClick={updateInput}>update input box </button> */}

      <Routes>
      <Route path='/s' element={<State />} />
      {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/ourteam' element={<Ourteam />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/v' element={<VariableUpdate />} />
        <Route path='/s' element={<State />} />
        <Route path='/props' element={<Props title={title} />} />
        <Route path='/hide' element={<HiddenandShowToggle />} />
        <Route path='/f' element={<Formcom />} />
        <Route path='/b' element={<B />} />
        <Route path='/c' element={<Click />} />
        <Route path='*' element={<PageNotFound />} /> */}






      </Routes>

      {/* <Footer /> */}


    </>
  )
}

export default App
