import React from 'react';
import {Link} from 'react-router-dom';

const Pet = (props) => {

  if (!props.pet) {
    return null;
  }

  return(
    <React.Fragment>
        <p>Pet Name: {props.pet.name} </p>
    </React.Fragment>

  )
}

export default Pet;
