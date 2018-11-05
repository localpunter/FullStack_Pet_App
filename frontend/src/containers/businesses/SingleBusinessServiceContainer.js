import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';

class SingleBusinessServiceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: null
    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
      SingleBusinessServiceContainer!
      </div>
    )
  }
}

export default SingleBusinessServiceContainer;
