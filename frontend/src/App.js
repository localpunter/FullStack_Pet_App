import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBarHome from './navbars/NavBarHome';
import './App.css';
import PetOwnerContainer from './containers/petowners/PetOwnerContainer';
import BusinessContainer from './containers/businesses/BusinessContainer';
import BusinessServiceListContainer from './containers/businesses/BusinessServiceListContainer';
import BusinessBookingListContainer from './containers/businesses/BusinessBookingListContainer';
import BusinessServiceFormContainer from './containers/businesses/BusinessServiceFormContainer';
import SingleBusinessServiceContainer from './containers/businesses/SingleBusinessServiceContainer';
import PetOwnerBookingListContainer from './containers/petowners/PetOwnerBookingListContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <NavBarHome />
        <Switch>
          <Route exact path = '/petowners' component={PetOwnerContainer}/>
          <Route exact path = '/businesses' component={BusinessContainer}/>
          <Route exact path = '/businesses/servicelist' component={BusinessServiceListContainer}/>
          <Route exact path = '/businesses/bookinglist' component={BusinessBookingListContainer}/>
          <Route exact path = '/businesses/createservice' component={BusinessServiceFormContainer}/>
          <Route exact path = '/petowners/bookinglist' component={PetOwnerBookingListContainer}/>
          <Route exact path="/businesses/service/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SingleBusinessServiceContainer id = {id} />
            }}
          />
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
