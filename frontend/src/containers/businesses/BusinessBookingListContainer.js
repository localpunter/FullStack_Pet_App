import React, { Component } from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';
import BusinessBookingList from '../../components/businesses/BusinessBookingList';

class BusinessBookingListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { bookings: [] }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    let request = new Request();
      request.get('/api/bookings').then((bookings) => {
        this.setState({bookings: bookings._embedded.bookings})
      })
    }

    handleDelete(id) {
      const request = new Request();
      const url = '/api/bookings/' + id;
      request.delete(url).then(() => {
        window.location = '/businesses/bookinglist'
      })
    }

  render() {

    return (
      <div>
        <NavBarBusinessContainer />
        <h2>Business Container Booking List</h2>
        <BusinessBookingList bookings={this.state.bookings} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default BusinessBookingListContainer;
