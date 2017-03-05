import React from 'react';
import { Checkbox, Form, Input, TextArea, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setInputValue } from '../actions/patientActions';

const options = [
{'options' : ['Cancer', 'Heart Disease', 'Diabetes', 'Stroke', 'High Blood Pressure', 'High Cholesterol']},
{'options' : ['Liver Disease', 'Alcohol / Drug Abuse', 'Anxiety / Depression', 'Tuberculosis', 'Anesthesia Complications', 'Genetic Disorder']},
];

@connect((store) => {
  return {
    familyHistory: store.patient.familyHistory,
  };
})

export default class FamilyHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  checkboxClickHandler = (e, { name, value, member }) => {
    var tempObj = this.props.familyHistory;
    var tempArr = this.props.familyHistory[member];
    !tempArr.includes(value) ? tempArr.push(value) : tempArr.splice(tempArr.indexOf(value), 1);
    tempObj[member] = tempArr; 
    this.props.dispatch(setInputValue(name, tempObj));
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <p><b>Please check to indicate if the following family members have ever had the conditions:</b></p>
        <Divider />
        <p><b>Grandparents:</b></p>
        {options.map((row, key) => {
          return <Form.Group key={key} widths='equal'>
            {row.options.map((option, key) => {
              return <Form.Checkbox
              key={key}  
              name='familyHistory'
              member='grandparents'
              label={option} 
              value={option}
              checked={this.props.familyHistory.grandparents.includes(option)}
              onChange={this.checkboxClickHandler} />
            })}
          </Form.Group>
        })}
        <Divider />
        <p><b>Father:</b></p>
        {options.map((row, key) => {
          return <Form.Group key={key} widths='equal'>
            {row.options.map((option, key) => {
              return <Form.Checkbox
              key={key}  
              name='familyHistory'
              member='father'
              label={option} 
              value={option}
              checked={this.props.familyHistory.father.includes(option)}
              onChange={this.checkboxClickHandler} />
            })}
          </Form.Group>
        })}
        <Divider />
        <p><b>Mother:</b></p>
        {options.map((row, key) => {
          return <Form.Group key={key} widths='equal'>
            {row.options.map((option, key) => {
              return <Form.Checkbox
              key={key}  
              name='familyHistory'
              member='mother'
              label={option} 
              value={option}
              checked={this.props.familyHistory.mother.includes(option)}
              onChange={this.checkboxClickHandler} />
            })}
          </Form.Group>
        })}
        <Divider />
        <p><b>Siblings:</b></p>
        {options.map((row, key) => {
          return <Form.Group key={key} widths='equal'>
            {row.options.map((option, key) => {
              return <Form.Checkbox
              key={key}  
              name='familyHistory'
              member='siblings'
              label={option} 
              value={option}
              checked={this.props.familyHistory.siblings.includes(option)}
              onChange={this.checkboxClickHandler} />
            })}
          </Form.Group>
        })}
        <Divider />
        <p><b>Children:</b></p>
        {options.map((row, key) => {
          return <Form.Group key={key} widths='equal'>
            {row.options.map((option, key) => {
              return <Form.Checkbox
              key={key}  
              name='familyHistory'
              member='children'
              label={option} 
              value={option}
              checked={this.props.familyHistory.children.includes(option)}
              onChange={this.checkboxClickHandler} />
            })}
          </Form.Group>
        })}
      </div>
    );
  }
}
