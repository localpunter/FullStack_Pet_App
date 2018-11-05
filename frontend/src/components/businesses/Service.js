import React from 'react';
import {Link} from 'react-router-dom';

const Service = (props) => {

  if (!props.service) {
    return null;
  }

  return(
    <React.Fragment>
      <p>{props.service.type} </p>
    </React.Fragment>

  )
}

export default Service;
