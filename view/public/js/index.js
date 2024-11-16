import { getUserLogged } from "../../../controller/ControllerUsuarioLogueado.js";

const redirectButtons = document.querySelectorAll(".redirect")

const startCalcs = ()=>{
    
    const isLogged = getUserLogged()
    const user =  {}
    if(isLogged){
        window.location.href = "../../../view/public/pages/calculadora.html"
    }else{
        window.location.href = "../../../view/pages/login.html"
    }
}

redirectButtons.forEach(button =>{
    button.addEventListener("click", startCalcs)
})
//Yeison
const btnIniciarSesion = document.getElementById("btnIniciarSesion")
btnIniciarSesion.addEventListener("click", ()=>{
    window.location.href="view/pages/login.html"
})
const btnRegistrarse = document.getElementById("btnRegistrarse")
btnRegistrarse.addEventListener("click", ()=>{
    window.location.href="view/pages/registro.html"
})