function calcularPension() {
    // Obtener valores de los campos
    const salario = parseFloat(document.getElementById("salario").value);
    const semanasColpensiones = parseInt(document.getElementById("semanasColpensiones").value) || 0;
    const semanasPrivados = parseInt(document.getElementById("semanasPrivados").value) || 0;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const genero = document.querySelector('input[name="genero"]:checked')?.value;

    const diaNacimiento = parseInt(document.getElementById("diaNacimiento").value);
    const mesNacimiento = parseInt(document.getElementById("mesNacimiento").value);
    const añoNacimiento = parseInt(document.getElementById("anioNacimiento").value);

    // Verificar que todos los campos obligatorios estén completos
    if (!nombre || !apellidos || !genero || !diaNacimiento || !mesNacimiento || !añoNacimiento || !salario) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    const totalSemanas = semanasColpensiones + semanasPrivados;
    const añosCotizados = totalSemanas / 52;

    // Tasa estimada para la pensión
    const tasaPension = 0.16;
    const pensionAnual = salario * 12 * tasaPension * añosCotizados;
    const pensionMensual = pensionAnual / 12;

    // Guardar los datos en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellidos", apellidos);
    localStorage.setItem("genero", genero);
    localStorage.setItem("pensionMensual", pensionMensual.toFixed(2));

    // Definir la edad de jubilación según el género
    const edadJubilacion = genero === 'hombre' ? 62 : 57;

    const añoActual = 2024;  
    const edadActual = añoActual - añoNacimiento;

    let añosRestantes = edadJubilacion - edadActual;

    if (añosRestantes < 0) {
        añosRestantes = 0;
    }

    const mensajeTiempoRestante = añosRestantes > 0
        ? `Tiempo restante para pensionarse: <strong>${Math.floor(añosRestantes)} años</strong>`
        : 'Ya has alcanzado la edad máxima de pensión o ya estás pensionado.';

    localStorage.setItem("mensajeTiempoRestante", mensajeTiempoRestante);

    // Redirigir a la página de resultados
    window.location.href = 'resultados.html';
}
