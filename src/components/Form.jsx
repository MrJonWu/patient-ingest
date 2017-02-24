import React from 'react';
import { Button, Checkbox, Form, TextArea, Container } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
];

export default class IngestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input label='First Name' placeholder='First Name' />
            <Form.Input label='Last Name' placeholder='Last Name' />
            <Form.Select label='Gender' options={options} placeholder='Gender' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input label='Date of Birth' placeholder='dd/mm/yyyy' />
            <Form.Input label='Email' placeholder='Email' />
            <Form.Input label='Phone Number' placeholder='Phone Number' />
          </Form.Group>
          <Form.Input label='Address' placeholder='Street Address' />
          <Form.Group widths='equal'>
            <Form.Input label='City' placeholder='City' />
            <Form.Input label='State' placeholder='State' />
            <Form.Input label='Zip Code' placeholder='Zip Code' />
          </Form.Group>
          <Form.TextArea label='Tell us more' placeholder='Tell us more' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tincidunt tellus. Sed laoreet nisl sed dui semper bibendum. Sed blandit, enim vel hendrerit feugiat, mi enim consectetur ante, id pellentesque mi erat sit amet orci. Proin nisi augue, tincidunt ut varius tincidunt, cursus non nisi. Nunc sapien velit, pellentesque sed consectetur in, ultricies in arcu. Vivamus at odio ut neque lacinia semper et egestas tortor. Aliquam lacus est, hendrerit in dictum bibendum, ornare at ipsum. Donec id eros eget lacus varius ultricies. Mauris risus erat, tempor dapibus eros id, rhoncus ultrices lectus. Sed porta, nunc non cursus vehicula, felis nibh euismod odio, et dictum eros nulla eget mi.</p>
          <br />
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Form.Button floated='right' color='teal' type='submit'>Submit</Form.Button>
        </Form>
      </Container>
    );
  }
}