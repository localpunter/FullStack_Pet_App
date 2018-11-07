import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBarHome from './navbars/NavBarHome';
import './App.css';
import OwnerContainer from './containers/owners/OwnerContainer';
import OwnerContainerPetList from './containers/owners/OwnerContainerPetList';
import OwnerAddPetFormContainer from './containers/owners/OwnerAddPetFormContainer';
import BusinessContainer from './containers/businesses/BusinessContainer';
import BusinessServiceListContainer from './containers/businesses/BusinessServiceListContainer';
import BusinessBookingListContainer from './containers/businesses/BusinessBookingListContainer';
import BusinessServiceFormContainer from './containers/businesses/BusinessServiceFormContainer';
import SingleBusinessServiceContainer from './containers/businesses/SingleBusinessServiceContainer';
import OwnerBookingListContainer from './containers/owners/OwnerBookingListContainer';
import BusinessEditServiceFormContainer from './containers/businesses/BusinessEditServiceFormContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <NavBarHome />
        <Switch>
          <Route exact path = '/owners' component={OwnerContainer}/>
          <Route exact path = '/businesses' component={BusinessContainer}/>
          <Route exact path = '/businesses/servicelist' component={BusinessServiceListContainer}/>
          <Route exact path = '/businesses/bookinglist' component={BusinessBookingListContainer}/>
          <Route exact path = '/businesses/createservice' component={BusinessServiceFormContainer}/>

          <Route exact path = '/owners/petlist' component={OwnerContainerPetList}/>
          <Route exact path = '/owners/addpet' component={OwnerAddPetFormContainer}/>
          <Route exact path = '/owners/bookinglist' component={OwnerBookingListContainer}/>
          <Route exact path="/businesses/service/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <SingleBusinessServiceContainer id = {id} />
            }}
          />
          <Route exact path="/services/edit/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <BusinessEditServiceFormContainer id = {id} />
            }}
          />
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
