import React, { Component } from 'react';
import { Grid, Input, Divider } from 'semantic-ui-react';
import ScheduleTable from './ScheduleTable';
import Footer from './Footer';
import './App.css';

export default class Schedule extends Component {
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
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <Input icon="search" placeholder="Search" />
            </Grid.Column>
            <Grid.Column width={13}>
              <ScheduleTable />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        <Footer />
       <div ref={bottom => { this.bottom = bottom; }} />
      </div>
    );
  }
}