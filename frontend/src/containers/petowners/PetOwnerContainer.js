import React, {Component} from 'react';
import Request from '../../helpers/request.js';
<<<<<<< HEAD
import NavBarPetOwnerContainer from '../../navbars/NavBarPetOwnerContainer.js';
=======
import NavBarPetOwnerContainer from '../../navbars/NavBarPetOwnerContainer';
>>>>>>> c8abf328fcf0b5c990c6c9d036ddd9ecb9a23391

class PetOwnerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      petowners: [],
      pets: []
=======
      petOwners: []
>>>>>>> c8abf328fcf0b5c990c6c9d036ddd9ecb9a23391
    }
    console.log(this.state.petowners);
  }

  componentDidMount() {
    let request = new Request()
<<<<<<< HEAD
    request.get('/api/petOwners')
      .then((petowners) => {
        this.setState({petowners: petowners._embedded.petOwners})
      })
=======
    request.get('/api/petOwners').then((petOwners) => {
      this.setState({petOwners: petOwners._embedded.petOwners})
    })
>>>>>>> c8abf328fcf0b5c990c6c9d036ddd9ecb9a23391
  }
  //   .then(() => {
  //     request.get('/api/pets').then((pets) => {
  //       this.setState({pets: pets._embedded.pets})
  //     })
  // }

  // handlePetPost(pet) {
  //   const request = new Request();
  //   request.post('api/petOwners', pet).then(() => {
  //     window.location = '/petOwners/petlist'
  //   })
  // }

  render() {
    let petOwnerName = null;
<<<<<<< HEAD
    (this.state.petowners.length>0) ? petOwnerName = this.state.petowners[0].name : petOwnerName = "";
=======
    (this.state.petOwners.length>0) ? petOwnerName = this.state.petOwners[0].name : petOwnerName = "";
>>>>>>> c8abf328fcf0b5c990c6c9d036ddd9ecb9a23391


    return(
      <div>
        <h2>Hello {petOwnerName}</h2>
        <NavBarPetOwnerContainer />
      </div>
    )
  }
}

export default PetOwnerContainer;
