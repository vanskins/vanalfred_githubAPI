import React, { Component } from 'react';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="App-header">
          <h1 className="text-centera">Welcome to my code for React & Redux</h1>
        </header>
        <Users />
      </div>
    );
  }
}

export default App;
