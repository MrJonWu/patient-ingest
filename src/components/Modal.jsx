import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal, Divider } from 'semantic-ui-react'

export default class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      complete: false,
    };
  }

  show = (dimmer) => (e) => {
    e.preventDefault();
    if (this.props.checkReqFields()) {
      this.setState({complete: true}, () => this.setState({ dimmer, open: true }));
    } else {
      this.setState({complete: false}, () => this.setState({ dimmer, open: true }));
    }
  };

  close = () => {
    this.setState({ open: false });
  };

  onSubmit = () => {
    this.setState({ open: false });
    this.props.onSubmit();
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
                  <Header>Hello {this.props.currentState.firstName + ','} </Header>
                  <p>Please confirm that the information below is correct.</p>
                  <Divider />
                  <p><b>Full Name:</b> {this.props.currentState.firstName + ' ' + this.props.currentState.lastName}</p>
                  <p><b>Sex:</b> {this.props.currentState.sex}</p>
                  <p><b>Date of Birth:</b> {this.props.currentState.dateOfBirth}</p>
                  <p><b>Email:</b> {this.props.currentState.email}</p>
                  <p><b>Phone:</b> {this.props.currentState.phone}</p>
                  <p><b>Home Address:</b> {this.props.currentState.street + ', ' + this.props.currentState.city + ', ' + this.props.currentState.state + ', ' + this.props.currentState.zipcode}</p>
                  {this.props.currentState.apt ? <p><b>Apt:</b> {this.props.currentState.apt}</p> : null}
                  <p><b>Marital Status:</b> {this.props.currentState.maritalStatus}</p>
                  <p><b>Race:</b> {this.props.currentState.race}</p>
                  <p><b>Medical History:</b> {this.props.currentState.history.join(', ')}</p>
                  <p><b>Smoke:</b> {this.props.currentState.smoke}</p>
                  <p><b>Alcohol:</b> {this.props.currentState.alcohol}</p>
                  <p><b>Drugs:</b> {this.props.currentState.drugs}</p>
                  <p><b>Medication Allergies:</b> {this.props.currentState.allergies}</p>
                  <p><b>Surgeries:</b> {this.props.currentState.surgeries}</p>
                  <p><b>Other Comments:</b> {this.props.currentState.otherComments}</p>
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