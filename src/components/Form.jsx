import React from 'react';
import { 
  Button, 
  Checkbox, 
  Form, 
  TextArea, 
  Container,
  Divider,
  } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

export default class IngestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      dob: '',
      email: '',
      phone: '',
      patientStreet: '',
      patientApt: '',
      patientCity: '',
      patientState: '',
      patientZipCode: '',
      maritalStatus: '',
      race: '',
      history: [],
    };
  }

  checkboxClickHandler = (e, { name, value }) => {
    if (name === 'maritalStatus') {   
      this.setState({ maritalStatus: value }, () => console.log('Marital Status: ', this.state.maritalStatus));
    } else if (name === 'race') {
      this.setState({ race: value }, () => console.log('Race: ', this.state.race));
    }
  };

  render() {
    return (
       <Container>
        <Form>

          <Form.Group widths='equal'>
            <Form.Input required label='First Name' placeholder='First Name' />
            <Form.Input required label='Last Name' placeholder='Last Name' />
            <Form.Select required label='Gender' options={options} placeholder='Gender' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input required label='Date of Birth' placeholder='dd/mm/yyyy' />
            <Form.Input label='Email' placeholder='Email' />
            <Form.Input required label='Phone Number' placeholder='(xxx) xxx-xxxx' />
          </Form.Group>
          <Form.Group>
            <Form.Input className='thirteen wide field' label='Home Address' placeholder='Street Address' />
            <Form.Input className='three wide field' label='Apt' placeholder='Apt #' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='City' placeholder='City' />
            <Form.Select label='State' search selection options={stateList} placeholder='State' />
            <Form.Input label='Zip Code' placeholder='Zip Code' />
          </Form.Group>


          <p><b>Marital Status</b></p>
          <Form.Group widths='equal'>
            <Form.Checkbox 
            radio 
            label='Married' 
            name='maritalStatus'
            value='Married'
            checked={this.state.maritalStatus === 'Married'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='Single' 
            name='maritalStatus'
            value='Single'
            checked={this.state.maritalStatus === 'Single'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox radio label='Divorced' 
            name='maritalStatus'
            value='Divorced'
            checked={this.state.maritalStatus === 'Divorced'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='Life Partner' 
            name='maritalStatus'
            value='Life Partner'
            checked={this.state.maritalStatus === 'Life Partner'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='Separated' 
            name='maritalStatus'
            value='Separated'
            checked={this.state.maritalStatus === 'Separated'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='Widowed' 
            name='maritalStatus'
            value='Widowed'
            checked={this.state.maritalStatus === 'Widowed'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='Other' 
            name='maritalStatus'
            value='Other'
            checked={this.state.maritalStatus === 'Other'}
            onChange={this.checkboxClickHandler} />
          </Form.Group>

          <p><b>Race</b></p>
          <Form.Group widths='equal'>
            <Form.Checkbox 
            radio 
            label='Black - Non Hispanic' 
            name='race'
            value='Black - Non Hispanic'
            checked={this.state.race === 'Black - Non Hispanic'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='American Indian/Alaskan Native' 
            name='race'
            value='American Indian/Alaskan Native'
            checked={this.state.race === 'American Indian/Alaskan Native'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='Hispanic' 
            name='race'
            value='Hispanic'
            checked={this.state.race === 'Hispanic'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='Asian/Pacific Islander' 
            name='race'
            value='Asian/Pacific Islander'
            checked={this.state.race === 'Asian/Pacific Islander'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='White - Non Hispanic' 
            name='race'
            value='White - Non Hispanic'
            checked={this.state.race === 'White - Non Hispanic'}
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox 
            radio 
            label='Other' 
            name='race'
            value='Other'
            checked={this.state.race === 'Other'}
            onChange={this.checkboxClickHandler} />
          </Form.Group>

          <p><b>Please check to indicate if you have ever had the following conditions:</b></p>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            label='Diabetes' 
            name='history'
            value='Diabetes'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Kidney disease' 
            name='history'
            value='Kidney disease'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Stroke' 
            name='history'
            value='Stroke'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Tuberculosis' 
            name='history'
            value='Tuberculosis'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            label='Arrythmia' 
            name='history'
            value='Arrythmia'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='High blood pressure' 
            name='history'
            value='High blood pressure'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Hepatitis' 
            name='history'
            value='Hepatitis'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Depression' 
            name='history'
            value='Depression'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            label='Coronary Artery Disease' 
            name='history'
            value='Coronary Artery Disease'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Sexually transmitted disease' 
            name='history'
            value='Sexually transmitted disease'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Asthma' 
            name='history'
            value='Asthma'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Thyroid disease' 
            name='history'
            value='Thyroid disease'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            label='Emphysema' 
            name='history'
            value='Emphysema'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Congestive Heart Failure' 
            name='history'
            value='Congestive Heart Failure'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Heart attack' 
            name='history'
            value='Heart attack'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            label='Seizures' 
            name='history'
            value='Seizures'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Checkbox  
            label='Cancer' 
            name='history'
            value='Cancer'
            onChange={this.checkboxClickHandler} />
          </Form.Group>




          <Form.TextArea autoHeight label='Medication allergies or reactions' placeholder='Please list any medication allergies or reactions' />
          <Form.TextArea autoHeight label='Current medications' placeholder='Please list any medications that you are currently taking. Include non-prescription medications and vitamins or supplements' />
          <Form.TextArea label='Other comments' placeholder='Tell us more' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tincidunt tellus. Sed laoreet nisl sed dui semper bibendum. Sed blandit, enim vel hendrerit feugiat, mi enim consectetur ante, id pellentesque mi erat sit amet orci. Proin nisi augue, tincidunt ut varius tincidunt, cursus non nisi. Nunc sapien velit, pellentesque sed consectetur in, ultricies in arcu. Vivamus at odio ut neque lacinia semper et egestas tortor. Aliquam lacus est, hendrerit in dictum bibendum, ornare at ipsum. Donec id eros eget lacus varius ultricies. Mauris risus erat, tempor dapibus eros id, rhoncus ultrices lectus. Sed porta, nunc non cursus vehicula, felis nibh euismod odio, et dictum eros nulla eget mi.</p>
          <br />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button floated='right' color='teal' type='submit'>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}