import React, { Component } from "react";
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfList from './SmurfList';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  };

  componentDidMount() {
    this.fetchSmurfs();
  };

  fetchSmurfs = () => {
    fetch('http://localhost:3333')
      .then(response => {
        return response.json();
      })
      .then(smurfs => {
        console.log('smurfs', smurfs)
        this.setState({ smurfs: smurfs })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render(props) {
    return (
      <SmurfContext.Provider value={this.props.smurfs}>
        <div className="App">
          <SmurfList />
        </div>
      </SmurfContext.Provider>
    );
  }
}

export default App;
