import React, {Component} from 'react';
import Request from '../../helpers/request.js';
import NavBarBusinessContainer from '../../navbars/NavBarBusinessContainer.js';
import BusinessServiceDetails from '../../components/businesses/BusinessServiceDetails.js';

class SingleBusinessServiceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: null
    }
this.handleDelete = this.handleDelete.bind(this)

  }

  componentDidMount() {
    let request = new Request();
    const url = '/api/services/' + this.props.id + '?projection=embedService';
    request.get(url).then((data) => {
      this.setState({service: data})
    })
  }

  handleDelete(id) {
    const request = new Request();
    const url = 'api/services/' + id;
    request.delete(url).then(() => {
      window.location = '/businesses/servicelist'

    })
  }

  render() {
    console.log("props", this.props);
    return(
      <div>

      SingleBusinessServiceContainer!
        <BusinessServiceDetails service = {this.state.service} handleDelete = {this.handleDelete} />

      </div>
    )
  }
}

export default SingleBusinessServiceContainer;
