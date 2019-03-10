import React, { Component } from 'react';
import moment from 'moment';
import TimePickerModal from './TimePickerModal';
import userSVG from '../images/user-solid.svg';
import clockSVG from '../images/clock-regular.svg';
import notesSVG from '../images/sticky-note-regular.svg';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closestAppointments: [],
      otherAppointments: [],
      modalOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.availableSlots.length && this.props.availableSlots.length) {
      const closestAppointments = this.props.availableSlots.slice(0, 3);
      const otherAppointments = this.props.availableSlots.slice(4);
      this.setState({ closestAppointments, otherAppointments });
    }
  }

  openModal() {
    document.body.classList.add('modal-open');
    this.setState({ modalOpen: true });
  }

  closeModal() {
    document.body.classList.remove('modal-open');
    this.setState({ modalOpen: false });
  }

  render() {
    return (
      <div className="app-main">
        {this.state.modalOpen &&
          <TimePickerModal
            appointments={this.state.otherAppointments}
            closeModal={this.closeModal}
          />}
        <div className="app-main__breadcrumbs"></div>
        <div className="app-main__heading">
          <h1>New Appointment</h1>
        </div>
        <div className="app-main__profile-pic">
          <span className="profile-pic">
            <img src={userSVG} alt="User Profile SVG" style={{ height: 30 }} />
          </span>
          <span className="profile-name">{this.props.userName}</span>
        </div>
        <div className="app-main__body">
          <h2>
            <img src={clockSVG} alt="Clock SVG" className="heading-imgs" style={{ height: 16 }} />
            Date {'\u0026'} Time</h2>
          <div className="app-main__available-slots">
            {this.state.closestAppointments && this.state.closestAppointments.map((appointment, index) => {
              return <button className="secondary-btn active" key={index}>{moment(appointment).format('MMMM Do, h:mm a')}</button>
            })}
            <button className="secondary-btn" onClick={this.openModal}>Another Time</button>
          </div>
          <h2>
            <img src={notesSVG} alt="Notes SVG" className="heading-imgs" style={{ height: 16 }} />
            Notes</h2>
          <textarea name="" id="" cols="30" rows="10" className="booking-notes"></textarea>
          <button className="primary-btn">Book</button>
        </div>
      </div>
    )
  }
}

export default Booking
