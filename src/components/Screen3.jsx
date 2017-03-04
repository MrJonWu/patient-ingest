import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import MedicalHistory from './MedicalHistory.jsx';
import { connect } from 'react-redux';
import { nextScreen, previousScreen } from '../actions/screenActions';

@connect((store) => {
  return {
    screen: store.screen.screen
  };
})

export default class Screen3 extends React.Component {
  constructor(props) {
    super(props);
  }

  onNextHandler = (e) => {
    e.preventDefault();
    this.props.dispatch(nextScreen());
  }

  onBackHandler = (e) => {
    e.preventDefault();
    this.props.dispatch(previousScreen());
  }

  render() {
    return (
      <Form>
        <MedicalHistory />
        <br />
        <Button floated='right' color='teal' content="Next" onClick={this.onNextHandler} />
        <Button floated='right' onClick={this.onBackHandler}>Back</Button>
      </Form>
    );
  }
}