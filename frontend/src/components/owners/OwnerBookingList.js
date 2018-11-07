import React from 'react';
import Booking from './Booking.js';

const OwnerBookingList = (props) => {
  const bookings = props.bookings.map((booking) => {
    return (
      <li key={booking.id}>
      <div>
      <Booking booking={booking} />
      </div>
      </li>
    )
  })
  return (<ul className="list-output">{bookings}</ul>)
}


export default OwnerBookingList;
