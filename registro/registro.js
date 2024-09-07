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
        .then(response => response.text())
        .then(data => {
            alert(data);  // Mostrar un mensaje de éxito o error
        })
        .catch(error => console.error('Error:', error));
});
