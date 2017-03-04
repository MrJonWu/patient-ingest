import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setInputValue } from '../actions/patientActions';

@connect((store) => {
  return {
    maritalStatus: store.patient.maritalStatus,
  };
})

export default class MaritalStatus extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onChangeHandler = (e, { name, value }) => {
    console.log(value);
    this.props.dispatch(setInputValue(name, value));
  }

  render() {
    return (
      <div>
        <p><b>Marital Status</b></p>
        <Form.Group widths='equal'>
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Married' 
          value='Married'
          checked={this.props.maritalStatus === 'Married'}
          onChange={this.onChangeHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Single' 
          value='Single'
          checked={this.props.maritalStatus === 'Single'}
          onChange={this.onChangeHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Divorced' 
          value='Divorced'
          checked={this.props.maritalStatus === 'Divorced'}
          onChange={this.onChangeHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Life Partner' 
          value='Life Partner'
          checked={this.props.maritalStatus === 'Life Partner'}
          onChange={this.onChangeHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Separated' 
          value='Separated'
          checked={this.props.maritalStatus === 'Separated'}
          onChange={this.onChangeHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Widowed' 
          value='Widowed'
          checked={this.props.maritalStatus === 'Widowed'}
          onChange={this.onChangeHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Other' 
          value='Other'
          checked={this.props.maritalStatus === 'Other'}
          onChange={this.onChangeHandler} />
        </Form.Group>
      </div>
    );
  }
}
