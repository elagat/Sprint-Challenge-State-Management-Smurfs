import React, { useReducer, useEffect, useState } from "react";
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfList from './SmurfList';
import axios from 'axios';
import Form from "./Form";
import { initialState, reducer } from './reducer';

import "./App.css";

const App = () => {
  const [smurf, setSmurf] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const addNew = smurf => {
    dispatch({type: 'ADD_SMURF', payload: smurf});
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
        <Form addSmurf={addNew}/>
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
