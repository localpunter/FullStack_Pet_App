import React from 'react';
import {Link} from 'react-router-dom';

const NavBarOwnerContainer = (props) => {
  return (
    <header>
      <ul>
      <li className="navLink">
        <Link to="/owners/addpet">Add Pet</Link>
      </li>

        <li className="navLink">
          <Link to="/owners/petlist">Show Pets</Link>
        </li>

        <li className="navLink">
          <Link to="/owners/bookinglist">Show Bookings</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBarOwnerContainer;
