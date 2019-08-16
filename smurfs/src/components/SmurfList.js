import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

// Components
import Smurf from './Smurf';

const SmurfList = () => {
	const { smurfs } = useContext(ProductContext);

	return (
		<div>
			{smurfs.map(smurf => (
				<Smurf
					key={smurf.id}
					smurf={smurf}
				/>
			))}
		</div>
	);
};

export default SmurfList;
