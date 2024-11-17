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
//comentado para evitar iniciar sesión si ya se ha iniciado anteriormente
// const btnIniciarSesion = document.getElementById("btnIniciarSesion")
// btnIniciarSesion.addEventListener("click", ()=>{
//     window.location.href="view/public/pages/login.html"
// })
const btnRegistrarse = document.getElementById("btnRegistrarse")
btnRegistrarse.addEventListener("click", ()=>{
    window.location.href="view/public/pages/registro.html"
})

// lógica del menú hamburguesa

document.addEventListener("DOMContentLoaded", ()=>{
    const burgerMenu = document.getElementById("burgerMenu")
    const topLine = document.getElementById("topLine")
    const middleLine = document.getElementById("middleLine")
    const bottomLine = document.getElementById("bottomLine")
    const absMenu = document.getElementById("abs")

    if(burgerMenu){
        burgerMenu.addEventListener("click", ()=>{
            middleLine.classList.toggle("opacity-0")            
            topLine.classList.toggle("rotate-45")
            topLine.classList.toggle("translate-y-2") 
            topLine.classList.toggle("bg-white")           
            bottomLine.classList.toggle("-rotate-45")
            bottomLine.classList.toggle("-translate-y-2")
            bottomLine.classList.toggle("bg-white") 
            absMenu.classList.toggle("hidden")
        })
    }
})



