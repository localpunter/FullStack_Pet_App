import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';
import BusinessServiceList from '../../components/businesses/BusinessServiceList';

class BusinessContainerServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = { services: [] }
  }

  componentDidMount() {
    let request = new Request();
      request.get('/api/services').then((services) => {
        this.setState({services: services._embedded.services})
      })
    }
  render() {

    return(
      <div>
        <NavBarBusinessContainer />
        <h2>Business Container Service List</h2>
        <BusinessServiceList services={this.state.services} />
      </div>
    )
  }
}

export default BusinessContainerServiceList;
