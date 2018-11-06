import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarPetOwnerContainer.js';
import PetForm from '../../components/petowners/PetForm';

class PetOwnerAddPetFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      petowners: []
    }

    this.handlePetPost = this.handlePetPost.bind(this);
  }

  componentDidMount() {
    const request = new Request();
      request.get('/api/pets')
        .then((pets) => {
          this.setState({pets: pets._embedded.pets})
        })
      .then(() => {
          request.get('/api/petOwners')
            .then((petowners) => {
              this.setState({petowners: petowners._embedded.petOwners})
            })
        })

  }

  handlePetPost(pet) {
    console.log("pet:", pet);
    const request = new Request();
    request.post('http://localhost:3000/api/pets', pet)
    .then(() => {
      // window.location = '/petowners/petlist'
    })
  }

  render() {

    return(
      <div>
      <PetForm
      pets = {this.state.pets}
      petowners={this.state.petowners}
      handlePetPost={this.handlePetPost}
      />
      </div>
    )}

}

export default PetOwnerAddPetFormContainer;
