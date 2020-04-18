import { LOADING_PERFIL, GET_PERFIL } from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getPerfil = () => {
  return dispatch => {
    dispatch({
      type: LOADING_PERFIL,
      payload: {
        loadingPerfil: true
      }
    });

    Api.get(uris.GET_PERFIL)
      .then(response => {
        dispatch({
          type: GET_PERFIL,
          payload: {
            userPerfil: response.data.user,
            loadingPerfil: false
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING_PERFIL,
          payload: {
            loadingPerfil: false
          }
        });
      });
  };
};

export const updatePerfil = () => {
  return dispatch => {
    dispatch({
      type: LOADING_PERFIL,
      payload: {
        loadingPerfil: true
      }
    });

    Api.get(uris.UPDATE_PERFIL)
      .then(response => {
        dispatch({
          type: GET_PERFIL,
          payload: {
            userPerfil: response.data.user,
            loadingPerfil: false
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING_PERFIL,
          payload: {
            loadingPerfil: false
          }
        });
      });
  };
};

