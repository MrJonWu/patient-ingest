import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';
import GeneralInformation from './GeneralInformation.jsx';

export default class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Form>
        <GeneralInformation />
      </Form>
    );
  }
}