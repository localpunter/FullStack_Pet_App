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
