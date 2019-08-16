import React, { useContext } from 'react';
import axios from 'axios';
import { SmurfContext } from '../contexts/SmurfContext';

class Smurf extends React.Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  };

  componentDidMount() {
    this.fetchSmurfs();
  };

  fetchSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(smurfs => {
        console.log('smurfs', smurfs)
        this.setState({ smurfs: smurfs.data })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
	  return (
		  <div>
			  <h2>Name</h2>
		   </div>
	   );
   };
};

export default Smurf;
