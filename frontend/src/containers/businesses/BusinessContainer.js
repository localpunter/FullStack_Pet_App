import React, {Component} from 'react';
import Request from '../../helpers/request.js';

class BusinessContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      services: null
    }
  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/businesses').then((businesses) => {
      this.setState({businesses: businesses._embedded.businesses})
    }).then(() => {
      request.get('/api/services').then((services) => {
        this.setState({services: services._embedded.services})
      })
    })


  }

  render() {
    let businessName = null;
    (this.state.businesses.length>0) ? businessName = this.state.businesses[0].name : businessName = "";


    return(
      <div>
        <h2>Hello {businessName}</h2>
      </div>
    )
  }
}

export default BusinessContainer;
