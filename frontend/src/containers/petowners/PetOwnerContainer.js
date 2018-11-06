import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarPetOwnerContainer from '../../navbars/NavBarPetOwnerContainer.js';

class PetOwnerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petowners: [],
      pets: []
    }
    console.log(this.state.petowners);
  }

  componentDidMount() {
    let request = new Request()
    request.get('/api/petOwners')
      .then((petowners) => {
        this.setState({petowners: petowners._embedded.petOwners})
      })
  }

  render() {
    let petOwnerName = null;
    (this.state.petowners.length>0) ? petOwnerName = this.state.petowners[0].name : petOwnerName = "";


    return(
      <div>
        <h2>Hello {petOwnerName}</h2>
        <NavBarPetOwnerContainer />
      </div>
    )
  }
}

export default PetOwnerContainer;
