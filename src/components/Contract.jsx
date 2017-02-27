import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

export default class Contract extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tincidunt tellus. Sed laoreet nisl sed dui semper bibendum. Sed blandit, enim vel hendrerit feugiat, mi enim consectetur ante, id pellentesque mi erat sit amet orci. Proin nisi augue, tincidunt ut varius tincidunt, cursus non nisi. Nunc sapien velit, pellentesque sed consectetur in, ultricies in arcu. Vivamus at odio ut neque lacinia semper et egestas tortor. Aliquam lacus est, hendrerit in dictum bibendum, ornare at ipsum. Donec id eros eget lacus varius ultricies. Mauris risus erat, tempor dapibus eros id, rhoncus ultrices lectus. Sed porta, nunc non cursus vehicula, felis nibh euismod odio, et dictum eros nulla eget mi.</p>
        <br />
        <Form.Checkbox 
        required
        label='I agree to the Terms and Conditions' 
        onClick={this.props.clickHandler}/>
      </div>
    );
  }
}

