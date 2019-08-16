import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurf from './Smurf';

const SmurfList = () => {
  const smurfs = useContext(SmurfContext);

	return (
		<div>
      <Smurf />
  	</div>
	);
};

export default SmurfList;
