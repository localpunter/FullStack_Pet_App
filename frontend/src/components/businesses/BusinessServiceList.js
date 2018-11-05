import React from 'react';
import Service from './Service.js';

const BusinessServiceList = (props) => {
  const services = props.services.map((service) => {
    return (
      <li key={service.id}>
      <div>
      <Service service={service} />
      </div>
      </li>
    )
  })
  return (<ul>{services}</ul>)
}


export default BusinessServiceList;
