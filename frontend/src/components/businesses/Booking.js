import React from 'react';
import {Link} from 'react-router-dom';

const Booking = (props) => {

  if (!props.booking) {
    return null;
  }

  console.log("pet owner: ", props);

  return(
    <React.Fragment>
      <p>ID: {props.booking.id}</p>
      <p>Date: {props.booking.date}</p>
      <p>Service: {props.booking.service.type}</p>
      <p>Pet Name: {props.booking.pet.name}</p>
      <p>Pet Type: {props.booking.pet.type}</p>
    </React.Fragment>

  )
}

export default Booking;
