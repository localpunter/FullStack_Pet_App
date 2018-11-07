import React from 'react';
import {Link} from 'react-router-dom';
import './NavBarHome.css';

const NavBarHome = (props) => {
  return (
    <header>
    <Link to="/">
      <div id="logo">
        <h2>Pet Hates</h2>
      </div>
      </Link>
      <ul className="main-nav-bar">
        <li className={window.location.href.includes("owners") ? 'nav-selected' : null} id="owners-link" >
          <Link to="/owners" onClick={ownerBusinessToggle}>Pet Owner</Link>
        </li>

        <li className={window.location.href.includes("businesses") ? 'nav-selected' : null} id="businesses-link" >
          <Link to="/businesses" onClick={ownerBusinessToggle}>Business Owner</Link>
        </li>
      </ul>
    </header>
  )
}

function ownerBusinessToggle(event){
  event.target.parentNode.classList.add('nav-selected');
  if (event.target.parentNode.id === "owners-link") {
    document.querySelector('#businesses-link').classList.remove('nav-selected');
  } else {
    document.querySelector('#owners-link').classList.remove('nav-selected');
  }
}

export default NavBarHome;
