document.getElementById('registroForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
        event.preventDefault(); // Evita el envío del formulario
    }
});
