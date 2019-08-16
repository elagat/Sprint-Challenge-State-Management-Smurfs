import React, { useReducer, useEffect, useState } from "react";
import { SmurfContext } from '../contexts/SmurfContext';
import SmurfList from './SmurfList';
import axios from 'axios';
import FormikForm from "./Form";
import { initialState, reducer } from './reducer';

import "./App.css";

const App = () => {
  const [smurf, setSmurf] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const addNew = smurf => {
    dispatch({type: 'ADD_SMURF', payload: smurf});
  };

  return (
    <SmurfContext.Provider value={smurf} >
      <div className="App">
        <h1>Smurfs</h1>
        <FormikForm addSmurf={addNew}/>
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
