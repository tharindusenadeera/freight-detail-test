import { fetchShipments } from "../api/Shipment";
import { setShipments } from "../actions/Shipments";

export const shipments = params => dispatch => {
    fetchShipments(params).then(res => {
    dispatch(setShipments(res.data));
  });
};