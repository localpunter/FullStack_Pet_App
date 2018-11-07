import React from 'react';

const PetEditForm = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const pet = {
      "type": event.target.type.value,
      "name": event.target.name.value,
      "owner": "http://localhost:8080/api/owners/" + props.pet._embedded.owner.id
    }
    props.handlePetPatch(pet, props.id);

  }

  if (!props.pet) {
    return null;
  }
  return(
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" defaultValue={props.pet.name} name="name"/>
      <input type="text" defaultValue={props.pet.type} name="type"/>
      <input type="submit" className="input-submit" value="Save"/>
    </form>
    </div>
  )
}

export default PetEditForm;
