import React, { Component } from 'react';
import moment from 'moment';

class TimePickerModal extends Component {
  render() {
    const top = window.pageYOffset;
    return (
      <div className="time-picker-modal__container" onClick={this.props.closeModal}>
        <div className="time-picker-modal" style={{ top }}>
          <ul className="time-slots">
            {this.props.appointments && this.props.appointments.map((slot, index) => {
              return (
                <li
                  className="slot"
                  onClick={this.props.chooseTimeSlot}
                  value={slot}
                  key={index}>{moment(slot).format('MMMM Do, h:mm a')}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default TimePickerModal
