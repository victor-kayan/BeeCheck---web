import {
  GET_ALL_COLMEIAS,
  LOADING_COLMEIA,
  REQUEST_COLMEIA_ERROR,
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllColmeiasIntervencoes = () => {
  return dispatch => {
    dispatch({
      type: LOADING_COLMEIA,
      payload: {
        loadingColmeia: true
      }
    });

    Api.get(uris.GET_ALL_COLMEIAS)
      .then(response => {
        dispatch({
          type: GET_ALL_COLMEIAS,
          payload: {
            intervencoesColmeias: response.data,
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

export const deleteIntervencaoColmeia = id => {
  return dispatch => {
    dispatch({
      type: LOADING_INTERVENCAO_COLMEIA,
      payload: {
        loadingIntervencao: true
      }
    });

    Api.delete(uris.DELETE_INTERVENCAO_COLMEIA + id)
      .then(response => {
        dispatch({
          type: DELETE_INTERVENCAO_COLMEIA,
          payload: {
            loadingIntervencao: false,
            code: response.status
          }
        });
        dispatch(getAllColmeiasIntervencoes());
      })
      .catch(error => {
        dispatch({
          type: REQUEST_INTERVENCAO_ERROR,
          payload: {
            loadingIntervencao: false,
            code: (error.response && error.response.status) || 500
          }
        });
      });
  };
};
