import React, { Component } from 'react';
import Request from '../../helpers/request.js';
import NavBarPetOwnerContainer from '../../navbars/NavBarPetOwnerContainer';


class PetOwnerBookingListContainer extends Component {
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
        <NavBarPetOwnerContainer />
        <h2>Pet Owner Container Booking List</h2>
        {/* <PetOwnerBookingList bookings={this.state.bookings} /> */}
      </div>
    )
  }
}

export default PetOwnerBookingListContainer;
