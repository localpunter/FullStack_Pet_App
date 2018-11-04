import React, {Component} from 'react';
import Request from '../../helpers/request.js';

class BusinessContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      services: []
    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
      Hello Business owner!
      </div>
    )
  }
}

export default BusinessContainer;
