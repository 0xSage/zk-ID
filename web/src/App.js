import logo from './logo.svg';
import './App.css';
import React from 'react';

import { covalentQuery } from "./utils/covalent"
import { constructMerkleTree } from "./utils/merkle"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log("Hello")
    
    // TODO: Have some loading form
    let data = await covalentQuery();
    let tree = constructMerkleTree(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
