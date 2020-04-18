import { combineReducers } from "redux";
import { UserReducer } from "./user/UserReducer";
import { ApicultorReducer } from "./apicultor/ApicultorReducer";
import { ApiarioReducer } from "./apiario/ApiarioReducer";
import { HomeReducer } from "./home/HomeReducer";
import { CidadeReducer } from "./cidade/CidadeReducer";
import { TecnicoReducer } from "./tecnico/TecnicoReducer";
import { VisitaApiarioReducer } from "./visitaApiario/VisitaApiarioReducer";
import { VisitaColmeiaReducer } from "./visitaColmeia/VisitaColmeiaReducer";
import { IntercencaoApiarioReducer} from "./intervencaoApiario/IntervecaoApiarioReducer";

export const Reducers = combineReducers({
  userState: UserReducer,
  apicultorState: ApicultorReducer,
  apiarioState: ApiarioReducer,
  homeState: HomeReducer,
  cidadeState: CidadeReducer,
  tecnicoState: TecnicoReducer,
  visitaApiarioState: VisitaApiarioReducer,
  visitaColmeiaState: VisitaColmeiaReducer,
  intervencaoApiarioState: 
});
