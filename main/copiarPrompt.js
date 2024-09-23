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