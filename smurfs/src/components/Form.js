import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = props => {

  const [input, setInput] = useState({
    name: '',
    age: null,
    id: null,
    height: ''
  });

  const handleInput = event => {
    setInput({
      ...input,
      name: event.target.value,
      id: Date.now()
    });
  };

  const addSmurf = event => {
    event.preventDefault();
    props.addSmurf(input);
    setInput({
      name: '',
      age: null,
      id: null,
      height: ''
    });
    axios.post('http://localhost:3333/smurfs', input);
  };

  return (
    <div>
      <form onSubmit={addSmurf}>
        <input
          value={input.name}
          onChange={handleInput}
          type='text'
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
