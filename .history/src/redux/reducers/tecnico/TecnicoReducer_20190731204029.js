import {
  GET_PERFIL,
  LOADING_PERFIL,
  UPDATE_PERFIL
} from "../../actions/tecnicoActions/actionsTypes";

const initialState = {
  userPerfil: {},
  loadingPerfil: false,
  loadingUpdatePerfil: false,
  messagePerfil: "",
  code: null
};
export const TecnicoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERFIL:
      return {
        ...state,
        userPerfil: action.payload.userPerfil,
        loadingPerfil: action.payload.loadingPerfil
      };
    case UPDATE_PERFIL:
      return {
        ...state,
        userPerfil: action.payload.userPerfil,
        messagePerfil: action.payload.messagePerfil,
        code: action.payload.codes
      };
    case LOADING_PERFIL:
      return {
        ...state,
        loadingPerfil: action.payload.loadingPerfil
      };
    default:
      return state;
  }
};
