import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import PetEditForm from '../../components/businesses/ServiceEditForm.js';
import ServiceEditForm from '../../components/businesses/ServiceEditForm.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';

class BusinessEditServiceFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: null
    }

    this.handleServicePatch= this.handleServicePatch.bind(this);
  }

  componentDidMount() {
    const request = new Request();
      request.get('/api/services/' + this.props.id)
        .then((service) => {
          this.setState({service: service})
        })

  }

  handleServicePatch(service, id) {
    const request = new Request();
    request.patch('http://localhost:3000/api/services/' + id, service)
    .then(() => {
      window.location = '/businesses/servicelist'
    })
  }

  render() {

    return(
      <div>
        <NavBarBusinessContainer />
        <ServiceEditForm service={this.state.service} handleServicePatch={this.handleServicePatch}/>
      </div>
    )}

}

export default BusinessEditServiceFormContainer;
