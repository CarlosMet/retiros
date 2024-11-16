import { getUserLogged } from "../../../controller/ControllerUsuarioLogueado.js";

const redirectButtons = document.querySelectorAll(".redirect")

const startCalcs = ()=>{
    
    const isLogged = getUserLogged()
    const user =  {}
    if(isLogged){
        window.location.href = "../../../view/public/pages/calculadora.html"
    }else{
        window.location.href = "../../../view/public/pages/registro.html"
    }
}

redirectButtons.forEach(button =>{
    button.addEventListener("click", startCalcs)
})