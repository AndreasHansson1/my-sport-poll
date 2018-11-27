import React from 'react';
import './Header.css';
import image from '../../assets/images/Sport-Transparent-PNG.png';

const Header = () => {
  return (
    <div className="header-wrapper">
      <img src={image} alt="" />
      <h1>FORTUNA</h1>
    </div>
  );
};

export default Header;
