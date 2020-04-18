import {
  GET_ALL_INTERVENCOES_APIARIO,
  LOADING_INTERVENCAO_APIARIO,
  REQUEST_INTEVENCAO_ERROR,
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllApiariosIntervencoes = () => {
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

export const deleteVisitaApiario = (id) => {
  return dispatch => {
    dispatch({
      type: LOADING_VISITA_APIARIO,
      payload: {
        loadingVisita: true
      }
    });

    Api.delete(uris.DELETE_VISITA_APIARIO + id)
      .then(response => {
        dispatch({
          type: DELETE_VISITA_APIARIO,
          payload: {
            loadingVisita: false,
            code: response.status
          }
        });
        dispatch(getAllApiariosVisitas());
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

