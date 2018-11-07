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
      <label htmlFor="name">Pet Name: </label>
      <input type="text" placeholder="Name" name="name"/><br/>
      <label htmlFor="type">Type of Pet: </label>
      <input type="text" placeholder="Type" name="type"/>
      <input type="submit" className="input-submit" value="Save"/>
    </form>
    </div>
  )
}

export default PetForm;
