import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import BookingForm from '../../components/owners/BookingForm';
import NavBarOwnerContainer from '../../navbars/NavBarOwnerContainer.js';

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
      <div className="section-div">
        <NavBarOwnerContainer />
        <h3>Create Booking</h3>
        <BookingForm
          pets = {this.state.pets}
          services = {this.state.services}
          handleBookingPost={this.handleBookingPost}
        />
      </div>
    )}

}

export default OwnerCreateBookingContainer;
