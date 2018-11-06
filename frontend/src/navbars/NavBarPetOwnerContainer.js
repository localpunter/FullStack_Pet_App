import React from 'react';
import {Link} from 'react-router-dom';

const NavBarPetOwnerContainer = (props) => {
  return (
    <header>
      <ul>
      <li className="navLink">
<<<<<<< HEAD
        <Link to="/petowners/addpet">Add Pet</Link>
      </li>

        <li className="navLink">
          <Link to="/petowners/petlist">Show Pets</Link>
        </li>

        <li className="navLink">
          <Link to="/petowners/bookinglist">Show Bookings</Link>
        </li>



=======
        <Link to="/petowners/bookinglist">Show Bookings</Link>
      </li>
>>>>>>> c8abf328fcf0b5c990c6c9d036ddd9ecb9a23391
      </ul>
    </header>
  )
}

export default NavBarPetOwnerContainer;
