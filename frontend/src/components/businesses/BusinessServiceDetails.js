import React  from 'react';
import BusinessServiceFormContainer from '../../containers/businesses/BusinessServiceFormContainer.js';
import BusinessServiceList from '../businesses/BusinessServiceList.js';

const BusinessServiceDetails = (props) => {


const onDelete = () => {
  props.handleDelete(props.service.id)
}

const onEdit = () => {
  window.location = '/services/edit/' + props.service.id;
}


  if(!props.service) {
    return null;
  }
  return (
    <div><p>Type: {props.service.type}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  )

}




export default BusinessServiceDetails;
