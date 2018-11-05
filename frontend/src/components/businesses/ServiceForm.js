import React from 'react';

const ServiceForm = (props) => {
  function handleSubmit(event) {
    // console.log("before preventDefault");
    event.preventDefault();
    // console.log("after preventDefault");
    const service = {
      "type": event.target.type.value,
      "business": "http://localhost:8080/api/businesses/1"
    }
    console.log("handleSubmit");



    console.log("props:", props.businesses[0]._links);
    console.log("type", event.target.type.value);
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
