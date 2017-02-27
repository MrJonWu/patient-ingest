import React from 'react';
import { Button, Form, Container, Divider } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';
import GeneralInformation from './GeneralInformation.jsx';
import MaritalStatus from './MaritalStatus.jsx';
import Race from './Race.jsx';
import MedicalHistory from './MedicalHistory.jsx';
import Contract from  './Contract.jsx';

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

  onSubmit = (e) => {
    e.preventDefault();
    if (this.checkReqFields()) {
      console.log(this.state);
    } else {
      console.log('MISSING INFO');
    }
  }

  render() {
    return (
       <Container>
        <Form>
          <GeneralInformation onChangeHandler={this.onChangeHandler} />
          <MaritalStatus clickHandler={this.onChangeHandler} />
          <Race clickHandler={this.onChangeHandler} />
          <MedicalHistory clickHandler={this.checkboxClickHandler} onChangeHandler={this.onChangeHandler}/>
          <Contract clickHandler={this.agreeHandler} />
          <Form.Button 
          floated='right' 
          color='teal' 
          type='submit'
          onClick={this.onSubmit}>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}