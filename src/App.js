import React, {Component} from 'react';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>React Tutorial Taks 1</h1>
        <UserInput/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
