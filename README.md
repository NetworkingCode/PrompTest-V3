Proyecto Prompetes
Descripción
Aplicación web creada con HTML, CSS, y JavaScript, conectada a una base de datos MySQL y un servidor backend en Node.js usando Express.

Requisitos Previos
Node.js (v20.16.0 o superior)
MySQL (Servidor de base de datos)

Instalación
Clona el repositorio:
git clone https://github.com/NetworkingCode/PrompTest-V3.git

Instala las dependencias del proyecto:
npm install

Configura la base de datos MySQL:
Ejecuta el script SQL para crear la base de datos:
mysql -u [usuario] -p [nombre_bd] < script.sql

Configura las credenciales de la base de datos en el archivo index.js o mediante un archivo .env:

Dependencias
cors: Para manejo de CORS.
dotenv: Para variables de entorno.
express: Framework para el servidor backend.
mysql2: Conector MySQL para Node.js.
