import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Contract from './Contract.jsx';
import ModalButton from './Modal.jsx';
import { connect } from 'react-redux';
import { previousScreen } from '../actions/screenActions';

@connect((store) => {
  return {
    screen: store.screen.screen
  };
})

export default class Screen3 extends React.Component {
  constructor(props) {
    super(props);
  }

  onBackHandler = (e) => {
    e.preventDefault();
    this.props.dispatch(previousScreen());
  }

  render() {
    return (
      <Form>
        <Contract />
        <ModalButton onSubmit={this.onSubmit} />
        <Button floated='right' onClick={this.onBackHandler}>Back</Button>
      </Form>
    );
  }
}