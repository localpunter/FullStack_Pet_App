import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';
import ServiceForm from '../../components/businesses/ServiceForm';

class BusinessServiceFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
      businesses: []
    }

    this.handleServicePost = this.handleServicePost.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");
    const request = new Request();
      request.get('/api/services').then((services) => {
        this.setState({services: services._embedded.services})
      }).then(() => {
        request.get('/api/businesses').then((businesses) => {
          this.setState({businesses: businesses._embedded.businesses})
        })
      })
  }

  handleServicePost(service) {
    console.log("handleServicePost");
    console.log("service:", service);
    const request = new Request();
    request.post('api/businesses', service).then(() => {
      // window.location = '/businesses/servicelist'
    })
  }

  render() {
    console.log("renderBusinessServiceContainer");

    return(
      <div>
      <ServiceForm
      services = {this.state.services}
      businesses={this.state.businesses}
      handleServicePost={this.handleServicePost}
      />
      </div>
    )}

}

export default BusinessServiceFormContainer;
