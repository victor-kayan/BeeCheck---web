import {
  GET_ALL_INTERVENCOES_APIARIO,
  LOADING_INTERVENCAO_APIARIO,
  REQUEST_INTEVENCAO_ERROR,
} from "../../actions/intervencoesApiario/actionsTypes";

const initialState = {
  loadingVisita: false,
  visitasApiarios: {},
  messageVisita: "",
  code: null
};
export const IntervencaoApiarioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INTERVENCOES_APIARIO:
      return {
        ...state,
        visitasApiarios: action.payload.visitasApiarios,
        loadingVisita: action.payload.loadingVisita,
        code: action.payload.code
      };
    case SAVE_INTERVENCAO_APIARIO:
      return {
        ...state,
        loadingVisita: action.payload.loadingVisita,
        code: action.payload.code,
        messageVisita: action.payload.messageVisita
      };
    case DELETE_VISITA_APIARIO:
      return {
        ...state,
        loadingVisita: action.payload.loadingVisita,
        code: action.payload.code,
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
        code: action.payload.code,
        messageVisita: action.payload.messageVisita
      };
    default:
      return state;
  }
};
