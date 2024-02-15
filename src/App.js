import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'

class App extends Component {
  render() {
  return (
    <div className="App">
       <Greet name='Bruce' heroname ="batman"/>
       <p>This is childern</p>
       <Greet name='Sami' heroname="spiderman"/>
       <button>Action</button>
       <Greet name='hat'heroname="ironman"/>
       <Welcome name='Bruce' heroname ="batman"/>
       <Welcome name='Sami' heroname="spiderman"/>
       <Hello />
       <Message />
    </div>
  );
}
}

export default App;
