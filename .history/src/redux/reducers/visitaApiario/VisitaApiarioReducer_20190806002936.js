import {
    GET_ALL_VISITAS_APIARIO
  } from "../../actions/visitasApiarioActions/actionsTypes";
  
  const initialState = {
    loadingVisita: false,
    visitasApiarios: {},
    code: null;
  };
  export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          user: action.payload.user,
          loading: action.payload.loading,
          autenticado: action.payload.autenticado,
          token: action.payload.token,
          code: action.payload.code
        };
      case LOGIN_FACEBOOK:
        return {
          ...state,
          user: action.payload.user,
          loadingFacebook: action.payload.loadingFacebook,
          autenticado: action.payload.autenticado,
          token: action.payload.token
        };
      case LOGOUT:
        return {
          ...state,
          user: action.payload.user,
          loading: action.payload.loading,
          autenticado: action.payload.autenticado,
          token: action.payload.token
        };
      case LOADING:
        return {
          ...state,
          loading: action.payload.loading,
          loadingFacebook: action.payload.loadingFacebook,
          code: action.payload.code,
          autenticado: action.payload.autenticado
        };
      default:
        return state;
    }
  };
  