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

  // inputChangeHandler = (e) => {
  //   this.setState({[e.target.name]: e.target.value}, () => console.log(this.state));
  // };

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

          <Form.Group widths='equal'>
            <Form.Input 
            required 
            name='firstName' 
            label='First Name'
            placeholder='First Name' 
            onChange={this.onChangeHandler} />
            <Form.Input
            required 
            name='lastName' 
            label='Last Name' 
            placeholder='Last Name' 
            onChange={this.onChangeHandler} />
            <Form.Select 
            required
            name='gender' 
            label='Gender' 
            options={options} 
            placeholder='Gender' 
            onChange={this.onChangeHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input 
            required
            type='date' 
            name='dateOfBirth' 
            label='Date of Birth' 
            placeholder='mm/dd/yyyy' 
            onChange={this.onChangeHandler} />
            <Form.Input
            required 
            name='email' 
            label='Email' 
            type='email' 
            placeholder='Email' 
            onChange={this.onChangeHandler} />
            <Form.Input 
            required
            name='phone' 
            label='Phone Number' 
            placeholder='(xxx) xxx-xxxx' 
            onChange={this.onChangeHandler} />
          </Form.Group>
          <Form.Group>
            <Form.Input 
            className='thirteen wide field' 
            required
            name='street' 
            label='Home Address' 
            placeholder='Street Address' 
            onChange={this.onChangeHandler} />
            <Form.Input 
            className='three wide field' 
            name='apt' 
            label='Apt' 
            placeholder='Apt #' 
            onChange={this.onChangeHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input 
            required
            label='City' 
            name='city' 
            placeholder='City' 
            onChange={this.onChangeHandler} />
            <Form.Select 
            required
            label='State' 
            name='state' 
            search 
            selection 
            options={stateList} 
            placeholder='State' 
            onChange={this.onChangeHandler} />
            <Form.Input 
            required
            type='number' 
            name='zipcode' 
            label='Zip Code' 
            placeholder='Zip Code' 
            onChange={this.onChangeHandler} />
          </Form.Group>


          <p><b>Marital Status</b></p>
          <Form.Group widths='equal'>
            <Form.Checkbox 
            radio 
            name='maritalStatus'
            label='Married' 
            value='Married'
            checked={this.state.maritalStatus === 'Married'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='maritalStatus'
            label='Single' 
            value='Single'
            checked={this.state.maritalStatus === 'Single'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='maritalStatus'
            label='Divorced' 
            value='Divorced'
            checked={this.state.maritalStatus === 'Divorced'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='maritalStatus'
            label='Life Partner' 
            value='Life Partner'
            checked={this.state.maritalStatus === 'Life Partner'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='maritalStatus'
            label='Separated' 
            value='Separated'
            checked={this.state.maritalStatus === 'Separated'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='maritalStatus'
            label='Widowed' 
            value='Widowed'
            checked={this.state.maritalStatus === 'Widowed'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='maritalStatus'
            label='Other' 
            value='Other'
            checked={this.state.maritalStatus === 'Other'}
            onChange={this.onChangeHandler} />
          </Form.Group>

          <p><b>Race</b></p>
          <Form.Group widths='equal'>
            <Form.Checkbox 
            radio 
            name='race'
            label='Black - Non Hispanic' 
            value='Black - Non Hispanic'
            checked={this.state.race === 'Black - Non Hispanic'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='American Indian/Alaskan Native' 
            value='American Indian/Alaskan Native'
            checked={this.state.race === 'American Indian/Alaskan Native'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Hispanic' 
            value='Hispanic'
            checked={this.state.race === 'Hispanic'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Asian/Pacific Islander' 
            value='Asian/Pacific Islander'
            checked={this.state.race === 'Asian/Pacific Islander'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='White - Non Hispanic' 
            value='White - Non Hispanic'
            checked={this.state.race === 'White - Non Hispanic'}
            onChange={this.onChangeHandler} />
            <Form.Checkbox 
            radio 
            name='race'
            label='Other' 
            value='Other'
            checked={this.state.race === 'Other'}
            onChange={this.onChangeHandler} />
          </Form.Group>

          <p><b>Please check to indicate if you have ever had the following conditions:</b></p>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            name='history'
            label='Cancer' 
            value='Cancer'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Diabetes' 
            value='Diabetes'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Hypertension' 
            value='Hypertension'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Coronary Artery Disease' 
            value='Coronary Artery Disease'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Kidney disease' 
            value='Kidney disease'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            name='history'
            label='Congestive Heart Failure' 
            value='Congestive Heart Failure'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Heart attack' 
            value='Heart attack'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Stroke' 
            value='Stroke'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Arrythmia' 
            value='Arrythmia'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Deep vein thrombosis' 
            value='Deep vein thrombosis'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            name='history'
            label='Asthma' 
            value='Asthma'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Chronic Obstructive Pulmonary Disease' 
            value='Chronic Obstructive Pulmonary Disease'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Tuberculosis' 
            value='Tuberculosis'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Gastro esophageal reflux disease'
            value='Gastro esophageal reflux disease'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Irratable bowel syndrome'
            value='Irratable bowel syndrome'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            name='history'
            label='Inflammatory bowel disease'
            value='Inflammatory bowel disease'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Hepatitis' 
            value='Hepatitis'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Cirrhosis' 
            value='Cirrhosis'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Kidney Disease' 
            value='Kidney Disease'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Thyroid disease' 
            value='Thyroid disease'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            name='history'
            label='Arthritis' 
            value='Arthritis'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Back pain' 
            value='Back pain'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Seizures' 
            value='Seizures'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Depression' 
            value='Depression'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Bipolar' 
            value='Bipolar'
            onChange={this.checkboxClickHandler} />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Checkbox  
            name='history'
            label='Anxiety' 
            value='Anxiety'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Psychotic disorder' 
            value='Psychotic disorder'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='Substance abuse' 
            value='Substance abuse'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='HIV' 
            value='HIV'
            onChange={this.checkboxClickHandler} />
            <Form.Checkbox  
            name='history'
            label='STDs' 
            value='STDs'
            onChange={this.checkboxClickHandler} />
          </Form.Group>


          <Form.Group widths='equal'>
            <Form.Input 
            required
            name='smoke'
            label='Do you smoke any tobacco products?' 
            placeholder='If yes, how much and how often?' 
            onChange={this.onChangeHandler} />
            <Form.Input 
            required
            name='alcohol'
            label='Do you drink alcohol?' 
            placeholder='If yes, how much and how often?' 
            onChange={this.onChangeHandler} />
            <Form.Input
            required 
            name='drugs'
            label='Have you regularly used other drugs?' 
            placeholder='If yes, how much and how often?' 
            onChange={this.onChangeHandler} />
          </Form.Group>

          <Form.TextArea 
          autoHeight 
          name='medications'
          label='Current medications' 
          placeholder='Please list any medications that you are currently taking. Include non-prescription medications and vitamins or supplements (Medication name / Dosage)'
          onChange={this.onChangeHandler} />
          <Form.TextArea 
          autoHeight 
          name='allergies'
          label='Medication allergies or reactions' 
          placeholder='Please list any medication allergies or reactions'
          onChange={this.onChangeHandler} />
          <Form.TextArea 
          autoHeight 
          name='surgeries'
          label='Please list any surgeries or hospital stays you had and their approximate date / year' placeholder='Type of surgery / reason for hospitalization / location / date'
          onChange={this.onChangeHandler} />
          <Form.TextArea 
          name='otherComments'
          label='Other comments' 
          placeholder='Other important information we may have missed'
          onChange={this.onChangeHandler} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tincidunt tellus. Sed laoreet nisl sed dui semper bibendum. Sed blandit, enim vel hendrerit feugiat, mi enim consectetur ante, id pellentesque mi erat sit amet orci. Proin nisi augue, tincidunt ut varius tincidunt, cursus non nisi. Nunc sapien velit, pellentesque sed consectetur in, ultricies in arcu. Vivamus at odio ut neque lacinia semper et egestas tortor. Aliquam lacus est, hendrerit in dictum bibendum, ornare at ipsum. Donec id eros eget lacus varius ultricies. Mauris risus erat, tempor dapibus eros id, rhoncus ultrices lectus. Sed porta, nunc non cursus vehicula, felis nibh euismod odio, et dictum eros nulla eget mi.</p>
          <br />
          <Form.Checkbox 
          required
          label='I agree to the Terms and Conditions' />

          <Form.Button 
          floated='right' 
          color='teal' 
          type='submit'>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}