import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Smurf from './Smurf';

const SmurfList = () => {
  const [smurf, setSmurf] = useState([]);

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
		<div>
      {smurf.map(smurf => <Smurf name={smurf.name}/>)}
  	</div>
	);
};

export default SmurfList;
