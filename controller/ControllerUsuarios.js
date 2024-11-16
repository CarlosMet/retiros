import { usuarios } from "../model/ModelUsuarios.js"
export function validarUsuario() {
    let respuesta = usuarios.some((usuario)=>{
        let email = document.getElementById("email")
        let password = document.getElementById("password")
        if (usuario.email ===email && usuario.password === password){
            return true
        }else{
            return false
        }
    })
    return respuesta
}