import React, { Component } from 'react';
import logo from '../images/logo.png';
import calendarSVG from '../images/calendar-alt-regular.svg';
import calendarPlusSVG from '../images/calendar-plus-regular.svg';
import userPlusSVG from '../images/user-plus-solid.svg';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <nav className="app-nav">
          <a href="/" className="app-nav__link">
            <img src={calendarPlusSVG} alt="Book Appointment SVG" style={{ height: 20 }} className="app-nav__icon" />
            Book
          </a>
          <a href="/" className="app-nav__link">
            <img src={calendarSVG} alt="View Appointments SVG" style={{ height: 20 }} className="app-nav__icon" />
            Appointments
          </a>
          <a href="/" className="app-nav__link">
            <img src={userPlusSVG} alt="Family Members SVG" style={{ height: 20 }} className="app-nav__icon" />
            Family Members
          </a>
        </nav>
        <span className="user-profile">JD</span>
      </header>
    )
  }
}

export default Header
