import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import videoSVG from '../images/video-solid.svg';
import bookAppSVG from '../images/plus-solid.svg';

class AppointmentsOverview extends Component {
  componentDidUpdate() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="app-main">
        <div className="app-main__breadcrumbs"></div>
        <div className="app-main__heading">
          <h1>Appointments</h1>
          <Link to="/booking">
            <span className="book-apointment">
              <img src={bookAppSVG} alt="" style={{ height: 20 }} />
            </span>
          </Link>
        </div>
        <div className="app-main__body">
          <h2>Upcoming</h2>
          <ul className="app-main__menu">
            <li className="app-main__menu-link">
              <Link to="/" className="appointment-link">
                <span className="appointment-img">
                  <img src={videoSVG} alt="" style={{ height: 30 }} />
                </span>
                <div className="link-text">
                  <span className="link-text__title">Title</span>
                  <span className="link-text__details">Details - GP</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AppointmentsOverview
