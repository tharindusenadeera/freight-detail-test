import { GET_SHIPMENTS } from "../actions/ActionTypes";

const initialState = {
  getShipments: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SHIPMENTS:
      return { ...state, getShipments: action.payload };
    default:
      return state;
  }
}
