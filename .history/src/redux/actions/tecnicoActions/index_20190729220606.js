import { LOADING_PERFIL, GET_PERFIL } from "./actionsTypes";
import Api from "../../../services/api";
import { uris } from "../../../assets";

export const getPerfil = () => {
  return dispatch => {
    console.log("-------------------");
    console.log(" GET PERFIl ");
    console.log("-------------------");

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
            home: response.data.data,
            loadingHome: false
          }
        });
      })
      .catch(error => {
        dispatch({
          type: LOADING_HOME,
          payload: {
            loadingHome: false,
            code: error.response
          }
        });
      });
  };
};
