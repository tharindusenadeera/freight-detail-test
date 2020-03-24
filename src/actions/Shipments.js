import { GET_SHIPMENTS } from "./ActionTypes";

export const setShipments = payload => dispatch => {
  dispatch({ type: GET_SHIPMENTS, payload });
};
