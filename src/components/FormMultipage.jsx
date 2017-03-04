import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react';
import Screen1 from './screen1.jsx';

// const url = 'https://damp-crag-41038.herokuapp.com';
const url = 'http://192.168.1.83:3000';

const requiredFields = ['firstName', 'lastName', 'sex', 'dateOfBirth', 'email', 'phone', 'street', 'city', 'state', 'zipcode','smoke', 'alcohol', 'drugs', 'agree'];

export default class IngestFormMultipage extends React.Component {
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
        <Screen1 /> 
      </Container>
    );
  }
}