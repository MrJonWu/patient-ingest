import React from 'react';
import { 
  Button, 
  Form, 
  Container,
  Divider,
  } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';
import GeneralInformation from './GeneralInformation.jsx';
import MaritalStatus from './MaritalStatus.jsx';
import Race from './Race.jsx';
import MedicalHistory from './MedicalHistory.jsx';
import Contract from  './Contract.jsx';

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
    };
  }

  onChangeHandler = (e, { name, value }) => {
    this.setState({[name]: value}, () => console.log(this.state));
  };

  checkboxClickHandler = (e, { name, value }) => {
    var tempArr = this.state.history;
    if (!tempArr.includes(value)) {
      tempArr.push(value);
    } else {
      tempArr.splice(tempArr.indexOf(value), 1);
    }
    this.setState({history: tempArr}, () => console.log(this.state));
  };

  render() {
    return (
       <Container>
        <Form>
          <GeneralInformation onChangeHandler={this.onChangeHandler} />
          <MaritalStatus clickHandler={this.onChangeHandler} />
          <Race clickHandler={this.onChangeHandler} />
          <MedicalHistory clickHandler={this.checkboxClickHandler} onChangeHandler={this.onChangeHandler}/>
          <Contract />
          <Form.Button 
          floated='right' 
          color='teal' 
          type='submit'>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}