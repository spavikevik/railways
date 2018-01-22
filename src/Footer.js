import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

const style = {
  margin: 0,
}

export default class Footer extends Component {
  scrollToTop = () => {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <Menu text style={style}>
        <Menu.Item icon="chevron up" name="top" onClick={this.scrollToTop} position="right">Back to top</Menu.Item>
      </Menu>
    );
  }
}