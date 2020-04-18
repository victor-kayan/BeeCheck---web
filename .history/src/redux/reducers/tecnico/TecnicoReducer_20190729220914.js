import { LOADING_HOME, GET_ALL_INFO_HOME } from "../../actions/homeActions/actionsTypes";
import { GET_PERFIL } from "../../actions/tecnicoActions/actionsTypes";

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
    case LOADING_HOME:
      return {
        ...state,
        loadingHome: action.payload.loadingHome,
        code: action.payload.code,
      };
    default:
      return state;
  }
};
