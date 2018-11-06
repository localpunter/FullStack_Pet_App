import React, {Component} from 'react';
import Request from '../../helpers/request.js';

class PetOwnerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petOwners: [],
      pets: []
    }
  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/petOwners').then((petOwners) => {
      this.setState({petOwners: petOwners._embedded.petOwners})
    }).then(() => {
      request.get('/api/pets').then((pets) => {
        this.setState({pets: pets._embedded.pets})
      })
  }

  handlePetPost(pet) {
    const request = new Request();
    request.post('api/petOwners', pet).then(() => {
      window.location = '/petOwners/petlist'
    })
  }

  render() {
    let petOwnerName = null;
    (this.state.petOwners.length>0) ? petOwnerName = this.state.petOwners[0].name : petOwnerName = "";


    return(
      <div>
        <h2>Hello {petOwnersName}</h2>
        <NavBarPetOwnersContainer
          pets = {this.state.pets}
          petOwners={this.state.petOwners}
          handlePetPost={this.handlePetPost}
         />
      </div>
    )
  }
}

export default petOwnersContainer;
