import React, {Component} from 'react';
import './App.css';
import './UserOutput/UserOutput.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    usernames: [
      {first: 'Bel'},
      {first: 'Claudio'},
      {first: 'Rafaela'}
    ]
  }

  usernameChangeHandler = (e) => {
    // console.log("typing")
    this.setState({
      usernames: [
        {first: e.target.value},
        {first: e.target.value},
        {first: 'Julia'}
      ]
    })
  }

  render() {
    return (
      <div className='App'>
        <h1>React Tutorial Taks 1</h1>
        <UserInput changed={this.usernameChangeHandler} currentInput={this.state.usernames[0].first}/>
        <UserOutput firstName={this.state.usernames[0].first}/>
        <UserOutput firstName={this.state.usernames[1].first}/>
        <UserOutput firstName={this.state.usernames[2].first}/>
      </div>
    );
  }
}

export default App;
