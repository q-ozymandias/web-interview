import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import calendarSVG from '../images/calendar-alt-regular.svg';
import calendarPlusSVG from '../images/calendar-plus-regular.svg';
import userPlusSVG from '../images/user-plus-solid.svg';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <nav className="app-nav">
          <Link to="/" className="app-nav__link">
            <img src={calendarPlusSVG} alt="Book Appointment SVG" style={{ height: 20 }} className="app-nav__icon" />
            Book
          </Link>
          <Link to="/" className="app-nav__link">
            <img src={calendarSVG} alt="View Appointments SVG" style={{ height: 20 }} className="app-nav__icon" />
            Appointments
          </Link>
          <Link to="/" className="app-nav__link disabled" disabled>
            <img src={userPlusSVG} alt="Family Members SVG" style={{ height: 20 }} className="app-nav__icon" />
            Family Members
          </Link>
        </nav>
        <span className="user-profile">JD</span>
      </header>
    )
  }
}

export default Header
