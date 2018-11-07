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
    <div className="section-div">
    <h3>Amend Service</h3>
    <form onSubmit={handleSubmit}>
      <label htmlFor="type"/>
      <input type="text" defaultValue={props.service.type} name="type"/>
      <input type="submit" className="input-submit" value="Save"/>
    </form>
    </div>
  )
}

export default ServiceEditForm;
