import React from 'react';
import Booking from './Booking.js';

const PetOwnerBookingList = (props) => {
  const bookings = props.bookings.map((booking) => {
    return (
      <li key={booking.id}>
      <div>
      <Booking booking={booking} />
      </div>
      </li>
    )
  })
  return (<ul>{bookings}</ul>)
}


export default PetOwnerBookingList;
