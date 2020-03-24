import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import { shipments } from "../action-creator/Shipments";
import  FreightPagination  from "../components/FreightPagination";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20,
      shipments: []
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(shipments());
  }

  componentDidUpdate(prevProps, prevState){
      const { getShipments } = this.props;

      if(prevState.shipments != getShipments){
          this.setState({ shipments: getShipments})
          
      }
  }

  handleDetails = key => {
      const { shipments } = this.state;
      const { history } = this.props;

      let newArr = [];

      shipments.forEach((element, index) => {
          if(index == key){
              newArr.push(element)
          }
      })

      history.push({
          pathname: "/details",
          state: { details: newArr[0]}
      })
      
      
  }

  onChangePagination = page => {
    this.setState({ page: page });
  };

  render() {
    const { page, perPage, shipments } = this.state;

    // Logic for displaying current shipments
    const indexOfLastShipment = page * perPage;
    const indexOfFirstShipment = indexOfLastShipment - perPage;
    const currentShipments = shipments.slice(indexOfFirstShipment, indexOfLastShipment);

    const renderShipments = currentShipments.map((item, key) => {
        return(
            <tr key={key}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.mode}</td>
            <td>{item.type}</td>
            <td><Button onClick={() => this.handleDetails(key)}>Details</Button></td>
          </tr>
        )
    })

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
              {renderShipments}
          </tbody>
        </Table>
        <FreightPagination
          onChange={this.onChangePagination}
          total={24}
          pageSize={20}
          current={page}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  getShipments: state.shipment.getShipments
});

export default connect(mapStateToProps)(Index);
