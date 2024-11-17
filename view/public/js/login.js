import { validarUsuario } from "/controller/ControllerUsuarios.js";
import { usuarios } from "../../../model/ModelUsuarios.js";

const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value 
    const password = document.getElementById("password").value

    
    const res = validarUsuario(email, password)

    if(res && email === "admin@mail.com"){        
        window.location.href = "/view/public/pages/admin.html"
    }else if(res ){        
        window.location.href = "/view/public/pages/servicios.html"
        const userForLocalStorage = usuarios.filter((usuario)=>{
            return usuario.email === email
        })
        window.localStorage.setItem("userLogged", JSON.stringify(userForLocalStorage[0]))
    }else{
        alert("Email y/o contraseña incorrectas")
        
    }
        
    
    
})

