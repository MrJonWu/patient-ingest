import React from 'react';
import { Checkbox, Form, Input, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setInputValue } from '../actions/patientActions';

const options = [
{'options' : ['Cancer', 'Diabetes', 'Hypertension', 'Coronary Artery Disease', 'Congestive Heart Failure']},
{'options' : ['Heart attack', 'Stroke', 'Arrythmia', 'Deep vein thrombosis', 'Asthma']},
{'options' : ['Chronic Obstructive Pulmonary Disease', 'Tuberculosis', 'Gastro esophageal reflux disease', 'Irritable bowel syndrome', 'Inflammatory bowel disease']},
{'options' : ['Hepatitis', 'Cirrhosis', 'Kidney Disease', 'Thyroid disease', 'Arthritis']},
{'options' : ['Back pain', 'Seizures', 'Depression', 'Bipolar', 'Anxiety']},
{'options' : ['Psychotic disorder', 'Substance abuse', 'HIV', 'STDs', 'Eye disease']}
];

@connect((store) => {
  return {
    smoke: store.patient.smoke,
    alcohol: store.patient.alcohol,
    drugs: store.patient.drugs,
    medications: store.patient.medications,
    allergies: store.patient.allergies,
    surgeries: store.patient.surgeries,
    history: store.patient.history,
    otherComments: store.patient.otherComments
  };
})

export default class MedicalHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: '',
    };
  }

  onClickHandler = (e, { value }) => {
    this.setState({history: value});
  }

  checkboxClickHandler = (e, { name, value }) => {
    var tempArr = this.props.history;
    !tempArr.includes(value) ? tempArr.push(value) : tempArr.splice(tempArr.indexOf(value), 1);
    // this.setState({history: tempArr});
    this.props.dispatch(setInputValue(name, tempArr));
    this.forceUpdate();
  }

  onChangeHandler = (e, { name, value }) => {
    this.props.dispatch(setInputValue(name, value));
  }

  render() {
    return (
      <div>
        <p><b>Please check to indicate if you have ever had the following conditions:</b></p>
        {options.map((row, key) => {
          return <Form.Group key={key}widths='equal'>
            {row.options.map((option, key) => {
              return <Form.Checkbox
              key={key}  
              name='history'
              label={option} 
              value={option}
              checked={this.props.history.includes(option)}
              onChange={this.checkboxClickHandler} />
            })}
          </Form.Group>
        })}
        <Form.Group widths='equal'>
          <Form.Input 
          required
          name='smoke'
          label='Do you smoke any tobacco products?' 
          placeholder='If yes, how much and how often?'
          value={this.props.smoke} 
          onChange={this.onChangeHandler} />
          <Form.Input 
          required
          name='alcohol'
          label='Do you drink alcohol?' 
          placeholder='If yes, how much and how often?' 
          value={this.props.alcohol}
          onChange={this.onChangeHandler} />
          <Form.Input
          required 
          name='drugs'
          label='Have you regularly used other drugs?' 
          placeholder='If yes, how much and how often?'
          value={this.props.drugs} 
          onChange={this.onChangeHandler} />
        </Form.Group>
        <Form.TextArea 
          autoHeight 
          name='medications'
          label='Current medications' 
          placeholder='Please list any medications that you are currently taking. Include non-prescription medications and vitamins or supplements (Medication name / Dosage)'
          value={this.props.medications}
          onChange={this.onChangeHandler} />
          <Form.TextArea 
          autoHeight 
          name='allergies'
          label='Medication allergies or reactions' 
          placeholder='Please list any medication allergies or reactions'
          value={this.props.allergies}
          onChange={this.onChangeHandler} />
          <Form.TextArea 
          autoHeight 
          name='surgeries'
          label='Please list any surgeries or hospital stays you had and their approximate date / year' placeholder='Type of surgery / reason for hospitalization / location / date'
          value={this.props.surgeries}
          onChange={this.onChangeHandler} />
          <Form.TextArea 
          name='otherComments'
          label='Other comments' 
          placeholder='Other important information we may have missed'
          value={this.props.otherComments}
          onChange={this.onChangeHandler} />
      </div>
    );
  }
}
