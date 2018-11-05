import React from 'react';

const ServiceForm = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const service = {
      "type": event.target.type.value,
      "business": "http://localhost:8080/api/businesses/1{?projection}"
    }
    props.handleServicePost(service);

  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Type" name="type"/>
    <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default ServiceForm;
