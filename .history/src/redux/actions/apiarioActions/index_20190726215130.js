import {
  GET_ALL_APIARIOS,
  LOADING_APIARIO,
  SAVE_APIARIO,
  SAVE_APIARIO_ERROR
} from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getAllapiarios = () => {
  console.log("====================================");
  console.log("          LISTA DE APIARIOS         ");
  console.log("====================================");

  return dispatch => {
    dispatch({
      type: LOADING_APIARIO,
      payload: {
        loadingApiario: true
      }
    });

    Api.get(uris.GET_ALL_APIARIOS)
      .then(response => {
        dispatch({
          type: GET_ALL_APIARIOS,
          payload: {
            listApiarios: response.data.apiarios,
            loaloadingApiarioding: false
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING_APIARIO,
          payload: {
            loadingApiario: false,
            messageApiario: error.response && error.response.data.message || 'Houve alguma falha, aguarde',
            code: error.response.status
          }
        });
      });
  };
};

export const saveApiario = request => {
  return dispatch => {
    dispatch({
      type: LOADING_APIARIO,
      payload: {
        loadingApiario: true
      }
    });

    Api.post(uris.SAVE_APIARIO, request)
      .then(response => {
        console.log('====================================');
        console.log('Resposta ', response);
        console.log('====================================');
        dispatch({
          type: SAVE_APIARIO,
          payload: {
            loadingApiario: false,
            code: response.status,
            messageApiario: response.data.message
          }
        });
        dispatch(getAllapiarios());
      })
      .catch(error => {
        dispatch({
          type: SAVE_APIARIO_ERROR,
          payload: {
            loadingApiario: false,
            code: (error.response && error.response.status) || 500,
            messageApiario:
              (error.response && error.response.data.message) || ""
          }
        });
      });
  };
};

export const detalhesApiario = id => {
  return dispatch => {
    dispatch({
      type: LOADING_APIARIO,
      payload: {
        loadingApiario: true
      }
    });

    Api.post(uris.DETALHES_APIARIO, request)
      .then(response => {
        console.log('====================================');
        console.log('Resposta ', response);
        console.log('====================================');
        dispatch({
          type: SAVE_APIARIO,
          payload: {
            loadingApiario: false,
            code: response.status,
            messageApiario: response.data.message
          }
        });
        dispatch(getAllapiarios());
      })
      .catch(error => {
        dispatch({
          type: SAVE_APIARIO_ERROR,
          payload: {
            loadingApiario: false,
            code: (error.response && error.response.status) || 500,
            messageApiario:
              (error.response && error.response.data.message) || ""
          }
        });
      });
  };
};
