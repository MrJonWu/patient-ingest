import React from 'react';
import IngestForm from './Form.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <IngestForm />
      </div>
    );
  }
}