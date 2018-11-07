import React from 'react';
import {Link} from 'react-router-dom';
import './NavBarOwnerContainer.css';

const NavBarOwnerContainer = (props) => {
  return (
    <header>
      <ul className="owner-nav-bar">
      <li className="navLink">
        <Link to="/owners/addpet">Add Pet</Link>
      </li>

        <li className="navLink">
          <Link to="/owners/petlist">Show Pets</Link>
        </li>

        <li className="navLink">
          <Link to="/owners/createbooking">Create Booking</Link>
        </li>

        <li className="navLink">
          <Link to="/owners/bookinglist">Show Bookings</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBarOwnerContainer;
