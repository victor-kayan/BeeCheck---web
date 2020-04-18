import { log } from "util";


export const isAuthenticated = () => {
    if(localStorage.getItem('token')){
        // console.log('====================================');
        // console.log('Autenticado ');
        // console.log('====================================');
        return true;
    }
    // console.log('====================================');
    // console.log('Não Autenticado ');
    // console.log('====================================');
    return false;
};