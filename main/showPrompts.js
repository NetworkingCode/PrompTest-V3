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

                // Crear el HTML del prompt con el botón "Copiar"
                promptDiv.innerHTML = `
                    <h3>${prompt.titulo}</h3>
                    <p id="prompt-${prompt.id}">${prompt.contenido}</p>
                    <button onclick="copiarAlPortapapeles('prompt-${prompt.id}')">Copiar</button>
                    <button onclick="eliminarPrompt(${prompt.id})">Eliminar</button>
                    <hr>
                    `;
                listaPrompts.appendChild(promptDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar los prompts:', error);
        });
}

// Función para copiar el texto del prompt al portapapeles
function copiarAlPortapapeles(promptId) {
    const promptTexto = document.getElementById(promptId).innerText;

    // Usar la API de portapapeles para copiar el texto
    navigator.clipboard.writeText(promptTexto)
        .then(() => {
            alert('Prompt copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
        });
}

// Nueva función para eliminar un prompt
function eliminarPrompt(promptId) {
    const usuario_id = getUsuarioId();

    fetch(`http://localhost:3000/eliminar-prompt/${usuario_id}/${promptId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Eliminar el prompt del DOM
            const promptContainer = document.getElementById(`prompt-container-${promptId}`);
            if (promptContainer) {
                promptContainer.remove();
            }
            alert('Prompt eliminado con éxito');
        } else {
            alert('Error al eliminar el prompt');
        }
    })
    .catch(error => {
        console.error('Error al eliminar el prompt:', error);
        alert('Error de conexión');
    });
}

// Cargar los prompts al cargar la página
window.onload = () => {
    cargarPrompts(); // No es necesario pasar usuario_id como parámetro porque ya lo obtenemos dentro de la función
};
