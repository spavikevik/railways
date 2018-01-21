import React, { Component } from 'react';
import { Form, Segment } from 'semantic-ui-react';

const style = {
  padding: "2em 2em",
  border: "none",
  boxShadow: "none"
}

export default class Routes extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.bottom.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div>
        <Segment style={style}>
          <Form>
            <Form.Input icon="location arrow" size="massive" label="From" placeholder="Skopje" />
            <Form.Input icon="marker" size="massive" label="Destination" placeholder="Beograd" />
          </Form>
        </Segment>
        <div ref={bottom => { this.bottom = bottom; }} />
      </div>
    );
  }
}