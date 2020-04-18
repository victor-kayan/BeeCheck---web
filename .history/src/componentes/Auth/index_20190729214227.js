import { log } from "util";


export const isAuthenticated = () => {
    if(localStorage.getItem('token')){
        //console.log();
        
        return true;
    }
    return true;
};