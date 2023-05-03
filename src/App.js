import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
     <div className='App'>
     <header>
      <h1 className='heading'>My ToDos</h1>
      <form id='to-do-form'>
        <input type='text' placeholder='Enter Text '/>
        <button type='submit'>Add</button>
      </form>
     </header>
     </div>
    )
  }
}


export default App;
