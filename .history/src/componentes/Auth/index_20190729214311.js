import { log } from "util";


export const isAuthenticated = () => {
    if(localStorage.getItem('token')){
        console.log('====================================');
        console.log('Autenticado ');
        console.log('====================================');
        return true;
    }
    return false;
};