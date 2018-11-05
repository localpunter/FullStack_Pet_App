import React, {Component} from 'react';
import Request from '../../helpers/request.js';

class BusinessContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      // services: []
    }
  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/businesses').then((data) => {
      this.setState({businesses: data._embedded.businesses})
    })
  }

  render() {
    return(
      <div>
      Hello Business owner!
      </div>
    )
  }
}

export default BusinessContainer;
