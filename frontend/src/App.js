import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBarHome from './navbars/NavBarHome';
import './App.css';
import PetOwnerContainer from './containers/petowners/PetOwnerContainer';
import BusinessContainer from './containers/businesses/BusinessContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
        <NavBarHome />
        <Switch>
          <Route exact path = '/petowners' component={PetOwnerContainer}/>
          <Route exact path = '/businesses' component={BusinessContainer}/>
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
