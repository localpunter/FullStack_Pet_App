import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import BusinessBookingListContainer from './BusinessBookingListContainer.js';
import BusinessServiceListContainer from './BusinessServiceListContainer.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';

class BusinessContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/businesses').then((businesses) => {
      this.setState({businesses: businesses._embedded.businesses})
    })
  }

  render() {
    let businessName = null;
    (this.state.businesses.length>0) ? businessName = this.state.businesses[0].name : businessName = "";


    return(
      <div>
        <h2>Hello {businessName}</h2>
        <NavBarBusinessContainer />
      </div>
    )
  }
}

export default BusinessContainer;
