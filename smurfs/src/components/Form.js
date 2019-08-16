import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      smurf: ''
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitSmurf = event => {
    event.preventDefault();
    this.props.submitSmurf(this.state.smurf)
  }

  render() {
    return (
      <form onSubmit = { this.submitSmurf }>
        <input
          type='text'
          value={this.state.smurf}
          name='smurf'
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default Form;
