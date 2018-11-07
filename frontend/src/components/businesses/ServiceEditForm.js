import React from 'react';

const ServiceEditForm = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const service = {
      "type": event.target.type.value,
      "business": "http://localhost:8080/api/businesses/" + props.service._embedded.business.id
    }
    props.handleServicePatch(service, props.service.id);

  }

  if (!props.service) {
    return null;
  }
  return(
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={props.service.type} name="type"/>
      <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default ServiceEditForm;
