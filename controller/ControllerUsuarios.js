import { usuarios } from "../model/ModelUsuarios.js"
export function validarUsuario() {
    if(localStorage.getItem("registro")==="true"){
        users.push(JSON.parse(localStorage.getItem("usuarios")));
    }else{
        
    }
    
}