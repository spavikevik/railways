import React, { Component } from 'react';
import { Menu, Divider } from 'semantic-ui-react';

export default class Footer extends Component {
  scrollToTop = () => {
    document.body.scrollTop = 0;
  }

  render() {
    return (
      <div className="footer">
        <Divider horizontal />
        <Menu text>
          <Menu.Item onClick={this.scrollToTop}>Back to top</Menu.Item>
        </Menu>
      </div>
    );
  }
}