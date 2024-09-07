document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Enviar los datos al servidor usando fetch
    fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            password: password
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en el registro');
            }
            return response.text();
        })
        .then(data => {
            alert(data);  // Mostrar mensaje de éxito
            window.location.href = 'index.html';  // Redirigir a la página de inicio de sesión
        })
        .catch(error => {
            alert(error.message);
            console.error('Error:', error);
        });
});
