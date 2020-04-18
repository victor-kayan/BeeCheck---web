import { LOADING_HOME, GET_ALL_INFO_HOME } from "../../actions/homeActions/actionsTypes";

const initialState = {
  home: {},
  loadingHome: false,
  code: ''
};
export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPERFIl:
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
