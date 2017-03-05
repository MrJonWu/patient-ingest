import React from 'react';
import { Button, Form, Divider, Modal } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';
import GeneralInformation from './GeneralInformation.jsx';
import MaritalStatus from './MaritalStatus.jsx';
import Race from './Race.jsx';
import { connect } from 'react-redux';
import { nextScreen } from '../actions/screenActions';

const requiredFields = ['firstName', 'lastName', 'sex', 'dateOfBirth', 'email', 'phone', 'street', 'city', 'state', 'zipcode'];

@connect((store) => {
  return {
    screen: store.screen.screen,
    firstName: store.patient.firstName,
    lastName: store.patient.lastName,
    sex: store.patient.sex,
    dateOfBirth: store.patient.dateOfBirth,
    email: store.patient.email,
    phone: store.patient.phone,
    street: store.patient.street,
    city: store.patient.city,
    state: store.patient.state,
    zipcode: store.patient.zipcode,
  };
})


export default class Screen1 extends React.Component {
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

  render() {
    return (
        <Form>
          <GeneralInformation />
          <Divider />
          <MaritalStatus />
          <Divider />
          <Race />
          <Button floated='right' color='teal' content="Next" onClick={this.onNextHandler} />
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