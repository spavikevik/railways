import React, { Component } from 'react';
import { Form, Segment, Divider } from 'semantic-ui-react';
import Footer from './Footer';

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
        <Divider />
        <Footer />
        <div ref={bottom => { this.bottom = bottom; }} />
      </div>
    );
  }
}