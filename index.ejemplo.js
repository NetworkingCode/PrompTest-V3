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
    host: '***',  // Cambia por tu host
    user: '***',  // Cambia por tu usuario
    password: '***',  // Cambia por tu contraseña
    database: '***',  // Cambia por tu base de datos
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

            // Si el error es por duplicado de nombre de usuario
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(409).send('El nombre de usuario o email ya existe');
            }
            console.error('Error al insertar datos: ' + err.stack);
            return res.status(500).send('Error en el servidor');
        }
        // Enviar una respuesta de éxito
        res.status(200).send('Usuario registrado con éxito');
    });
});

// Nueva ruta para el inicio de sesión
app.post('/login', (req, res) => {
    console.log('Intento de inicio de sesión recibido:', req.body);
    const { username, password } = req.body;

    // Verificar que todos los campos estén presentes
    if (!username || !password) {
        console.log('Campos faltantes');
        return res.status(400).send('Nombre de usuario y contraseña son obligatorios');
    }

    // Consulta SQL para buscar el usuario en la base de datos
    const sql = 'SELECT * FROM usuarios WHERE nombre = ?';

    // Ejecutar la consulta en el pool de conexiones
    pool.query(sql, [username], (err, results) => {
        if (err) {
            console.error('Error al buscar usuario: ' + err.stack);
            return res.status(500).send('Error en el servidor');
        }

        console.log('Resultados de la búsqueda:', results);

        if (results.length > 0) {
            // Usuario encontrado, verificar contraseña
            if (results[0].password === password) {
                // Contraseña correcta
                console.log('Inicio de sesión exitoso');

                // Devolver el `usuario_id` en la respuesta
                res.status(200).json({
                    message: 'Inicio de sesión exitoso',
                    usuario_id: results[0].id // Asegúrate de devolver el ID del usuario
                });
            } else {
                // Contraseña incorrecta
                console.log('Contraseña incorrecta');
                res.status(401).send('Credenciales incorrectas');
            }
        } else {
            // Usuario no encontrado
            console.log('Usuario no encontrado');
            res.status(401).send('Credenciales incorrectas');
        }
    });

    // Ruta para grabar un nuevo prompt
    app.post('/grabar-prompt', (req, res) => {
        const { usuario_id, titulo, contenido } = req.body;

        // Verificar que todos los campos estén presentes
        if (!usuario_id || !titulo || !contenido) {
            return res.status(400).send('Todos los campos son obligatorios');
        }

        // Consulta SQL para insertar el prompt en la base de datos
        const sql = 'INSERT INTO prompts (usuario_id, titulo, contenido) VALUES (?, ?, ?)';

        // Ejecutar la consulta
        pool.query(sql, [usuario_id, titulo, contenido], (err, results) => {
            if (err) {
                console.error('Error al insertar el prompt: ' + err.stack);
                return res.status(500).send('Error en el servidor');
            }
            // Enviar una respuesta de éxito
            res.status(200).send('Prompt grabado con éxito');
        });
    });



    // Ruta para obtener los prompts del usuario autenticado
    app.get('/obtener-prompts/:usuario_id', (req, res) => {
        const usuario_id = req.params.usuario_id;

        // Consulta SQL para obtener los prompts del usuario
        const sql = 'SELECT * FROM prompts WHERE usuario_id = ? ORDER BY created_at DESC';

        pool.query(sql, [usuario_id], (err, results) => {
            if (err) {
                console.error('Error al obtener los prompts: ' + err.stack);
                return res.status(500).send('Error en el servidor');
            }

            res.status(200).json(results); // Enviar los resultados como JSON
        });
    });


    // Ruta para eliminar cada prompt
    app.delete('/eliminar-prompt/:usuario_id/:prompt_id', (req, res) => {
        const { usuario_id, prompt_id } = req.params;

        console.log(`Intentando eliminar prompt: usuario_id=${usuario_id}, prompt_id=${prompt_id}`);

        const query = 'DELETE FROM prompts WHERE id = ? AND usuario_id = ?';

        pool.query(query, [prompt_id, usuario_id], (error, results) => {
            if (error) {
                console.error('Error al eliminar el prompt:', error);
                res.status(500).json({ error: 'Error al eliminar el prompt', details: error.message });
                return;
            }

            console.log('Resultado de la eliminación:', results);

            if (results.affectedRows === 0) {
                // No se encontró el prompt o no pertenece al usuario
                console.log('No se encontró el prompt o no pertenece al usuario');
                res.status(404).json({ error: 'Prompt no encontrado' });
            } else {
                console.log('Prompt eliminado con éxito');
                res.status(200).json({ message: 'Prompt eliminado con éxito' });
            }
        });
    });

});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
