import React, { Component } from 'react'

 class CState extends Component {
    constructor(){
        super()
        this.state ={
            name :'sonam'
        }
    }
    updateData(){
        this.setState({name:'rahul'})
    }
  render() {
   
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={()=>this.updateData()}> click me</button>

      </div>
    )
  }
}
export default CState