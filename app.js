// Crear un array para almacenar los nombres
let amigos = [];

// Función para agregar amigos desde el input
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final

    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista(); // Actualizar la lista en el HTML
        input.value = ""; // Limpiar el campo de entrada
        input.focus(); // Devolver el foco al input
    } else {
        alert("El nombre es inválido o ya está en la lista.");
    }
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de volver a mostrar

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar un amigo de la lista
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el amigo en la posición dada
    actualizarLista(); // Volver a renderizar la lista
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    
    resultado.innerHTML = `<li>🎉 El amigo sorteado es: <strong>${amigos[indiceAleatorio]}</strong></li>`;
}
