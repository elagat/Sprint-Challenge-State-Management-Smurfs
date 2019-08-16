import React from 'react';

const Smurf = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.height}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default Smurf;
