import { usuarios } from "../model/ModelUsuarios.js"
export function validarUsuario(mail, pass) {
    
    let respuesta = usuarios.some((usuario)=>{      
        return usuario.email === mail && usuario.password === pass
    })
    return respuesta
}