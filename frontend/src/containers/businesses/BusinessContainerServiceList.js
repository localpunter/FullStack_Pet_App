import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';

class BusinessContainerServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = { services: [] }
  }

  componentDidMount() {

  }

  render() {

    return(
      <div>
        <NavBarBusinessContainer />
        <h2>Business Container Service List</h2>
      </div>
    )
  }
}

export default BusinessContainerServiceList;
