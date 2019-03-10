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
        <nav>
          <a href="/"><img src={calendarPlusSVG} alt="Book Appointment SVG" /></a>
          <a href="/"><img src={calendarSVG} alt="View Appointments SVG" /></a>
          <a href="/"><img src={userPlusSVG} alt="Family Members SVG" /></a>
        </nav>
        <span className="user-profile">JD</span>
      </header>
    )
  }
}

export default Header
