import React, { Component } from 'react';
import Request from '../../helpers/request.js';
import NavBarOwnerContainer from '../../navbars/NavBarOwnerContainer.js';
import OwnerBookingList from '../../components/owners/OwnerBookingList.js';

class OwnerBookingListContainer extends Component {
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
      <div className="section-div">
        <NavBarOwnerContainer />
        <h3>Booking List</h3>
        <OwnerBookingList bookings={this.state.bookings} />
      </div>
    )
  }
}

export default OwnerBookingListContainer;
