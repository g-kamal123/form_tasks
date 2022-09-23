
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  state ={
    input:'',
    print:'',
    textArea:'',
    touppercase:'',
    day:'',
    mode:'white',
    color:'black',
    cricket:'',
    singing:'',
    dancing:'',
    hobbies:[]
  }
  inputHandler = (event)=>{
    var inp = event.target.value
    inp = inp.replace(/[a-z]/g,'')
    this.setState({
      input:inp
    })
  }
  clickHandler =(event)=>{
    this.setState({
      print:this.state.input
    })
  }
  textHandler =(event)=>{
    this.setState({
      textArea:event.target.value
    })
  }
  teaxtAreaHandler =(event)=>{
    var res = this.state.textArea.toUpperCase()
    this.setState({
      touppercase:res
    })
  }
  selectHandler=(event)=>{
    var inp = event.target.value
    this.setState({
      day:inp
    })
  }
  darkModeHandler =(event)=>{
    if(this.state.mode==='white'){
      this.setState({
        mode:'black',
        color:'white'
      })
    }
    if(this.state.mode==='black'){
      this.setState({
        mode:'white',
        color:'black'
      })
    }
  }
  cricketHandler =(event)=>{
    if(this.state.cricket==='')
    var inp = event.target.value
    else inp=''
    this.setState({
      cricket:inp
    })
  }
  singingHandler =(event)=>{
    if(this.state.singing==='')
    var inp = event.target.value
    else inp=''
    this.setState({
      singing:inp
    })
  }
  dancingHandler =(event)=>{
    if(this.state.dancing==='')
    var inp = event.target.value
    else inp=''
    this.setState({
      dancing:inp
    })
  }
  checkboxHandler = (event)=>{
    var hobbies1 =[this.state.cricket,this.state.singing,this.state.dancing]
    this.setState({
      hobbies:hobbies1
    })
  }
  render() {
    return (
      <div className='form' style={{backgroundColor:this.state.mode,color:this.state.color}}>
        <div>
        <input type='text' onChange={this.inputHandler}/>
        <button onClick={this.clickHandler} style={{backgroundColor:this.state.mode,color:this.state.color}}>click</button>
        <p>{this.state.print}</p>
        </div>
        <div>
        <textarea onChange={this.textHandler}></textarea>
        <button onClick={this.teaxtAreaHandler} style={{backgroundColor:this.state.mode,color:this.state.color}}>Uppercase</button>
        <p>{this.state.touppercase}</p>
        </div>
        <div>
          <select onClick={this.selectHandler} style={{backgroundColor:this.state.mode,color:this.state.color}}>
            <option value='select any number to show respective day'>-/:-</option>
            <option value='monday'>1</option>
            <option value='tuesday'>2</option>
            <option value='wednesday'>3</option>
            <option value='thursday'>4</option>
            <option value='friday'>5</option>
            <option value='saturday'>6</option>
            <option value='sunday'>7</option>
          </select>
          <p>{this.state.day}</p>
        </div>
        <div>
          <button onClick={this.darkModeHandler} style={{backgroundColor:this.state.mode,color:this.state.color}}>Theme</button>
        </div>
        <div>
          <input type='checkbox' value='cricket' onChange={this.cricketHandler} />cricket
          <input type='checkbox' value='singing' onChange={this.singingHandler} />singing
          <input type='checkbox' value='dancing' onChange={this.dancingHandler} />dancing
          <button onClick={this.checkboxHandler}>Submit</button>
          <p>
          {this.state.hobbies.map((item,i)=>
          <span>{item}<br /></span>)}
          </p>
        </div>
      </div>
    )
  }
}

export default App