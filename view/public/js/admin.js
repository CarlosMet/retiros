import { usuarios } from "../../../model/ModelUsuarios.js";

const volver = document.getElementById("btnIrLogin");
volver.addEventListener("click", () => {
    window.location.href = "/view/public/pages/login.html";
});

// Variables para el formulario de edición
const editUserFormContainer = document.getElementById('editUserFormContainer');
const editUserForm = document.getElementById('editUserForm');
const editNombre = document.getElementById('editNombre');
const editPassword = document.getElementById('editPassword');
const cancelEditButton = document.getElementById('cancelEditButton');
let currentEditIndex = null;

// Mostrar la lista de usuarios
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
                <button class="btn-actualizar bg-green-500 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-colors" data-index="${index}">
                    Actualizar
                </button>
                <button class="btn-eliminar bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors" data-index="${index}">
                    Eliminar
                </button>
            </div>
        `;
        userList.appendChild(userDiv);
    });

    // Asignar el evento a los botones de actualizar
    document.querySelectorAll('.btn-actualizar').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            mostrarFormularioEdicion(index);
        });
    });

    // Asignar el evento a los botones de eliminar
    document.querySelectorAll('.btn-eliminar').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            eliminarUsuario(index);
        });
    });
}

// Mostrar el formulario de edición con los datos actuales
function mostrarFormularioEdicion(index) {
    currentEditIndex = index;
    editNombre.value = usuarios[index].nombre;
    editPassword.value = usuarios[index].password;
    editUserFormContainer.classList.remove('hidden');
}

// Manejar la actualización de usuario desde el formulario de edición
editUserForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (currentEditIndex !== null) {
        usuarios[currentEditIndex].nombre = editNombre.value;
        usuarios[currentEditIndex].password = editPassword.value;
        console.log("Usuario actualizado.");
        mostrarUsuarios();
        editUserFormContainer.classList.add('hidden');
    }
});

// Cancelar la edición
cancelEditButton.addEventListener('click', () => {
    editUserFormContainer.classList.add('hidden');
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

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    console.log("Usuario eliminado.");
    mostrarUsuarios();
}

// Mostrar la lista inicial al cargar la página
window.onload = mostrarUsuarios;
