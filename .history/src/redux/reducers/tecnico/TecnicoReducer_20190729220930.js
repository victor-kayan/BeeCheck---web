import { GET_PERFIL, LOADING_PERFIL } from "../../actions/tecnicoActions/actionsTypes";

const initialState = {
  home: {},
  loadingHome: false,
  code: ''
};
export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERFIL:
      return {
        ...state,
        home: action.payload.home,
        loadingHome: action.payload.loadingHome,
        code: action.payload.code,
      };
    case LOADING_PERFIL:
      return {
        ...state,
        loadingHome: action.payload.loadingHome,
        code: action.payload.code,
      };
    default:
      return state;
  }
};
