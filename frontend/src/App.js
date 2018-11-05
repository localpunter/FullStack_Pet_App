import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBarHome from './navbars/NavBarHome';
import './App.css';
import PetOwnerContainer from './containers/petowners/PetOwnerContainer';
import BusinessContainer from './containers/businesses/BusinessContainer';
import BusinessContainerServiceList from './containers/businesses/BusinessContainerServiceList';
import BusinessContainerBookingList from './containers/businesses/BusinessContainerBookingList';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <NavBarHome />
        <Switch>
          <Route exact path = '/petowners' component={PetOwnerContainer}/>
          <Route exact path = '/businesses' component={BusinessContainer}/>
          <Route exact path = '/businesses/servicelist' component={BusinessContainerServiceList}/>
          <Route exact path = '/businesses/bookinglist' component={BusinessContainerBookingList}/>
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
