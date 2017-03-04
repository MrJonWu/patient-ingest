import React from 'react';
// import IngestForm from './Form.jsx';
import IngestFormMultipage from './FormMultipage.jsx';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    firstName: store.patient.patient.name,
    age: store.patient.patient.age
  };
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props.age, this.props.firstName)
    return (
      <div>
        <IngestFormMultipage />
      </div>
    );
  }
}