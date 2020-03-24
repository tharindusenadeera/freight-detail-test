import React, { Component, Fragment } from "react";
import { Table } from "reactstrap";

class ShipmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {}
    };
  }

  componentDidMount() {
    const { history } = this.props;
    const queryData = history.location.state.details;
    this.setState({ details: queryData });
  }

  render() {
    const { details } = this.state;

    return (
      <Fragment>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mode</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details.id}</td>
              <td>{details.name}</td>
              <td>{details.mode}</td>
              <td>{details.typeß}</td>
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default ShipmentDetails;
