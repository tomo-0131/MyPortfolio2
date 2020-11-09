import React from 'react';
import { Link } from'react-router-dom';
import "./Header.css";

class Header extends React.Component {
  render() {
    return(
      <div className= "header__link__list">
        <h2> TOMOYUKI KUMAGAI </h2>
        <div className= "header__list">
          <li className="header__list"><Link className="header__link" to="/">HOME</Link></li>
          <li className="header__list"><Link className="header__link" to="/about">ABOUT</Link></li>
          <li className="header__list"><Link className="header__link" to="/work">WORK</Link></li>
          <li className="header__list"><Link className="header__link" to="/contact">CONTACT</Link></li>
        </div>
      </div>
    )
  }
}

export default Header;
