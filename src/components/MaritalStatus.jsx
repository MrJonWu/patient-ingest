import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

export default class MaritalStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maritalStatus: '',
    };
  }

  onClickHandler = (e, { value }) => {
    this.setState({maritalStatus: value});
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
          checked={this.state.maritalStatus === 'Married'}
          onClick={this.onClickHandler}
          onChange={this.props.clickHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Single' 
          value='Single'
          checked={this.state.maritalStatus === 'Single'}
          onClick={this.onClickHandler}
          onChange={this.props.clickHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Divorced' 
          value='Divorced'
          checked={this.state.maritalStatus === 'Divorced'}
          onClick={this.onClickHandler}
          onChange={this.props.clickHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Life Partner' 
          value='Life Partner'
          checked={this.state.maritalStatus === 'Life Partner'}
          onClick={this.onClickHandler}
          onChange={this.props.clickHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Separated' 
          value='Separated'
          checked={this.state.maritalStatus === 'Separated'}
          onClick={this.onClickHandler}
          onChange={this.props.clickHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Widowed' 
          value='Widowed'
          checked={this.state.maritalStatus === 'Widowed'}
          onClick={this.onClickHandler}
          onChange={this.props.clickHandler} />
          <Form.Checkbox 
          radio 
          name='maritalStatus'
          label='Other' 
          value='Other'
          checked={this.state.maritalStatus === 'Other'}
          onClick={this.onClickHandler}
          onChange={this.props.clickHandler} />
        </Form.Group>
      </div>
    );
  }
}
