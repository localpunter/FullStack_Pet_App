import React from 'react';

const OwnerPetDetails = (props) => {

  const onDelete = () => {
    props.handleDelete(props.id);
  }

  const onEdit = () => {

  }

  if (!props.pet) {
    return null;
  }

  return (
    <div>
      <p>Pet Name: {props.pet.name}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  )

}

export default OwnerPetDetails;
