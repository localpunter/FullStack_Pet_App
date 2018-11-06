import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarOwnerContainer from '../../navbars/NavBarOwnerContainer.js';
import OwnerPetList from '../../components/owners/OwnerPetList';

class OwnerPetListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { pets: [] }
  }

  componentDidMount() {
    let request = new Request();
      request.get('/api/pets').then((pets) => {
        this.setState({pets: pets._embedded.pets})
      })
    }
  render() {

    return(
      <div>
        <NavBarOwnerContainer />
        <h2>Owner Container Service List</h2>
        <OwnerPetList pets={this.state.pets} />
      </div>
    )
  }
}

export default OwnerPetListContainer;
