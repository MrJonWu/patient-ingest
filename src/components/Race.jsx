import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setInputValue } from '../actions/patientActions';

@connect((store) => {
  return {
    race: store.patient.race,
  };
})

export default class Race extends React.Component {
  constructor(props) {
    super(props);
  }

  onChangeHandler = (e, { name, value }) => {
    this.props.dispatch(setInputValue(name, value));
  }

  render() {
    return (
      <div>
        <p><b>Race</b></p>
          <Form.Group widths='equal'>
            <Form.Checkbox 
            radio 
            name='race'
            label='Black - Non Hispanic' 
            value='Black - Non Hispanic'
            checked={this.props.race === 'Black - Non Hispanic'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='American Indian / Alaskan Native' 
            value='American Indian / Alaskan Native'
            checked={this.props.race === 'American Indian / Alaskan Native'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Hispanic' 
            value='Hispanic'
            checked={this.props.race === 'Hispanic'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Asian / Pacific Islander' 
            value='Asian / Pacific Islander'
            checked={this.props.race === 'Asian / Pacific Islander'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='White - Non Hispanic' 
            value='White - Non Hispanic'
            checked={this.props.race === 'White - Non Hispanic'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Other' 
            value='Other'
            checked={this.props.race === 'Other'}
            onChange={this.onChangeHandler} />
          </Form.Group>
      </div>
    );
  }
}
