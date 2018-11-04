import React from 'react';
import {Link} from 'react-router-dom';

const NavBarHome = (props) => {
  return (
    <header>
      <ul>
        <li className="navLink">
          <Link to="/petowners">Pet Owner</Link>
        </li>

        <li className="navLink">
          <Link to="/businesses">Business Owner</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBarHome;
