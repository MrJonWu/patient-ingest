import React from 'react';
import { Button, Form, Container, Step } from 'semantic-ui-react';
import Screen1 from './Screen1.jsx';
import Screen2 from './Screen2.jsx';
import Screen3 from './Screen3.jsx';
import Screen4 from './Screen4.jsx';
import { connect } from 'react-redux';


// const url = 'https://damp-crag-41038.herokuapp.com';
const url = 'http://192.168.1.83:3000';


@connect((store) => {
  return {
    screen: store.screen.screen
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