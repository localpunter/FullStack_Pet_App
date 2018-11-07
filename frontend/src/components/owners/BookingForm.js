import React from 'react';

const BookingForm = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const booking = {
      "pet": "http://localhost:8080/api/pets/" + event.target.pet.value,
      "service": "http://localhost:8080/api/services/" + event.target.service.value,
      "date": event.target.date.value
    }
    props.handleBookingPost(booking);
  }

  if (!props.pets || !props.services) {
    return null;
  }

  const petOptions = props.pets.map((pet) => {
    return <option key={pet.id} value={pet.id}>{pet.name}  ({pet.type} / {pet.owner.name})</option>;
  });
  const serviceOptions = props.services.map((service) => {
    return <option key={service.id} value={service.id}>{service.type}  (Parent Business: {service.business.name})</option>;
  });

  return(
    <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="pet">Pet: </label>
      <select defaultValue="defaultPet" name="pet">
        <option disabled value="defaultPet">Select a pet...</option>
        {petOptions}
      </select><br/>
      <label htmlFor="service">Service: </label>
      <select defaultValue="defaultService" name="service">
        <option disabled value="defaultService">Select a service...</option>
        {serviceOptions}
      </select><br/>
      <label htmlFor="date">Date: </label>
      <input type="text" placeholder="DD/MM/YYYY" name="date"/>
      <input type="submit" className="input-submit" value="Save"/>
    </form>
    </div>
  )
}

export default BookingForm;
