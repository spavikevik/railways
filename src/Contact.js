import React, { Component } from 'react';
import { Form, Segment, Divider } from 'semantic-ui-react';
import Footer from './Footer';

const style = {
  padding: "2em 2em",
  border: "none",
  boxShadow: "none"
}

export default class Contact extends Component {
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
            <Form.Input label="Full name" placeholder="John Doe" />
            <Form.Input label="E-mail address" placeholder="john@example.com" />
            <Form.Input label="Subject" placeholder="Hello" />
            <Form.TextArea label="Message" placeholder="Tell us what's on your mind" rows={10} />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
        <Divider />
        <Footer />
        <div ref={bottom => { this.bottom = bottom; }} />
      </div>
    );
  }
}