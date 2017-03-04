import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import {States as stateList} from '../data/States.jsx';
import GeneralInformation from './GeneralInformation.jsx';
import MaritalStatus from './MaritalStatus.jsx';
import { connect } from 'react-redux';
import { nextScreen } from '../actions/screenActions';

@connect((store) => {
  return {
    screen: store.screen.screen
  };
})


export default class Screen1 extends React.Component {
  constructor(props) {
    super(props);
  }

  onNextHandler = (e) => {
    e.preventDefault();
    this.props.dispatch(nextScreen());
  }

  render() {
    return (
        <Form>
          <GeneralInformation />
          <MaritalStatus />
          <Button floated='right' color='teal' content="Next" onClick={this.onNextHandler} />
        </Form>
    );
  }
}