import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarOwnerContainer from '../../navbars/NavBarOwnerContainer.js';
import OwnerPetDetails from '../../components/owners/OwnerPetDetails.js';

class SingleOwnerPetContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: null
    }
}

componentDidMount() {
  const request = new Request();
  const url = '/api/pets/' + this.props.id + '?projection=embedService';
  request.get(url).then((data) => {
    this.setState({pet: data})
  })
}

handleDelete(id) {
  console.log('handleDelete called, id: ', id);
  const request = new Request();
  const url = '/api/pets/' + id;
  request.delete(url).then(() => {
    window.location = '/owners/petlist';
  })
}

render() {
  if (!this.state.pet){
    return null;
  }
  return(
    <OwnerPetDetails pet={this.state.pet} id={this.props.id} handleDelete={this.handleDelete} />
  )
}
}

export default SingleOwnerPetContainer;
