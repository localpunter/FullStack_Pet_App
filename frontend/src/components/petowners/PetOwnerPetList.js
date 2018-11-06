import React from 'react';
import Pet from './Pet.js';

const PetOwnerPetList = (props) => {
  const pets = props.pets.map((pet) => {
    return (
      <li key={pet.id}>
      <div>
      <Pet pet={pet} />
      </div>
      </li>
    )
  })
  return (<ul>{pets}</ul>)
}


export default PetOwnerPetList;
