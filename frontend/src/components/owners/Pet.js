import React from 'react';
import {Link} from 'react-router-dom';

const Pet = (props) => {

  if (!props.pet) {
    return null;
  }

  return(
    <React.Fragment>
        <Link to = {"/owners/pet/" + props.pet.id} >
          <p>Pet Name: {props.pet.name} </p>
        </Link>
    </React.Fragment>

  )
}

export default Pet;
