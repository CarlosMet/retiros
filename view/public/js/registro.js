let registro = document.getElementById("registroForm")

registro.addEventListener("submit", (e)=>{
    e.preventDefault()
    let nombre = document.getElementById("nombreRegistro").value
    let email = document.getElementById("emailRegistro").value
    let password = document.getElementById("passwordRegistro").value
    let nuevoUsuario = {nombre:nombre, email:email, password: password}
    localStorage.setItem("usuarios", JSON.stringify(nuevoUsuario))
    localStorage.setItem("registro", "true")
    alert("usuario "+nombre+" registrado")
    window.location.href="login.html"
})

