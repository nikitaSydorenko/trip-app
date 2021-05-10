import React from 'react';
import '../../styles/Header.css';
import line from '../../assets/Line.png';

const Header = ({ title }) => (
  <div className="headerr">
    <h2>{ title }</h2>
    {/* <img src={line} /> */}
  </div>
);

export default Header;
