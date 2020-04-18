import { GET_PERFIL, LOADING_PERFIL } from "../../actions/tecnicoActions/actionsTypes";

const initialState = {
  userp: {},
  loadingHome: false,
  code: ''
};
export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERFIL:
      return {
        ...state,
        userPerfil: action.payload.userPerfil,
        loadingPerfil: action.payload.loadingPerfil,
      };
    case LOADING_PERFIL:
      return {
        ...state,
        loadingPerfil: action.payload.loadingPerfil,
      };
    default:
      return state;
  }
};
