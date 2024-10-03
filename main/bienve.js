// Obtener el nombre del usuario desde la URL
const params = new URLSearchParams(window.location.search);
const usuario = params.get('usuario');

// Mostrar el mensaje de bienvenida con el nombre del usuario
if (usuario) {
    document.getElementById('mensaje-bienvenida').textContent = `Bienvenido, ${decodeURIComponent(usuario)}!`;
} else {
    document.getElementById('mensaje-bienvenida').textContent = 'Bienvenido!';
}

// Redirigir automáticamente a main.html después de 3 segundos
setTimeout(function() {
    window.location.href = '../main/main.html';
}, 3000); // 3000 milisegundos = 3 segundos