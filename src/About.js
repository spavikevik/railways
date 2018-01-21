import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import Footer from './Footer';
import './App.css';

const style = {
  padding: "2em 2em",
  border: "none",
  boxShadow: "none"
}

export default class About extends Component {
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
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nam sit amet metus elit. Quisque tincidunt ultrices eros, eu congue nisi tincidunt ac. 
          Fusce eu est quam. Praesent mollis sit amet est vel interdum. 
          Nam commodo dui ut sagittis vestibulum. Aliquam erat volutpat. 
          In ut sapien eleifend, congue ante eu, venenatis nulla. 
          Aenean vestibulum magna eu turpis sodales, ac sagittis lorem congue. 
          Cras risus ex, lacinia nec massa vitae, laoreet varius lectus. 
          Praesent eget molestie urna. Sed a laoreet arcu, at posuere augue. 
          Aenean porta pulvinar sapien ultrices auctor.
          </p>
          <p>
          Integer sodales orci vel est posuere imperdiet. Donec tincidunt scelerisque nisl consequat efficitur. 
          Cras elementum libero augue, sed elementum erat vestibulum sed. 
          Pellentesque sagittis tortor eu lectus rutrum, eget vulputate eros auctor. 
          Sed tempus, felis et gravida condimentum, turpis lectus convallis nunc, id semper nunc risus sit amet sem. 
          Sed facilisis velit id faucibus tincidunt. Ut quis suscipit nibh. 
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
          Nunc molestie dapibus commodo. Mauris gravida dignissim odio a aliquet. 
          Pellentesque vitae dolor vel neque ultricies semper. Sed finibus sit amet velit id rhoncus. 
          Morbi maximus tincidunt consectetur. Quisque et porttitor velit, non rhoncus eros. 
          Donec eleifend eleifend tellus, sed cursus ipsum tempus sit amet.
          </p>
          <p>
          Curabitur tincidunt massa sed feugiat congue. Nam bibendum lorem eget luctus ultricies. 
          Pellentesque venenatis lectus at molestie tincidunt. 
          Maecenas porttitor, justo in eleifend accumsan, orci est viverra tellus, eleifend varius lacus diam sed lacus. 
          Vivamus eget dictum purus, vitae interdum elit. 
          Cras sed felis ac lacus condimentum lacinia a sed tellus. 
          Duis nulla sapien, sagittis condimentum tempor vitae, laoreet sed mi. 
          Nulla porta dignissim mi, volutpat eleifend odio ullamcorper at. 
          Suspendisse vitae iaculis est. Sed scelerisque, augue nec molestie malesuada, 
          sem nibh lacinia neque, in pulvinar urna metus vitae nunc. Pellentesque augue quam, 
          sollicitudin et laoreet ut, fermentum eget orci. Suspendisse lobortis sem ac vulputate cursus.
          </p>
        </Segment>
       <div ref={bottom => { this.bottom = bottom; }} />
       <Footer />
      </div>
    );
  }
}