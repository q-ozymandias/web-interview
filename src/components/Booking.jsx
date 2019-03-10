import React, { Component } from 'react';
import moment from 'moment';
import TimePickerModal from './TimePickerModal';
import request from '../api/request';
import userSVG from '../images/user-solid.svg';
import clockSVG from '../images/clock-regular.svg';
import notesSVG from '../images/sticky-note-regular.svg';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closestSlots: [],
      otherSloths: [],
      chosenTimeSlot: null,
      notes: '',
      modalOpen: false,
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.chooseTimeSlot = this.chooseTimeSlot.bind(this);
    this.chooseTimeSlotFromModal = this.chooseTimeSlotFromModal.bind(this);
    this.bookAppointment = this.bookAppointment.bind(this);
  }

  async componentDidMount() {
    const availableSlots = await request('availableSlots', 'GET');
    const closestSlots = availableSlots.slice(0, 3);
    const otherSloths = availableSlots.slice(4);
    this.setState({ closestSlots, otherSloths });
  }

  onTextChange(e) {
    const value = e.target.value;
    this.setState({ notes: value })
  }

  openModal() {
    document.body.classList.add('modal-open');
    this.setState({ modalOpen: true });
  }

  closeModal() {
    document.body.classList.remove('modal-open');
    this.setState({ modalOpen: false });
  }

  chooseTimeSlot(e) {
    const value = e.currentTarget.value;
    this.setState({ chosenTimeSlot: value });
  }

  chooseTimeSlotFromModal(value) {
    this.setState({ chosenTimeSlot: value, modalOpen: false });
  }

  async bookAppointment() {
    const appointmentData = {
      userId: this.props.userId,
      dateTime: this.state.chosenTimeSlot,
      notes: this.state.notes,
      type: 'GP appointment'
    }
    await request('appointments', 'POST', appointmentData);
  }

  render() {
    return (
      <div className="app-main">
        {this.state.modalOpen &&
          <TimePickerModal
            appointments={this.state.otherSloths}
            closeModal={this.closeModal}
            chooseTimeSlot={this.chooseTimeSlotFromModal}
          />}
        <div className="app-main__breadcrumbs"></div>
        <div className="app-main__heading">
          <h1>New Appointment</h1>
        </div>
        <div className="app-main__profile-pic">
          {this.props.userAvatar &&
            <span className="profile-pic">
              <img src={this.props.userAvatar} alt="User Profile SVG" style={{ height: 50 }} />
            </span>
          }
          <span className="profile-name">{this.props.userName}</span>
        </div>
        <div className="app-main__body">
          <h2>
            <img src={clockSVG} alt="Clock SVG" className="heading-imgs" style={{ height: 16 }} />
            Date {'\u0026'} Time</h2>
          <div className="app-main__available-slots">
            {this.state.closestSlots && this.state.closestSlots.map((slot, index) => {
              return (
                <button
                  className={`secondary-btn ${this.state.chosenTimeSlot === slot ? 'active' : ''}`}
                  key={index}
                  value={slot}
                  onClick={this.chooseTimeSlot}>
                  {moment(slot).format('MMMM Do, h:mm a')}
                </button>
              )
            })}
            <button className="secondary-btn" onClick={this.openModal}>Another Time</button>
          </div>
          <h2>
            <img src={notesSVG} alt="Notes SVG" className="heading-imgs" style={{ height: 16 }} />
            Notes</h2>
          <textarea
            cols="30"
            rows="10"
            className="booking-notes"
            onChange={this.onTextChange}
          />
          <div>
            {this.state.chosenTimeSlot &&
              <span className="booking-msg">Book an appointment for the {moment(this.state.chosenTimeSlot).format('MMMM Do, h:mm a')}?</span>
            }
            {!this.state.chosenTimeSlot &&
              <span className="booking-msg">Please Choose an available time slot.</span>
            }
          </div>
          {
            /** 
              * ToDo: Currently there is nothing happening after pressing the button,
              * that would indicate a successful booking to the user.
              * Also: the chosen Time Slot should get removed from the available slots.
            */
          }
          <button
            disabled={!this.state.chosenTimeSlot}
            onClick={this.bookAppointment}
            className={`primary-btn ${!this.state.chosenTimeSlot ? 'disabled' : ''}`}
          >
            Book
          </button>
        </div>
      </div>
    )
  }
}

export default Booking
