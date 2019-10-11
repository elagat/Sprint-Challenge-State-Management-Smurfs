import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      smurfs: [],
    };
  };

  componentDidMount() {
    this.fetchSmurfs();
  };

  fetchSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(smurfs => {
        console.log('response', smurfs)
        this.setState({ smurfs: smurfs.data })
      })
      .catch(error => {
        console.log(error);
      });
    };

  render(props) {
    return (
      <div className='form'>

        <Form>
         <Field type='text' name='name' placeholder='Name' />
         {this.props.touched.name && this.props.errors.name && <p className="error">{this.props.errors.name}</p>}

         <Field type='text' name='height' placeholder='Height' />
         {this.props.touched.height && this.props.errors.height && <p className="error">{this.props.errors.height}</p>}

         <Field type='text' name='age' placeholder='Age' />
         {this.props.touched.age && this.props.errors.age && <p className="error">{this.props.errors.age}</p>}

         <button type='submit'>Add</button>
        </Form>

        {this.state.smurfs.map(smurf => (
          <p key={smurf.id}>{smurf.name} is {smurf.height} tall and {smurf.age} years old</p>
        ))}

      </div>
    );
  };
}

const FormikForm = withFormik({
  mapPropsToValues({ name, height, age }) {
    return {
      name: name || '',
      height: height || '',
      age: age || ''
    };
  },

  handleSubmit(values, { setStatus }) {
    axios
      .post('http://localhost:3333/smurfs', values)
      .then(response => {
        console.log('response.data', response.data);
        setStatus(response.data.name);
      })
      .catch(error => console.log('error', error.response));
  }
})(SmurfForm);

export default FormikForm;
