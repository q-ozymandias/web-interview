import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import calendarSVG from '../images/calendar-alt-regular.svg';
import userRegSVG from '../images/user-regular.svg';

class Home extends Component {
  render() {
    return (
      <div className="app-main">
        <div className="app-main__profile-pic">
          {this.props.userAvatar &&
            <span className="profile-pic">
              <img src={this.props.userAvatar} alt="User Profile SVG" style={{ height: 50 }} />
            </span>
          }
        </div>
        <div className="app-main__heading">
          <h1>{this.props.userName}</h1>
        </div>
        <div className="app-main__body">
          <h2>Clinical Records</h2>
          <ul className="app-main__menu">
            <li className="app-main__menu-link">
              <Link to="/appointments" className="default-link">
                <img src={calendarSVG} alt="" className="link-img" style={{ height: 16 }} />
                <span className="link-text">Appointments</span>
              </Link>
            </li>
            <li className="app-main__menu-link">
              <Link to="/" className="default-link">
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
