import React from 'react';
import { Checkbox, Form, Input, TextArea } from 'semantic-ui-react';

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

  render() {
    return (
      <div>
        <p><b>Please check to indicate if you have ever had the following conditions:</b></p>
        <Form.Group widths='equal'>
          <Form.Checkbox  
          name='history'
          label='Cancer' 
          value='Cancer'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Diabetes' 
          value='Diabetes'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Hypertension' 
          value='Hypertension'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Coronary Artery Disease' 
          value='Coronary Artery Disease'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Kidney disease' 
          value='Kidney disease'
          onChange={this.props.clickHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Checkbox  
          name='history'
          label='Congestive Heart Failure' 
          value='Congestive Heart Failure'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Heart attack' 
          value='Heart attack'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Stroke' 
          value='Stroke'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Arrythmia' 
          value='Arrythmia'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Deep vein thrombosis' 
          value='Deep vein thrombosis'
          onChange={this.props.clickHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Checkbox  
          name='history'
          label='Asthma' 
          value='Asthma'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Chronic Obstructive Pulmonary Disease' 
          value='Chronic Obstructive Pulmonary Disease'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Tuberculosis' 
          value='Tuberculosis'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Gastro esophageal reflux disease'
          value='Gastro esophageal reflux disease'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Irratable bowel syndrome'
          value='Irratable bowel syndrome'
          onChange={this.props.clickHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Checkbox  
          name='history'
          label='Inflammatory bowel disease'
          value='Inflammatory bowel disease'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Hepatitis' 
          value='Hepatitis'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Cirrhosis' 
          value='Cirrhosis'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Kidney Disease' 
          value='Kidney Disease'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Thyroid disease' 
          value='Thyroid disease'
          onChange={this.props.clickHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Checkbox  
          name='history'
          label='Arthritis' 
          value='Arthritis'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Back pain' 
          value='Back pain'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Seizures' 
          value='Seizures'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Depression' 
          value='Depression'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Bipolar' 
          value='Bipolar'
          onChange={this.props.clickHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Checkbox  
          name='history'
          label='Anxiety' 
          value='Anxiety'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Psychotic disorder' 
          value='Psychotic disorder'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='Substance abuse' 
          value='Substance abuse'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='HIV' 
          value='HIV'
          onChange={this.props.clickHandler} />
          <Form.Checkbox  
          name='history'
          label='STDs' 
          value='STDs'
          onChange={this.props.clickHandler} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input 
          required
          name='smoke'
          label='Do you smoke any tobacco products?' 
          placeholder='If yes, how much and how often?' 
          onChange={this.props.onChangeHandler} />
          <Form.Input 
          required
          name='alcohol'
          label='Do you drink alcohol?' 
          placeholder='If yes, how much and how often?' 
          onChange={this.props.onChangeHandler} />
          <Form.Input
          required 
          name='drugs'
          label='Have you regularly used other drugs?' 
          placeholder='If yes, how much and how often?' 
          onChange={this.props.onChangeHandler} />
        </Form.Group>
        <Form.TextArea 
          autoHeight 
          name='medications'
          label='Current medications' 
          placeholder='Please list any medications that you are currently taking. Include non-prescription medications and vitamins or supplements (Medication name / Dosage)'
          onChange={this.props.onChangeHandler} />
          <Form.TextArea 
          autoHeight 
          name='allergies'
          label='Medication allergies or reactions' 
          placeholder='Please list any medication allergies or reactions'
          onChange={this.props.onChangeHandler} />
          <Form.TextArea 
          autoHeight 
          name='surgeries'
          label='Please list any surgeries or hospital stays you had and their approximate date / year' placeholder='Type of surgery / reason for hospitalization / location / date'
          onChange={this.props.onChangeHandler} />
          <Form.TextArea 
          name='otherComments'
          label='Other comments' 
          placeholder='Other important information we may have missed'
          onChange={this.props.onChangeHandler} />
      </div>
    );
  }
}
