import {
  LOGIN,
  LOADING,
  LOGOUT,
  LOGIN_FACEBOOK,
  GET_PERFIL
} from "../../actions/userActions/actionsTypes";

const initialState = {
  user: {},
  loading: false,
  loadingFacebook: false,
  autenticado: false,
  token: "",
  code: ""
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
    case GET_PERFIL:
      return {
        ...state,
        user: action.payload.user,
        loading: action.payload.loading,
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
