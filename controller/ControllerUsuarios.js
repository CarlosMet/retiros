import { usuarios } from "../model/ModelUsuarios.js"
export function validarUsuario(mail, pass) {

    const storedUsers = window.localStorage.getItem("users")

    let newUsers = storedUsers ? JSON.parse(storedUsers) : usuarios
    
    let respuesta = newUsers.some((usuario)=>{      
        return usuario.email === mail && usuario.password === pass
    })
    return respuesta
}