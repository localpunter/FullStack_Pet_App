import React, { Component } from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';
import BusinessBookingList from '../../components/businesses/BusinessBookingList';

class BusinessContainerBookingList extends Component {
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
        <NavBarBusinessContainer />
        <h2>Business Container Booking List</h2>
        <BusinessBookingList bookings={this.state.bookings} />
      </div>
    )
  }
}

export default BusinessContainerBookingList;
