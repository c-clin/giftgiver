import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Gift extends Component {
  state = {
    person: '',
    present: ''
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Form.Label>Person</Form.Label>
            <FormControl
              className="input-person"
              value={this.state.person}
              onChange={e => {
                this.setState({ person: e.target.value });
              }}
              name="person"
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Present</Form.Label>
            <FormControl
              className="input-present"
              value={this.state.present}
              onChange={e => {
                this.setState({ present: e.target.value });
              }}
              name="present"
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;
