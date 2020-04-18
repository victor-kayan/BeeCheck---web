import {
  GET_ALL_VISITAS_APIARIO,
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllApiariosVisitas = () => {
  return dispatch => {
    dispatch({
      type: LOADING_VISITA_APIARIO,
      payload: {
        loadingVisita: true
      }
    });

    Api.get(uris.GET_ALL_VISITAS_APIARIO)
      .then(response => {
      
        dispatch({
          type: GET_ALL_VISITAS_APIARIO,
          payload: {
            visitasApiarios: response.data,
            loadingVisita: false,
            code: response.status
          }
        });
      })
      .catch(error => {
        dispatch({
          type: REQUEST_VISITA_ERROR,
          payload: {
            loadingVisita: false,
            code: (error.response && error.response.status) || 500
          }
        });
      });
  };
};
