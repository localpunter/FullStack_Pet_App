import React from 'react';

const PetForm = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const pet = {
      "type": event.target.type.value,
      "name": event.target.name.value,
      "owner": "http://localhost:8080/api/owners/1"
    }
    props.handlePetPost(pet);

  }

  return(
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name"/>
      <input type="text" placeholder="Type" name="type"/>
      <button type="submit">Save</button>
    </form>
    </div>
  )
}

export default PetForm;
