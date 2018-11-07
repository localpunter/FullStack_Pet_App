import React from 'react';
import {Link} from 'react-router-dom';

const Booking = (props) => {

  const onDelete = () => {
    props.handleDelete(props.booking.id)
  }

  const onEdit = () => {

  }

  if (!props.booking) {
    return null;
  }

  return(
    <React.Fragment>
      <p>ID: {props.booking.id}</p>
      <p>Date: {props.booking.date}</p>
      <p>Service: {props.booking.service.type}</p>
      <p>Pet Name: {props.booking.pet.name}</p>
      <p>Pet Type: {props.booking.pet.type}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </React.Fragment>

  )
}

export default Booking;
