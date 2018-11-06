import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarPetOwnerContainer from '../../navbars/NavBarPetOwnerContainer.js';
import PetOwnerPetList from '../../components/petowners/PetOwnerPetList';

class PetOwnerContainerPetList extends Component {
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
        <NavBarPetOwnerContainer />
        <h2>PetOwner Container Service List</h2>
        <PetOwnerPetList pets={this.state.pets} />
      </div>
    )
  }
}

export default PetOwnerContainerPetList;
