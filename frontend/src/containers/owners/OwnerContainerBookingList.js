import React, { Component } from 'react';
import Request from '../../helpers/request.js';
import NavBarOwnerContainer from '../../navbars/NavBarOwnerContainer.js';
import OwnerBookingList from '../../components/owners/OwnerBookingList';

class OwnerContainerBookingList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [] }
  }

  componentDidMount() {
    let request = new Request();
      request.get('/api/bookings').then((bookings) => {
        this.setState({bookings: bookings._embedded.bookings})
      })
    }

  render() {
    return (
      <div>
        <NavBarOwnerContainer />
        <h2>Owner Container Booking List</h2>
        <OwnerBookingList bookings={this.state.bookings} />
      </div>
    )
  }
}

export default OwnerContainerBookingList;
