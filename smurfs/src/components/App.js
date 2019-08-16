import React, { useEffect, useState } from "react";
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfList from './SmurfList';
import axios from 'axios';

import "./App.css";

const App = () => {
  const [smurf, setSmurf] = useState([]);

  const addSmurf = smurf => {
  	setSmurf([...smurf, smurf]);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        setSmurf(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <SmurfContext.Provider value={smurf} >
      <div className="App">
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
