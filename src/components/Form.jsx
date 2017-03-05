import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';
import GeneralInformation from './GeneralInformation.jsx';
import MaritalStatus from './MaritalStatus.jsx';
import Race from './Race.jsx';
import MedicalHistory from './MedicalHistory.jsx';
import Contract from './Contract.jsx';
import ModalButton from './Modal.jsx';

// const url = 'https://damp-crag-41038.herokuapp.com';
const url = 'http://192.168.1.83:3000';

const requiredFields = ['firstName', 'lastName', 'sex', 'dateOfBirth', 'email', 'phone', 'street', 'city', 'state', 'zipcode','smoke', 'alcohol', 'drugs', 'agree'];

export default class IngestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      sex: '',
      dateOfBirth: '',
      email: '',
      phone: '',
      street: '',
      apt: '',
      city: '',
      state: '',
      zipcode: '',
      maritalStatus: '',
      race: '',
      history: [],
      smoke: '',
      alcohol: '',
      drugs: '',
      allergies: '',
      medications: '',
      surgeries: '',
      otherComments: '',
      agree: false,
      submission: false,
    };
  }

  agreeHandler = () => {
    this.setState({agree: !this.state.agree});
  }

  onChangeHandler = (e, { name, value }) => {
    this.setState({[name]: value});
  }

  checkboxClickHandler = (e, { name, value }) => {
    var tempArr = this.state.history;
    !tempArr.includes(value) ? tempArr.push(value) : tempArr.splice(tempArr.indexOf(value), 1);
    this.setState({history: tempArr});
  }

  checkReqFields = () => {
    for (var i = 0; i < requiredFields.length; i++) {
      if (!this.state[requiredFields[i]]) {
        return false;
      }
    }
    return true;
  }

  onSubmit = () => {
    fetch( url + '/api/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({submission: true}, () => console.log(res));
    })
    .catch((error) => alert('There was a problem with your submission: ' + error.message));
  }

  render() {
    return (
       <Container>
       {this.state.submission ? 
        <div>
          <h1>Success!</h1>
        </div> :
        <Form>
          <h1>Patient Ingest Form</h1>
          <GeneralInformation onChangeHandler={this.onChangeHandler} />
          <MaritalStatus clickHandler={this.onChangeHandler} />
          <Race clickHandler={this.onChangeHandler} />
          <MedicalHistory clickHandler={this.checkboxClickHandler} onChangeHandler={this.onChangeHandler}/>
          <Contract clickHandler={this.agreeHandler} />
          <ModalButton currentState={this.state} checkReqFields={this.checkReqFields} onSubmit={this.onSubmit} />
        </Form> }
      </Container>
    );
  }
}