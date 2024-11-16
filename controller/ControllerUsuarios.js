import { usuarios } from "../model/ModelUsuarios.js"
export function validarUsuario() {
    let respuesta = usuarios.some((usuario)=>{
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        if (usuario.email === email && usuario.password === password){
            return true
        }else{
            return false
        }
    })
    return respuesta
}