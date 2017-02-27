import React from 'react';
import { Form, Input } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

export default class GeneralInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
          onChange={this.props.onChangeHandler} />
          <Form.Input
          required 
          name='lastName' 
          label='Last Name' 
          placeholder='Last Name' 
          onChange={this.props.onChangeHandler} />
          <Form.Select 
          required
          name='sex' 
          label='Sex' 
          options={options} 
          placeholder='Sex' 
          onChange={this.props.onChangeHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input 
          required
          type='date' 
          name='dateOfBirth' 
          label='Date of Birth' 
          placeholder='mm/dd/yyyy' 
          onChange={this.props.onChangeHandler} />
          <Form.Input
          required 
          name='email' 
          label='Email' 
          type='email' 
          placeholder='Email' 
          onChange={this.props.onChangeHandler} />
          <Form.Input 
          required
          name='phone' 
          label='Phone Number' 
          placeholder='(xxx) xxx-xxxx' 
          onChange={this.props.onChangeHandler} />
        </Form.Group>
        <Form.Group>
          <Form.Input 
          className='thirteen wide field' 
          required
          name='street' 
          label='Home Address' 
          placeholder='Street Address' 
          onChange={this.props.onChangeHandler} />
          <Form.Input 
          className='three wide field' 
          name='apt' 
          label='Apt' 
          placeholder='Apt #' 
          onChange={this.props.onChangeHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input 
          required
          label='City' 
          name='city' 
          placeholder='City' 
          onChange={this.props.onChangeHandler} />
          <Form.Select 
          required
          label='State' 
          name='state' 
          search 
          selection 
          options={stateList} 
          placeholder='State' 
          onChange={this.props.onChangeHandler} />
          <Form.Input 
          required
          type='number' 
          name='zipcode' 
          label='Zip Code' 
          placeholder='Zip Code' 
          onChange={this.props.onChangeHandler} />
        </Form.Group>
      </div>
    );
  }
}
