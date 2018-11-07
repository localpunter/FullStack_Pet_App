import React from 'react';
import Booking from './Booking.js';

const BusinessBookingList = (props) => {
  const bookings = props.bookings.map((booking) => {
    return (
      <li key={booking.id}>
      <div>
      <Booking booking={booking} handleDelete={props.handleDelete} />
      </div>
      </li>
    )
  })
  return (<ul>{bookings}</ul>)
}


export default BusinessBookingList;
