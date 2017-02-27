import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

export default class Race extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      race: '',
    };
  }

  onClickHandler = (e, { value }) => {
    this.setState({race: value});
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
            checked={this.state.race === 'Black - Non Hispanic'}
            onClick={this.onClickHandler}
            onChange={this.props.clickHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='American Indian / Alaskan Native' 
            value='American Indian / Alaskan Native'
            checked={this.state.race === 'American Indian / Alaskan Native'}
            onClick={this.onClickHandler}
            onChange={this.props.clickHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Hispanic' 
            value='Hispanic'
            checked={this.state.race === 'Hispanic'}
            onClick={this.onClickHandler}
            onChange={this.props.clickHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Asian / Pacific Islander' 
            value='Asian / Pacific Islander'
            checked={this.state.race === 'Asian / Pacific Islander'}
            onClick={this.onClickHandler}
            onChange={this.props.clickHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='White - Non Hispanic' 
            value='White - Non Hispanic'
            checked={this.state.race === 'White - Non Hispanic'}
            onClick={this.onClickHandler}
            onChange={this.props.clickHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Other' 
            value='Other'
            checked={this.state.race === 'Other'}
            onClick={this.onClickHandler}
            onChange={this.props.clickHandler} />
          </Form.Group>
      </div>
    );
  }
}
