import Axios from "axios";

export const fetchShipments = params => {
  return Axios.get(`${process.env.REACT_APP_API_URL}`, {
    params: { ...params }
  })
};
