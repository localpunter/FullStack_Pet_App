import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import BookingForm from '../../components/owners/BookingForm';

class OwnerCreateBookingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      services: []
    }

    this.handleBookingPost = this.handleBookingPost.bind(this);
  }

  componentDidMount() {
    const request = new Request();
      request.get('/api/pets')
        .then((pets) => {
          this.setState({pets: pets._embedded.pets})
        })
      request.get('/api/services')
        .then((services) => {
          this.setState({services: services._embedded.services})
        })

  }

  handleBookingPost(booking) {
    const request = new Request();
    request.post('http://localhost:3000/api/bookings', booking)
    .then(() => {
      window.location = '/owners/bookinglist'
    })
  }

  render() {

    return(
      <div>
        <h2>Create Booking</h2>
        <BookingForm
          pets = {this.state.pets}
          services = {this.state.services}
          handleBookingPost={this.handleBookingPost}
        />
      </div>
    )}

}

export default OwnerCreateBookingContainer;
