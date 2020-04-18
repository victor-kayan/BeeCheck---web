import { combineReducers } from 'redux';
import { UserReducer } from './user/UserReducer';
import { ApicultorReducer } from './apicultor/ApicultorReducer';
import { ApiarioReducer } from './apiario/ApiarioReducer';
import { HomeReducer} from './home/HomeReducer';
import { CidadeReducer } from './cidade/CidadeReducer';

export const Reducers = combineReducers({
    userState: UserReducer,
    apicultorState: ApicultorReducer,
    apiarioState: ApiarioReducer,
    homeState: HomeReducer,
    cidadeState: CidadeReducer
});