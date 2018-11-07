import React from 'react';
import {Link} from 'react-router-dom';
import './NavBarBusinessContainer.css';

const NavBarBusinessContainer = (props) => {
  return (
    <header>
      <ul className="business-nav-bar">
      <li>
        <Link to="/businesses/createservice">Create Service</Link>
      </li>

        <li>
          <Link to="/businesses/servicelist">Show Services</Link>
        </li>

        <li>
          <Link to="/businesses/bookinglist">Show Bookings</Link>
        </li>



      </ul>
    </header>
  )
}

export default NavBarBusinessContainer;
