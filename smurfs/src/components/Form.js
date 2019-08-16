import React from 'react';

const Form = () => {
  const [input, setInput] = useState({
    name: '',
    age: null,
    height: '',
    id: null
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
      height: '',
      id: null
    });
  };

  return (
      <div>
        <form onSubmit={addSmurf}>
          <input
            value={input.item}
            onChange={handleInput}
            type='text'
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
}
