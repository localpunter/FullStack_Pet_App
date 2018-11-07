import React from 'react';

const ServiceForm = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const service = {
      "type": event.target.type.value,
      "business": "http://localhost:8080/api/businesses/1"
    }
    props.handleServicePost(service);

  }

  return(
    <div className="section-div">
      <form onSubmit={handleSubmit}>
      <label htmlFor="type">Type: </label>
      <input type="text" placeholder="Type" name="type"/>
      <input type="submit" className="input-submit" value="Save"/>
      </form>
    </div>
  )
}

export default ServiceForm;
