import React  from 'react';



const BusinessServiceDetails = (props) => {

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
