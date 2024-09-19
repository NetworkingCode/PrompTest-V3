// Función para cargar los prompts del usuario
export function cargarPrompts(usuario_id) {
    fetch(`http://localhost:3000/obtener-prompts/${usuario_id}`)
        .then(response => response.json())
        .then(prompts => {
            const listaPrompts = document.getElementById('listaPrompts');
            listaPrompts.innerHTML = ''; // Limpiar el div antes de mostrar los prompts

            prompts.forEach(prompt => {
                const promptDiv = document.createElement('div');
                promptDiv.innerHTML = `<h3>${prompt.titulo}</h3><p>${prompt.contenido}</p><hr>`;
                listaPrompts.appendChild(promptDiv);
            });
        })
        .catch(error => {
            console.error('Error al cargar los prompts:', error);
        });
}



// Cargar los prompts al cargar la página
window.onload = () => {
    const usuario_id = 1; // Ajusta esto con el ID real del usuario autenticado
    cargarPrompts(usuario_id);
};
