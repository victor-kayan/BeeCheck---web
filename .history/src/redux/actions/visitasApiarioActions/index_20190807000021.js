import {
  GET_ALL_VISITAS_APIARIO,
  LOADING_VISITA_APIARIO,
  REQUEST_VISITA_ERROR,
  SAVE_INTERVENCAO_APIARIO
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const saveApicultor = ({
  descricao,
  apiario_id,
  data_inicio,
  data_fim
}) => {
  return dispatch => {
    dispatch({
      type: LOADING_VISITA_APIARIO,
      payload: {
        loading: true
      }
    });

    Api.post(uris.SAVE_INTERVENCAO_APIARIO, {
      descricao,
      apiario_id,
      data_inicio,
      data_fim
    })
      .then(response => {
        dispatch({
          type: SAVE_INTERVENCAO_APIARIO,
          payload: {
            loadingVisita: false,
            code: response.status,
            messageVisita: response.data.message
          }
        });
        dispatch(getAllapicultor());
      })
      .catch(error => {
        dispatch({
          type: REQUEST_VISITA_ERROR,
          payload: {
            loadingVisita: false,
            code: (error.response && error.response.status) || 500,
            messageVisita:
              (error.response && error.response.data.message) || ""
          }
        });
      });
  };
};

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
