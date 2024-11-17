import { usuarios } from "../../../model/ModelUsuarios.js"
const volver = document.getElementById("btnIrLogin");
volver.addEventListener("click", () => {
    window.location.href = "/view/public/pages/login.html";
});

let main = document.getElementById("main");

// Función para mostrar la lista de usuarios
function mostrarUsuarios() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Limpiar lista antes de mostrar

    usuarios.forEach((usuario, index) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add(
            'bg-white', 
            'p-4', 
            'rounded-lg', 
            'transition-shadow', 
            'hover:shadow-lg', 
            'hover:shadow-black'
        );

        userDiv.innerHTML = `
        
            <p class="text-gray-800 font-medium mb-2"><strong>Nombre:</strong> ${usuario.nombre}</p>
            <p class="text-gray-600 mb-4"><strong>Email:</strong> ${usuario.email}</p>
            <div class="flex gap-2">
                <button 
                    onclick="actualizarUsuario(${index})" 
                    class="bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-colors"
                >
                    Actualizar
                </button>
                <button 
                    class="btn-eliminar bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors" 
                    data-index="${index}"
                >
                    Eliminar
                </button>
            </div>
        `;
        userList.appendChild(userDiv);
    });

    // Añadir evento a los botones de eliminar
    document.querySelectorAll('.btn-eliminar').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            eliminarUsuario(index);
        });
    });
}

// Mostrar/ocultar el formulario de agregar usuario
document.getElementById('toggleFormButton').addEventListener('click', function () {
    const formContainer = document.getElementById('addUserFormContainer');
    formContainer.classList.toggle('hidden');
});

// Función para agregar un usuario
document.getElementById('addUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    crearUsuario({ nombre, email, password });
    mostrarUsuarios();
    e.target.reset(); // Limpiar formulario
});

// Métodos CRUD
function crearUsuario(nuevoUsuario) {
    usuarios.push(nuevoUsuario);
    console.log("Usuario agregado exitosamente.");
}

function actualizarUsuario(index) {
    const nuevoNombre = prompt("Ingrese el nuevo nombre:", usuarios[index].nombre);
    const nuevoPassword = prompt("Ingrese el nuevo password:", usuarios[index].password);
    if (nuevoNombre !== null && nuevoPassword !== null) {
        usuarios[index].nombre = nuevoNombre;
        usuarios[index].password = nuevoPassword;
        console.log("Usuario actualizado.");
        mostrarUsuarios();
    }
}

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    console.log("Usuario eliminado.");
    mostrarUsuarios();
}

// Mostrar la lista inicial al cargar la página
window.onload = mostrarUsuarios;
