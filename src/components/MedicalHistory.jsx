import React from 'react';
import { Checkbox, Form, Input, TextArea, Divider } from 'semantic-ui-react';
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
  };
})

export default class MedicalHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  checkboxClickHandler = (e, { name, value }) => {
    var tempArr = this.props.history;
    !tempArr.includes(value) ? tempArr.push(value) : tempArr.splice(tempArr.indexOf(value), 1);
    this.props.dispatch(setInputValue(name, tempArr));
    this.forceUpdate();
  }

  onChangeHandler = (e, { name, value }) => {
    this.props.dispatch(setInputValue(name, value));
  }

  radioChangeHandler = (e, { name, value, objprop }) => {
    var tempObj = this.props[name];
    if (value === "No") {
      tempObj.frequency = null;
    }
    tempObj[objprop] = value;  
    this.props.dispatch(setInputValue(name, tempObj));
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <p><b>Please check to indicate if you have ever had the following conditions:</b></p>
        {options.map((row, key) => {
          return <Form.Group key={key} widths='equal'>
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
        <Divider />
        <label><b>Do you smoke any tobacco products?</b></label>
        <Form.Group>
          <Form.Checkbox 
            radio 
            className='three wide field'
            name='smoke'
            objprop='smoke'
            label='Yes' 
            value='Yes'
            checked={this.props.smoke.smoke === 'Yes'}
            onChange={this.radioChangeHandler} />
          <Form.Checkbox 
            radio 
            className='three wide field'
            name='smoke'
            objprop='smoke'
            label='No' 
            value='No'
            checked={this.props.smoke.smoke === 'No'}
            onChange={this.radioChangeHandler} />
          {this.props.smoke.smoke === "Yes" && <Form.Input 
            className='ten wide field'
            name='smoke' 
            objprop='frequency'
            placeholder='How much and how often?' 
            value={this.props.smoke.frequency}
            onChange={this.radioChangeHandler} />}
        </Form.Group>
        <Divider />
        <label><b>Do you drink alcohol?</b></label>
        <Form.Group>
          <Form.Checkbox 
            radio 
            className='three wide field'
            name='alcohol'
            objprop='alcohol'
            label='Yes' 
            value='Yes'
            checked={this.props.alcohol.alcohol === 'Yes'}
            onChange={this.radioChangeHandler} />
          <Form.Checkbox 
            radio 
            className='three wide field'
            name='alcohol'
            objprop='alcohol'
            label='No' 
            value='No'
            checked={this.props.alcohol.alcohol === 'No'}
            onChange={this.radioChangeHandler} />
          {this.props.alcohol.alcohol === "Yes" && <Form.Input 
            className='ten wide field'
            name='alcohol' 
            objprop='frequency'
            placeholder='How much and how often?' 
            value={this.props.alcohol.frequency}
            onChange={this.radioChangeHandler} />}
        </Form.Group>
        <Divider />
        <label><b>Have you regularly used illicit drugs?</b></label>
        <Form.Group>
          <Form.Checkbox 
            radio 
            className='three wide field'
            name='drugs'
            objprop='drugs'
            label='Yes' 
            value='Yes'
            checked={this.props.drugs.drugs === 'Yes'}
            onChange={this.radioChangeHandler} />
          <Form.Checkbox 
            radio 
            className='three wide field'
            name='drugs'
            objprop='drugs'
            label='No' 
            value='No'
            checked={this.props.drugs.drugs === 'No'}
            onChange={this.radioChangeHandler} />
          {this.props.drugs.drugs === "Yes" && <Form.Input 
            className='ten wide field'
            name='drugs'
            objprop='frequency' 
            placeholder='How much and how often?' 
            value={this.props.drugs.frequency}
            onChange={this.radioChangeHandler} />}
        </Form.Group>

        <Form.TextArea  
          name='medications'
          label='Current medications' 
          placeholder='Please list any medications that you are currently taking. Include non-prescription medications and vitamins or supplements (Medication name / Dosage)'
          value={this.props.medications}
          onChange={this.onChangeHandler} />
          <Form.TextArea  
          name='allergies'
          label='Medication allergies or reactions' 
          placeholder='Please list any medication allergies or reactions'
          value={this.props.allergies}
          onChange={this.onChangeHandler} />
          <Form.TextArea  
          name='surgeries'
          label='Please list any surgeries or hospital stays you had and their approximate date / year' placeholder='Type of surgery / reason for hospitalization / location / date'
          value={this.props.surgeries}
          onChange={this.onChangeHandler} />
      </div>
    );
  }
}
