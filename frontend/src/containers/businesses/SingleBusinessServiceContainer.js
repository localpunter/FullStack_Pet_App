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
    let request = new Request()
    const url = '/api/services/' + this.props.id + '?projection=embedService';
    request.get(url).then((data) => {
      this.setState({service: data})
    })
  }

  render() {
    console.log("props", this.props);
    return(
      <div>

      SingleBusinessServiceContainer!
      </div>
    )
  }
}

export default SingleBusinessServiceContainer;
