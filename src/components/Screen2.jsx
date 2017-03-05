import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import FamilyHistory from './FamilyHistory.jsx';
import { connect } from 'react-redux';
import { nextScreen, previousScreen } from '../actions/screenActions';

@connect((store) => {
  return {
    screen: store.screen.screen
  };
})

export default class Screen2 extends React.Component {
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
        <FamilyHistory />
        <br />
        <Button floated='right' color='teal' content="Next" onClick={this.onNextHandler} />
        <Button floated='right' onClick={this.onBackHandler}>Back</Button>
      </Form>
    );
  }
}