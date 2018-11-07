import React from 'react';

const BookingEditForm = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    const booking = {
      "date": event.target.date.value,
      "service": "http://localhost:8080/api/services/" + props.booking._embedded.service.id,
      "pet": "http://localhost:8080/api/pets/" + props.booking._embedded.pet.id
    }
    props.handleBookingPatch(booking, props.booking.id);

  }

  if (!props.booking) {
    return null;
  }
  return(
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date: </label> <input type="text" defaultValue={props.booking.date} name="date"/>
      <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default BookingEditForm;
