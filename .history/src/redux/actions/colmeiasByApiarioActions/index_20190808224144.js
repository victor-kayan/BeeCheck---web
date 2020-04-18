import {
  GET_ALL_COLMEIAS,
  LOADING_COLMEIA,
  REQUEST_COLMEIA_ERROR
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllColmeias = id => {
  return dispatch => {
    dispatch({
      type: LOADING_COLMEIA,
      payload: {
        loadingColmeia: true
      }
    });

    Api.get(uris.GET_ALL_COLMEIAS, id)
      .then(response => {
        dispatch({
          type: GET_ALL_COLMEIAS,
          payload: {
            colmeias: response.data,
            loadingColmeia: false,
            code: response.status
          }
        });
      })
      .catch(error => {
        dispatch({
          type: REQUEST_COLMEIA_ERROR,
          payload: {
            loadingColmeia: false,
            code: (error.response && error.response.status) || 500
          }
        });
      });
  };
};
