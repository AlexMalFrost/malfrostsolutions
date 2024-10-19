import React from 'react';
import Logo from '../Logo/Logo';
import Menu from './Menu/Menu';
import './Header.scss';

/**
 * Header component that renders the application logo and menu.
 */
const Header: React.FC = () => {
  return (
    <div className="header">
      {/* Render the Logo component */}
      <Logo />
      {/* Render the Menu component */}
      <Menu />
    </div>
  );
};

export default Header;
