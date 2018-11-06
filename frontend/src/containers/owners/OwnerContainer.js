import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarOwnerContainer from '../../navbars/NavBarOwnerContainer.js';


class OwnerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owners: []
    }
  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/owners').then((owners) => {
      this.setState({owners: owners._embedded.owners})
    })
  }
  //   .then(() => {
  //     request.get('/api/pets').then((pets) => {
  //       this.setState({pets: pets._embedded.pets})
  //     })
  // }

  // handlePetPost(pet) {
  //   const request = new Request();
  //   request.post('api/owners', pet).then(() => {
  //     window.location = '/owners/petlist'
  //   })
  // }

  render() {
    let ownerName = null;
    (this.state.owners.length>0) ? ownerName = this.state.owners[0].name : ownerName = "";


    return(
      <div>
        <h2>Hello {ownerName}</h2>
        <NavBarOwnerContainer />
      </div>
    )
  }
}

export default OwnerContainer;
