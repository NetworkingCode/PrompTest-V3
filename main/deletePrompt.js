export function deletePrompt(promptId) {
    
    // Obtener el usuario_id del localStorage
    const usuario_id = localStorage.getItem('usuario_id');

    if (!usuario_id) {
        console.error("No se encontró el usuario_id en el localStorage");
        return;
    }

    fetch(`http://localhost:3000/eliminar-prompt/${usuario_id}/${promptId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            alert('Prompt eliminado con éxito');
            // Aquí puedes hacer que el prompt desaparezca del DOM o recargar la lista
        } else {
            alert('Error al eliminar el prompt');
        }
    })
    .catch(error => {
        console.error('Error al eliminar el prompt:', error);
    });
}
