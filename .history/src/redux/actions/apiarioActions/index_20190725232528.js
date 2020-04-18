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
            loading: false
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING_APIARIO,
          payload: {
            loadingApiario: false,
            code: error.response
          }
        });
      });
  };
};

export const saveApiario = request => {
  return dispatch => {
    console.log("====================================");
    console.log("          SALVAR APIARIO            ");
    console.log(request);
    console.log("====================================");
    dispatch({
      type: LOADING_APIARIO,
      payload: {
        loadingApiario: true
      }
    });

    Api.post(uris.SAVE_APIARIO, request)
      .then(response => {
        console.log(response.status);
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
