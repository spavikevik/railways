import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  state = { activeItem: 'home' };

  onItemClick = (path) => {
    return (e, { name }) => {
     this.setState({ activeItem: name });
     this.props.history.push(path);
    }
  }

  render() {
    const { activeItem } = this.state;
    const { inverted } = this.props;

    return (
      <div className="menu">
        <Menu pointing secondary inverted={inverted}>
          <Menu.Item  name="home" active={activeItem === 'home'} onClick={this.onItemClick('/')} />
          <Menu.Item name="schedule" active={activeItem === 'schedule'} onClick={this.onItemClick('/schedule')} />
          <Menu.Item name="routes" active={activeItem === 'routes'} onClick={this.onItemClick('/routes')} />
          <Menu.Item name="about" active={activeItem === 'about'} onClick={this.onItemClick('about')} />
          <Menu.Item name="contact" active={activeItem === 'contact'} onClick={this.onItemClick('/contact')} />
        </Menu>
      </div>
    )
  }
}

export default withRouter(Navigation);