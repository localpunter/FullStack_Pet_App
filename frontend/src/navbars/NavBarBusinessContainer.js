import React from 'react';
import {Link} from 'react-router-dom';

const NavBarBusinessContainer = (props) => {
  return (
    <header>
      <ul>
      <li className="navLink">
        <Link to="/businesses/createservice">Create Service</Link>
      </li>

        <li className="navLink">
          <Link to="/businesses/servicelist">Show Services</Link>
        </li>

        <li className="navLink">
          <Link to="/businesses/bookinglist">Show Bookings</Link>
        </li>



      </ul>
    </header>
  )
}

export default NavBarBusinessContainer;
