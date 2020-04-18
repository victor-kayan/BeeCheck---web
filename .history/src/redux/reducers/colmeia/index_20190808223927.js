import { LOADING_COLMEIA, GET_ALL_COLMEIAS, REQUEST_COLMEIA_ERROR } from "../../actions/colmeiasByApiario/actionsTypes";

const initialState = {
  colmeias: {},
  loadingColmeia: false,
  code: ''
};
export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COLMEIAS:
      return {
        ...state,
        home: action.payload.home,
        loadingHome: action.payload.loadingHome,
        code: action.payload.code,
      };
    case LOADING_COLMEIA:
      return {
        ...state,
        loadingHome: action.payload.loadingHome,
        code: action.payload.code,
      };
      case REQUEST_COLMEIA_ERROR:
      return {
        ...state,
        loadingHome: action.payload.loadingHome,
        code: action.payload.code,
      };
    default:
      return state;
  }
};
