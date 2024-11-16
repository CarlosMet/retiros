import { getUserLogged } from "../../../controller/ControllerLogin.js";
console.log("holadasdas")
const buttons = document.querySelectorAll(".redir")


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
// const btnIniciarSesion = document.getElementById("btnIniciarSesion")
// btnIniciarSesion.addEventListener("click", ()=>{
//     window.location.href="view/pages/login.html"
// })
const btnRegistrarse = document.getElementById("btnRegistrarse")
btnRegistrarse.addEventListener("click", ()=>{
    window.location.href="view/pages/registro.html"
})