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

  }

  render() {
    return(
      <div>
      Hello Pet Owner!
      </div>
    )
  }
}

export default PetOwnerContainer;
