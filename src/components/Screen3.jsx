import React from 'react';
import { Button, Form, Modal } from 'semantic-ui-react';
import MedicalHistory from './MedicalHistory.jsx';
import { connect } from 'react-redux';
import { nextScreen, previousScreen } from '../actions/screenActions';

const requiredFields = ['smoke', 'alcohol', 'drugs'];

@connect((store) => {
  return {
    screen: store.screen.screen,
    smoke: store.patient.smoke.smoke,
    alcohol: store.patient.alcohol.alcohol,
    drugs: store.patient.drugs.drugs,
  };
})

export default class Screen3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  close = () => this.setState({ open: false })

  checkReqFields = () => {
    for (var i = 0; i < requiredFields.length; i++) {
      if (!this.props[requiredFields[i]]) {
        return false;
      }
    }
    return true;
  }

  onNextHandler = (e) => {
    e.preventDefault();
    if (this.checkReqFields()) {
      this.props.dispatch(nextScreen());
    } else {
      this.setState({open: true});
    }
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
        <Modal dimmer='inverted' size='small' open={this.state.open} onClose={this.close}>
          <Modal.Header>
            Missing Information
          </Modal.Header>
          <Modal.Content>
            <p>Please fill out all required fields.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color='teal' onClick={this.close}>
              Okay
            </Button>
          </Modal.Actions>
        </Modal>
      </Form>
    );
  }
}