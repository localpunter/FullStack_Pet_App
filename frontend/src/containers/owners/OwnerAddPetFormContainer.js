import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarOwnerContainer from '../../navbars/NavBarOwnerContainer.js';
import PetForm from '../../components/owners/PetForm';

class OwnerAddPetFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      owners: []
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
          request.get('/api/owners')
            .then((owners) => {
              this.setState({owners: owners._embedded.owners})
            })
        })

  }

  handlePetPost(pet) {
    const request = new Request();
    request.post('http://localhost:3000/api/pets', pet)
    .then(() => {
      window.location = '/owners/petlist'
    })
  }

  render() {

    return(
      <div className="section-div">
        <NavBarOwnerContainer />
        <h3>Add Pet</h3>
        <PetForm
        pets = {this.state.pets}
        owners={this.state.owners}
        handlePetPost={this.handlePetPost}
        />
      </div>
    )}

}

export default OwnerAddPetFormContainer;
