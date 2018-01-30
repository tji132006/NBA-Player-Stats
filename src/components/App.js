import React, { Component } from 'react';
import {Main} from "./Main";

import '../styles/App.css';
import {TopNavBar} from './TopNavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
