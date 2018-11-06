import React, {Component} from 'react';
import Request from '../../helpers/request.js';
// import NavBarBusinessContainer from '../../navbars/NavBarOwnerContainer.js';
import PetEditForm from '../../components/owners/PetEditForm.js';

class OwnerEditPetFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: null
    }

    this.handlePetPatch= this.handlePetPatch.bind(this);
  }

  componentDidMount() {
    const request = new Request();
      request.get('/api/pets/' + this.props.id)
        .then((pet) => {
          this.setState({pet: pet})
        })

  }

  handlePetPatch(pet, id) {
    console.log('patch called');
    const request = new Request();
    request.patch('http://localhost:3000/api/pets/' + id, pet)
    .then(() => {
      window.location = '/owners/petlist'
    })
  }

  render() {

    return(
      <div>
        <PetEditForm pet={this.state.pet} id={this.props.id} handlePetPatch={this.handlePetPatch}/>
      </div>
    )}

}

export default OwnerEditPetFormContainer;
