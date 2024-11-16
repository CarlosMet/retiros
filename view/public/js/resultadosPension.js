function mostrarResultadoPension() {
    const nombre = localStorage.getItem("nombre");
    const apellidos = localStorage.getItem("apellidos");
    const genero = localStorage.getItem("genero");
    const pensionMensual = localStorage.getItem("pensionMensual");
    const mensajeTiempoRestante = localStorage.getItem("mensajeTiempoRestante");

    // Mostrar los resultados de una forma organizada
    document.getElementById("resultado").innerHTML = `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Pensión Estimada Mensual:</strong> $${pensionMensual}</p>
        <p><strong></strong> ${mensajeTiempoRestante}</p>`;
}


document.addEventListener("DOMContentLoaded", mostrarResultadoPension);