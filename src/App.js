import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 classname = "App-title"> Welcome to React </h1>
      <p>
      Edit <code>src/App.js</code> and save to reload.
      </p>
      
      <TodoList1/>
      </header>
      </div>
      );
    }
  }
  
  
  
  class TodoList1 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        input: '',  
        todo: [ { todo : "Buy Milk" ,done : "false"}, {todo : "Keep Alarm" , done : "true"} , {todo : "Watch FRIENDS" , done : "true"}, {todo : "ABC" , done : "false"}, {todo :"Dinner Time" , done :"true"} ]
      }
    }
    
    render() {
      return (
        <div>
        <input type="text" value ={this.state.input} />
        <input type = "submit" onClick />
        <div>
        { this.state.todo
          .filter (item => item.done == "true")
          .map((iterator) => <div>{iterator.todo}, {iterator.done}</div> )} 
          <hr/>
          
          {this.state.todo
            .filter( item => item.done == "false")
            .map((iterator) => <div> {iterator.todo}, {iterator.done} </div>)}
            
            </div>
            </div>
            
            )
          }
        }
        
        export default App;
        