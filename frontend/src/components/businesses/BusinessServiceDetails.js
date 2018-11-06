import React  from 'react';
import BusinessServiceFormContainer from '../../containers/businesses/BusinessServiceFormContainer.js';
import BusinessServiceList from '../businesses/BusinessServiceList.js';



const BusinessServiceDetails = (props) => {
console.log('delete clicked, service: ', props.pet);
const onDelete = () => {
  props.handleDelete(props.service.id)
}

const onEdit = () => {

}

console.log(props);
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
