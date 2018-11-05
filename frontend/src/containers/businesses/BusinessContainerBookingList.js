import React, { Component } from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';

class BusinessContainerBookingList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [] }
  }

  componentDidMount() {

  }

  render() {

    return (
      <div>
        <NavBarBusinessContainer />
        <h2>Business Container Booking List</h2>
      </div>
    )
  }
}

export default BusinessContainerBookingList;
