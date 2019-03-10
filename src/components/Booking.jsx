import React, { Component } from 'react';
import moment from 'moment';
import TimePickerModal from './TimePickerModal';
import userSVG from '../images/user-solid.svg';

class Booking extends Component {
  render() {

    const placeHolderSlots = [
      "2019-11-27T10:11:00.000Z",
      "2019-12-27T11:12:30.000Z",
      "2019-01-02T13:13:30.000Z",
      "2019-01-16T12:14:00.000Z",
      "2019-01-10T15:15:00.000Z",
      "2019-12-01T14:16:30.000Z",
      "2019-10-08T16:17:30.000Z",
      "2019-11-16T16:18:30.000Z",
      "2019-12-26T17:19:00.000Z",
      "2019-09-23T18:20:00.000Z",
      "2019-08-30T19:21:30.000Z"
    ]

    return (
      <div className="app-main">
        <TimePickerModal />
        <div className="app-main__breadcrumbs"></div>
        <div className="app-main__heading">
          <h1>New Appointment</h1>
        </div>
        <div className="app-main__profile-pic">
          <span className="profile-pic">
            <img src={userSVG} alt="User Profile SVG" style={{ height: 30 }} />
          </span>
          <span className="profile-name">Jane Doe</span>
        </div>
        <div className="app-main__body">
          <h2>Date {'\u0026'} Time</h2>
          <div className="app-main__available-slots">
            <button className="secondary-btn active">{moment(placeHolderSlots[0]).format('MMMM Do, h:mm a')}</button>
            <button className="secondary-btn">{moment(placeHolderSlots[1]).format('MMMM Do, h:mm a')}</button>
            <button className="secondary-btn">{moment(placeHolderSlots[2]).format('MMMM Do, h:mm a')}</button>
            <button className="secondary-btn">Another Time</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Booking
