import { usuarios } from "../../../model/ModelUsuarios"
const volver = document.getElementById("btnIrLogin")
volver.addEventListener("click", ()=>{
    window.location.href="/view/public/pages/login.html"
})

let main = document.getElementById("main")

// Función para mostrar la lista de usuarios
function mostrarUsuarios() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Limpiar lista antes de mostrar
    usuarios.forEach((usuario, index) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
  
      userDiv.innerHTML = `
        <p><strong>Nombre:</strong> ${usuario.nombre} | <strong>Email:</strong> ${usuario.email}</p>
        <button onclick="actualizarUsuario(${index})">Actualizar</button>
        <button class="btn-eliminar" data-index="${index}">Eliminar</button>
      `;
      userList.appendChild(userDiv);
    });
  
    // Añadir evento a los botones de eliminar
    document.querySelectorAll('.btn-eliminar').forEach(button => {
      button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        eliminarUsuario(index);
      });
    });
  }
  
  // Mostrar/ocultar el formulario de agregar usuario
  document.getElementById('toggleFormButton').addEventListener('click', function() {
    const formContainer = document.getElementById('addUserFormContainer');
    formContainer.classList.toggle('hidden');
  });
  
  // Función para agregar un usuario
  document.getElementById('addUserForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    crearUsuario({nombre, email, password});
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
      