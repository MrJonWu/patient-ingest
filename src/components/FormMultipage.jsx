import React from 'react';
import { Button, Form, Container, Step, Message } from 'semantic-ui-react';
import Screen1 from './Screen1.jsx';
import Screen2 from './Screen2.jsx';
import Screen3 from './Screen3.jsx';
import Screen4 from './Screen4.jsx';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    screen: store.screen.screen,
    submitted: store.screen.submitted,
  }
})

export default class IngestFormMultipage extends React.Component {
  constructor(props) {
    super(props);
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
    const steps = [
      { active: (this.props.screen === 1), title: 'General Information', description: 'Tell us about yourself' },
      { active: (this.props.screen === 2), title: 'Family History', description: 'Tell us about your family history' },
      { active: (this.props.screen === 3), title: 'Medical History', description: 'Your medical history' },
      { active: (this.props.screen === 4), title: 'Submit', description: 'Submit your form' },
    ]
    return (
      <Container className='container'>
        {this.props.submitted && 
        <Message positive>
          <Message.Header>Thank You!</Message.Header>
          <p>Your submission has been received!</p>
        </Message>}
        <h1>Patient Ingest Form</h1>
        <div className='steps'>     
          <Step.Group size='small' ordered items={steps} />
        </div>
        {this.props.screen === 1 && <Screen1 />}
        {this.props.screen === 2 && <Screen2 />}
        {this.props.screen === 3 && <Screen3 />}
        {this.props.screen === 4 && <Screen4 />}
      </Container>
    );
  }
}