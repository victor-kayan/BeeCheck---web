import { GET_ALL_VISITAS_APIARIO } from "../../actions/visitasApiarioActions/actionsTypes";

const initialState = {
  loadingVisita: false,
  visitasApiarios: {},
  code: null
};
export const VisitaApiarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VISITAS_APIARIO:
      return {
        ...state,
        visitasApiarios: action.payload.visitasApiarios,
        loadingVisita: action.payload.loadingVisita,
        code: action.payload.code
      };
    case LOADING_VISITA_APIARIO:
      return {
        ...state,
        loadingVisita: action.payload.loadingVisita
      };
    case REQUEST_VISITA_ERROR:
      return {
        ...state,
        loadingVisita: action.payload.loadingVisita,
        code: action.payload.code
      };
    default:
      return state;
  }
};
