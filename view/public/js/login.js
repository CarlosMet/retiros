import { validarUsuario } from "/controller/ControllerUsuarios.js";
import { usuarios } from "/model/ModelUsuarios.js"

console.log();

const loginForm = document.getElementById("loginForm")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value 
    const password = document.getElementById("password").value 
    if (email==="admin@mail.com" && password==="123"){
        console.log("entro aca 1");
        return window.location.href="/view/public/pages/admin.html"
    }else if (validarUsuario()){
        console.log("entro aca 2");
        return window.location.href="/view/public/pages/calculadora.html"
    }else{
        console.log("entro aca 3");
        return alert("Usuario y/o contraseña incorrectas")
    }
})

if(localStorage.getItem("registro")==="true"){
    usuarios.push(JSON.parse(localStorage.getItem("usuarios")));
}
