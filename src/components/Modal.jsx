import React, { Component } from 'react';
import { Popup, Button, Header, Image, Modal, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { resetValue, setInputValue } from '../actions/patientActions';

const requiredFields = ['firstName', 'lastName', 'sex', 'dateOfBirth', 'email', 'phone', 'street', 'city', 'state', 'zipcode','smoke', 'alcohol', 'drugs', 'agree'];

const url = 'https://damp-crag-41038.herokuapp.com';
// const url = 'http://192.168.1.83:3000';

@connect((store) => {
  return {
    firstName: store.patient.firstName,
    lastName: store.patient.lastName,
    sex: store.patient.sex,
    dateOfBirth: store.patient.dateOfBirth,
    email: store.patient.email,
    phone: store.patient.phone,
    street: store.patient.street,
    apt: store.patient.apt,
    city: store.patient.city,
    state: store.patient.state,
    zipcode: store.patient.zipcode,
    maritalStatus: store.patient.maritalStatus,
    race: store.patient.race,
    familyHistory: store.patient.familyHistory,
    history: store.patient.history,
    smoke: store.patient.smoke,
    alcohol: store.patient.alcohol,
    drugs: store.patient.drugs,
    medications: store.patient.medications,
    allergies: store.patient.allergies,
    surgeries: store.patient.surgeries,
    otherComments: store.patient.otherComments,
    agree: store.patient.agree,
  };
})

export default class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      complete: false,
    };
  }

  checkReqFields = () => {
    for (var i = 0; i < requiredFields.length; i++) {
      if (!this.props[requiredFields[i]]) {
        return false;
      }
    }
    return true;
  }

  show = (dimmer) => (e) => {
    e.preventDefault();
    if (this.checkReqFields()) {
      this.setState({complete: true}, () => this.setState({ dimmer, open: true }));
    } else {
      this.setState({complete: false}, () => this.setState({ dimmer, open: true }));
    }
  }

  close = () => {
    this.setState({ open: false });
  }

  onSubmit = () => {
    this.setState({ open: false });
    fetch( url + '/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.props)
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res, this.props);
      this.props.dispatch(resetValue());
    })
    .catch((error) => alert('There was a problem with your submission: ' + error.message));
  }

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button 
          floated='right' 
          color='teal' 
          type='submit'
          onClick={this.show('inverted')}>Submit</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Review Your Submission</Modal.Header>
          <Modal.Content >
            <Modal.Description>
              {this.state.complete ? 
                <div>
                  <Header>Hello {this.props.firstName + ','} </Header>
                  <p>Please confirm that the information below is correct.</p>
                  <Divider />
                  <p><b>Full Name:</b> {this.props.firstName + ' ' + this.props.lastName}</p>
                  <p><b>Sex:</b> {this.props.sex}</p>
                  <p><b>Date of Birth:</b> {this.props.dateOfBirth}</p>
                  <p><b>Email:</b> {this.props.email}</p>
                  <p><b>Phone:</b> {this.props.phone}</p>
                  <p><b>Home Address:</b> {this.props.street + ', ' + this.props.city + ', ' + this.props.state + ', ' + this.props.zipcode}</p>
                  {this.props.apt ? <p><b>Apt:</b> {this.props.apt}</p> : null}
                  <p><b>Marital Status:</b> {this.props.maritalStatus}</p>
                  <p><b>Race:</b> {this.props.race}</p>
                  <p><b>Family History:</b></p>
                  <ul>
                    <li><p><b>Grandparents:</b>{this.props.familyHistory.grandparents.join(', ')}</p></li>
                    <li><p><b>Father:</b>{this.props.familyHistory.father.join(', ')}</p></li>
                    <li><p><b>Mother:</b>{this.props.familyHistory.mother.join(', ')}</p></li>
                    <li><p><b>Siblings:</b>{this.props.familyHistory.siblings.join(', ')}</p></li>
                    <li><p><b>Children:</b>{this.props.familyHistory.children.join(', ')}</p></li>
                  </ul>
                  <p><b>Medical History:</b> {this.props.history.join(', ')}</p>
                  <p><b>Smoke:</b> {this.props.smoke.smoke}</p>
                  {this.props.smoke.smoke === "Yes" && <p><b>Smoke Frequency:</b> {this.props.smoke.frequency}</p>}
                  <p><b>Alcohol:</b> {this.props.alcohol.alcohol}</p>
                  {this.props.alcohol.alcohol === "Yes" && <p><b>Alcohol Frequency:</b> {this.props.alcohol.frequency}</p>}
                  <p><b>Drugs:</b> {this.props.drugs.drugs}</p>
                  {this.props.drugs.drugs === "Yes" && <p><b>Drug Frequency:</b> {this.props.drugs.frequency}</p>}
                  <p><b>Medication Allergies:</b> {this.props.allergies}</p>
                  <p><b>Surgeries:</b> {this.props.surgeries}</p>
                  <p><b>Other Comments:</b> {this.props.otherComments}</p>
                  </div> : 
                <div>
                  <Header>Oops!</Header>
                  <p>Please complete all required fields.</p>
                </div> }  
            </Modal.Description>
          </Modal.Content>
          {this.state.complete ? 
          <Modal.Actions>
            <Button onClick={this.close}>
              Back
            </Button>
            <Button color='teal' icon='checkmark' labelPosition='right' content="Submit" onClick={this.onSubmit} />
          </Modal.Actions> :
          <Modal.Actions>
            <Button onClick={this.close}>
              Back
            </Button>
          </Modal.Actions> }
        </Modal>
      </div>
    )
  }
}