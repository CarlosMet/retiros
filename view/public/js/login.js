import { validarUsuario } from "/controller/ControllerUsuarios.js";
import { usuarios } from "/model/ModelUsuarios.js"



const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value 
    const password = document.getElementById("password").value

    
    const res = validarUsuario(email, password)

    if(res && email === "admin@mail.com"){
        console.log("admin")
        window.location.href = "/view/public/pages/admin.html"
    }else if(res ){
        console.log("logged as user")
        window.location.href = "/view/public/pages/servicios.html"
        
    }else{
        console.log(usuarios, res)
    }
        
    
    
})

if(localStorage.getItem("registro")==="true"){
    usuarios.push(JSON.parse(localStorage.getItem("usuarios")));
}
