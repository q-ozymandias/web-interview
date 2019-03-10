import React, { Component } from 'react';
import moment from 'moment';

class TimePickerModal extends Component {
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
      <div class="time-picker-modal__container">
        <div class="time-picker-modal">
          <ul className="time-slots">
            {placeHolderSlots.map(slot => {
              return <li className="slot">{moment(slot).format('MMMM Do, h:mm a')}</li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default TimePickerModal
