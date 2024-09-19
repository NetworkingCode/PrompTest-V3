function grabarPrompt() {
    const titulo = document.getElementById('titulo').value;
    const comentario = document.getElementById('comentario').value;

    // Obtener el usuario_id desde el localStorage
    const usuario_id = localStorage.getItem('usuario_id');

    // Verificar que el usuario_id está presente
    if (!usuario_id) {
        console.error("No se encontró el usuario_id en el localStorage");
        return;
    }

    const data = { usuario_id, titulo, contenido: comentario };



    fetch('http://localhost:3000/grabar-prompt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (response.ok) {
                alert('Prompt grabado con éxito');
                // Añadir el nuevo prompt a la lista sin recargar toda la página
                agregarPromptAlDOM(titulo, comentario);
            } else {
                alert('Error al grabar el prompt');
            }
        })
        .catch(error => {
            console.error('Error al grabar el prompt:', error);
            alert('Error de conexión');
        });
}

// Función para agregar el nuevo prompt al DOM
function agregarPromptAlDOM(titulo, contenido) {
    const listaPrompts = document.getElementById('listaPrompts');

    const promptDiv = document.createElement('div');
    promptDiv.innerHTML = `<h3>${titulo}</h3><p>${contenido}</p><hr>`;

    // Añadir el nuevo prompt al principio de la lista
    listaPrompts.prepend(promptDiv);
}
