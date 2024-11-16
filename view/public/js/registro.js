let registro = document.getElementById("registroForm")
import { usuarios } from "../../../model/ModelUsuarios.js"

registro.addEventListener("submit", (e)=>{
    e.preventDefault()
    let nombre = document.getElementById("nombreRegistro").value
    let email = document.getElementById("emailRegistro").value
    let password = document.getElementById("passwordRegistro").value
    let nuevoUsuario = {nombre, email, password}

    const storedUsers = window.localStorage.getItem("users")

    if(storedUsers){
        const newUsers = JSON.parse(storedUsers)
        newUsers.push(nuevoUsuario)
        window.localStorage.setItem("users" ,JSON.stringify(newUsers))
    }else{
        const newUsers = usuarios
        newUsers.push(nuevoUsuario)
        window.localStorage.setItem("users" ,JSON.stringify(newUsers))
    }
    
    alert("usuario "+nombre+" registrado")
    window.location.href="login.html"
})

