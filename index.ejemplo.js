const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// Crear la aplicación Express
const app = express();

// Middleware para manejar CORS
app.use(cors());

// Middleware para parsear el body de las solicitudes como JSON
app.use(express.json());

// Crear un pool de conexiones MySQL
const pool = mysql.createPool({
    host: '',  // Agregar tu host
    user: '',  // Agregar tu usuario
    password: '',  // Agregar tu contraseña
    database: '',  // Agregar tu base de datos
    waitForConnections: true,  // Esperar a que haya conexiones disponibles
    connectionLimit: 10,  // Límite máximo de conexiones en el pool
    queueLimit: 0  // Sin límite de solicitudes en cola
});

// Ruta para el registro de usuarios
app.post('/registro', (req, res) => {
    const { nombre, email, password } = req.body;

    // Verificar que todos los campos estén presentes
    if (!nombre || !email || !password) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    // Consulta SQL para insertar el usuario en la base de datos
    const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    
    // Ejecutar la consulta en el pool de conexiones
    pool.query(sql, [nombre, email, password], (err, results) => {
        if (err) {
            console.error('Error al insertar datos: ' + err.stack);
            return res.status(500).send('Error en el servidor');
        }
        // Enviar una respuesta de éxito
        res.status(200).send('Usuario registrado con éxito');
    });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
