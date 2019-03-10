import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userSVG from '../images/user-solid.svg';
import calendarSVG from '../images/calendar-alt-regular.svg';
import userRegSVG from '../images/user-regular.svg';

class Home extends Component {
  render() {
    return (
      <div className="app-home">
        <div className="app-home__profile-pic">
          <span className="profile-pic">
            <img src={userSVG} alt="User Profile SVG" style={{ height: 30 }} />
          </span>
        </div>
        <div className="app-home__heading">
          <h1>Jane Doe</h1>
        </div>
        <div className="app-home__body">
          <h2>Clinical Records</h2>
          <ul className="app-home__menu">
            <li className="app-home__menu-link">
              <Link to="/">
                <img src={calendarSVG} alt="" className="link-img" style={{ height: 16 }} />
                <span className="link-text">Appointments</span>
              </Link>
            </li>
            <li className="app-home__menu-link">
              <Link to="/">
                <img src={userRegSVG} alt="" className="link-img" style={{ height: 16 }} />
                <span className="link-text">Personal Details</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
