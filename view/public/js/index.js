const buttons = document.querySelectorAll(".redir")
import { getUserLogged } from "../../../controller/ControllerUsuarioLogueado.js";


const startCalcs = ()=>{
    
    const isLogged = getUserLogged()
    const user =  {}
    if(isLogged){
        window.location.href = "../../../view/public/pages/servicios.html"
    }else{
        window.location.href = "../../../view/public/pages/login.html"
    }
    
}

buttons.forEach(button =>{
    button.addEventListener("click", startCalcs)
})
//Yeison
const btnIniciarSesion = document.getElementById("btnIniciarSesion")
btnIniciarSesion.addEventListener("click", ()=>{
    window.location.href="view/public/pages/login.html"
})
const btnRegistrarse = document.getElementById("btnRegistrarse")
btnRegistrarse.addEventListener("click", ()=>{
    window.location.href="view/public/pages/registro.html"
})