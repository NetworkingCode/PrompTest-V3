document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Enviar los datos al servidor usando fetch
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Credenciales incorrectas');
            } else {
                throw new Error('Error en el servidor');
            }
        }
        return response.json();
    })
    .then(data => {
        //alert(data.message);  // Mostrar mensaje de éxito (Si todo funciona esta linea se puede borrar)

        // Verificar si el usuario_id llega correctamente
        console.log("usuario_id recibido:", data.usuario_id);

        // Guardar el usuario_id en el localStorage
        localStorage.setItem('usuario_id', data.usuario_id);
        localStorage.setItem('usuario_nombre', username);

         // Redirigir al usuario a la página de bienvenida con su nombre
        window.location.href = `./login/bienvenida.html?usuario=${encodeURIComponent(username)}`;
    })
    .catch(error => {
        alert(error.message);
        console.error('Error:', error);
    });
});