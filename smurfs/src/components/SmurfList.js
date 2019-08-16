import React, { useEffect, useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';
import Smurf from './Smurf';

const SmurfList = () => {
  const smurfs = useContext(SmurfContext);

	return (
		<div>
      {smurfs.map(smurf => <Smurf name={smurf.name}/>)}
  	</div>
	);
};

export default SmurfList;
