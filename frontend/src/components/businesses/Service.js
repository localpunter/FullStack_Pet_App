import React from 'react';
import {Link} from 'react-router-dom';
import SingleBusinessServiceContainer from '../../containers/businesses/SingleBusinessServiceContainer'

const Service = (props) => {

  if (!props.service) {
    return null;
  }

  return(
    <React.Fragment>
      <Link to = {"/businesses/service/" + props.service.id} >
        <p>{props.service.type} </p>
        </Link>
    </React.Fragment>

  )
}

export default Service;
