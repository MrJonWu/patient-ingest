import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';
import { connect } from 'react-redux';
import { setInputValue } from '../actions/patientActions';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

@connect((store) => {
  return {
    firstName: store.patient.firstName,
    lastName: store.patient.lastName,
    sex: store.patient.sex,
    dateOfBirth: store.patient.dateOfBirth,
    email: store.patient.email,
    phone: store.patient.phone,
    street: store.patient.street,
    apt: store.patient.apt,
    city: store.patient.city,
    state: store.patient.state,
    zipcode: store.patient.zipcode,
  };
})

export default class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onChangeHandler = (e, { name, value }) => {
    this.props.dispatch(setInputValue(name, value));
  }

  render() {
    return (
      <div>
        <Form.Group widths='equal'>
          <Form.Input 
          required 
          name='firstName' 
          label='First Name'
          placeholder='First Name' 
          value={this.props.firstName}
          onChange={this.onChangeHandler} />
          <Form.Input
          required 
          name='lastName' 
          label='Last Name' 
          placeholder='Last Name' 
          value={this.props.lastName}
          onChange={this.onChangeHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select 
          required
          name='sex' 
          label='Sex' 
          options={options} 
          placeholder='Sex' 
          value={this.props.sex}
          onChange={this.onChangeHandler} />
          <Form.Input 
          required
          type='date' 
          name='dateOfBirth' 
          label='Date of Birth' 
          placeholder='mm/dd/yyyy' 
          value={this.props.dateOfBirth}
          onChange={this.onChangeHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
          required 
          name='email' 
          label='Email' 
          type='email' 
          placeholder='Email' 
          value={this.props.email}
          onChange={this.onChangeHandler} />
          <Form.Input 
          required
          name='phone' 
          label='Phone Number' 
          placeholder='(xxx) xxx-xxxx'
          value={this.props.phone} 
          onChange={this.onChangeHandler} />
        </Form.Group>
        <Form.Group>
          <Form.Input 
          className='thirteen wide field' 
          required
          name='street' 
          label='Home Address' 
          placeholder='Street Address' 
          value={this.props.street}
          onChange={this.onChangeHandler} />
          <Form.Input 
          className='three wide field' 
          name='apt' 
          label='Apt' 
          placeholder='Apt #' 
          value={this.props.apt}
          onChange={this.onChangeHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input 
          required
          label='City' 
          name='city' 
          placeholder='City' 
          value={this.props.city}
          onChange={this.onChangeHandler} />
          <Form.Select 
          required
          label='State' 
          name='state' 
          search 
          selection 
          options={stateList} 
          placeholder='State' 
          value={this.props.state}
          onChange={this.onChangeHandler} />
          <Form.Input 
          required
          type='number' 
          name='zipcode' 
          label='Zip Code' 
          placeholder='Zip Code' 
          value={this.props.zipcode}
          onChange={this.onChangeHandler} />
        </Form.Group>
      </div>
    );
  }
}
