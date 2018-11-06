import React from 'react';
import {Link} from 'react-router-dom';

const NavBarPetOwnerContainer = (props) => {
  return (
    <header>
      <ul>
      <li className="navLink">
        <Link to="/petowners/bookinglist">Show Bookings</Link>
      </li>
      </ul>
    </header>
  )
}

export default NavBarPetOwnerContainer;
