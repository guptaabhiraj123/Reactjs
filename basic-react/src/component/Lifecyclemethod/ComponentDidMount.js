import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor()
    {
        super();
        this.state={
           count:0,
           name:'ram'
        }
        console.log('constructor')
       
    }
    componentDidMount(){
        console.log('componentdidmount')
    }
  render() {
    console.log('hello render')
    return (
      <div>
        <h1>Components DidMount {this.state.name}</h1>
        <h1>Components DidMount {this.state.count}</h1>
        <button onClick={()=>{this.setState({name:"rohit"})}}>Update Name</button>
        <button onClick={()=>{this.setState({count:1})}}>Update Name1</button>
      </div>
    )
  }
}
