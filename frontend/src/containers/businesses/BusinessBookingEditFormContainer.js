import React, {Component} from 'react';
import Request from '../../helpers/request.js';

import BookingEditForm from '../../components/businesses/BookingEditForm.js';


class BusinessBookingEditFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: null
    }

    this.handleBookingPatch= this.handleBookingPatch.bind(this);
  }

  componentDidMount() {
    console.log("BusinessBookingEditFormContainer");
    const request = new Request();
      request.get('/api/bookings/' + this.props.id)
        .then((booking) => {
          this.setState({booking: booking})
        })

  }

  handleBookingPatch(booking, id) {
    const request = new Request();
    request.patch('/api/bookings/' + id, booking)
    .then(() => {
      window.location = '/businesses/bookinglist'
    })
  }

  render() {

    return(
      <div>
        Test
        <BookingEditForm booking={this.state.booking} handleBookingPatch={this.handleBookingPatch}/>
      </div>
    )}

}

export default BusinessBookingEditFormContainer;
