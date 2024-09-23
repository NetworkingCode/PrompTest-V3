import { deletePrompt } from './deletePrompt.js';

// Función para obtener el usuario ID desde el localStorage
function getUsuarioId() {
    return localStorage.getItem('usuario_id');
}

// Función para cargar los prompts del usuario
function cargarPrompts() {
    const usuario_id = getUsuarioId(); // Obtener el ID del usuario

    fetch(`http://localhost:3000/obtener-prompts/${usuario_id}`)
        .then(response => response.json())
        .then(prompts => {
            const listaPrompts = document.getElementById('listaPrompts');
            listaPrompts.innerHTML = ''; // Limpiar el div antes de mostrar los prompts

            prompts.forEach(prompt => {
                const promptDiv = document.createElement('div');

                // Crear el HTML del prompt con el botón "Copiar" y "Eliminar"
                promptDiv.innerHTML = `
                    <h3>${prompt.titulo}</h3>
                    <p id="prompt-${prompt.id}">${prompt.contenido}</p>
                    <button onclick="copiarAlPortapapeles('prompt-${prompt.id}')">Copiar</button>
                    <button class="eliminar-btn">Eliminar</button>
                    <hr>
                    `;
                  

                // Añadir el evento de clic para "Eliminar"
                const eliminarBtn = promptDiv.querySelector('.eliminar-btn');
                eliminarBtn.onclick = () => deletePrompt(prompt.id);
                listaPrompts.appendChild(promptDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar los prompts:', error);
        });
}



// Cargar los prompts al cargar la página
window.onload = () => {
    cargarPrompts(); // No es necesario pasar usuario_id como parámetro porque ya lo obtenemos dentro de la función
};
