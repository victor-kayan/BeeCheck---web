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
  data_fim,
}) => {
  return dispatch => {

    dispatch({
      type: SAVE_APICULTOR,
      payload: {
        loading: true
      }
    });

    Api.post(uris.SAVE_APICULTOR, {
      name,
      email,
      telefone,
      cidade_id,
      estado,
      logradouro,
      password,
      password_confirmation
    })
      .then(response => {
        dispatch({
          type: SAVE_APICULTOR,
          payload: {
            loading: false,
            code: response.status,
            message_apicultor: response.data.message
          }
        });
        dispatch(getAllapicultor());
      })
      .catch(error => {
        dispatch({
          type: SAVE_APICULTOR_ERROR,
          payload: {
            loading: false,
            code: (error.response && error.response.status) || 500,
            message_apicultor:
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
