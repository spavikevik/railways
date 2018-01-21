import React from 'react';
import Navigation from './Navigation';
import logo from './logo.svg';

const Header = () => {
  return (
    <div className="header">
      <Navigation inverted />
      <div className="clear" />
      <img src={logo} alt="logo" className="logo" />
      <h1 className="header-title">Railways Company</h1>
    </div>
  );
}

export default Header;